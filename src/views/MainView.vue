<template>
  <div class="relative overflow-hidden">
    <!-- Navbar start -->
    <NavbarElement :activeSection="activeSection" />
    <!-- Navbar end -->

    <router-view @sections-ready="setupIntersectionObserver" />

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
      activeSection: "",
      observer: null,
    };
  },
  mounted() {},
  methods: {
    setupIntersectionObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeSection = entry.target.id;
            }
          });
        },
        { threshold: 0.3 }
      );

      ["home", "about", "services", "portfolio", "testimonials", "contact"].forEach((id) => {
        const element = document.getElementById(id);
        if (element) this.observer.observe(element);
      });
    },
  },
  beforeUnmount() {
    if (this.observer) {
      ["home", "about", "services", "portfolio", "testimonials", "contact"].forEach((id) => {
        const element = document.getElementById(id);
        if (element) this.observer.unobserve(element);
      });
    }
  },
};
</script>
