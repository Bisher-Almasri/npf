import { getPosts } from '$lib/utils';
import type { PageServerLoad } from './$types';

const VSCODE_INSTALLS = 9500;
const NPM_DOWNLOADS = 2200;

export const load: PageServerLoad = async () => {
	const posts = await getPosts();

	return {
		recentPosts: posts.slice(0, 4),
		stats: {
			vscode: VSCODE_INSTALLS,
			npm: NPM_DOWNLOADS,
			total: VSCODE_INSTALLS + NPM_DOWNLOADS
		}
	};
};
