<template>
  <div class="relative overflow-hidden">
    <!-- Navbar start -->
    <NavbarElement :activeSection="activeSection" />
    <!-- Navbar end -->

    <router-view @sections-ready="setupIntersectionObserver" />

    <!-- Back to top button -->
    <Transition name="fade">
      <button
        v-show="showBackToTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#132846]/90 hover:bg-[#1d72f2] text-[#93c5fd] hover:text-white border border-[#3b82f6]/40 shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
        aria-label="Scroll back to top"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </Transition>

    <!-- Footer start -->
    <FooterElement :activeSection="activeSection" />
    <!-- Footer end -->
  </div>
</template>

<script>
import NavbarElement from "@/components/NavbarElement.vue";
import FooterElement from "@/components/FooterElement.vue";

export default {
  components: {
    FooterElement,
    NavbarElement,
  },
  data() {
    return {
      activeSection: "home",
      observer: null,
      showBackToTop: false,
      sections: [
        "home",
        "about",
        "skills",
        "techstack",
        "experience",
        "projects",
        "certifications",
        "contact",
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  },
  methods: {
    handleScroll() {
      this.showBackToTop = window.scrollY > 400;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    setupIntersectionObserver() {
      if (this.observer) this.observer.disconnect();

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeSection = entry.target.id;
            }
          });
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
      );

      this.sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) this.observer.observe(element);
      });
    },
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    if (this.observer) {
      this.observer.disconnect();
    }
  },
};
</script>
