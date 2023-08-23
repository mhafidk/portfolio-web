<script>
  import "../app.css";
  import { page } from '$app/stores';

  let status = $page.status
  let text = status == 404 ? "Page not found :(" : "There is something wrong..."
</script>

<svelte:head>
  <title>There's something wrong :(</title>
</svelte:head>

<div class="h-screen w-screen bg-violet-600 text-neutral-50 flex justify-center items-center px-8 pt-8 pb-32">
  <div class="grid grid-cols-1 px-4 gap-12">
    <p class="text-center text-4xl md:text-6xl font-bold">{text}</p>
    <div class="w-fit mx-auto">
      <a href="/" class="bg-neutral-50 hover:bg-neutral-200 px-8 py-2 text-2xl md:text-3xl text-violet-600 font-bold rounded w-fit">Home</a>
    </div>
  </div>
</div>