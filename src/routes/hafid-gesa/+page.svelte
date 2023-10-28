<script>
  import { onMount } from "svelte";

  let countDownDate = new Date("Nov 25, 2023 09:00:00").getTime();
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  onMount(() => {
    let x = setInterval(function() {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      days = Math.floor(distance / (1000 * 60 * 60 * 24));
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  });
</script>

<svelte:head>
	<title>Hafid & Gesa</title>
</svelte:head>

<div class="bg-yellow-50 static snap-x">
  <div class="h-screen font-serif flex justify-center items-center text-neutral-900">
    <div class="text-lg md:text-xl font-bold text-center">
      <p class="">The Wedding of</p>
      <p class="hidden md:block my-10 text-7xl text-amber-400">Hafid &nbsp;&&nbsp; Gesa</p>
      <div class="block md:hidden my-10 text-3xl text-amber-400 text-center">
        <p>Hafid</p>
        <p class="mb-3 mt-4">&</p>
        <p>Gesa</p>
      </div>
      <p class="">Sabtu, 25 November 2023</p>
    </div>
  </div>
  <div class="fixed top-0 right-0">
    <p class="font-serif text-xs pt-2 pr-3 font-bold">Hafid & Gesa</p>
  </div>
  <div class="fixed bottom-0 left-0">
    <p class="font-serif text-xs pb-2 pl-3 font-bold">Sabtu, 25 November 2023</p>
  </div>
  <div class="fixed bottom-0 right-0 blur-[1px]">
    <img src="/flwr2.png" alt="" class="h-96 md:h-[45rem]">
  </div>
  <div class="fixed top-0 left-0 blur-[1px]">
    <img src="/flwr.png" alt="" class="h-96 md:h-[45rem]">
  </div>
  <div class="h-screen snap-center">
    <div class="h-screen font-serif flex flex-col gap-8 justify-center items-center text-neutral-900">
      <p class="text-3xl font-bold">Lokasi</p>
      <div class="bg-white/30 bg-opacity-50 p-2 md:p-4 rounded-lg backdrop-blur-sm">
        <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d991.0569402188!2d106.7967709285252!3d-6.492819999592007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjknMzQuMiJTIDEwNsKwNDcnNTAuNyJF!5e0!3m2!1sen!2sid!4v1698465623593!5m2!1sen!2sid" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-lg w-72 md:w-[35rem] h-96"></iframe>
      </div>
    </div>
  </div>
  <div class="h-screen snap-center">
    <div class="h-screen font-serif flex flex-col gap-8 justify-center items-center text-neutral-900">
      <p class="text-3xl font-bold">Countdown</p>
      <div class="font-sans flex flex-wrap justify-center gap-8 text-lg md:text-xl mt-2">
        <div class="text-center">
          <p>{days}</p>
          <p class="text-lg">Day</p>
        </div>
        <div class="text-center">
          <p>{hours}</p>
          <p class="text-lg">Hours</p>
        </div>
        <div class="text-center">
          <p>{minutes}</p>
          <p class="text-lg">Minutes</p>
        </div>
        <div class="hidden md:block text-center">
          <p>{seconds}</p>
          <p class="text-lg">Seconds</p>
        </div>
      </div>
    </div>
  </div>
</div>