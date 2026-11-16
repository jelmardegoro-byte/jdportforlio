<script setup>
import { ref } from "vue";
import { useRouter, RouterView } from "vue-router";
import PageLoader from "@/components/PageLoader.vue";

const isAppLoading = ref(true);
const router = useRouter();

// Disable automatic browser scroll restoration on refresh
if (typeof window !== "undefined") {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
}

router.isReady().then(() => {
  setTimeout(() => {
    isAppLoading.value = false;
    window.scrollTo(0, 0);
  }, 950);
});
</script>

<template>
  <div>
    <Transition name="fade">
      <PageLoader v-show="isAppLoading" />
    </Transition>

    <RouterView />
  </div>
</template>


