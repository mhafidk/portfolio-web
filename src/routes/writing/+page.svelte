<script>
  import BlogCard from '$lib/components/blog-card.svelte';

  export let data;
  let posts = data.posts;
</script>

<svelte:head>
  <title>Writing</title>
</svelte:head>

<div class="pb-44">
  <h1 class="text-3xl md:text-5xl font-bold py-16 text-center">WRITING</h1>
  <div class="pt-10">
    <div class="grid grid-cols-1 gap-12">
      {#each posts as post}
        <BlogCard {post} />
      {/each}
    </div>
  </div>
</div>