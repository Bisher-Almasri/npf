import { error } from '@sveltejs/kit';
import { getPost } from '$lib/blogs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const post = await getPost(params.slug);
	
	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post
	};
};
