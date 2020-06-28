
<script>
	let name = 'picto'
	import HomeLayout from './Views/Home.svelte'
</script>

<style>
	:global(body),:global(html) {
		overflow: hidden;
		margin: 0;
		padding: 0;
		background-color: #eeeeee;
		width: 100vw;
		height: 100vh;
	}
</style>

<svelte:head>
	<link href="/fonts/harabara/index.css" rel="stylesheet">
	<link href="/fonts/poppins/index.css" rel="stylesheet">
</svelte:head>

<HomeLayout/>