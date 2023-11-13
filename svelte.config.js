import adapter from '@sveltejs/adapter-auto';
import {mdsvex} from 'mdsvex';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md', '.svx'],
    preprocess: [
        mdsvex({
            extensions: ['.md', '.svx'],
        }),
        vitePreprocess()
    ],
	kit: {
		adapter: adapter()
	}
};

export default config;
