<script>
  import "../app.css";
	import Footer from "../lib/components/footer.svelte";
	import Navbar from "../lib/components/navbar.svelte";
</script>

<div class="bg-neutral-50 text-neutral-900 font-medium">
  <div class="p-4 max-w-screen-md mx-auto">
    <Navbar />
    <slot />
    <Footer />
  </div>
</div>