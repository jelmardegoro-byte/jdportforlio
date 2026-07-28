<template>
  <footer class="w-full bg-[#0a1628] border-t border-[#24354c] py-8 sm:py-10 px-6 sm:px-10 lg:px-16">
    <div class="max-w-[1300px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      
      <!-- LEFT: Brand & Copyright -->
      <div class="flex flex-col items-start">
        <a href="#home" class="flex items-center gap-x-0.5 mb-2 group">
          <span class="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">workwith</span>
          <span class="font-serif text-xl sm:text-2xl font-bold text-[#c8ad87] tracking-tight">jimmer</span>
        </a>
        <p class="text-xs sm:text-[13px] text-[#a0b0c6] font-sans leading-relaxed">
          &copy; {{ new Date().getFullYear() }} Work With Jimmer. All rights reserved. Made with <span class="text-white">&hearts;</span> by DevignLabs
        </p>
      </div>

      <!-- RIGHT: Navigation Links -->
      <nav class="flex flex-wrap items-center gap-6 sm:gap-8 mt-2 md:mt-0">
        <a
          href="#about"
          class="text-xs sm:text-sm font-sans font-medium text-[#a0b0c6] hover:text-white transition duration-200"
        >
          About
        </a>
        <a
          href="#services"
          class="text-xs sm:text-sm font-sans font-medium text-[#a0b0c6] hover:text-white transition duration-200"
        >
          Services
        </a>
        <a
          href="#portfolio"
          class="text-xs sm:text-sm font-sans font-medium text-[#a0b0c6] hover:text-white transition duration-200"
        >
          Portfolio
        </a>
        <a
          href="#testimonials"
          class="text-xs sm:text-sm font-sans font-medium text-[#a0b0c6] hover:text-white transition duration-200"
        >
          Testimonials
        </a>
        <a
          href="#contact"
          class="text-xs sm:text-sm font-sans font-medium text-[#a0b0c6] hover:text-white transition duration-200"
        >
          Contact
        </a>
      </nav>

    </div>
  </footer>
</template>

<script setup>
</script>