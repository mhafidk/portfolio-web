<script>
  import "../app.css";
  import { page } from '$app/stores';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

	import Footer from "../lib/components/footer.svelte";
	import Navbar from "../lib/components/navbar.svelte";

  let wip = ["personal-website", "hafid-gesa"]

  inject({ mode: dev ? 'development' : 'production' });
</script>

{#if wip.includes($page.url.pathname.split("/")[1]) || ($page.error !== undefined && $page.error !== null)}
  <slot />
{:else}
  <div class="bg-neutral-50 text-neutral-900 font-medium">
    <Navbar />
    <div class="p-4 max-w-screen-md mx-auto">
      <slot />
    </div>
    <Footer />
  </div>
{/if}