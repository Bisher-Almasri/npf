import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

// Configure marked with syntax highlighting
marked.use(markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
    }
}));

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
    content: string;
    readingTime: number;
}

export function parseFrontmatter(content: string): { metadata: any; body: string } {
    // Support both TOML-style (+++) and YAML-style (---) frontmatter
    const tomlRegex = /^\+\+\+\n([\s\S]*?)\n\+\+\+\n([\s\S]*)$/;
    const yamlRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;

    let match = content.match(tomlRegex) || content.match(yamlRegex);

    if (!match) {
        return { metadata: {}, body: content };
    }

    const metadataBlock = match[1];
    const body = match[2];

    const metadata: any = {};
    metadataBlock.split('\n').forEach(line => {
        // Support both TOML (key = value) and YAML (key: value) formats
        const [key, ...valueParts] = line.split(/[:=]/);
        if (key && valueParts.length > 0) {
            let value = valueParts.join(':').trim();
            // Handle arrays [item1, item2, ...]
            if (value.startsWith('[') && value.endsWith(']')) {
                value = value.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, '')) as any;
            } else {
                // Remove quotes from strings
                value = value.replace(/^['"]|['"]$/g, '');
            }
            metadata[key.trim()] = value;
        }
    });

    return { metadata, body };
}

export async function getPosts() {
    const modules = import.meta.glob('/blogs/*.svx', { query: '?raw', import: 'default', eager: true });

    const posts: BlogPost[] = Object.entries(modules).map(([path, content]) => {
        const slug = path.split('/').pop()?.replace('.svx', '') || '';
        const { metadata, body } = parseFrontmatter(content as string);
        const readingTime = Math.ceil(body.split(/\s+/).length / 200);

        return {
            slug,
            title: metadata.title || 'Untitled',
            date: metadata.date || '1970-01-01',
            summary: metadata.summary || '',
            tags: metadata.tags || [],
            content: body,
            readingTime
        };
    });

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPost(slug: string): Promise<BlogPost | undefined> {
    const posts = await getPosts();
    const post = posts.find(p => p.slug === slug);
    if (post) {
        post.content = await marked(post.content);
    }
    return post;
}
