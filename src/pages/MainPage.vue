<template>
  <div
    class="relative overflow-hidden bg-[#0a1628]"
  >
    <!-- <img
      src="@/assets/dice2.png"
      class="absolute top-[550px] sm:top-[500px] -right-[100px] sm:-right-[80px] xl:-right-[50px] z-10 object-contain w-[180px] h-[180px]"
      alt="overlay 1"
    />

    <img
      src="@/assets/coin.png"
      class="absolute -top-[50px] -right-[140px] lg:top-0 lg:-right-[50px] z-10 object-contain w-[180px] h-[180px]"
      alt="overlay 1"
    />

    <img
      src="@/assets/dart.png"
      class="absolute top-[600px] -left-[100px] sm:-left-[50px] z-10 object-contain w-[200px] h-[200px]"
      alt="overlay 1"
    /> -->

    <!-- HERO OVERLAYS -->

    <!-- <img
      src="@/assets/triple-coins-left.png"
      class="absolute top-[265px] -left-[150px] sm:-left-[100px] md:-left-[30px] xl:left-[210px] z-10 object-contain w-[340px] h-[340px]"
      alt="overlay 1"
    />

    <img
      src="@/assets/triple-coins-right.png"
      class="absolute top-[100px] -right-[150px] sm:-right-[90px] md:-right-[10px] xl:right-[220px] z-10 object-contain w-[340px] h-[340px]"
      alt="overlay 2"
    /> -->

    <!-- HERO SECTION -->
    <section
      id="home"
      class="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a1628]"
    >
      <!-- Background Image: bg-header.png -->
      <img
        src="@/assets/bg-header.png"
        class="absolute inset-0 z-0 object-cover object-[70%_center] sm:object-[60%_center] w-full h-full"
        alt="Header Background"
      />

      <!-- Uniform dark overlay so photo shows through naturally -->
      <div
        class="absolute inset-0 z-0 bg-[#0a1628]/75 sm:bg-[#0a1628]/60"
      ></div>

      <!-- Hero Content (Centered) -->
      <div class="z-10 relative w-full px-5 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-16 sm:pb-20 flex flex-col items-center text-center">
        <div class="max-w-[650px] mx-auto flex flex-col items-center w-full">
          <!-- Category Subtitle / Tagline -->
          <span
            class="text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.28em] text-[#c8ad87] uppercase mb-4 sm:mb-5 block whitespace-nowrap overflow-hidden text-ellipsis max-w-full"
          >
            VIRTUAL ASSISTANT &middot; SYSTEMS EXPERT &middot; EDUCATOR
          </span>

          <!-- Main Headline -->
          <h1
            class="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-[1.2] sm:leading-[1.18] tracking-tight mb-5 sm:mb-6"
          >
            Calm, organized systems<br class="hidden sm:inline" />
            — built quietly behind<br class="hidden sm:inline" />
            every business.
          </h1>

          <!-- Subheading Paragraph -->
          <p
            class="text-slate-200/90 text-sm sm:text-base md:text-[17px] font-sans max-w-xl leading-relaxed mb-7 sm:mb-9 mx-auto px-2"
          >
            I help coaches, founders, and small teams reclaim their time with
            streamlined systems, done-for-you support, and workflows that
            actually stick.
          </p>

          <!-- CTA Action Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto max-w-xs sm:max-w-none mb-8 sm:mb-9">
            <!-- Work With Me -->
            <a
              href="#contact"
              class="w-full sm:w-auto px-7 py-3 rounded-full bg-[#c8ad87] hover:bg-[#e8d5b5] text-[#0a1628] font-bold text-sm transition-all duration-200 shadow-md hover:scale-105 active:scale-95 inline-flex items-center justify-center text-center"
            >
              Work With Me
            </a>

            <!-- See Services -->
            <a
              href="#services"
              class="w-full sm:w-auto px-7 py-3 rounded-full border border-white/40 bg-black/30 hover:bg-white/10 backdrop-blur-sm text-white font-medium text-sm transition-all duration-200 hover:scale-105 active:scale-95 inline-flex items-center justify-center text-center"
            >
              See Services
            </a>

            <!-- Free VA Resources -->
            <a
              href="#about"
              class="w-full sm:w-auto px-7 py-3 rounded-full border border-white/40 bg-black/30 hover:bg-white/10 backdrop-blur-sm text-white font-medium text-sm transition-all duration-200 hover:scale-105 active:scale-95 inline-flex items-center justify-center text-center"
            >
              Free VA Resources
            </a>
          </div>

          <!-- Social Media Icons (Centered) -->
          <div class="flex items-center justify-center gap-3">
            <!-- Facebook -->
            <a
              href="https://www.facebook.com/itsmejimmer/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-[#111c2b]/80 border border-white/20 flex items-center justify-center text-white/90 hover:bg-white/20 hover:text-white transition duration-200 shadow-sm"
              aria-label="Facebook"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <!-- Messenger -->
            <a
              href="https://www.messenger.com/channel/itsmejimmerr"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-[#111c2b]/80 border border-white/20 flex items-center justify-center text-white/90 hover:bg-white/20 hover:text-white transition duration-200 shadow-sm"
              aria-label="Messenger"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.093.304 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26 6.559-6.96 3.129 3.26 5.889-3.26-6.559 6.96z"/>
              </svg>
            </a>

            <!-- Instagram -->
            <a
              href="https://www.instagram.com/itsmejimmer/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-[#111c2b]/80 border border-white/20 flex items-center justify-center text-white/90 hover:bg-white/20 hover:text-white transition duration-200 shadow-sm"
              aria-label="Instagram"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <!-- TikTok -->
            <a
              href="https://www.tiktok.com/@itsmejimmer"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-[#111c2b]/80 border border-white/20 flex items-center justify-center text-white/90 hover:bg-white/20 hover:text-white transition duration-200 shadow-sm"
              aria-label="TikTok"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 003 15.65a6.34 6.34 0 0010.86 4.46A6.27 6.27 0 0015.8 15.6V8.9a8.16 8.16 0 004.77 1.52V7a4.85 4.85 0 01-1-.31z"/>
              </svg>
            </a>

            <!-- Email -->
            <a
              href="mailto:jimmerariate@gmail.com"
              class="w-10 h-10 rounded-full bg-[#111c2b]/80 border border-white/20 flex items-center justify-center text-white/90 hover:bg-white/20 hover:text-white transition duration-200 shadow-sm"
              aria-label="Email"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.083l10 8.046 10-8.046V19H2z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- STATS BANNER SECTION -->
    <section class="w-full bg-[#131f33] border-y border-[#24354c] relative z-20 py-7 md:py-9">
      <div class="container mx-auto max-w-[1300px] px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#24354c]">
          <!-- Stat 1 -->
          <div class="flex flex-col items-center justify-center p-4 md:p-6 text-center">
            <span class="font-serif text-3xl sm:text-4xl md:text-[40px] font-bold text-[#c8ad87] leading-none mb-3">
              5+
            </span>
            <span class="text-[11px] sm:text-xs font-medium tracking-[0.18em] text-[#a0b0c6] uppercase">
              YEARS EXPERIENCE
            </span>
          </div>

          <!-- Stat 2 -->
          <div class="flex flex-col items-center justify-center p-4 md:p-6 text-center">
            <span class="font-serif text-3xl sm:text-4xl md:text-[40px] font-bold text-[#c8ad87] leading-none mb-3">
              30+
            </span>
            <span class="text-[11px] sm:text-xs font-medium tracking-[0.18em] text-[#a0b0c6] uppercase">
              CLIENTS SUPPORTED
            </span>
          </div>

          <!-- Stat 3 -->
          <div class="flex flex-col items-center justify-center p-4 md:p-6 text-center">
            <span class="font-serif text-3xl sm:text-4xl md:text-[40px] font-bold text-[#c8ad87] leading-none mb-3">
              100%
            </span>
            <span class="text-[11px] sm:text-xs font-medium tracking-[0.18em] text-[#a0b0c6] uppercase">
              SYSTEMS-FIRST
            </span>
          </div>

          <!-- Stat 4 -->
          <div class="flex flex-col items-center justify-center p-4 md:p-6 text-center">
            <span class="font-serif text-3xl sm:text-4xl md:text-[40px] font-bold text-[#c8ad87] leading-none mb-3">
              1:1
            </span>
            <span class="text-[11px] sm:text-xs font-medium tracking-[0.18em] text-[#a0b0c6] uppercase">
              PERSONAL TRAINING
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="relative bg-[#0a1628]">
      <!-- ABOUT SECTION -->
      <section
        id="about"
        class="relative w-full py-20 md:py-28 px-6 sm:px-10 bg-[#0a1628] border-b border-[#24354c]"
      >
        <div class="container mx-auto max-w-[1300px]">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <!-- LEFT: Image Card using bg-about.png -->
            <div class="relative rounded-[28px] overflow-hidden border border-[#24354c] shadow-2xl bg-[#131f33] p-2 sm:p-3 group">
              <img
                src="@/assets/bg-about.png"
                alt="Jimmer Ariate - Virtual Assistant, Systems Expert &amp; Educator"
                class="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-center rounded-[22px] transition duration-500 group-hover:scale-102"
              />
            </div>

            <!-- RIGHT: Content -->
            <div class="flex flex-col justify-center">
              <!-- Category Tag -->
              <span
                class="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#c8ad87] uppercase mb-4 block"
              >
                ABOUT JIMMER
              </span>

              <!-- Main Title -->
              <h2
                class="font-serif text-3xl sm:text-4xl md:text-[40px] lg:text-[42px] font-normal text-white leading-[1.22] mb-6 tracking-tight"
              >
                Hi, I'm Jimmer &mdash; Virtual Assistant, Systems Expert &amp; Educator.
              </h2>

              <!-- Paragraph 1 -->
              <p class="text-slate-300/85 text-base sm:text-[17px] font-sans leading-relaxed mb-6 text-[#A6B1CC]">
                I partner with busy founders and coaches to bring order to the back end of their business &mdash; calendars, inboxes, task boards, and client systems &mdash; so they can focus on the work only they can do.
              </p>

              <!-- Paragraph 2 -->
              <p class="text-slate-300/85 text-base sm:text-[17px] font-sans leading-relaxed mb-8 text-[#A6B1CC]">
                My approach blends hands-on VA support with systems thinking: I don't just complete tasks, I build repeatable workflows and train your team to run them without you.
              </p>

              <!-- Badges Row -->
              <div class="flex flex-wrap items-center gap-3.5">
                <div
                  class="px-5 py-2.5 rounded-full border border-[#24354c] bg-[#131f33]/80 text-white text-xs sm:text-sm font-medium flex items-center shadow-sm hover:border-[#c8ad87]/50 transition"
                >
                  <span class="font-serif font-bold text-[#c8ad87] mr-1.5">5+</span> Years Experience
                </div>

                <div
                  class="px-5 py-2.5 rounded-full border border-[#24354c] bg-[#131f33]/80 text-white text-xs sm:text-sm font-medium flex items-center shadow-sm hover:border-[#c8ad87]/50 transition"
                >
                  <span class="font-serif font-bold text-[#c8ad87] mr-1.5">30+</span> Clients Supported
                </div>

                <div
                  class="px-5 py-2.5 rounded-full border border-[#24354c] bg-[#131f33]/80 text-white text-xs sm:text-sm font-medium flex items-center shadow-sm hover:border-[#c8ad87]/50 transition"
                >
                  <span class="font-serif font-bold text-[#c8ad87] mr-1.5">100%</span> Systems-First
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- SERVICES / WHAT I OFFER SECTION -->
      <section
        id="services"
        class="relative w-full py-20 md:py-28 px-6 sm:px-10 bg-[#0a1628] border-b border-[#24354c]"
      >
        <div class="container mx-auto max-w-[1300px]">
          <!-- Section Header -->
          <div class="text-center mb-12 sm:mb-16">
            <span
              class="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#c8ad87] uppercase block mb-3"
            >
              WHAT I OFFER
            </span>
            <h2
              class="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-4"
            >
              Services built around your business
            </h2>
            <p class="text-[#a0b0c6] text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
              Pick a single service or bundle them into a full back-office solution.
            </p>
          </div>

          <!-- Services Grid (3 Cards) -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <!-- Card 1: Virtual Assistance -->
            <div
              class="p-8 sm:p-9 rounded-[24px] border border-[#24354c] bg-[#131f33]/70 hover:bg-[#131f33] hover:border-[#c8ad87]/40 transition-all duration-300 flex flex-col items-start text-left shadow-xl group"
            >
              <div class="w-12 h-12 rounded-xl bg-[#1a293d]/80 border border-[#2a3c54] flex items-center justify-center mb-6 text-[#c8ad87] group-hover:scale-105 transition duration-300">
                <!-- Calendar Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v7.5" />
                </svg>
              </div>

              <h3 class="text-xl sm:text-2xl font-serif font-normal text-white mb-3 tracking-tight group-hover:text-[#c8ad87] transition">
                Virtual Assistance
              </h3>
              <p class="text-[#a0b0c6] text-sm sm:text-[15px] font-sans leading-relaxed">
                Calendar management, inbox triage, scheduling, and day-to-day admin support.
              </p>
            </div>

            <!-- Card 2: Systems & Automation -->
            <div
              class="p-8 sm:p-9 rounded-[24px] border border-[#24354c] bg-[#131f33]/70 hover:bg-[#131f33] hover:border-[#c8ad87]/40 transition-all duration-300 flex flex-col items-start text-left shadow-xl group"
            >
              <div class="w-12 h-12 rounded-xl bg-[#1a293d]/80 border border-[#2a3c54] flex items-center justify-center mb-6 text-[#c8ad87] group-hover:scale-105 transition duration-300">
                <!-- Settings / Gear Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>

              <h3 class="text-xl sm:text-2xl font-serif font-normal text-white mb-3 tracking-tight group-hover:text-[#c8ad87] transition">
                Systems &amp; Automation
              </h3>
              <p class="text-[#a0b0c6] text-sm sm:text-[15px] font-sans leading-relaxed">
                Build task boards, CRMs, and Google Workspace automations to save time/week.
              </p>
            </div>

            <!-- Card 3: Coaching & Training -->
            <div
              class="p-8 sm:p-9 rounded-[24px] border border-[#24354c] bg-[#131f33]/70 hover:bg-[#131f33] hover:border-[#c8ad87]/40 transition-all duration-300 flex flex-col items-start text-left shadow-xl group"
            >
              <div class="w-12 h-12 rounded-xl bg-[#1a293d]/80 border border-[#2a3c54] flex items-center justify-center mb-6 text-[#c8ad87] group-hover:scale-105 transition duration-300">
                <!-- Academic / Graduation Cap Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A.75.75 0 0 1 1 7.858a.75.75 0 0 1 .465-.694A49.52 49.52 0 0 1 12 3a49.516 49.516 0 0 1 10.535 4.164.75.75 0 0 1 .465.694.75.75 0 0 1-.267.576 50.64 50.64 0 0 0-2.658.813m-15.482 0A50.71 50.71 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9A.75.75 0 0 1 6.75 15Z" />
                </svg>
              </div>

              <h3 class="text-xl sm:text-2xl font-serif font-normal text-white mb-3 tracking-tight group-hover:text-[#c8ad87] transition">
                Coaching &amp; Training
              </h3>
              <p class="text-[#a0b0c6] text-sm sm:text-[15px] font-sans leading-relaxed">
                1:1 or team training on tools and workflows so your systems keep running without me.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- INSIDE THE WORK SECTION -->
      <section
        id="portfolio"
        class="relative w-full py-20 md:py-28 px-6 sm:px-10 bg-[#0a1628] border-b border-[#24354c]"
      >
        <div class="container mx-auto max-w-[1300px]">
          <!-- Section Header -->
          <div class="text-center mb-12 sm:mb-16">
            <span
              class="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#c8ad87] uppercase block mb-3"
            >
              INSIDE THE WORK
            </span>
            <h2
              class="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-4"
            >
              What I can set up for you
            </h2>
            <p class="text-[#a0b0c6] text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
              A look at the systems I build for clients &mdash; swap this section for real screenshots or case studies.
            </p>
          </div>

          <!-- Services Grid (6 Cards) -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <!-- Card 1 -->
            <div
              class="p-7 sm:p-8 rounded-2xl border border-[#1e3050]/70 bg-[#0f1f35] hover:border-[#2a4060]/80 transition duration-300 flex flex-col justify-start text-left shadow-xl group"
            >
              <span
                class="text-[11px] font-semibold tracking-[0.18em] text-[#c8ad87] uppercase mb-3 block"
              >
                CALENDAR
              </span>
              <h3 class="text-lg sm:text-xl font-serif font-bold text-white mb-2 group-hover:text-[#c8ad87] transition">
                Calendar Management
              </h3>
              <p class="text-[#b8a99a] text-sm leading-relaxed">
                Synced scheduling, buffer times, and booking links so your week runs itself.
              </p>
            </div>

            <!-- Card 2 -->
            <div
              class="p-7 sm:p-8 rounded-2xl border border-[#1e3050]/70 bg-[#0f1f35] hover:border-[#2a4060]/80 transition duration-300 flex flex-col justify-start text-left shadow-xl group"
            >
              <span
                class="text-[11px] font-semibold tracking-[0.18em] text-[#c8ad87] uppercase mb-3 block"
              >
                TASK BOARD
              </span>
              <h3 class="text-lg sm:text-xl font-serif font-bold text-white mb-2 group-hover:text-[#c8ad87] transition">
                Project &amp; Task Boards
              </h3>
              <p class="text-[#b8a99a] text-sm leading-relaxed">
                Clear, shared boards for teams so nothing falls through the cracks.
              </p>
            </div>

            <!-- Card 3 -->
            <div
              class="p-7 sm:p-8 rounded-2xl border border-[#1e3050]/70 bg-[#0f1f35] hover:border-[#2a4060]/80 transition duration-300 flex flex-col justify-start text-left shadow-xl group"
            >
              <span
                class="text-[11px] font-semibold tracking-[0.18em] text-[#c8ad87] uppercase mb-3 block"
              >
                EMAIL
              </span>
              <h3 class="text-lg sm:text-xl font-serif font-bold text-white mb-2 group-hover:text-[#c8ad87] transition">
                Inbox Management
              </h3>
              <p class="text-[#b8a99a] text-sm leading-relaxed">
                Zero-inbox systems, templated replies, and priority triage.
              </p>
            </div>

            <!-- Card 4 -->
            <div
              class="p-7 sm:p-8 rounded-2xl border border-[#1e3050]/70 bg-[#0f1f35] hover:border-[#2a4060]/80 transition duration-300 flex flex-col justify-start text-left shadow-xl group"
            >
              <span
                class="text-[11px] font-semibold tracking-[0.18em] text-[#c8ad87] uppercase mb-3 block"
              >
                ANALYTICS
              </span>
              <h3 class="text-lg sm:text-xl font-serif font-bold text-white mb-2 group-hover:text-[#c8ad87] transition">
                Reporting &amp; Analytics
              </h3>
              <p class="text-[#b8a99a] text-sm leading-relaxed">
                Simple dashboards that show what's working, updated on a schedule.
              </p>
            </div>

            <!-- Card 5 -->
            <div
              class="p-7 sm:p-8 rounded-2xl border border-[#1e3050]/70 bg-[#0f1f35] hover:border-[#2a4060]/80 transition duration-300 flex flex-col justify-start text-left shadow-xl group"
            >
              <span
                class="text-[11px] font-semibold tracking-[0.18em] text-[#c8ad87] uppercase mb-3 block"
              >
                AI WORKFLOWS
              </span>
              <h3 class="text-lg sm:text-xl font-serif font-bold text-white mb-2 group-hover:text-[#c8ad87] transition">
                Google Workspace + AI
              </h3>
              <p class="text-[#b8a99a] text-sm leading-relaxed">
                AI-assisted workflows across Gmail, Drive, and Docs to speed up daily work.
              </p>
            </div>

            <!-- Card 6 -->
            <div
              class="p-7 sm:p-8 rounded-2xl border border-[#1e3050]/70 bg-[#0f1f35] hover:border-[#2a4060]/80 transition duration-300 flex flex-col justify-start text-left shadow-xl group"
            >
              <span
                class="text-[11px] font-semibold tracking-[0.18em] text-[#c8ad87] uppercase mb-3 block"
              >
                CLIENT WINS
              </span>
              <h3 class="text-lg sm:text-xl font-serif font-bold text-white mb-2 group-hover:text-[#c8ad87] transition">
                Testimonials &amp; Results
              </h3>
              <p class="text-[#b8a99a] text-sm leading-relaxed">
                A showcase of client feedback and measurable time saved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- TESTIMONIALS SECTION -->
      <section
        id="testimonials"
        class="relative w-full py-20 md:py-28 px-6 sm:px-10 bg-[#0a1628] border-b border-[#1e3050]/60"
      >
        <div class="container mx-auto max-w-[1300px]">
          <!-- Section Header -->
          <div class="text-center mb-12 sm:mb-16">
            <span
              class="text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#c8ad87] uppercase block mb-3"
            >
              CLIENT LOVE
            </span>
            <h2
              class="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-4"
            >
              What clients are saying
            </h2>
            <p class="text-[#b8a99a] text-sm sm:text-base max-w-xl mx-auto">
              Replace with real quotes once you have them from clients.
            </p>
          </div>

          <!-- Testimonial Cards (3 Cards) -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <!-- Testimonial 1 -->
            <div
              class="p-7 sm:p-8 rounded-2xl border border-[#1e3050]/70 bg-[#0f1f35] flex flex-col justify-between text-left shadow-xl"
            >
              <div>
                <span class="text-2xl text-[#c8ad87] font-serif block mb-3">&ldquo;</span>
                <p class="text-[#b8a99a] text-sm italic leading-relaxed mb-6">
                  Jimmer set up systems that gave me back at least 10 hours a week. My inbox has never been this calm.
                </p>
              </div>
              <div class="flex items-center gap-3 pt-4 border-t border-[#1e3050]/60">
                <div
                  class="w-10 h-10 rounded-full bg-[#c8ad87] text-[#0a1628] font-serif font-bold flex items-center justify-center text-sm shadow-md"
                >
                  A
                </div>
                <div>
                  <h4 class="text-white font-bold text-sm">Client Name</h4>
                  <p class="text-[#b8a99a] text-xs">Founder, Company</p>
                </div>
              </div>
            </div>

            <!-- Testimonial 2 -->
            <div
              class="p-7 sm:p-8 rounded-2xl border border-[#1e3050]/70 bg-[#0f1f35] flex flex-col justify-between text-left shadow-xl"
            >
              <div>
                <span class="text-2xl text-[#c8ad87] font-serif block mb-3">&ldquo;</span>
                <p class="text-[#b8a99a] text-sm italic leading-relaxed mb-6">
                  Working with Jimmer felt like hiring an entire ops department. Highly recommend for any growing team.
                </p>
              </div>
              <div class="flex items-center gap-3 pt-4 border-t border-[#1e3050]/60">
                <div
                  class="w-10 h-10 rounded-full bg-[#c8ad87] text-[#0a1628] font-serif font-bold flex items-center justify-center text-sm shadow-md"
                >
                  B
                </div>
                <div>
                  <h4 class="text-white font-bold text-sm">Client Name</h4>
                  <p class="text-[#b8a99a] text-xs">Coach</p>
                </div>
              </div>
            </div>

            <!-- Testimonial 3 -->
            <div
              class="p-7 sm:p-8 rounded-2xl border border-[#1e3050]/70 bg-[#0f1f35] flex flex-col justify-between text-left shadow-xl"
            >
              <div>
                <span class="text-2xl text-[#c8ad87] font-serif block mb-3">&ldquo;</span>
                <p class="text-[#b8a99a] text-sm italic leading-relaxed mb-6">
                  The training sessions meant my team could run our new systems without needing me every step of the way.
                </p>
              </div>
              <div class="flex items-center gap-3 pt-4 border-t border-[#1e3050]/60">
                <div
                  class="w-10 h-10 rounded-full bg-[#c8ad87] text-[#0a1628] font-serif font-bold flex items-center justify-center text-sm shadow-md"
                >
                  C
                </div>
                <div>
                  <h4 class="text-white font-bold text-sm">Client Name</h4>
                  <p class="text-[#b8a99a] text-xs">Small Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT SECTION -->
      <section
        id="contact"
        class="relative w-full py-16 sm:py-20 md:py-28 px-5 sm:px-10 bg-[#0a1628]"
      >
        <div class="container mx-auto max-w-[1000px]">
          <div
            class="rounded-2xl sm:rounded-3xl border border-[#24354c] bg-[#131f33] p-6 sm:p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
          >
            <!-- Background Glow -->
            <div
              class="absolute inset-0 bg-gradient-to-b from-[#c8ad87]/5 via-transparent to-transparent pointer-events-none"
            ></div>

            <div class="relative z-10">
              <span
                class="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#c8ad87] uppercase block mb-3 sm:mb-4"
              >
                LET'S CONNECT
              </span>
              <h2
                class="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-4"
              >
                Ready to work together?
              </h2>
              <p class="text-[#a0b0c6] text-sm sm:text-base max-w-lg mx-auto font-sans leading-relaxed mb-7 sm:mb-8">
                Send an email or reach out on socials &mdash; I usually reply within a day.
              </p>

              <!-- Action Buttons -->
              <div class="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto mb-9 sm:mb-10">
                <a
                  href="mailto:jimmerariate@gmail.com"
                  class="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#c8ad87] hover:bg-[#e8d5b5] text-[#0a1628] font-bold text-sm sm:text-base transition duration-300 shadow-md hover:scale-105 active:scale-95 inline-flex items-center justify-center text-center"
                >
                  Email Jimmer
                </a>
                <a
                  href="https://www.messenger.com/channel/itsmejimmerr"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full sm:w-auto px-7 py-3.5 rounded-full border border-white/40 bg-black/30 hover:bg-white/10 text-white font-medium text-sm sm:text-base transition duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center text-center"
                >
                  Message on Messenger
                </a>
              </div>

              <!-- Social Media Links (Same as Header) -->
              <div class="flex items-center justify-center gap-3">
                <!-- Facebook -->
                <a
                  href="https://www.facebook.com/itsmejimmer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 rounded-full bg-[#111c2b]/80 border border-white/20 flex items-center justify-center text-white/90 hover:bg-white/20 hover:text-white transition duration-200 shadow-sm"
                  aria-label="Facebook"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <!-- Messenger -->
                <a
                  href="https://www.messenger.com/channel/itsmejimmerr"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 rounded-full bg-[#111c2b]/80 border border-white/20 flex items-center justify-center text-white/90 hover:bg-white/20 hover:text-white transition duration-200 shadow-sm"
                  aria-label="Messenger"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.093.304 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26 6.559-6.96 3.129 3.26 5.889-3.26-6.559 6.96z"/>
                  </svg>
                </a>

                <!-- Instagram -->
                <a
                  href="https://www.instagram.com/itsmejimmer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 rounded-full bg-[#111c2b]/80 border border-white/20 flex items-center justify-center text-white/90 hover:bg-white/20 hover:text-white transition duration-200 shadow-sm"
                  aria-label="Instagram"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <!-- TikTok -->
                <a
                  href="https://www.tiktok.com/@itsmejimmer"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 rounded-full bg-[#111c2b]/80 border border-white/20 flex items-center justify-center text-white/90 hover:bg-white/20 hover:text-white transition duration-200 shadow-sm"
                  aria-label="TikTok"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 003 15.65a6.34 6.34 0 0010.86 4.46A6.27 6.27 0 0015.8 15.6V8.9a8.16 8.16 0 004.77 1.52V7a4.85 4.85 0 01-1-.31z"/>
                  </svg>
                </a>

                <!-- Email -->
                <a
                  href="mailto:jimmerariate@gmail.com"
                  class="w-10 h-10 rounded-full bg-[#111c2b]/80 border border-white/20 flex items-center justify-center text-white/90 hover:bg-white/20 hover:text-white transition duration-200 shadow-sm"
                  aria-label="Email"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.083l10 8.046 10-8.046V19H2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment-timezone";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      showComingSoon: true,
      loading: false,
      selectedLeaderboard: 1,
      isHovered: false,
      isLive: false,
      streamUrl: "https://player.kick.com/Jokerjel",
      streamer: "Jokerjel",

      followersLoading: false,
      followersError: null,
      followers: {
        kick: null,
        youtube: null,
        instagram: null,
        facebook: null,
        twitter: null,
      },

      // Leaderboard state
      leaderboardData: {},
      leaderboardPrevData: {},
      top3: [],
      topRest: [],
      topForMobile: [],
      timer: "0d 0h 0m 0s",
      timeSegments: [
        { label: "DAYS" },
        { label: "HRS" },
        { label: "MIN" },
        { label: "SEC" },
      ],
      currentLeaderboard: "stake",
      previousLeaderboard: false,
      startDate: null,
      endDate: null,
      notFormattedEndDate: null,
      timerInterval: null,
      animatedTotalPrize: 0,
      animationKey: 0,

      floatingCircles: [],
    };
  },
  watch: {
    previousLeaderboard() {
      this.changeLeaderboard();
      this.startTimer();
    },
    currentLeaderboard() {
      this.fetchLeaderboard();
      this.startTimer();
    },
  },
  computed: {
    currentPrizeTitle() {
      return `$${this.animatedTotalPrize.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    },
  },
  methods: {
    redirectToKick() {
      window.location.href = "https://kick.com/Jokerjel";
    },

    toggleHover(state) {
      this.isHovered = state;
    },

    async checkStreamStatus() {
      try {
        const response = await fetch(`https://kick.com/api/v2/channels/${this.streamer}`);
        const data = await response.json();
        this.isLive = data?.livestream?.is_live ?? false;
        if (this.isLive) {
          this.streamUrl = `https://player.kick.com/${this.streamer}`;
        }
      } catch (error) {
        console.error("Stream status error:", error);
      }
    },

    async fetchLeaderboard() {
      this.loading = true;
      this.leaderboardData = {};
      this.leaderboardPrevData = {};
      this.top3 = [];
      this.topRest = [];
      this.topForMobile = [];

      const baseUrl = process.env.VUE_APP_BASE_API_DYNAMIC;
      const apiKey = process.env.VUE_APP_X_API_KEY_DYNAMIC;
      const secretKey = process.env.VUE_APP_X_SECRET_KEY;

      try {
        const currentRes = await axios.get(
          `${baseUrl}/api/leaderboard/${this.currentLeaderboard}`,
          {
            headers: { "x-api-key": apiKey, "x-secret-key": secretKey },
          }
        );

        this.leaderboardData = this.normalizeLeaderboardData(currentRes.data || {});
        this.startDate = moment(currentRes.data?.startDate).format("MMMM DD, YYYY");
        this.endDate = moment(currentRes.data?.endDate).format("MMMM DD, YYYY");
        this.notFormattedEndDate = currentRes.data?.endDate;

        this.changeLeaderboard();
        this.startTimer();
        this.animateValues();

        if (this.shouldFetchPreviousLeaderboard()) {
          axios
            .get(`${baseUrl}/api/leaderboard/${this.currentLeaderboard}?previous=true`, {
              headers: { "x-api-key": apiKey, "x-secret-key": secretKey },
            })
            .then((prevRes) => {
              this.leaderboardPrevData = this.normalizeLeaderboardData(
                prevRes.data || {}
              );
            })
            .catch((error) => {
              console.error("Previous leaderboard fetch error:", error);
            });
        }
      } catch (error) {
        console.error("Leaderboard fetch error:", error);
      } finally {
        this.loading = false;
      }
    },

    shouldFetchPreviousLeaderboard() {
      if (this.currentLeaderboard === "stake") {
        return process.env.VUE_APP_SHOW_PREVIOUS_LEADERBOARD_STAKE === "true";
      }
      return false;
    },

    normalizeLeaderboardData(data) {
      if (!data?.leaderboard) return { leaderboard: [] };
      return {
        startDate: data.startDate,
        endDate: data.endDate,
        leaderboard: data.leaderboard.map((entry) => ({
          username: this.getUsername(entry),
          wagered: this.getWageredAmount(entry),
        })),
      };
    },

    getUsername(entry) {
      switch (this.currentLeaderboard) {
        case "stake":
          return entry.userName || "";
        default:
          return entry.username || "";
      }
    },

    getWageredAmount(entry) {
      switch (this.currentLeaderboard) {
        case "stake":
          return entry.wagered || 0;
        default:
          return 0;
      }
    },

    toggleLeaderboard(leaderboardType) {
      if (this.currentLeaderboard !== leaderboardType) {
        this.currentLeaderboard = leaderboardType;
        this.changeLeaderboard();
      }
    },

    changeLeaderboard() {
      const isPrev = this.previousLeaderboard;
      const data = isPrev ? this.leaderboardPrevData : this.leaderboardData;

      if (this.currentLeaderboard === "stake") {
        this.top3 = data?.leaderboard?.slice(0, 3) || [];
        this.topRest = data?.leaderboard?.slice(3, 10) || [];
        this.topForMobile = data?.leaderboard?.slice(0, 10) || [];
      }

      // ✅ Fix: update both start and end dates here
      this.startDate = data?.startDate
        ? moment(data.startDate).format("MMMM DD, YYYY")
        : null;

      this.endDate = data?.endDate ? moment(data.endDate).format("MMMM DD, YYYY") : null;

      this.notFormattedEndDate = data?.endDate;

      this.startTimer();
    },

    getRewardValue(rank) {
      const isPrev = this.previousLeaderboard;
      const key = `VUE_APP_${this.currentLeaderboard.toUpperCase()}_${
        isPrev ? "PREVIOUS" : "CURRENT"
      }_LEADERBOARD_REWARDS`;
      const rewards = JSON.parse(process.env[key] || "[]");

      const symbol = this.currentLeaderboard === "raingg" ? "" : "₱";

      if (!Array.isArray(rewards) || rewards.length === 0) {
        return this.currentLeaderboard === "raingg" ? "0c" : `${symbol}0`;
      }

      const raw = rank >= rewards.length ? rewards[rewards.length - 1] : rewards[rank];
      const num = Number(raw || 0);

      // No decimals, with comma separators
      const formatted = num.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });

      return this.currentLeaderboard === "raingg"
        ? `${formatted}c`
        : `${symbol}${formatted}`;
    },

    async fetchFollowers() {
      this.followersLoading = true;
      this.followersError = null;

      const base = process.env.VUE_APP_BASE_API_DYNAMIC;
      const apiKey = process.env.VUE_APP_X_API_KEY_DYNAMIC;
      const secretKey = process.env.VUE_APP_X_SECRET_KEY;

      const types = ["kick", "youtube", "instagram", "facebook", "twitter"];

      try {
        const requests = types.map((t) =>
          axios
            .get(`${base}/api/followers/${t}`, {
              headers: { "x-api-key": apiKey, "x-secret-key": secretKey },
            })
            .then((res) => {
              const data = res.data?.data;
              return { type: t, value: data?.followersCount || null };
            })
            .catch((err) => {
              console.error(`Followers fetch error (${t}):`, err);
              return { type: t, value: null };
            })
        );

        const results = await Promise.all(requests);
        results.forEach(({ type, value }) => (this.followers[type] = value));
      } catch (e) {
        console.error("Followers fetch error:", e);
        this.followersError = "Unable to load followers right now.";
      } finally {
        this.followersLoading = false;
      }
    },
    extractFollowerCount(payload) {
      if (payload == null) return null;

      if (typeof payload === "number") return payload;
      if (typeof payload === "string") {
        const n = Number(String(payload).replace(/[^0-9.]/g, ""));
        return isNaN(n) ? payload : n;
      }

      const candidates = [
        payload.total,
        payload.count,
        payload.followers,
        payload.value,
        payload.data?.total,
        payload.data?.count,
        payload.data?.followers,
      ];

      for (const c of candidates) {
        if (typeof c === "number") return c;
        if (typeof c === "string") {
          const n = Number(String(c).replace(/[^0-9.]/g, ""));
          if (!isNaN(n)) return n;
          return c;
        }
      }

      try {
        return JSON.stringify(payload);
      } catch {
        return String(payload);
      }
    },

    displayFollower(type) {
      if (this.followersLoading) return "…";
      const v = this.followers?.[type];
      return v || "—";
    },
    formatAbbrev(n) {
      const abs = Math.abs(n);
      if (abs >= 1e9) return (n / 1e9).toFixed(2).replace(/\.00$/, "") + "B";
      if (abs >= 1e6) return (n / 1e6).toFixed(2).replace(/\.00$/, "") + "M";
      if (abs >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
      return n.toLocaleString();
    },

    startTimer() {
      clearInterval(this.timerInterval);

      if (this.currentLeaderboard === "luxdrop") {
        this.timer = "0d 0h 0m 0s";
        this.timeSegments.forEach((segment) => {
          segment.value = "0";
        });
        return;
      }

      if (this.previousLeaderboard) {
        this.timer = "0d 0h 0m 0s";
        this.timeSegments.forEach((segment) => {
          segment.value = "0";
        });
        return;
      }

      if (!this.notFormattedEndDate) return;

      const periodKey = `VUE_APP_${this.currentLeaderboard.toUpperCase()}_TIMER_PERIOD`;
      const period = process.env[periodKey] || "";

      const getNextTargetDate = () => {
        const now = moment().tz("America/New_York");
        let target = moment
          .utc(this.notFormattedEndDate)
          .tz("America/New_York")
          .subtract(1, "s");

        if (now.isAfter(target)) {
          if (period === "week") target.add(1, "week");
          else if (period === "month") target.add(1, "month");
          else if (period === "custom") {
            const customDays = parseInt(
              process.env[`${this.currentLeaderboard.toUpperCase()}_CUSTOM_DAYS`] || "7",
              10
            );
            target.add(customDays, "days");
          }
        }

        return target;
      };

      const targetDate = getNextTargetDate();
      const update = () => {
        const now = moment().tz("America/New_York");
        const dist = targetDate.diff(now);
        if (dist >= 0) {
          const dur = moment.duration(dist);
          this.timer = `${Math.floor(
            dur.asDays()
          )}d ${dur.hours()}h ${dur.minutes()}m ${dur.seconds()}s`;
          this.timeSegments.forEach((s, i) => {
            const val = this.timer.split(" ")[i];
            s.value = val ? val.slice(0, -1) : "0";
          });
        } else {
          this.timer = "0d 0h 0m 0s";
          clearInterval(this.timerInterval);
        }
      };

      update();
      this.timerInterval = setInterval(update, 1000);
    },

    getMaskedUsername(username) {
      if (!username || typeof username !== "string") return "";

      // Basic masking: show first and last character only
      const masked =
        username.length <= 2
          ? username
          : `${username[0]}${"*".repeat(username.length - 2)}${
              username[username.length - 1]
            }`;

      // Truncate with ellipsis if masked string exceeds 15 characters
      return masked.length > 15 ? masked.slice(0, 12) + "..." : masked;
    },

    getCurrencyFormatted(value) {
      if (typeof value === "string") {
        value = value.replace(/[^0-9.]/g, "");
      }

      if (value === undefined || isNaN(value)) value = 0;

      const formatted = Number(value).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      if (this.currentLeaderboard === "raingg") {
        return `${formatted}c`;
      }

      if (this.currentLeaderboard === "stake") {
        return `$${formatted}`;
      }

      return `$${formatted}`;
    },

    getOrdinalSuffix(n) {
      const s = ["th", "st", "nd", "rd"],
        v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    },

    animateValues() {
      const key = `VUE_APP_${this.currentLeaderboard.toUpperCase()}_${
        this.previousLeaderboard ? "PREVIOUS" : "CURRENT"
      }_LEADERBOARD_REWARDS`;
      const rewards = JSON.parse(process.env[key] || "[]");
      const totalPrize = rewards.reduce((sum, val) => sum + val, 0);
      this.animateNumber("animatedTotalPrize", totalPrize);
    },

    animateNumber(variable, targetValue) {
      let startValue = this[variable] || 0;
      if (startValue === targetValue) return;

      const step = Math.max(1, Math.abs(targetValue - startValue) / 20);
      const isNegative = startValue > targetValue;

      const interval = setInterval(() => {
        if (isNegative) {
          startValue -= step;
          if (startValue <= targetValue) {
            startValue = targetValue;
            clearInterval(interval);
          }
        } else {
          startValue += step;
          if (startValue >= targetValue) {
            startValue = targetValue;
            clearInterval(interval);
          }
        }

        this.$nextTick(() => {
          this[variable] = parseFloat(startValue.toFixed(2));
        });
      }, 50);
    },

    isMobile() {
      return window.innerWidth < 768;
    },
  },
  mounted() {
    this.fetchLeaderboard();
    this.checkStreamStatus();
    this.fetchFollowers();
    this.$emit("sections-ready");

    this.floatingCircles = Array.from({ length: 18 }, () => ({
      left: Math.random() * 100,
      // smaller, subtler bubbles
      size: Math.random() * 55 + 25, // 25px - 80px
      opacity: Math.random() * 0.35 + 0.15, // 0.15 - 0.5
      blur: Math.random() * 10 + 6, // 6px - 16px
      // a bit longer so they traverse the whole hero height
      duration: Math.random() * 18 + 26, // 26s - 44s
      // negative delay to stagger starts without pop-in
      delay: Math.random() * -35, // up to -35s
    }));
  },
});
</script>

<style>
@keyframes promo-banner-pulse {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 12px rgba(5, 223, 114, 0.6), 0 0 24px rgba(255, 200, 0, 0.5),
      0 10px 30px rgba(0, 0, 0, 0.45);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 0 18px rgba(5, 223, 114, 0.9), 0 0 32px rgba(255, 200, 0, 0.8),
      0 14px 36px rgba(0, 0, 0, 0.6);
  }
}

.animate-promo-banner {
  animation: promo-banner-pulse 2.5s ease-in-out infinite;
}
</style>
