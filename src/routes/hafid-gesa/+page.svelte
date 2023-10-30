<script>
  import { onMount } from "svelte";
  import { page } from '$app/stores';

  let name = $page.url.searchParams.get('name');

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

<div class="font-medium">
  <div class="p-4">
    <div class="fixed bottom-0 right-0 blur-[1px] opacity-80">
      <img src="/flwr2.png" alt="" class="h-80 md:h-[45rem]">
    </div>
    <div class="fixed top-0 left-0 blur-[1px] opacity-80">
      <img src="/flwr.png" alt="" class="h-80 md:h-[45rem]">
    </div>
    <div class="h-screen grid grid-rows-3">
      <div class="h-full"></div>
      <div class="h-full">
        <div class="font-serif text-center text-lg md:text-2xl">
          <p>The Wedding of</p>
          <p class="text-4xl md:text-6xl my-6 md:my-8 text-amber-400">Hafid & Gesa</p>
          <p>November 25<sup>th</sup>, &nbsp;2023</p>
        </div>
      </div>
      <div class="h-full">
        {#if name != null}
          <div class="text-center">
            <p>Kepada Yth.<br/>Bapak/Ibu/Saudara/i</p>
            <p class="font-bold my-8 text-3xl text-amber-400">{name}</p>
            <p>Di Tempat</p>
          </div>
        {/if}
      </div>
    </div>
    <div class="text-center mt-24 max-w-screen-sm mx-auto px-2">
      <p class="font-['Noto_Naskh_Arabic'] text-2xl text-amber-400">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
      <p class="mt-8">Assalamu'alaikum warrahmatullahi wabarakatuh.</p>
      <p>Dengan memohon Rahmat dan Ridho Allah <span class="font-['Noto_Naskh_Arabic']">سُبْحَانَهُ وَ تَعَالَى</span> kami bermaksud untuk membagikan kabar bahagia serta memohon do'a restu Bapak/Ibu/Saudara/i pada acara Pernikahan:</p>
      <div class="my-8 font-serif text-4xl text-amber-400">
        <p class="backdrop-blur-sm py-2 rounded">Gesando Nodi Nadias, S.Pd.</p>
        <p class="font-sans text-sm text-neutral-500">Putri pertama dari <br class="block md:hidden"/>Bapak Budi Suhono & Ibu Tri Yekti Asriani</p>
        <p class="my-6">&</p>
        <p class="backdrop-blur-sm py-2 rounded">Muhammad Hafid Khoirul, S.T.</p>
        <p class="font-sans text-sm text-neutral-500">Putra kedua dari <br class="block md:hidden"/>Bapak Suparjo & Ibu Eka Saptaningsih</p>
      </div>
    </div>
    <div class="mt-48 text-center">
      <p class="font-serif text-3xl text-amber-400 backdrop-blur-sm px-3 py-2 w-full md:w-max mx-auto">Rangkaian Acara</p>
      <div class="bg-amber-400 rounded px-3 py-4 mt-6 backdrop-blur-sm text-green-900 shadow">
        <p class="text-2xl font-semibold py-6">Akad Nikah & Tasyakuran</p>
        <div class="h-px bg-white my-6"></div>
        <p class="my-2 font-semibold">Sabtu, 25 November 2023</p>
        <p>Akad Nikah: 09:00 - 12:00 WIB</p>
        <p>Tasyakuran: 12:00 - 15:00 WIB</p>
        <p class="mt-2">Kp. Setu, RT/RW 001/005 No. 85</p>
        <p class="">Bojonggede, Kab. Bogor</p>
        <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d991.0569402188!2d106.7967709285252!3d-6.492819999592007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjknMzQuMiJTIDEwNsKwNDcnNTAuNyJF!5e0!3m2!1sen!2sid!4v1698465623593!5m2!1sen!2sid" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-lg w-72 md:w-full h-96 mx-auto mt-4"></iframe>
      </div>
    </div>
    <div class="mt-48 text-center">
      <p class="font-serif text-3xl text-amber-400 backdrop-blur-sm px-3 py-2 w-full md:w-max mx-auto">Do'a Untuk Kedua Mempelai</p>
      <div class="mt-6">
        <p class="font-['Noto_Naskh_Arabic'] text-3xl">بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ</p>
        <p class="mt-8 max-w-screen-sm mx-auto">“Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, serta semoga Allah mempersatukan kalian berdua dalam kebaikan”<br/>(HR. Abu Dawud no. 2130).</p>
      </div>
    </div>

    <div class="h-screen">
      <div class="h-screen font-serif flex flex-col gap-8 justify-center items-center text-neutral-900">
        <p class="text-3xl font-bold text-amber-400">Countdown</p>
        <div class="font-sans font-semibold flex flex-wrap justify-center gap-2 text-lg md:text-xl mt-2 px-12">
          <div class="text-center bg-amber-400 px-4 py-3 rounded text-white w-20 backdrop-blur-sm">
            <p>{days}</p>
            <p class="text-base">Hari</p>
          </div>
          <div class="text-center bg-amber-400 px-4 py-3 rounded text-white w-20 backdrop-blur-sm">
            <p>{hours}</p>
            <p class="text-base">Jam</p>
          </div>
          <div class="text-center bg-amber-400 px-4 py-3 rounded text-white w-20 backdrop-blur-sm">
            <p>{minutes}</p>
            <p class="text-base">Menit</p>
          </div>
          <div class="block text-center bg-amber-400 px-4 py-3 rounded text-white w-20 backdrop-blur-sm">
            <p>{seconds}</p>
            <p class="text-base">Detik</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-56 text-center">
      <div class="text-neutral-900 text-lg">
        <p class="text-center">Atas do'a dan kehadirannya kami ucapkan terima kasih.</p>
        <div class="text-center mt-4">
          <p>Kami yang berbahagia,</p>
          <p>Kel. Bapak Budi Suhono & Ibu Tri Yekti Asriani</p>
          <p class="my-2">&</p>
          <p>Kel. Bapak Suparjo & Ibu Eka Saptaningsih</p>
        </div>
      </div>
    </div>
  </div>
</div>