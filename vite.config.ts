import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { version } from './package.json';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env': {},
		'process.platform': false,
		__VERSION__: JSON.stringify(version)
	},
	resolve: {
		alias: {
			emitter: 'emitter-component',
			Buffer: 'buffer/'
		}
	}
});
