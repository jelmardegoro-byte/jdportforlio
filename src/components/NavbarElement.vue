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
        <a href="/" class="flex items-center gap-x-0.5 group">
          <span class="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">workwith</span>
          <span class="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#c8ad87]">jimmer</span>
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

          <!-- Book a Call Button -->
          <a
            href="#contact"
            class="ml-2 px-6 py-2.5 rounded-full bg-[#c8ad87] hover:bg-[#e8d5b5] text-[#0a1628] font-bold text-sm transition-all duration-200 shadow-md hover:scale-105 active:scale-95 inline-block text-center whitespace-nowrap"
          >
            Book a Call
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
          <a href="/" class="flex items-center gap-x-0.5" @click="closeSidebar">
            <span class="font-serif text-xl font-bold text-white">workwith</span>
            <span class="font-serif text-xl font-bold text-[#c8ad87]">jimmer</span>
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
            :class="{ 'text-[#c8ad87] font-semibold': activeSection === item.id }"
          >
            {{ item.name }}
          </a>
        </nav>
      </div>

      <div class="pt-6 border-t border-[#24354c]">
        <a
          href="#contact"
          @click="closeSidebar"
          class="block w-full py-3 rounded-full bg-[#c8ad87] text-[#0a1628] font-bold text-center text-sm shadow-md"
        >
          Book a Call
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
        { id: "services", name: "Services" },
        { id: "portfolio", name: "Portfolio" },
        { id: "testimonials", name: "Testimonials" },
        { id: "contact", name: "Contact" },
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
