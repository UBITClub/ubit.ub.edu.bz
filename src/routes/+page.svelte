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
		postData = postData?.products;
		console.log(postData);
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
	<!-- <div class="join-stats px-12 py-4 bg-gray-100">And others have joined.</div> -->
	<div class="content p-12">
		<!-- <div class="eventspane py-12 font-light">[ENETUNREACH]: Could not contact global handler.</div> -->
		<!-- {#if postData.length > 1}
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
		{/if} -->

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
						<div class="hero-text font-extrabold text-4xl lg:text-7xl w-fit relative z-10">
							Discover a world of computing with UBIT
						</div>
					</div>
					<div class="whitespace w-full hidden lg:block">&nbsp;</div>
				</div>
			</div>
		</div>
		<div class="center-my-ass flex justify-center w-full items-center contained-">
			<div
				class="text-4xl my-10 lg:text-8xl text-center font-normal text-gray-700 rounded border border-gray-400 px-8 py-12 w-fit block"
			>
				Who are we?
			</div>
		</div>
		<div
			class="textbox-role text-2xl flex text-center justify-center font-light items-center w-full"
		>
			<div class="text-content block">
				Dive into the dynamic world of computer science with us.

				<div class="flex flex-wrap w-full justify-center items-center">
					<div class="font-normal mx-2">Our mission?</div>
					To transform intricate concepts into
				</div>
				<div class="flex w-full justify-center items-center">
					exciting adventures, even for newcomers.
				</div>
			</div>
		</div>
		<div class="center-my-ass flex justify-center w-full items-center contained-">
			<div
				class="text-4xl my-10 lg:text-6xl text-center font-normal text-gray-700 rounded border border-gray-400 px-8 py-12 w-fit block"
			>
				How do we plan to do this?
			</div>
		</div>
		<div
			class="textbox-role text-2xl flex text-center justify-center font-light items-center w-full"
		>
			<div class="text-content block">
				Through interactive outreach, hands-on training, and showcasing projects with a twist,

				<div class="flex w-full justify-center items-center">
					we're rewriting the rules of engagement. Today's Open Day is your chance
				</div>
				<div class="flex w-full justify-center items-center">
					to step into a universe where learning meets fun.
				</div>
				<div class="flex w-full justify-center items-center">
					Whether you're a coding ninja or a tech enthusiast,
				</div>
				<div class="flex w-full justify-center items-center">
					our club promises an unforgettable journey into the heart of technology.
				</div>
				<div class="flex w-full justify-center items-center font-normal">
					Join us and be part of the excitement! 🚀👾🌟
				</div>
				<div class="flex w-full justify-center items-center font-normal my-4">
					<div
						class="signup-button signup-action rounded-md bg-gradient-to-r from-red-600 to-orange-300 font-bold text-white px-6 py-3 w-fit text-xl cursor-pointer hover:opacity-90"
					>
						Sign Up
					</div>
				</div>
			</div>
		</div>
		<div class="center-my-ass flex justify-start items-center contained-content">
			<div
				class="text-4xl my-10 lg:text-8xl text-center font-extrabold bg-gradient-to-r from-cyan-300 to-blue-600 text-gray-200 rounded px-8 py-12 w-fit block"
			>
				Our Board Members
			</div>
		</div>
		<div
			class="textbox-role text-2xl flex text-left justify-start font-light items-center w-full mb-4"
		>
			<div class="text-content block">
				<div class="font-normal">Meet the Brilliant Minds Behind UB's Computer Science Club!</div>
				<div class="flex w-full justify-start items-center">
					At the helm of our exciting journey into the world of computer science are the visionary
					individuals
				</div>
				<div class="flex w-full justify-start items-center">
					who make up our esteemed board. With a passion for innovation and a commitment to
					spreading
				</div>
				<div class="flex w-full justify-start items-center">
					the joy of technology, our board members are the driving force behind every captivating
					initiative we undertake.
				</div>
			</div>
		</div>
		<div class="textbox-role text-2xl block text-left font-light items-center w-full">
			<div class="member-profile flex flex-wrap w-full my-8">
				<div
					class="mobile-photo flex-1 flex basis-full lg:basis-0 justify-center items-center lg:mr-4 lg:my-0 my-8 w-full overflow-clip rounded-md bg-gray-300"
				>
					<img
						src="./assets/images/profile_pictures/amir_full.png"
						alt="Who the fuck is this?"
						style="object-fit: cover; height: 100%;"
						width="500px"
					/>
				</div>
				<div class="role-description block text-left flex-1 lg:ml-4">
					<div class="meta-info block mb-2">
						<div class="profile_title font-semibold text-4xl">Amir Gonzalez</div>
						<div class="profile_title font-light text-2xl">President</div>
					</div>
					<div class="main_description font-normal">
						A coding ninja with a flair for leadership, Amir spearheads our mission to make computer
						science accessible to all. With a keen eye for creativity and a heart set on
						inclusivity, Amir ensures our club is a hub of inspiration.
					</div>
				</div>
			</div>
			<div class="member-profile flex flex-wrap w-full my-8">
				<div
					class="mobile-photo flex-1 flex basis-full lg:basis-0 justify-center items-center lg:mr-4 lg:my-0 my-8 w-full overflow-clip rounded-md bg-gray-300"
				>
					<img
						src="./assets/images/profile_pictures/34188635.jpeg"
						alt="Who the fuck is this?"
						style="object-fit: cover; height: 100%;"
						width="500px"
					/>
				</div>
				<div class="role-description block text-left flex-1 lg:ml-4">
					<div class="meta-info block mb-2">
						<div class="profile_title font-semibold text-4xl">Immanuel Garcia</div>
						<div class="profile_title font-light text-2xl">
							Vice President / Your Local Polyglot
						</div>
					</div>
					<div class="main_description font-normal">
						Likes designing stuff when alone and bored. Throughout the years, his patience for
						things have improved because of programming which seems to require a lot of it. Knows
						and is comfortable using a wide variety of programming languages and learns them
						whenever he needs to. Learning programming languages of different paradigms has gotten
						pretty easy for him to do over the years — and picking one up has become even easier. So
						I guess you could then call him a polyglot, which is probably who he is at this point in
						time.
					</div>
				</div>
			</div>
			<div class="member-profile flex flex-wrap w-full my-8">
				<div
					class="mobile-photo flex-1 flex basis-full lg:basis-0 justify-center items-center lg:mr-4 lg:my-0 my-8 w-full overflow-clip rounded-md bg-gray-300"
				>
					<img
						src="./assets/images/profile_pictures/76670600.jpeg"
						alt="Who the fuck is this?"
						style="object-fit: cover; height: 100%;"
						width="500px"
					/>
				</div>
				<div class="role-description block text-left flex-1 lg:ml-4">
					<div class="meta-info block mb-2">
						<div class="profile_title font-semibold text-4xl">Abel Blanco</div>
						<div class="profile_title font-light text-2xl">Public Relations</div>
					</div>
					<div class="main_description font-normal">
						Meet Abel, a passionate graphic designer and our connection to the world beyond. With an
						infectious enthusiasm for tech, Abel extends our club's reach through exciting
						partnerships and engaging events that bridge the gap between academia and real-world
						application.
					</div>
				</div>
			</div>
			<div class="member-profile flex flex-wrap w-full my-8">
				<div
					class="mobile-photo flex-1 flex basis-full lg:basis-0 justify-center items-center lg:mr-4 lg:my-0 my-8 w-full overflow-clip rounded-md bg-gray-300"
				>
					<img
						src="./assets/images/profile_pictures/celia_full.png"
						alt="Who the fuck is this?"
						style="object-fit: cover; height: 100%;"
						width="500px"
					/>
				</div>
				<div class="role-description block text-left flex-1 lg:ml-4">
					<div class="meta-info block mb-2">
						<div class="profile_title font-semibold text-4xl">Celia Henriquez</div>
						<div class="profile_title font-light text-2xl">Treasurer</div>
					</div>
					<div class="main_description font-normal">
						Meet Celia. With Celia at the helm, you can be assured that every penny is invested
						wisely to support our innovative endeavors. From budgeting for exciting projects to
						ensuring the sustainability of our club's activities, Celia plays a crucial role in
						shaping our financial roadmap.
					</div>
				</div>
			</div>
			<div class="member-profile flex flex-wrap w-full my-8">
				<div
					class="mobile-photo flex-1 flex basis-full lg:basis-0 justify-center items-center lg:mr-4 lg:my-0 my-8 w-full overflow-clip rounded-md bg-gray-300"
				>
					<img
						src="./assets/images/profile_pictures/annika_full.jpg"
						alt="Who the fuck is this?"
						style="object-fit: cover; height: 100%;"
						width="500px"
					/>
				</div>
				<div class="role-description block text-left flex-1 lg:ml-4">
					<div class="meta-info block mb-2">
						<div class="profile_title font-semibold text-4xl">Annika Reyes</div>
						<div class="profile_title font-light text-2xl">Somebody!</div>
					</div>
					<div class="main_description font-normal">
						Meet Annika, somebody who does something!
						<div class="flex w-full justify-start items-center">
							<div
							class="text-lg my-10 lg:text-lg text-center font-semibold bg-gradient-to-r from-orange-600 to-yellow-400 text-white rounded px-4 py-2 cursor-pointer hover:opacity-90 w-fit block"
						>
							Read Our Constitution
						</div>
						</div>
					</div>
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
	.hero3 {
		background-color: #0c0c0c;
		background-image: url('/assets/images/tech_neoncircuitboard.jpg');
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
