<script>
	import BlogCard from "../lib/components/blog-card.svelte";

	const FORMSPARK_ACTION_URL = 'https://submit-form.com/tZLGuL4z';

	export let data;
	let posts = data.posts;
	let name = '';
	let email = '';
	let message = '';
	let toggleModal = false;
	let submitting = false;

	async function submitForm() {
		try {
			submitting = true;
			await fetch(FORMSPARK_ACTION_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					name,
					email,
					message
				})
			});
			name = '';
			email = '';
			message = '';
			toggleModal = true;
		} finally {
			submitting = false;
		}
	}
</script>

<svelte:head>
	<title>Muhammad Hafid K — That's me!</title>
</svelte:head>

<div class="py-32 text-lg md:text-xl text-center">
  <h1 class="text-4xl md:text-6xl font-extrabold">MUHAMMAD HAFID K</h1>
  <p class="pt-2 font-semibold">That's my name!</p>
  <p class="pt-2">Software engineer based in Bogor, Indonesia. Currently working as a backend engineer at <a href="https://www.qontak.com" class="text-pink-600 border-b border-pink-600">Qontak</a>.</p>
  <div class="py-6 flex justify-center gap-10 text-violet-600">
    <a href="mailto:mhafidk@gmail.com" target="_blank">
      <svg class="stroke-violet-600 hover:stroke-violet-700 w-8 h-8" width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 9l5 3.5L17 9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z" stroke-width="1.5"></path></svg></a>
    <a href="https://github.com/mhafidk" target="_blank" rel="noreferrer">
      <svg class="stroke-violet-600 hover:stroke-violet-700 w-8 h-8" width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
    <a href="https://www.linkedin.com/in/mhafidk/" target="_blank" rel="noreferrer">
      <svg class="stroke-violet-600 hover:stroke-violet-700 w-8 h-8" width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
  </div>
  <div class="pt-3 text-neutral-50 text-base md:text-lg flex gap-2 flex-wrap md:flex-nowrap justify-center">
    <a href="/about" class="px-4 py-2 bg-violet-600 hover:bg-violet-700 rounded">More about me</a>
    <a href="/about" class="px-4 py-2 w-40 bg-pink-600 hover:bg-pink-700 rounded">Read my blog</a>
  </div>
</div>
<div class="pb-32">
  <h2 class="text-2xl md:text-4xl font-bold border-b pb-2 text-center">EXPERIENCES</h2>
  <p class="text-sm pt-2 text-neutral-400 text-center">My professional work journey</p>
  <div class="pt-8">
    <div class="flex gap-4">
      <p class="text-violet-600 font-bold text-lg md:text-2xl">#1</p>
      <div class="w-full">
        <p class="font-bold text-lg md:text-2xl">
          Backend Engineer, <a href="https://www.qontak.com" class="text-violet-600 underline"
            >Mekari Qontak</a
          >
        </p>
        <div class="text-base md:text-lg mt-2">
          <p>2020 - Present</p>
          <div class="flex flex-wrap gap-2 mt-3 text-sm md:text-base items-center">
            <p class="px-4 py-2 text-pink-600 border border-pink-600 rounded">
              Ruby
            </p>
            <p class="px-4 py-2 text-pink-600 border border-pink-600 rounded">
              Ruby on Rails
            </p>
            <p class="px-4 py-2 text-pink-600 border border-pink-600 rounded">
              Go
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p class="my-2 text-neutral-400 text-sm text-center mt-24">
		list of tools I've been familiar with.
	</p>
	<div class="flex flex-wrap gap-2 justify-center items-center mt-4 text-sm md:text-base">
		<p class="px-4 py-2 text-violet-600 border border-violet-600 rounded">Ruby</p>
		<p class="px-4 py-2 text-violet-600 border border-violet-600 rounded">
			Ruby on Rails
		</p>
		<p class="px-4 py-2 text-violet-600 border border-violet-600 rounded">Go</p>
		<p class="px-4 py-2 text-violet-600 border border-violet-600 rounded">
			JavaScript
		</p>
		<p class="px-4 py-2 text-violet-600 border border-violet-600 rounded">Svelte</p>
	</div>
</div>
<div class="pb-32">
  <h2 class="text-2xl md:text-4xl font-bold border-b pb-2 text-center">PROJECTS</h2>
  <p class="text-sm pt-2 text-neutral-400 text-center">My blood, sweat, and tears</p>
  <div class="pt-8">
    <div class="">
      <img src="/portfolio-web.webp" alt="MHK" class="border rounded w-full h-full">
      <div class="pt-4">
        <h3 class="text-center text-lg md:text-2xl font-bold text-violet-600">Personal Website</h3>
        <p class="pt-3 text-justify">My very own website and blog! I build this site using Svelte, Tailwind CSS, and Graph CMS. Frontend is not my strong suit, but this site isn't that bad, right? I learnt a lot about frontend while making this site. A lot of new features will come out!</p>
        <div class="pt-3 text-sm md:text-base flex justify-center gap-6 text-pink-600">
          <p>Svelte</p>
          <p>Tailwind CSS</p>
          <p>Graph CMS</p>
        </div>
        <div class="flex justify-center gap-8 pt-5">
          <a href="https://www.mhafidk.com"><svg class="stroke-pink-600 hover:stroke-pink-700 w-8 h-8" width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M14 11.998C14 9.506 11.683 7 8.857 7H7.143C4.303 7 2 9.238 2 11.998c0 2.378 1.71 4.368 4 4.873a5.3 5.3 0 001.143.124" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 11.998c0 2.491 2.317 4.997 5.143 4.997h1.714c2.84 0 5.143-2.237 5.143-4.997 0-2.379-1.71-4.37-4-4.874A5.304 5.304 0 0016.857 7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
        <a href="https://github.com/mhafidk/portfolio-web"><svg class="stroke-pink-600 hover:stroke-pink-700 w-8 h-8" width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="pb-32">
  <h2 class="text-2xl md:text-4xl font-bold border-b pb-2 text-center">WRITING</h2>
  <p class="text-sm pt-2 text-neutral-400 text-center">Anything I've on my mind</p>
  <div class="pt-8">
    <div class="grid grid-cols-1 gap-12">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  </div>
  <div class="flex justify-center pt-12">
    <a href="/writing" class="bg-violet-600 hover:bg-violet-700 text-neutral-50 px-4 py-2 rounded">More</a>
  </div>
</div>
<div id="contact" class="pb-8"></div>
<div class="pb-32">
  <h2 class="text-2xl md:text-4xl font-bold border-b pb-2 text-center">CONTACT</h2>
  <p class="text-sm pt-2 text-neutral-400 text-center">Let's get in touch!</p>
  <div class="pt-8">
    <p class="text-center">
			Have something to say? Ask a question or just say hi, anything! Feel free to contact me, my
			inbox is always open!
		</p>
		<div class="mt-12 text-base">
			<form on:submit|preventDefault={submitForm}>
				<label for="name">Name</label>
				<div class="mb-6 mt-2">
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Name"
						required=""
						class="w-full rounded focus:border-violet-600"
						bind:value={name}
					/>
				</div>
				<label for="email">Email</label>
				<div class="mb-6 mt-2">
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						required=""
						class="w-full rounded focus:border-violet-600"
						bind:value={email}
					/>
				</div>
				<label for="message">Message</label>
				<div class="mb-6 mt-2">
					<textarea
						id="message"
						name="message"
						placeholder="Message"
						required=""
						class="w-full rounded h-36 focus:border-violet-600"
						bind:value={message}
					/>
				</div>
				<div class="flex justify-center">
					<button
						type="submit"
						disabled={submitting}
						class="bg-violet-600 hover:bg-violet-700 text-neutral-50 px-4 py-2 rounded">Send</button
					>
				</div>
			</form>
		</div>
    <p class="text-center mt-8 mb-8 text-base md:text-lg">
      Or you can contact me through one of these platforms
    </p>
    <div class="flex justify-center gap-10 text-violet-600">
      <a href="mailto:mhafidk@gmail.com" target="_blank">
        <svg class="stroke-violet-600 hover:stroke-violet-700 w-8 h-8" width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 9l5 3.5L17 9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z" stroke-width="1.5"></path></svg></a>
      <a href="https://github.com/mhafidk" target="_blank" rel="noreferrer">
        <svg class="stroke-violet-600 hover:stroke-violet-700 w-8 h-8" width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
      <a href="https://www.linkedin.com/in/mhafidk/" target="_blank" rel="noreferrer">
        <svg class="stroke-violet-600 hover:stroke-violet-700 w-8 h-8" width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
    </div>
  </div>
</div>
{#if toggleModal}
	<div
		class="modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0"
	>
		<div class="modal-overlay fixed w-full h-full bg-gray-900 opacity-50" />
		<div
			class="bg-white w-full lg:h-max lg:w-1/2 mx-auto rounded-lg shadow-xl z-50 overflow-y-auto"
		>
			<div class="content p-8 text-center text-base md:text-lg">
				<p>Thank you for reaching me out.</p>
				<p>I will get back to you as soon as possible!</p>
				<button
					class="mt-8 bg-violet-600 hover:bg-violet-700 text-neutral-50 px-6 py-2 rounded-md"
					on:click={() => (toggleModal = !toggleModal)}>Close</button
				>
			</div>
		</div>
	</div>
{/if}
