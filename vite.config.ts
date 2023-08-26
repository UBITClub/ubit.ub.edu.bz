import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools'
import { defineConfig } from 'vite';
import { version } from './package.json';

export default defineConfig({
	plugins: [sveltekit(), imagetools()],
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
	},
	optimizeDeps: {
		include: ['flickity']
	}
});
