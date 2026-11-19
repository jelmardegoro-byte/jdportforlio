<template>
  <div class="relative">
    <!-- Navbar -->
    <nav
      class="fixed top-0 left-0 w-full px-5 sm:px-10 transition-all duration-300 ease-in-out z-40 backdrop-blur-md"
      :class="isScrolled ? 'py-3.5 bg-[#0a1628]/95 shadow-lg shadow-black/40 border-b border-[#24354c]' : 'py-4.5 bg-[#0a1628]/90 border-b border-[#1c2c42]'"
    >
      <div
        class="container mx-auto max-w-[1350px] flex justify-between items-center"
      >
        <!-- Logo -->
        <a href="/" class="flex flex-col group">
          <div class="flex items-center gap-x-1">
            <span class="font-sans text-lg sm:text-xl font-extrabold tracking-widest text-white uppercase group-hover:text-[#60a5fa] transition-colors">Jelmar</span>
            <span class="font-sans text-lg sm:text-xl font-extrabold tracking-widest text-[#3b82f6] uppercase">Degoro</span>
          </div>
          <span class="text-[10px] sm:text-xs font-sans text-[#a0b0c6] tracking-wide mt-0.5">QA Engineer&nbsp;&nbsp;|&nbsp;&nbsp;Full-Stack Web Developer&nbsp;&nbsp;|&nbsp;&nbsp;Software Testing</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-x-7 lg:gap-x-8">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="relative py-1 text-sm font-sans font-medium transition-colors duration-200"
            :class="activeSection === item.id 
              ? 'text-white font-semibold after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#3b82f6] after:rounded-full' 
              : 'text-[#a0b0c6] hover:text-white'"
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
            <span class="text-[10px] font-sans text-[#a0b0c6] tracking-wide">QA Engineer | Full-Stack Web Developer</span>
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

        <nav class="flex flex-col gap-y-2">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            @click="closeSidebar"
            class="text-sm font-sans font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-between"
            :class="activeSection === item.id 
              ? 'text-white font-semibold bg-[#1d72f2]/20 border-l-2 border-[#3b82f6]' 
              : 'text-[#a0b0c6] hover:text-white hover:bg-white/5'"
          >
            <span>{{ item.name }}</span>
            <span v-if="activeSection === item.id" class="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
          </a>
          <a
            href="/Jelmar_Degoro_Resume.pdf"
            target="_blank"
            download="Jelmar_Degoro_Resume.pdf"
            @click="closeSidebar"
            class="text-sm font-sans font-medium text-[#3b82f6] hover:text-blue-300 py-2 px-3 transition-colors flex items-center gap-2 mt-2 border-t border-slate-800 pt-3"
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
          class="block w-full py-2.5 rounded-full border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white font-semibold text-center text-sm transition-all duration-200"
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
        { id: "techstack", name: "Tech Stack" },
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
      this.isScrolled = window.scrollY > 20;
    },
    handleKeydown(e) {
      if (e.key === "Escape" && this.isSidebarOpen) {
        this.closeSidebar();
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("keydown", this.handleKeydown);
  },
};
</script>
