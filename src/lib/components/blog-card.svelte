<script>
  import { formatDate } from '$lib/helper';
  export let post;
</script>

<div class="">
  <a href={`/writing/${post.slug}`} class="text-xl md:text-3xl font-bold hover:text-violet-600">{post.title}</a>
  <p class="py-2 text-sm text-neutral-500">{formatDate(post.createdAt)}</p>
  <p class="line-clamp-3">{post.description}</p>
  <div class="text-xs md:text-sm text-neutral-50 flex gap-2 pt-3">
    {#each post.tags as tag}
      <p class="bg-violet-600 px-4 py-1.5 rounded-full">{tag}</p>
    {/each}
  </div>
</div>