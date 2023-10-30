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

<div class="font-medium">
  <div class="bg-yellow-50 static px-4">
    <div class="h-screen font-serif flex justify-center items-center text-neutral-900">
      <div class="text-base md:text-xl font-bold text-center z-50 mb-16">
        <p class="">The Wedding of</p>
        <p class="block my-6 md:my-10 text-4xl md:text-7xl text-amber-400 drop-shadow-md">Hafid &nbsp;&&nbsp; Gesa</p>
        <!-- <div class="block md:hidden my-10 text-3xl text-amber-400 text-center">
          <p class="drop-shadow-md">Hafid</p>
          <p class="mb-3 mt-4 drop-shadow-md">&</p>
          <p class="drop-shadow-md">Gesa</p>
        </div> -->
        <p class="">Sabtu, 25 November 2023</p>
      </div>
    </div>
    <div class="fixed top-0 right-0 opacity-40">
      <p class="font-serif text-xs pt-2 pr-3 font-bold">Hafid & Gesa</p>
    </div>
    <div class="fixed bottom-0 left-0 opacity-40">
      <p class="font-serif text-xs pb-2 pl-3 font-bold">Sabtu, 25 November 2023</p>
    </div>
    <div class="fixed bottom-0 right-0 blur-[1px] opacity-60">
      <img src="/flwr2.png" alt="" class="h-80 md:h-[45rem]">
    </div>
    <div class="fixed top-0 left-0 blur-[1px] opacity-60">
      <img src="/flwr.png" alt="" class="h-80 md:h-[45rem]">
    </div>
    <div class="">
      <div class="max-w-screen-sm mx-auto px-2">
        <p class="text-center text-2xl md:text-3xl">وَمِنْ ءَايَـٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًۭا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ لِّقَوْمٍۢ يَتَفَكَّرُونَ</p>
        <p class="mt-4 text-sm md:text-base text-center">Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan diantaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</p>
        <p class="text-center mt-2">Q.S Ar-Rum: 21</p>
      </div>
      <div class="mt-56 font-serif flex flex-col gap-8 justify-center items-center text-neutral-900 z-50">
        <p class="text-3xl font-bold text-amber-400">Bismillah</p>
        <div class="font-sans text-center">
          <p>Assalamu'alaikum warrahmatullahi wabarakatuh.</p>
          <p>Dengan ini kami memohon do'a dan restu bapak/ibu/saudara/i<br/>untuk berkenan hadir pada acara Pernikahan:</p>
          <div class="font-serif text-amber-400 text-3xl md:text-4xl my-10 px-3">
            <p class="font-bold">Gesando Nodi <br class="block md:hidden"/>Nadias, S.Pd.</p>
            <p class="font-sans text-neutral-900 text-xs md:text-sm font-normal mt-1 opacity-60">Putri pertama dari <br class="block md:hidden"/>Bapak Budi Suhono & Ibu Tri Yekti Asriani</p>
            <p class="mt-4 mb-3">&</p>
            <p class="font-bold">Muhammad Hafid Khoirul, S.T.</p>
            <p class="font-sans text-neutral-900 text-xs md:text-sm font-normal mt-1 opacity-60">Putra kedua dari <br class="block md:hidden"/>Bapak Suparjo & Ibu Eka Saptaningsih</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-56">
      <div class="font-serif flex flex-col gap-8 justify-center items-center text-neutral-900 z-50">
        <div class="text-center flex gap-8">
          <div class="">
            <p class="text-3xl font-bold text-amber-400">Akad Nikah</p>
            <div class="font-sans text-center mt-6">
              <p>Sabtu, 25 November 2023</p>
              <p class="my-1">09:00 - 12:00 WIB</p>
            </div>
          </div>
          <div class="">
            <p class="text-3xl font-bold text-amber-400">Tasyakuran</p>
            <div class="font-sans text-center mt-6">
              <p>Sabtu, 25 November 2023</p>
              <p class="my-1">12:00 - 15:00 WIB</p>
            </div>
          </div>
        </div>
        <div class="font-sans text-center">
          <p class="mt-2">Kp. Setu, RT/RW 001/005 No. 85</p>
          <p>Bojonggede, Kab. Bogor</p>
        </div>
        <div class="bg-white/30 bg-opacity-50 p-2 md:p-4 rounded-lg backdrop-blur-sm">
          <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d991.0569402188!2d106.7967709285252!3d-6.492819999592007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjknMzQuMiJTIDEwNsKwNDcnNTAuNyJF!5e0!3m2!1sen!2sid!4v1698465623593!5m2!1sen!2sid" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-lg w-72 md:w-[35rem] h-96"></iframe>
        </div>
      </div>
    </div>
    <div class="mt-72 px-4">
      <div class="flex flex-col gap-8 justify-center items-center text-neutral-900 z-50">
        <div class="text-amber-400 text-xl">
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
    <div class="h-screen">
      <div class="h-screen font-serif flex flex-col gap-8 justify-center items-center text-neutral-900">
        <p class="text-3xl font-bold text-amber-400">Countdown</p>
        <div class="font-sans font-semibold flex flex-wrap justify-center gap-2 text-lg md:text-xl mt-2">
          <div class="text-center bg-amber-400 px-4 py-3 rounded text-white w-28 backdrop-blur-sm">
            <p>{days}</p>
            <p class="text-lg">Day</p>
          </div>
          <div class="text-center bg-amber-400 px-4 py-3 rounded text-white w-28 backdrop-blur-sm">
            <p>{hours}</p>
            <p class="text-lg">Hours</p>
          </div>
          <div class="text-center bg-amber-400 px-4 py-3 rounded text-white w-28 backdrop-blur-sm">
            <p>{minutes}</p>
            <p class="text-lg">Minutes</p>
          </div>
          <div class="block text-center bg-amber-400 px-4 py-3 rounded text-white w-28 backdrop-blur-sm">
            <p>{seconds}</p>
            <p class="text-lg">Seconds</p>
          </div>
        </div>
      </div>
    </div>
    <audio controls autoplay loop src="/sound.mp3" type="audio/mpeg" class="opacity-0"></audio>
  </div>
</div>