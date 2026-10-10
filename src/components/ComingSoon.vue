<template>
  <div class="coming-soon">
    <div class="content">
      <!-- <img
        src="@/assets/oneeyedgregg-logo-removebg-800x800.png"
        alt="Logo"
        class="logo"
      /> -->
      <h1>Coming Soon</h1>
      <p>
        Our website is under construction. We'll be here soon with our awesome
        site.
      </p>
      <div class="countdown" v-if="timeRemaining > 0">
        <p>{{ days }}d {{ hours }}h {{ minutes }}m {{ seconds }}s</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ComingSoon',
  data() {
    return {
      startDate: new Date('2024-06-16T00:00:00Z'), // Start date
      targetDate: new Date('2024-07-01T00:00:00Z'), // End date
      intervalId: null,
      timeRemaining: 0,
    };
  },
  computed: {
    days() {
      return Math.floor(this.timeRemaining / (1000 * 60 * 60 * 24));
    },
    hours() {
      return Math.floor(
        (this.timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
    },
    minutes() {
      return Math.floor((this.timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    },
    seconds() {
      return Math.floor((this.timeRemaining % (1000 * 60)) / 1000);
    },
  },
  methods: {
    updateTimeRemaining() {
      const now = new Date();
      if (now >= this.startDate) {
        this.timeRemaining = this.targetDate - now;
        if (this.timeRemaining <= 0) {
          clearInterval(this.intervalId);
          this.timeRemaining = 0;
        }
      } else {
        this.timeRemaining = this.targetDate - this.startDate;
      }
    },
  },
  mounted() {
    this.updateTimeRemaining(); // Initialize the countdown
    this.intervalId = setInterval(() => {
      this.updateTimeRemaining();
    }, 1000);
  },
  beforeUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
};
</script>

<style scoped>
.coming-soon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #4b18a1;
  color: white;
  text-align: center;
}
.content {
  max-width: 600px;
}
.logo {
  width: 100px; /* Adjust size as needed */
  height: 100px; /* Adjust size as needed */
  margin-bottom: 1em;
}
h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
}
p {
  font-size: 1.5em;
  margin-bottom: 1em;
}
.countdown {
  font-size: 1.2em;
}
</style>
