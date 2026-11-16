<template>
  <div
    class="fixed inset-0 z-[9999] bg-[#0a1628] text-white transition-opacity duration-500 antialiased flex flex-col items-center justify-center select-none"
  >
    <!-- Deep Navy Ambient Backdrop -->
    <div class="absolute inset-0 bg-[#0a1628]"></div>

    <!-- Soft Tech Blue Radial Glow -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,114,242,0.18)_0%,rgba(10,22,40,0)_70%)] pointer-events-none"
    ></div>

    <!-- Subtle Tech Grid Lines -->
    <div
      class="absolute inset-0 opacity-[0.03] pointer-events-none"
      style="background-image: linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px); background-size: 40px 40px;"
    ></div>

    <!-- Central Loader Card -->
    <div class="relative z-10 flex flex-col items-center justify-center px-6 max-w-md w-full">

      <!-- Glowing Badge / Monogram Container -->
      <div class="relative mb-6 flex items-center justify-center">
        <!-- Ambient Glow behind emblem -->
        <div
          class="absolute w-28 h-28 rounded-full bg-[#1d72f2]/25 blur-2xl animate-pulse"
          aria-hidden="true"
        ></div>

        <!-- Outer Rotating Dashed Ring -->
        <div
          class="absolute w-24 h-24 rounded-full border border-dashed border-[#3b82f6]/40 animate-spin"
          style="animation-duration: 9s;"
        ></div>

        <!-- Inner Counter-Rotating Gradient Ring -->
        <div
          class="absolute w-20 h-20 rounded-full border-2 border-transparent border-t-[#60a5fa] border-r-[#1d72f2] animate-spin"
          style="animation-duration: 3s; animation-direction: reverse;"
        ></div>

        <!-- Central Shield / Monogram Icon -->
        <div
          class="relative w-16 h-16 rounded-2xl bg-gradient-to-b from-[#132846] to-[#0d1a2d] border border-[#3b82f6]/40 flex items-center justify-center shadow-[0_0_25px_rgba(29,114,242,0.35)]"
        >
          <div class="flex items-center justify-center tracking-tighter font-extrabold font-sans text-xl">
            <span class="text-white">J</span>
            <span class="text-[#3b82f6]">D</span>
          </div>

          <!-- Small QA Pulse Dot in top-right -->
          <span class="absolute -top-1 -right-1 flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-[#60a5fa]"></span>
          </span>
        </div>
      </div>

      <!-- BRAND NAME -->
      <div class="flex items-center justify-center gap-x-2 mb-1.5">
        <span class="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-[0.16em] uppercase">
          Jelmar
        </span>
        <span class="font-sans text-2xl sm:text-3xl font-extrabold text-[#3b82f6] tracking-[0.16em] uppercase">
          Degoro
        </span>
      </div>

      <!-- ROLE SUBTITLE -->
      <p class="text-xs sm:text-[13px] text-[#94a3b8] font-sans font-medium tracking-[0.2em] uppercase mb-7 text-center">
        QA &amp; Configuration Analyst
      </p>

      <!-- PROGRESS TRACK & PERCENTAGE -->
      <div class="w-64 sm:w-72">
        <div class="flex items-center justify-between text-xs font-mono text-[#94a3b8] mb-2 px-0.5">
          <span class="flex items-center gap-1.5 text-[#cbd5e1] font-sans text-[12px] font-medium tracking-wide">
            <span class="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-ping"></span>
            {{ currentMessage }}
          </span>
          <span class="text-[#60a5fa] font-semibold tabular-nums font-mono text-[12px]">
            {{ Math.round(progress) }}%
          </span>
        </div>

        <!-- PROGRESS BAR -->
        <div
          class="h-1.5 w-full overflow-hidden rounded-full bg-[#12223a] border border-[#1e3a63]/70 shadow-inner"
          role="progressbar"
          :aria-valuemin="0"
          :aria-valuemax="100"
          :aria-valuenow="Math.round(progress)"
        >
          <div
            class="h-full rounded-full bg-gradient-to-r from-[#1d72f2] via-[#3b82f6] to-[#60a5fa] shadow-[0_0_12px_rgba(59,130,246,0.7)]"
            :style="{
              width: progress + '%',
              transition: 'width 0.05s linear',
              willChange: 'width',
            }"
          ></div>
        </div>
      </div>

      <!-- Sub-caption -->
      <p class="text-[11px] text-[#64748b] font-sans tracking-wider mt-4">
        Quality Builds Better Solutions
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const messages = [
  "Initializing test suite...",
  "Loading environments...",
  "Running quality checks...",
  "Validating workflows...",
  "Portfolio ready! ✓",
];

const currentMessage = ref(messages[0]);
let messageInterval;

const progress = ref(0);
let rafId;
const DURATION = 950; // Snappy branded entrance

onMounted(() => {
  // Rotate status text smoothly every 240ms
  let index = 0;
  messageInterval = setInterval(() => {
    index = (index + 1) % messages.length;
    currentMessage.value = messages[index];
  }, 240);

  // Animate progress to 100%
  const start = performance.now();
  const tick = (now) => {
    const elapsed = now - start;
    const pct = Math.min(1, elapsed / DURATION) * 100;
    progress.value = pct;
    if (elapsed < DURATION) {
      rafId = requestAnimationFrame(tick);
    } else {
      progress.value = 100;
      currentMessage.value = "Portfolio ready! ✓";
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
