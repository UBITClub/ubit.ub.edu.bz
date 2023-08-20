<script lang="ts">
	export let title: string;
	export let body: string;
	export let image: string;
	export let href: string;
</script>

<div class="eventspane py-12 font-light">
	<div
		class="infocard block rounded overflow-clip border border-gray-50"
		style="width: 250px; height: 450px;"
	>
		<div class="card-image w-fit">
			<img src={image} width="250px" style="max-height: 150px; object-fit: contain;" alt="Image for {title}" />
		</div>
		<div class="card_event_information_wrapper bg-slate-600 p-4">
			<div
				class="card_event_information block font-bold text-white text-ellipsis overflow-hidden mb-4"
				style="height: 200px;"
			>
				<div class="card-info-text text-xl flex justify-center items-center text-left py-2">
					{title}
				</div>
				<div
					class="card-info-text text-md w-fit flex justify-center items-center text-left font-light py-2 text-ellipsis"
				>
					{body}
				</div>
			</div>
			<div class="card-navigator" style="height: 100px;">
				<a {href}>
					<div
						class="signup-button signup-action rounded-md bg-gradient-to-r from-blue-600 to-green-300 font-bold text-white px-4 py-2 w-fit text-lg cursor-pointer hover:opacity-90"
					>
						Sign Up
					</div></a
				>
			</div>
		</div>
	</div>
</div>
