<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faInstagram,
		faGithubSquare,
		faFacebookSquare
	} from '@fortawesome/free-brands-svg-icons';
	import Post from '$lib/Post.svelte';
	import { onMount } from 'svelte';
	import Carousel from 'svelte-flickity';
	// Post interface
	interface PostObject {
		title: String;
		description: String;
		price: Number;
		id: Number;
		discountPercentage: Float;
		rating: Float;
		stock: Number;
		brand: String;
		category: String;
		thumbnail: String;
		images: [String];
	}
	// Post Object Store
	let postData: PostObject[] = [
		{ title: 'Fetching new Data', body: 'Waiting for the server...', id: 1, userID: 1 }
	];
	onMount(async () => {
		// Ping-pong the fucking ass
		const postRes = await fetch('https://dummyjson.com/products');

		if (!postRes.ok) {
			console.error('Failed to fetch posts properly. Try again later.');
		}
		// Awwh yeah!
		postData = await postRes.json(); // Store that motherfucker
		postData = postData.products;
		console.log(postData)
	});

	const options = {
		freeScroll: true,
		freeScrollFriction: 0.03,
		wrapAround: true,
		pageDots: false
	};
</script>

<main>
	<!-- Development is fucked. -->
	<div class="hero text-white p-12">
		<div class="navigation flex justify-around w-full items-center pb-12">
			<div class="logo"><img src="/ubit.svg" alt="UBIT Logo" class="w-28" /></div>

			<div class="nav-elements flex flex-1 justify-around items-center invisible">
				<div class="navlink">X</div>
				<div class="navlink">Y</div>
				<div class="navlink">Z</div>
			</div>
		</div>
		<div class="hero-content items-center justify-center block">
			<div class="hero-text-wrapper flex flex-wrap lg:flex-nowrap justify-center items-center py-8">
				<div class="hero-text-container bg-black bg-opacity-40 rounded-md w-fit lg:p-8">
					<div class="hero-text font-extrabold text-5xl lg:text-7xl w-fit">
						Where tech enthusiasts thrive&nbsp;together
					</div>
				</div>
				<div class="whitespace w-full hidden lg:block">&nbsp;</div>
			</div>
			<div
				class="signup-button signup-action rounded-md bg-gradient-to-r from-red-600 to-orange-300 font-bold text-white px-4 py-2 w-fit text-lg cursor-pointer hover:opacity-90"
			>
				Sign Up
			</div>
		</div>
	</div>
	<div class="join-stats px-12 py-4 bg-gray-100">And others have joined.</div>
	<div class="content p-12">
		<!-- <div class="eventspane py-12 font-light">[ENETUNREACH]: Could not contact global handler.</div> -->
		{#if postData.length > 1}
			<Carousel {options}>
				{#each postData as { title, description, images }}
					<div class="carousel-cell mx-20 lg:mx-12 bg-gray-50 rounded-md">
						<Post {title} body={description} image={images[0]} href="lol" />
					</div>
				{/each}
			</Carousel>
		{:else}
			<Carousel {options}>
				<div class="carousel-cell bg-gray-50 rounded-md mx-12">
					<Post
						title={postData[0].title}
						body={postData[0].body}
						image="/assets/images/tech_processorcircuit2.jpg"
						href="lol"
					/>
				</div></Carousel
			>
		{/if}

		<div class="hero2 overflow-clip relative rounded-md my-12">
			<div
				class="twist-div-overlay2 absolute bg-black opacity-40 rotate-45 h-screen w-full"
				style="transform-origin: top left; top: -170%; left: 5%;"
			/>
			<div class="hero-content items-center justify-center block text-white">
				<div
					class="hero-text-wrapper flex flex-wrap lg:flex-nowrap justify-center items-center p-8 lg:p-0 lg:py-8 relative"
				>
					<div class="hero-text-container rounded-md w-fit lg:p-8 relative">
						<div class="hero-text font-extrabold text-5xl lg:text-7xl w-fit relative z-10">
							Discover a world of computing with UBIT
						</div>
					</div>
					<div class="whitespace w-full hidden lg:block">&nbsp;</div>
				</div>
			</div>
		</div>
	</div>
</main>
<footer class="p-12">
	<div class="navigation flex justify-around w-full items-center text-white">
		<div class="logo flex justify-center items-center" style="color: #FCFCFC">
			<img src="/ubit.svg" alt="UBIT Logo" class="w-28" />
			<div class="lg:block footer-info px-8 hidden">
				<div class="footer-title font-encode font-normal">UBIT Club</div>
				<div class="footer-subtitle font-encode font-light">"We are the future!"</div>
			</div>
		</div>
		<div class="whitespace spacer w-full lg:flex flex-1 hidden">&nbsp;</div>
		<div class="nav-elements lg:flex flex-1 justify-around items-center hidden">
			<a href="https://www.instagram.com/ubitclub/" target="__blank">
				<div class="navlink cursor-pointer hover:opacity-90" style="color: #FCFCFC">
					<Fa icon={faInstagram} size="46" />
				</div></a
			>
			<a href="https://www.facebook.com/ubitbz/" target="__blank">
				<div class="navlink cursor-pointer hover:opacity-90" style="color: #FCFCFC">
					<Fa icon={faFacebookSquare} size="46" />
				</div></a
			>
			<a href="https://github.com/UBITClub" target="__blank"
				><div class="navlink cursor-pointer hover:opacity-90" style="color: #FCFCFC">
					<Fa icon={faGithubSquare} size="46" />
				</div></a
			>
		</div>
	</div>
</footer>

<style>
	.hero {
		background: url('/assets/images/tech_neoncircuitboard.jpg');
		background-size: cover;
	}
	.hero2 {
		background: url('/assets/images/capacitydomain1.jpg');
		background-size: cover;
	}
	footer {
		background: url('/assets/images/headerf22.jpg');
		background-size: cover;
	}
	.carousel-cell {
		width: 33.333%; /* full width */
		height: 500px; /* height of carousel */
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
