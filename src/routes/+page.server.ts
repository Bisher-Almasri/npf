import { error } from '@sveltejs/kit';
import * as cheerio from 'cheerio';
import { getPosts } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const posts = await getPosts();
	const recentPosts = posts.slice(0, 4);

	try {
		const vsCodeRes = await fetch('https://marketplace.visualstudio.com/publishers/BisherAlmasri');
		const vsCodeHtml = await vsCodeRes.text();
		const $ = cheerio.load(vsCodeHtml);
		
		let vsCodeInstalls = 0;
		$('.install-count').each((i, el) => {
			const countText = $(el).text().trim();
			if (countText) {
				let multiplier = 1;
				let cleanText = countText;
				if (countText.toUpperCase().includes('K')) {
					multiplier = 1000;
					cleanText = countText.replace(/K/i, '');
				} else if (countText.toUpperCase().includes('M')) {
					multiplier = 1000000;
					cleanText = countText.replace(/M/i, '');
				}
				vsCodeInstalls += parseFloat(cleanText) * multiplier;
			}
		});
		
		if (vsCodeInstalls === 0) vsCodeInstalls = 9500; 
		
		// 2. NPM Stats
		// Default to 2200 as profile scraping is unreliable/404 currently.
		const npmDownloads = 2200; 

		return {
			recentPosts,
			stats: {
				vscode: Math.round(vsCodeInstalls),
				npm: npmDownloads,
				total: Math.round(vsCodeInstalls + npmDownloads)
			}
		};

	} catch (e) {
		console.error('Error fetching stats:', e);
		return {
			recentPosts,
			stats: {
				vscode: 9500,
				npm: 2200,
				total: 11700000
			}
		};
	}
};
