<script>
	import { fade } from 'svelte/transition';

	let openNav = false;

	function toggleMenu() {
		openNav = !openNav;
	}
</script>

<nav class="max-w-screen-lg mx-auto sticky top-0 bg-neutral-50">
  <div class="hidden md:flex justify-between items-center py-6 px-4 border-b">
    <div class="">
      <a href="/" class="text-2xl font-black bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent tracking-tighter">MHK</a>
    </div>
    <div class="flex gap-8">
      <a href="/about" class="hover:text-violet-600">About</a>
      <a href="/writing" class="hover:text-violet-600">Writing</a>
      <a href="/projects" class="hover:text-violet-600">Projects</a>
      <a href="/#contact" class="hover:text-violet-600">Contact</a>
    </div>
  </div>
  <div class="flex md:hidden justify-between items-center font-medium p-4 border-b">
		<div class="">
      <a href="/" class="text-2xl font-black bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent tracking-tighter">MHK</a>
    </div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="block cursor-pointer" on:click={toggleMenu}>
			<div class="h-1 w-10 bg-gradient-to-r from-violet-600 to-pink-600 rounded" />
			<div class="h-1 w-10 bg-gradient-to-r from-violet-600 to-pink-600 rounded my-1" />
			<div class="h-1 w-10 bg-gradient-to-r from-violet-600 to-pink-600 rounded" />
		</div>
	</div>
</nav>
{#if openNav}
	<div
		class="modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center"
		transition:fade={{ duration: 200 }}
	>
		<div class="modal-overlay fixed w-full h-full bg-gray-900 opacity-50" />
		<div class="bg-white w-full h-full mx-auto z-50 overflow-y-auto">
			<div
				class="content p-8 text-center text-base md:text-lg flex flex-col justify-center items-center gap-2"
			>
        <div class="">
          <a href="/" class="text-2xl font-black bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent tracking-tighter" on:click={toggleMenu}>MHK</a>
        </div>
				<a href="/about" class="py-6" on:click={toggleMenu}>About</a>
				<a href="/projects" class="py-6" on:click={toggleMenu}>Projects</a>
				<a href="/writing" class="py-6" on:click={toggleMenu}>Writing</a>
				<a href="/#contact" class="py-6" on:click={toggleMenu}>Contact</a>
				<button
					class="mt-8 bg-violet-600 hover:bg-violet-700 text-neutral-50 px-6 py-2 rounded-md"
					on:click={toggleMenu}>Close</button
				>
			</div>
		</div>
	</div>
{/if}