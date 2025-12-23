import { marked } from 'marked';

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
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);

    if (!match) {
        return { metadata: {}, body: content };
    }

    const metadataBlock = match[1];
    const body = match[2];

    const metadata: any = {};
    metadataBlock.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts) {
            let value = valueParts.join(':').trim();
            if (value.startsWith('[') && value.endsWith(']')) {
                value = value.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, '')) as any;
            } else {
                value = value.replace(/^['"]|['"]$/g, '');
            }
            metadata[key.trim()] = value;
        }
    });

    return { metadata, body };
}

export async function getPosts() {
    const modules = import.meta.glob('/src/lib/posts/*.md', { query: '?raw', import: 'default', eager: true });

    const posts: BlogPost[] = Object.entries(modules).map(([path, content]) => {
        const slug = path.split('/').pop()?.replace('.md', '') || '';
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
