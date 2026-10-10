<template>
  <div class="relative">
    <!-- Navbar -->
    <nav
      class="fixed top-0 left-0 w-full px-5 sm:px-10 py-4 bg-[#0a1628]/95 backdrop-blur-md transition-all duration-300 ease-in-out z-40 border-b border-[#24354c]"
    >
      <div
        class="container mx-auto max-w-[1350px] flex justify-between items-center"
      >
        <!-- Logo -->
        <a href="/" class="flex flex-col group">
          <div class="flex items-center gap-x-1">
            <span class="font-sans text-lg sm:text-xl font-extrabold tracking-widest text-white uppercase">Jelmar</span>
            <span class="font-sans text-lg sm:text-xl font-extrabold tracking-widest text-[#3b82f6] uppercase">Degoro</span>
          </div>
          <span class="text-[10px] sm:text-xs font-sans text-[#a0b0c6] tracking-wide mt-0.5">QA Analyst&nbsp;&nbsp;|&nbsp;&nbsp;Configuration Analyst&nbsp;&nbsp;|&nbsp;&nbsp;Software Testing</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-x-7 lg:gap-x-8">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="text-sm font-sans font-medium text-[#a0b0c6] hover:text-white transition-colors duration-200"
            :class="{ 'text-white font-semibold': activeSection === item.id }"
          >
            {{ item.name }}
          </a>

          <!-- Resume Link -->
          <a
            href="/Jelmar_Degoro_Resume.pdf"
            target="_blank"
            download="Jelmar_Degoro_Resume.pdf"
            class="text-sm font-sans font-medium text-[#a0b0c6] hover:text-white transition-colors duration-200 flex items-center gap-1.5"
          >
            <span>Resume</span>
            <svg class="w-3.5 h-3.5 text-[#3b82f6]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.5V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
          </a>

          <!-- Contact Button -->
          <a
            href="#contact"
            class="ml-2 px-5 py-2 rounded-full border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 inline-block text-center whitespace-nowrap"
          >
            Contact
          </a>
        </div>

        <!-- Mobile Hamburger Button -->
        <div class="lg:hidden flex items-center">
          <button
            @click="toggleSidebar"
            class="p-2 text-[#a0b0c6] hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              v-if="!isSidebarOpen"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-7 h-7"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Sidebar Drawer -->
    <div
      :class="{
        'translate-x-0': isSidebarOpen,
        '-translate-x-full': !isSidebarOpen,
      }"
      class="fixed inset-y-0 left-0 w-64 bg-[#0a1628] border-r border-[#24354c] backdrop-blur-xl transform transition-transform duration-300 ease-in-out z-50 p-6 flex flex-col justify-between"
    >
      <div>
        <div class="flex justify-between items-center mb-8">
          <a href="/" class="flex flex-col" @click="closeSidebar">
            <div class="flex items-center gap-x-1">
              <span class="font-sans text-lg font-extrabold tracking-widest text-white uppercase">Jelmar</span>
              <span class="font-sans text-lg font-extrabold tracking-widest text-[#3b82f6] uppercase">Degoro</span>
            </div>
            <span class="text-[10px] font-sans text-[#a0b0c6] tracking-wide">QA Analyst | Configuration Analyst</span>
          </a>
          <button
            @click="closeSidebar"
            class="p-1 rounded-md text-[#a0b0c6] hover:text-white"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav class="flex flex-col gap-y-4">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            @click="closeSidebar"
            class="text-base font-sans font-medium text-[#a0b0c6] hover:text-white py-1 transition-colors"
            :class="{ 'text-[#3b82f6] font-semibold': activeSection === item.id }"
          >
            {{ item.name }}
          </a>
          <a
            href="/Jelmar_Degoro_Resume.pdf"
            target="_blank"
            download="Jelmar_Degoro_Resume.pdf"
            @click="closeSidebar"
            class="text-base font-sans font-medium text-[#3b82f6] hover:text-blue-300 py-1 transition-colors flex items-center gap-2"
          >
            <span>Resume (PDF)</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.5V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
          </a>
        </nav>
      </div>

      <div class="pt-6 border-t border-[#24354c]">
        <a
          href="#contact"
          @click="closeSidebar"
          class="block w-full py-3 rounded-full border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white font-semibold text-center text-sm transition-all duration-200"
        >
          Contact
        </a>
      </div>
    </div>

    <!-- Sidebar Overlay -->
    <div
      v-if="isSidebarOpen"
      @click="closeSidebar"
      class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    activeSection: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isScrolled: false,
      isSidebarOpen: false,
      navItems: [
        { id: "home", name: "Home" },
        { id: "about", name: "About" },
        { id: "skills", name: "Skills" },
        { id: "experience", name: "Experience" },
        { id: "projects", name: "Projects" },
        { id: "certifications", name: "Certifications" },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
