<template>
  <div
    class="relative min-h-screen overflow-hidden bg-[#0a1628] flex items-center justify-center"
  >
    <!-- Background Image -->
    <img
      src="@/assets/bg-header.png"
      class="absolute inset-0 z-0 object-cover object-center w-full h-full"
      alt="background"
    />

    <!-- Dark Overlay -->
    <div class="absolute inset-0 z-0 bg-[#0a1628]/70"></div>

    <!-- Subtle beige radial glow -->
    <div
      class="absolute inset-0 z-0 pointer-events-none"
      style="background: radial-gradient(ellipse at center, rgba(200,173,135,0.08) 0%, transparent 65%);"
    ></div>

    <!-- Content -->
    <div class="z-10 relative flex flex-col items-center text-center px-6 max-w-2xl mx-auto">

      <!-- Error label -->
      <span
        class="text-[11px] font-semibold tracking-[0.28em] text-[#c8ad87] uppercase mb-6 block"
      >
        ERROR
      </span>

      <!-- Big decorative number -->
      <p
        class="font-serif text-[120px] sm:text-[160px] font-bold leading-none text-white/10 select-none mb-0 -mt-4"
      >
        404
      </p>

      <!-- Headline -->
      <h1
        class="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight tracking-tight -mt-6 mb-4"
      >
        Oops! Something<br class="hidden sm:block" /> went wrong.
      </h1>

      <!-- Subtext -->
      <p class="text-[#b8a99a] text-sm sm:text-base font-sans max-w-md leading-relaxed mb-10">
        Please try again later or contact support if the issue persists.
      </p>

      <!-- CTA Button -->
      <router-link to="/">
        <button
          class="px-8 py-3.5 rounded-full bg-[#c8ad87] hover:bg-[#e8d5b5] text-[#0a1628] font-bold text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        >
          Go to Home
        </button>
      </router-link>

    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorView",
});
</script>
