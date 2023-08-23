<script>
  import "../app.css";
  import { page } from '$app/stores';

	import Footer from "../lib/components/footer.svelte";
	import Navbar from "../lib/components/navbar.svelte";

  let wip = ["projects"]
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