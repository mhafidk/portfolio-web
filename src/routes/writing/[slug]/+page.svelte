<script>
  import { marked } from 'marked';
  import { formatDate } from '$lib/helper';

  export let data;
  $: post = data.post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="">
  <h1 class="text-center text-4xl md:text-5xl font-bold mt-6">{post.title}</h1>
  <div class="flex justify-center items-center gap-8 mt-8">
    <p class="text-center text-pink-600">{formatDate(post.createdAt)}</p>
  </div>
  <article class="prose lg:prose-xl mt-8 max-w-screen-md mx-auto pb-48 prose-h2:leading-relaxed">
    {@html marked(post.content)}
  </article>
</div>

<style lang="postcss">
  h1 {
    line-height: 1.5;
  }
</style>