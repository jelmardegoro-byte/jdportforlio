<template>
  <div
    class="fixed inset-0 z-[9999] bg-[#0a1628] text-white transition-opacity duration-500 antialiased flex flex-col items-center justify-center"
  >
    <!-- Dark Navy Backdrop -->
    <div class="absolute inset-0 bg-[#0a1628]/90 backdrop-blur-xl"></div>

    <!-- Soft Beige Radial Glow -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,173,135,0.12)_0%,rgba(10,22,40,0)_65%)] pointer-events-none"
    ></div>

    <!-- CONTENT -->
    <div class="relative z-10 flex flex-col items-center justify-center px-4">
      <!-- LOGO WITH SUBTLE BEIGE GLOW -->
      <div class="relative mb-6">
        <div
          class="absolute inset-0 -m-4 rounded-full blur-2xl opacity-30 bg-[#c8ad87]"
          aria-hidden="true"
        ></div>

        <div class="relative flex items-center justify-center gap-x-1">
          <span class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">workwith</span>
          <span class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#c8ad87] tracking-tight">jimmer</span>
        </div>
      </div>

      <!-- STATUS MESSAGE -->
      <div class="text-sm sm:text-base text-[#b8a99a] font-sans font-medium tracking-wide mb-5">
        {{ currentMessage }}
      </div>

      <!-- PROGRESS BAR -->
      <div
        class="h-1.5 w-64 sm:w-72 overflow-hidden rounded-full bg-[#1e3050]/80 border border-[#1e3050]/50 shadow-inner"
        role="progressbar"
        :aria-valuemin="0"
        :aria-valuemax="100"
        :aria-valuenow="Math.round(progress)"
      >
        <div
          class="h-full rounded-full bg-gradient-to-r from-[#c8ad87] via-[#e8d5b5] to-[#c8ad87] shadow-[0_0_12px_rgba(200,173,135,0.4)]"
          :style="{
            width: progress + '%',
            transition: 'width 0.05s linear',
            willChange: 'width',
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const messages = [
  "Loading experience...",
  "Preparing workspace...",
  "Building systems...",
  "Optimizing workflows...",
  "Welcome! 🚀",
];

const currentMessage = ref(messages[0]);
let messageInterval;

const progress = ref(0);
let rafId;
const DURATION = 3000; // 3 seconds

onMounted(() => {
  // Rotate status text every 1s
  let index = 0;
  messageInterval = setInterval(() => {
    index = (index + 1) % messages.length;
    currentMessage.value = messages[index];
  }, 1000);

  // Animate progress to 100% in exactly 3 seconds
  const start = performance.now();
  const tick = (now) => {
    const elapsed = now - start;
    const pct = Math.min(1, elapsed / DURATION) * 100;
    progress.value = pct;
    if (elapsed < DURATION) {
      rafId = requestAnimationFrame(tick);
    } else {
      progress.value = 100;
    }
  };
  rafId = requestAnimationFrame(tick);
});

onBeforeUnmount(() => {
  clearInterval(messageInterval);
  if (rafId) cancelAnimationFrame(rafId);
});
</script>

<style scoped>
</style>
