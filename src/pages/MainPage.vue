<template>
  <div
    class="relative overflow-hidden bg-[#0a1628]"
  >
    <!-- HERO SECTION -->
    <section
      id="home"
      class="relative w-full flex items-center overflow-hidden bg-[#0a1628]"
      style="min-height: 340px;"
    >
      <!-- Subtle radial glow background -->
      <div class="absolute inset-0 z-0" style="background: radial-gradient(ellipse 80% 60% at 60% 50%, #1a3a6b44 0%, #0a1628 70%);"></div>

      <!-- Hero Content -->
      <div class="z-10 relative w-full px-5 sm:px-10 lg:px-20 pt-24 sm:pt-28 pb-10 sm:pb-14">
        <div class="max-w-[1300px] mx-auto flex flex-col md:flex-row md:items-stretch md:justify-between gap-6 md:gap-4">

          <!-- LEFT: Text content -->
          <div class="flex-1 flex flex-col justify-center min-w-0 py-2 text-center md:text-left">
            <!-- Status badge -->
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-sans font-medium w-fit mb-3 mx-auto md:mx-0">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Opportunities
            </div>

            <!-- HELLO, I'M label -->
            <p class="text-[#a0b8d8] text-xs sm:text-sm font-sans font-semibold tracking-[0.18em] uppercase mb-1.5">
              Hello, I'm
            </p>

            <!-- Name -->
            <h1 class="font-sans font-extrabold text-white leading-tight mb-2.5" style="font-size: clamp(2rem, 5vw, 3.5rem); letter-spacing: -0.01em;">
              Jelmar Degoro
            </h1>

            <!-- Role subtitle -->
            <p class="text-[#a0b8d8] text-sm sm:text-base font-sans mb-4 leading-snug">
              QA Engineer &amp; Full-Stack Developer | Laravel &bull; Vue.js &bull; Software Testing
            </p>

            <!-- Contact info row -->
            <div class="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-1.5 mb-1.5">
              <!-- Location -->
              <span class="flex items-center gap-1.5 text-[#c8d8ee] text-xs sm:text-[13px] font-sans">
                <svg class="w-3.5 h-3.5 text-[#3b82f6] flex-shrink-0 fill-current" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Davao City, Philippines
              </span>
              <!-- Email -->
              <a href="mailto:jelmardegoro@gmail.com" class="flex items-center gap-1.5 text-[#c8d8ee] hover:text-white text-xs sm:text-[13px] font-sans transition-colors">
                <svg class="w-3.5 h-3.5 text-[#3b82f6] flex-shrink-0 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                jelmardegoro@gmail.com
              </a>
              <!-- Phone -->
              <a href="tel:+639684436113" class="flex items-center gap-1.5 text-[#c8d8ee] hover:text-white text-xs sm:text-[13px] font-sans transition-colors">
                <svg class="w-3.5 h-3.5 text-[#3b82f6] flex-shrink-0 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                +63 968-443-6113
              </a>
            </div>

            <!-- Social Profiles row -->
            <div class="mb-5 flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2">
              <a href="https://github.com/jelmardegoro-byte" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-[#c8d8ee] hover:text-white text-xs sm:text-[13px] font-sans transition-colors">
                <svg class="w-3.5 h-3.5 text-[#3b82f6] flex-shrink-0 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub: jelmardegoro-byte
              </a>
              <span class="text-slate-600 hidden sm:inline">&bull;</span>
              <a href="https://www.linkedin.com/in/jelmar-degoro-0b874b21a/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-[#c8d8ee] hover:text-white text-xs sm:text-[13px] font-sans transition-colors">
                <svg class="w-3.5 h-3.5 text-[#3b82f6] flex-shrink-0 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn: jelmar-degoro
              </a>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href="#projects"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/30"
              >
                View My Work
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a
                href="/Jelmar_Degoro_Resume.pdf"
                download="Jelmar_Degoro_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-white/30 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                Download Resume
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </a>
            </div>

            <!-- Quick Credibility Metrics -->
            <div class="mt-6 pt-5 border-t border-slate-700/60 grid grid-cols-3 gap-3 max-w-md mx-auto md:mx-0 text-center md:text-left">
              <div>
                <p class="font-sans font-extrabold text-white text-lg sm:text-xl">6+ <span class="text-[#3b82f6] text-sm font-semibold">Yrs</span></p>
                <p class="text-[#8fa3bf] text-[11px] sm:text-xs">Enterprise QA</p>
              </div>
              <div class="border-x border-slate-700/60 px-2">
                <p class="font-sans font-extrabold text-white text-lg sm:text-xl">500+ <span class="text-emerald-400 text-xs">✓</span></p>
                <p class="text-[#8fa3bf] text-[11px] sm:text-xs">Test Cases &amp; APIs</p>
              </div>
              <div>
                <p class="font-sans font-extrabold text-white text-lg sm:text-xl">100%</p>
                <p class="text-[#8fa3bf] text-[11px] sm:text-xs">Data Integrity</p>
              </div>
            </div>
          </div>

          <!-- CENTER: Photo (hidden on smallest screens, shown md+) -->
          <div class="flex md:hidden justify-center mt-4 mb-2">
            <div class="relative w-44 h-44 sm:w-56 sm:h-56">
              <div class="absolute inset-0 rounded-full bg-gradient-to-br from-[#1d4ed8]/50 via-[#1e3a8a]/60 to-[#0e2752]/80 shadow-[0_0_40px_rgba(29,114,242,0.25)] border border-blue-500/20"></div>
              <img
                src="@/assets/bg-header.png"
                alt="Jelmar Degoro"
                class="relative z-10 w-full h-full object-contain object-bottom select-none"
              />
            </div>
          </div>

          <div class="hidden md:flex flex-shrink-0 items-end justify-center relative self-end mb-[-2.5rem] sm:mb-[-3.5rem]" style="width: clamp(300px, 34vw, 480px);">
            <!-- Circle accent behind photo -->
            <div
              class="absolute left-1/2 -translate-x-1/2 top-4 sm:top-6 rounded-full bg-gradient-to-br from-[#1d4ed8]/50 via-[#1e3a8a]/60 to-[#0e2752]/80 shadow-[0_0_60px_rgba(29,114,242,0.25)] border border-blue-500/20 pointer-events-none"
              style="width: clamp(230px, 26vw, 360px); height: clamp(230px, 26vw, 360px);"
            ></div>
            <img
              src="@/assets/bg-header.png"
              alt="Jelmar Degoro"
              class="relative z-10 w-full h-auto object-contain object-bottom select-none filter contrast-[1.04] brightness-[1.02] drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
              style="max-height: clamp(320px, 38vw, 480px);"
            />
          </div>

          <!-- RIGHT: Italic tagline (desktop only) -->
          <div class="hidden lg:flex flex-shrink-0 items-center justify-center" style="width: 140px;">
            <p class="text-[#3b82f6] font-serif italic text-right leading-snug select-none" style="font-size: clamp(1.1rem, 1.8vw, 1.5rem); line-height: 1.25;">
              Quality<br/>Builds<br/>Better<br/>Solutions
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section
      id="about"
      class="relative w-full bg-white py-14 sm:py-20 lg:py-24 px-5 sm:px-10 lg:px-16 xl:px-20 border-b border-slate-200"
    >
      <div class="max-w-[1300px] mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          <!-- LEFT COLUMN: Text content -->
          <div class="lg:col-span-7 flex flex-col justify-center">
            <!-- Label -->
            <p class="text-[#0284c7] text-xs sm:text-sm font-sans font-bold tracking-[0.16em] uppercase mb-3">
              ABOUT ME
            </p>

            <!-- Main Heading -->
            <h2 class="font-sans font-extrabold text-[#0a1628] text-2xl sm:text-3xl lg:text-[38px] xl:text-[40px] leading-[1.2] tracking-tight mb-5 sm:mb-6">
              QA Engineer &amp; Full-Stack Developer<br class="hidden sm:inline" />
              with 6+ Years of Experience
            </h2>

            <!-- Paragraph 1 -->
            <p class="text-[#475569] text-sm sm:text-[15px] lg:text-base font-sans leading-[1.7] mb-4 sm:mb-5">
              I'm a QA Engineer and Full-Stack Developer with over six years of enterprise experience in software quality assurance, web application engineering, insurance workflow configuration, and technical troubleshooting. I combine rigorous testing methodologies (functional, regression, API with Postman, and UAT) with modern full-stack web development using Laravel, Vue.js 3, and Tailwind CSS to build reliable, high-performance web solutions.
            </p>

            <!-- Paragraph 2 -->
            <p class="text-[#475569] text-sm sm:text-[15px] lg:text-base font-sans leading-[1.7]">
              Whether diagnosing edge-case defects in complex business rules, validating Rate/Quote/Bind workflows, or engineering responsive user interfaces, I bridge the gap between quality assurance and software engineering with a detail-oriented, test-first mindset.
            </p>
          </div>

          <!-- RIGHT COLUMN: What I Bring to the Table Card -->
          <div class="lg:col-span-5">
            <div class="bg-[#f0f6fd] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 border border-[#dbe7f3] shadow-sm">
              <h3 class="font-sans font-bold text-[#0a1628] text-lg sm:text-xl lg:text-[22px] mb-6 sm:mb-7 leading-snug">
                What I Bring to the Table
              </h3>

              <div class="space-y-4 sm:space-y-5">
                <!-- Item 1 -->
                <div class="flex items-start gap-3.5 sm:gap-4">
                  <div class="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1d72f2] text-white flex items-center justify-center mt-0.5 shadow-sm">
                    <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" stroke-width="2.6" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-[#334155] text-xs sm:text-sm lg:text-[14.5px] leading-snug font-normal">
                    <strong>Comprehensive QA &amp; Testing:</strong> Executed 500+ test scenarios across functional, regression, API, and UAT cycles
                  </span>
                </div>

                <!-- Item 2 -->
                <div class="flex items-start gap-3.5 sm:gap-4">
                  <div class="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1d72f2] text-white flex items-center justify-center mt-0.5 shadow-sm">
                    <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" stroke-width="2.6" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-[#334155] text-xs sm:text-sm lg:text-[14.5px] leading-snug font-normal">
                    <strong>Full-Stack Web Development:</strong> Engineering applications with Laravel, PHP, REST APIs, Vue.js 3, and Tailwind CSS
                  </span>
                </div>

                <!-- Item 3 -->
                <div class="flex items-start gap-3.5 sm:gap-4">
                  <div class="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1d72f2] text-white flex items-center justify-center mt-0.5 shadow-sm">
                    <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" stroke-width="2.6" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-[#334155] text-xs sm:text-sm lg:text-[14.5px] leading-snug font-normal">
                    <strong>Complex Workflow Configuration:</strong> Deep expertise in XML-driven business rules and Rate/Quote/Bind pipelines
                  </span>
                </div>

                <!-- Item 4 -->
                <div class="flex items-start gap-3.5 sm:gap-4">
                  <div class="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1d72f2] text-white flex items-center justify-center mt-0.5 shadow-sm">
                    <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" stroke-width="2.6" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-[#334155] text-xs sm:text-sm lg:text-[14.5px] leading-snug font-normal">
                    <strong>Root-Cause Defect Resolution:</strong> Rapid diagnosis of edge-case system issues using Postman, InsuredApp, and dev tools
                  </span>
                </div>

                <!-- Item 5 -->
                <div class="flex items-start gap-3.5 sm:gap-4">
                  <div class="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1d72f2] text-white flex items-center justify-center mt-0.5 shadow-sm">
                    <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" stroke-width="2.6" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-[#334155] text-xs sm:text-sm lg:text-[14.5px] leading-snug font-normal">
                    <strong>Production Reliability:</strong> Committed to cross-functional collaboration, clean code, and zero-defect releases
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!-- CORE COMPETENCIES / SKILLS SECTION -->
    <section
      id="skills"
      class="relative w-full bg-[#f0f6fc] py-14 sm:py-18 lg:py-20 px-5 sm:px-10 lg:px-16 xl:px-20 border-b border-[#e2eaf5]"
    >
      <div class="max-w-[1300px] mx-auto">
        <!-- Section Header -->
        <div class="mb-8 sm:mb-10 text-left">
          <p class="text-[#1d72f2] text-xs sm:text-[13px] font-sans font-bold tracking-[0.16em] uppercase mb-2">
            CORE COMPETENCIES
          </p>
          <h2 class="font-sans font-extrabold text-[#0a1628] text-2xl sm:text-3xl lg:text-[38px] xl:text-[40px] leading-tight tracking-tight">
            Key Skills &amp; Expertise
          </h2>
        </div>

        <!-- Skills Grid: 8 Balanced Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-5">
          <!-- Card 1: Software QA & Testing -->
          <div class="bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center shadow-xs border border-[#e2eaf5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#dbeafe] text-[#2563eb] flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3 class="font-sans font-bold text-[#0a1628] text-sm sm:text-[15px] mb-2 leading-snug">
              Software QA &amp; Testing
            </h3>
            <p class="text-[#64748b] text-xs sm:text-[12.5px] font-sans leading-relaxed">
              Functional, Regression, UAT, Defect Lifecycle Management
            </p>
          </div>

          <!-- Card 2: Configuration -->
          <div class="bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center shadow-xs border border-[#e2eaf5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#dbeafe] text-[#2563eb] flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="font-sans font-bold text-[#0a1628] text-sm sm:text-[15px] mb-2 leading-snug">
              Configuration
            </h3>
            <p class="text-[#64748b] text-xs sm:text-[12.5px] font-sans leading-relaxed">
              XML Architecture, Rate/Quote/Bind Workflows
            </p>
          </div>

          <!-- Card 3: Data & Workflow Validation -->
          <div class="bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center shadow-xs border border-[#e2eaf5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#dbeafe] text-[#2563eb] flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </div>
            <h3 class="font-sans font-bold text-[#0a1628] text-sm sm:text-[15px] mb-2 leading-snug">
              Data &amp; Workflow Validation
            </h3>
            <p class="text-[#64748b] text-xs sm:text-[12.5px] font-sans leading-relaxed">
              Business Rules, Integrity Checks, Portal Alignment
            </p>
          </div>

          <!-- Card 4: Technical & API Tools -->
          <div class="bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center shadow-xs border border-[#e2eaf5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#ede9fe] text-[#7c3aed] flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <h3 class="font-sans font-bold text-[#0a1628] text-sm sm:text-[15px] mb-2 leading-snug">
              Technical &amp; API Tools
            </h3>
            <p class="text-[#64748b] text-xs sm:text-[12.5px] font-sans leading-relaxed">
              Postman, Newman, InsuredApp, Git/GitHub
            </p>
          </div>

          <!-- Card 5: Backend Development -->
          <div class="bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center shadow-xs border border-[#e2eaf5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fce7f3] text-[#db2777] flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <h3 class="font-sans font-bold text-[#0a1628] text-sm sm:text-[15px] mb-2 leading-snug">
              Backend Development
            </h3>
            <p class="text-[#64748b] text-xs sm:text-[12.5px] font-sans leading-relaxed">
              Laravel, PHP, REST APIs, MySQL, Eloquent
            </p>
          </div>

          <!-- Card 6: Frontend Development -->
          <div class="bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center shadow-xs border border-[#e2eaf5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#d1fae5] text-[#059669] flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
              </svg>
            </div>
            <h3 class="font-sans font-bold text-[#0a1628] text-sm sm:text-[15px] mb-2 leading-snug">
              Frontend Development
            </h3>
            <p class="text-[#64748b] text-xs sm:text-[12.5px] font-sans leading-relaxed">
              Vue.js 3, Tailwind CSS, JavaScript ES6+, HTML5
            </p>
          </div>

          <!-- Card 7: CI/CD & Automation -->
          <div class="bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center shadow-xs border border-[#e2eaf5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 class="font-sans font-bold text-[#0a1628] text-sm sm:text-[15px] mb-2 leading-snug">
              CI/CD &amp; Test Automation
            </h3>
            <p class="text-[#64748b] text-xs sm:text-[12.5px] font-sans leading-relaxed">
              GitHub Actions, Automated Newman CLI, Zero-Defect CI
            </p>
          </div>

          <!-- Card 8: Troubleshooting -->
          <div class="bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center shadow-xs border border-[#e2eaf5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#ffedd5] text-[#d97706] flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.398-3.048 1.182l-7.25 7.25a2.25 2.25 0 01-3.182-3.182l7.25-7.25c.784-.784 1.273-1.972 1.182-3.048A4.5 4.5 0 0117.25 2.25a4.5 4.5 0 014.5 4.5z" />
              </svg>
            </div>
            <h3 class="font-sans font-bold text-[#0a1628] text-sm sm:text-[15px] mb-2 leading-snug">
              Troubleshooting &amp; Support
            </h3>
            <p class="text-[#64748b] text-xs sm:text-[12.5px] font-sans leading-relaxed">
              Root-Cause Analysis, Client Support, Hotfix QA
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- TECH STACK SECTION -->
    <section
      id="techstack"
      class="relative w-full bg-white py-12 sm:py-14 lg:py-16 px-5 sm:px-10 lg:px-16 xl:px-20 border-b border-slate-200"
    >
      <div class="max-w-[1300px] mx-auto">
        <!-- Section Header -->
        <div class="mb-8 sm:mb-10 text-center">
          <p class="text-[#1d72f2] text-xs sm:text-[13px] font-sans font-bold tracking-[0.16em] uppercase mb-2">
            TECHNOLOGY STACK
          </p>
          <h2 class="font-sans font-extrabold text-[#0a1628] text-2xl sm:text-3xl lg:text-[38px] xl:text-[40px] leading-tight tracking-tight mb-3">
            Built With
          </h2>
          <p class="text-[#64748b] text-sm sm:text-base font-sans max-w-xl mx-auto leading-relaxed">
            The technologies I use to design, build, and ship full-stack web applications — from API layer to pixel-perfect UI.
          </p>
        </div>

        <!-- Two-column: Backend | Frontend -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[900px] mx-auto">

          <!-- Backend Column -->
          <div class="bg-[#fdf2f8] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#f9a8d4]/40 shadow-sm">
            <div class="flex items-center gap-3 mb-5">
              <!-- Laravel flame icon -->
              <div class="w-9 h-9 rounded-xl bg-[#f43f5e] flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg class="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M14.5 2.1C14.5 2.1 14 7 11 9.5c-1.5 1.3-3 1.8-4.2 2-.6.1-1.1.1-1.5.1C3.5 11.6 2 10.4 2 8.6c0-1 .5-2 1.4-2.8C4.5 4.9 6.3 4.5 8 4.5c.4 0 .9 0 1.3.1-1.1-1-2.5-1.6-4-1.6C2.4 3 0 5.4 0 8.6c0 3.3 2.7 5.4 5.9 5.4.4 0 .8 0 1.2-.1C10.9 13.1 14 9.9 14 5.5c0-1.2-.2-2.3-.5-3.3l1 .1-.0-.1zM21.4 10.3c0 0-2.9 2.3-6.4 1.9-.8-.1-1.5-.3-2.1-.6.9 1.5 1.3 3.2 1.3 5 0 3.5-1.7 6.6-4.3 8.5 1 .3 2 .4 3.1.4 5.5 0 10-4.5 10-10 0-2-.6-3.9-1.6-5.2z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-sans font-bold text-[#0a1628] text-base sm:text-lg leading-tight">Backend</h3>
                <p class="text-[#db2777] text-xs font-semibold tracking-wide uppercase">Laravel · PHP</p>
              </div>
            </div>

            <div class="space-y-3">
              <!-- Laravel -->
              <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#fce7f3] shadow-xs">
                <span class="w-7 h-7 rounded-lg bg-[#f43f5e] flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M14.5 2.1C14.5 2.1 14 7 11 9.5c-1.5 1.3-3 1.8-4.2 2-.6.1-1.1.1-1.5.1C3.5 11.6 2 10.4 2 8.6c0-1 .5-2 1.4-2.8C4.5 4.9 6.3 4.5 8 4.5c.4 0 .9 0 1.3.1-1.1-1-2.5-1.6-4-1.6C2.4 3 0 5.4 0 8.6c0 3.3 2.7 5.4 5.9 5.4.4 0 .8 0 1.2-.1C10.9 13.1 14 9.9 14 5.5c0-1.2-.2-2.3-.5-3.3l1 .1-.0-.1zM21.4 10.3c0 0-2.9 2.3-6.4 1.9-.8-.1-1.5-.3-2.1-.6.9 1.5 1.3 3.2 1.3 5 0 3.5-1.7 6.6-4.3 8.5 1 .3 2 .4 3.1.4 5.5 0 10-4.5 10-10 0-2-.6-3.9-1.6-5.2z"/>
                  </svg>
                </span>
                <div>
                  <p class="font-sans font-semibold text-[#0a1628] text-sm leading-tight">Laravel</p>
                  <p class="text-[#64748b] text-[11px] font-sans">MVC, Eloquent ORM, Artisan, Blade</p>
                </div>
              </div>
              <!-- PHP -->
              <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#fce7f3] shadow-xs">
                <span class="w-7 h-7 rounded-lg bg-[#6366f1] flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 16.518l-1.5-1.44 1.5-1.44 1.5 1.44-1.5 1.44zm3.5-3.518H9.75V9h4.5v4zm-6-4H7v4h1.25V9zm7.5 0H14.5v4h1.25V9z"/>
                  </svg>
                </span>
                <div>
                  <p class="font-sans font-semibold text-[#0a1628] text-sm leading-tight">PHP</p>
                  <p class="text-[#64748b] text-[11px] font-sans">OOP, REST APIs, Middleware, Auth</p>
                </div>
              </div>
              <!-- MySQL -->
              <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#fce7f3] shadow-xs">
                <span class="w-7 h-7 rounded-lg bg-[#0284c7] flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zm0 14c-4.42 0-8-1.79-8-4v2c0 2.21 3.58 4 8 4s8-1.79 8-4v-2c0 2.21-3.58 4-8 4zm0-5c-4.42 0-8-1.79-8-4v2c0 2.21 3.58 4 8 4s8-1.79 8-4v-2c0 2.21-3.58 4-8 4z"/>
                  </svg>
                </span>
                <div>
                  <p class="font-sans font-semibold text-[#0a1628] text-sm leading-tight">MySQL</p>
                  <p class="text-[#64748b] text-[11px] font-sans">Migrations, Seeders, Query Builder</p>
                </div>
              </div>
              <!-- REST API -->
              <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#fce7f3] shadow-xs">
                <span class="w-7 h-7 rounded-lg bg-[#059669] flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
                  </svg>
                </span>
                <div>
                  <p class="font-sans font-semibold text-[#0a1628] text-sm leading-tight">REST API</p>
                  <p class="text-[#64748b] text-[11px] font-sans">JSON, Sanctum, API Resources</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Frontend Column -->
          <div class="bg-[#f0fdf4] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#bbf7d0]/60 shadow-sm">
            <div class="flex items-center gap-3 mb-5">
              <!-- Vue icon -->
              <div class="w-9 h-9 rounded-xl bg-[#42b883] flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg class="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78zm-12 14.1L2.33 3.52H7.5L12 11.09l4.5-7.57h5.17z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-sans font-bold text-[#0a1628] text-base sm:text-lg leading-tight">Frontend</h3>
                <p class="text-[#059669] text-xs font-semibold tracking-wide uppercase">Vue.js · Tailwind CSS</p>
              </div>
            </div>

            <div class="space-y-3">
              <!-- Vue.js -->
              <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#bbf7d0] shadow-xs">
                <span class="w-7 h-7 rounded-lg bg-[#42b883] flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78zm-12 14.1L2.33 3.52H7.5L12 11.09l4.5-7.57h5.17z"/>
                  </svg>
                </span>
                <div>
                  <p class="font-sans font-semibold text-[#0a1628] text-sm leading-tight">Vue.js 3</p>
                  <p class="text-[#64748b] text-[11px] font-sans">Composition API, Vue Router, Vuex</p>
                </div>
              </div>
              <!-- Tailwind CSS -->
              <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#bbf7d0] shadow-xs">
                <span class="w-7 h-7 rounded-lg bg-[#0ea5e9] flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15C19.67 12 21.33 10.67 22 8c-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-4 6C5.33 12 3.67 13.33 3 16c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15C15.67 18 17.33 16.67 18 14c-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C11.61 13.15 10.5 12 8 12z"/>
                  </svg>
                </span>
                <div>
                  <p class="font-sans font-semibold text-[#0a1628] text-sm leading-tight">Tailwind CSS</p>
                  <p class="text-[#64748b] text-[11px] font-sans">Utility-first, Responsive, Dark Mode</p>
                </div>
              </div>
              <!-- JavaScript -->
              <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#bbf7d0] shadow-xs">
                <span class="w-7 h-7 rounded-lg bg-[#eab308] flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0zm22.03 18.09c-.2-1.05-1-1.9-3.05-2.71-.75-.35-1.58-.58-1.83-1.14-.09-.32-.1-.5-.04-.7.19-.75.9-.97 1.5-.79.38.11.74.44.95.98 1.01-.66 1.01-.66 1.72-1.1-.27-.41-.4-.59-.58-.76-.62-.7-1.44-1.06-2.78-1.02l-.7.09c-.67.19-1.3.56-1.67 1.04-.56.63-.8 1.37-.72 2.19.14 1.5 1.13 2.26 2.8 2.76.84.26 2.17.46 2.3 1.2.09.6-.32 1.22-1.5 1.33-.97.09-1.6-.26-2.08-.88-.09-.11-.16-.22-.22-.34l-1.78 1.03c.3.65.72 1.21 1.28 1.6.98.69 2.26.9 3.6.73 1.69-.22 2.75-1.07 3.08-2.28zm-6.56-4.76c-.19.57-.69.93-1.37.93-.19 0-.4-.03-.61-.09-.45-.14-.83-.46-.95-.83-.09-.27-.05-.53.08-.74.19-.27.5-.46.88-.52h.09c.35 0 .68.11.9.31.26.22.42.56.42.94h.56z"/>
                  </svg>
                </span>
                <div>
                  <p class="font-sans font-semibold text-[#0a1628] text-sm leading-tight">JavaScript (ES6+)</p>
                  <p class="text-[#64748b] text-[11px] font-sans">Async/Await, Axios, DOM, Modules</p>
                </div>
              </div>
              <!-- HTML & CSS -->
              <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#bbf7d0] shadow-xs">
                <span class="w-7 h-7 rounded-lg bg-[#f97316] flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M4.136 3.012h15.729l-1.431 16.526-6.438 1.884-6.44-1.882L4.136 3.012zm5.66 7.967l-.199-2.242 7.328.001.2-2.235-9.724-.001.598 6.701h6.728l-.234 2.572-2.403.638-2.396-.637-.154-1.754H7.085l.302 3.564 4.618 1.279 4.624-1.28.629-7.606H9.796z"/>
                  </svg>
                </span>
                <div>
                  <p class="font-sans font-semibold text-[#0a1628] text-sm leading-tight">HTML5 &amp; CSS3</p>
                  <p class="text-[#64748b] text-[11px] font-sans">Semantic HTML, Flexbox, Grid</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom badge row -->
        <div class="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f43f5e]/10 text-[#e11d48] text-xs font-semibold border border-[#fecdd3]">Laravel</span>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#6366f1]/10 text-[#4f46e5] text-xs font-semibold border border-[#c7d2fe]">PHP</span>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#42b883]/10 text-[#16a34a] text-xs font-semibold border border-[#bbf7d0]">Vue.js 3</span>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0ea5e9]/10 text-[#0284c7] text-xs font-semibold border border-[#bae6fd]">Tailwind CSS</span>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#eab308]/10 text-[#b45309] text-xs font-semibold border border-[#fde68a]">JavaScript</span>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0284c7]/10 text-[#0369a1] text-xs font-semibold border border-[#bae6fd]">MySQL</span>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1d72f2]/10 text-[#1d4ed8] text-xs font-semibold border border-[#bfdbfe]">REST API</span>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#64748b]/10 text-[#475569] text-xs font-semibold border border-[#cbd5e1]">Git / GitHub</span>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f97316]/10 text-[#c2410c] text-xs font-semibold border border-[#fed7aa]">HTML5</span>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1d4ed8]/10 text-[#1d4ed8] text-xs font-semibold border border-[#bfdbfe]">CSS3</span>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#7c3aed]/10 text-[#6d28d9] text-xs font-semibold border border-[#ddd6fe]">Postman</span>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f97316]/10 text-[#ea580c] text-xs font-semibold border border-[#fed7aa]">Newman CLI</span>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#22c55e]/10 text-[#16a34a] text-xs font-semibold border border-[#bbf7d0]">GitHub Actions</span>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#64748b]/10 text-[#475569] text-xs font-semibold border border-[#cbd5e1]">Vercel</span>
        </div>

      </div>
    </section>

    <!-- WORK EXPERIENCE / PROFESSIONAL EXPERIENCE SECTION -->
    <section
      id="experience"
      class="relative w-full bg-white py-14 sm:py-18 lg:py-22 px-5 sm:px-10 lg:px-16 xl:px-20 border-b border-slate-200"
    >
      <div class="max-w-[1300px] mx-auto">
        <!-- Section Header -->
        <div class="mb-10 sm:mb-14 text-left">
          <p class="text-[#1d72f2] text-xs sm:text-[13px] font-sans font-bold tracking-[0.16em] uppercase mb-2">
            PROFESSIONAL EXPERIENCE
          </p>
          <h2 class="font-sans font-extrabold text-[#0a1628] text-2xl sm:text-3xl lg:text-[38px] xl:text-[40px] leading-tight tracking-tight">
            Work Experience
          </h2>
        </div>

        <!-- Timeline Container -->
        <div class="relative max-w-[1240px]">
          <!-- Continuous Vertical Line -->
          <div class="absolute left-1.5 sm:left-2 top-2.5 bottom-6 w-[2px] bg-[#93c5fd]"></div>

          <div class="space-y-10 sm:space-y-12">
            <!-- Experience 1: Zywave -->
            <div class="relative flex flex-col md:flex-row md:items-start pl-8 sm:pl-10 gap-3 md:gap-8 lg:gap-14">
              <!-- Dot -->
              <div class="absolute left-0 sm:left-0.5 top-1.5 w-3 h-3 rounded-full bg-[#1d72f2] ring-4 ring-white"></div>

              <!-- Left: Company, Role & Date -->
              <div class="w-full md:w-[260px] lg:w-[290px] flex-shrink-0">
                <h3 class="font-sans font-bold text-[#0a1628] text-base sm:text-[17px] leading-snug">
                  Zywave
                </h3>
                <p class="text-[#2563eb] text-xs sm:text-sm font-semibold mt-0.5">
                  Configuration Analyst / Quality Assurance
                </p>
                <p class="text-[#64748b] text-xs sm:text-[13px] mt-0.5">
                  September 2021 &ndash; October 2025
                </p>
              </div>

              <!-- Right: Bullets -->
              <div class="flex-1">
                <ul class="space-y-1.5 sm:space-y-2 text-[#475569] text-xs sm:text-[13.5px] leading-relaxed list-disc list-outside pl-4">
                  <li>Architected and maintained complex XML-based insurance workflow configurations, enabling reliable execution of Rate, Quote, and Bind processes across multi-tier client implementations.</li>
                  <li>Conducted exhaustive functional, regression, and API testing using Postman, identifying and resolving critical configuration defects prior to client UAT cycles.</li>
                  <li>Utilized XML configuration to customize, scale, and validate dynamic insurance products and business-rule compliance.</li>
                  <li>Spearheaded root-cause investigations for complex defect reports, collaborating cross-functionally with engineering teams to accelerate issue resolution.</li>
                  <li>Led technical troubleshooting across high-impact client implementations, verifying bug fixes and supporting zero-regression production deployments.</li>
                  <li>Translated intricate business requirements and underwriting rules into robust system configurations with 100% data integrity.</li>
                  <li>Supported quality assurance reviews on system updates to guarantee implemented configurations met strict client acceptance criteria.</li>
                </ul>
              </div>
            </div>

            <!-- Experience 2: Zywave -->
            <div class="relative flex flex-col md:flex-row md:items-start pl-8 sm:pl-10 gap-3 md:gap-8 lg:gap-14">
              <!-- Dot -->
              <div class="absolute left-0 sm:left-0.5 top-1.5 w-3 h-3 rounded-full bg-[#1d72f2] ring-4 ring-white"></div>

              <!-- Left: Company, Role & Date -->
              <div class="w-full md:w-[260px] lg:w-[290px] flex-shrink-0">
                <h3 class="font-sans font-bold text-[#0a1628] text-base sm:text-[17px] leading-snug">
                  Zywave
                </h3>
                <p class="text-[#2563eb] text-xs sm:text-sm font-semibold mt-0.5">
                  Researcher / Quality Technician
                </p>
                <p class="text-[#64748b] text-xs sm:text-[13px] mt-0.5">
                  September 2020 &ndash; September 2021
                </p>
              </div>

              <!-- Right: Bullets -->
              <div class="flex-1">
                <ul class="space-y-1.5 sm:space-y-2 text-[#475569] text-xs sm:text-[13.5px] leading-relaxed list-disc list-outside pl-4">
                  <li>Researched, reviewed, and audited business-critical datasets with rigorous accuracy and consistency benchmarks.</li>
                  <li>Automated and performed systematic data validation checks to identify anomalies and protect database integrity.</li>
                  <li>Maintained meticulous attention to detail when handling sensitive enterprise research outputs and client-facing datasets.</li>
                  <li>Collaborated with team leads to resolve discrepancies and optimize data verification turnaround times.</li>
                </ul>
              </div>
            </div>

            <!-- Experience 3: Advisen -->
            <div class="relative flex flex-col md:flex-row md:items-start pl-8 sm:pl-10 gap-3 md:gap-8 lg:gap-14">
              <!-- Dot -->
              <div class="absolute left-0 sm:left-0.5 top-1.5 w-3 h-3 rounded-full bg-[#1d72f2] ring-4 ring-white"></div>

              <!-- Left: Company, Role & Date -->
              <div class="w-full md:w-[260px] lg:w-[290px] flex-shrink-0">
                <h3 class="font-sans font-bold text-[#0a1628] text-base sm:text-[17px] leading-snug">
                  Advisen
                </h3>
                <p class="text-[#2563eb] text-xs sm:text-sm font-semibold mt-0.5">
                  Content Support Specialist
                </p>
                <p class="text-[#64748b] text-xs sm:text-[13px] mt-0.5">
                  February 2019 &ndash; August 2020
                </p>
              </div>

              <!-- Right: Bullets -->
              <div class="flex-1">
                <ul class="space-y-1.5 sm:space-y-2 text-[#475569] text-xs sm:text-[13.5px] leading-relaxed list-disc list-outside pl-4">
                  <li>Maintained and validated structured enterprise datasets and business-critical content for industry-leading clients.</li>
                  <li>Executed quality assurance routines to proactively detect data inconsistencies and maintain information fidelity.</li>
                  <li>Standardized data verification processes to streamline issue resolution and safeguard data integrity.</li>
                  <li>Managed large-scale structured datasets with high compliance to strict quality benchmarks.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SELECTED PROJECTS & CERTIFICATIONS SECTION -->
    <section
      id="projects"
      class="relative w-full bg-[#f0f6fc] py-14 sm:py-18 lg:py-22 px-5 sm:px-10 lg:px-16 xl:px-20 border-b border-slate-200 scroll-mt-20"
    >
      <div class="max-w-[1300px] mx-auto">
        <!-- FEATURED PROJECTS -->
        <div class="mb-14 sm:mb-18">
          <!-- Header -->
          <div class="mb-8 sm:mb-10 text-left">
            <p class="text-[#1d72f2] text-xs sm:text-[13px] font-sans font-bold tracking-[0.16em] uppercase mb-2">
              SELECTED PROJECTS
            </p>
            <h2 class="font-sans font-extrabold text-[#0a1628] text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] leading-tight tracking-tight">
              Featured Work
            </h2>
            <p class="text-[#64748b] text-sm sm:text-base font-sans max-w-2xl mt-2 leading-relaxed">
              Real-world web engineering, automated API validation, and quality assurance solutions built for stability and scale.
            </p>
          </div>

          <!-- 4 Projects Cards Grid: Balanced 2x2 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">

            <!-- Card 1: MFC Badminton Peeps (PWA & Queue Manager) -->
            <div class="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2eaf5] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full group">
              <div>
                <div class="relative overflow-hidden rounded-xl mb-4 bg-slate-100 h-48">
                  <img
                    src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80"
                    alt="MFC Badminton Peeps Club - Queue and Court Manager"
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-600/90 text-white backdrop-blur-sm shadow-sm flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    Live PWA App
                  </span>
                </div>

                <h3 class="font-sans font-bold text-[#0a1628] text-base sm:text-[17px] mb-1">
                  MFC Badminton Club — Queue &amp; Court Manager
                </h3>
                <p class="text-[#2563eb] text-xs sm:text-[13px] font-semibold mb-2.5">
                  Interactive Web App &amp; PWA — State Management &amp; Queue Logic
                </p>

                <!-- Tech Badges -->
                <div class="flex flex-wrap gap-1.5 mb-3">
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700">JavaScript ES6+</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-teal-50 text-teal-700">PWA Manifest</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-sky-50 text-sky-700">Queue Engine</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-indigo-50 text-indigo-700">Dark / Light UI</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">Vercel</span>
                </div>

                <p class="text-[#64748b] text-xs sm:text-[13px] font-sans leading-relaxed mb-3">
                  Engineered an interactive Progressive Web App (PWA) managing live player queues and real-time court allocation for a sports community. Features courtside mobile optimization, automated rotation algorithms, dynamic theme modes, and persistent state.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100">
                <a
                  href="https://mfcbadmintonpeeps.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-[#059669] font-semibold text-xs sm:text-[13px] transition-colors"
                >
                  Launch Live App
                  <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Card 2: REST API Validation & Regression Suite -->
            <div class="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2eaf5] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full group">
              <div>
                <div class="relative overflow-hidden rounded-xl mb-4 bg-slate-100 h-48">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                    alt="REST API Validation and Regression Suite"
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-600/90 text-white backdrop-blur-sm shadow-sm flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    CI Passing
                  </span>
                </div>

                <h3 class="font-sans font-bold text-[#0a1628] text-base sm:text-[17px] mb-1">
                  REST API Validation &amp; Regression Suite
                </h3>
                <p class="text-[#2563eb] text-xs sm:text-[13px] font-semibold mb-2.5">
                  API Testing &amp; Automated CI — Postman &amp; Newman
                </p>

                <!-- Tech Badges -->
                <div class="flex flex-wrap gap-1.5 mb-3">
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-700">Postman</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-orange-50 text-orange-700">Newman CLI</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-purple-50 text-purple-700">GitHub Actions</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-700">REST API</span>
                </div>

                <p class="text-[#64748b] text-xs sm:text-[13px] font-sans leading-relaxed mb-3">
                  Sample Postman API testing project covering functional, negative, regression, and API-vs-portal data validation tests with structured defect reporting and Newman CLI automation triggered via GitHub Actions.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100">
                <a
                  href="https://github.com/jelmardegoro-byte/postman-api-validation"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0a1628] font-semibold text-xs sm:text-[13px] transition-colors"
                >
                  View Repository on GitHub
                  <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Card 3: Landing Page Created (Part of Devignlabs) -->
            <div class="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2eaf5] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full group">
              <div>
                <div class="relative overflow-hidden rounded-xl mb-4 bg-slate-100 h-48">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                    alt="Landing Page Created - Devignlabs"
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-600/90 text-white backdrop-blur-sm shadow-sm">
                    Live Production
                  </span>
                </div>

                <h3 class="font-sans font-bold text-[#0a1628] text-base sm:text-[17px] mb-1">
                  Landing Page Created
                </h3>
                <p class="text-[#2563eb] text-xs sm:text-[13px] font-semibold mb-2.5">
                  Frontend Engineering &amp; QA Validation — Devignlabs
                </p>

                <!-- Tech Badges -->
                <div class="flex flex-wrap gap-1.5 mb-3">
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">HTML5</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-sky-50 text-sky-700">Tailwind CSS</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-700">Responsive UI</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700">Cross-Browser QA</span>
                </div>

                <p class="text-[#64748b] text-xs sm:text-[13px] leading-relaxed mb-1">
                  Engineered a modern web landing page with responsive layouts. Conducted cross-browser functional testing, mobile viewport verification, and performance audits prior to deployment.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100">
                <a
                  href="https://www.workwithjimmer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1d72f2] font-semibold text-xs sm:text-[13px] transition-colors"
                >
                  View Live Website
                  <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Card 4: Vue.js Component Development -->
            <div class="bg-white rounded-2xl p-5 sm:p-6 border border-[#e2eaf5] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full group">
              <div>
                <div class="relative overflow-hidden rounded-xl mb-4 bg-slate-100 h-48">
                  <img
                    src="@/assets/vue-components.jpg"
                    alt="Vue.js Component Development"
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-600/90 text-white backdrop-blur-sm shadow-sm">
                    Frontend Architecture
                  </span>
                </div>

                <h3 class="font-sans font-bold text-[#0a1628] text-base sm:text-[17px] mb-1">
                  Vue.js Portfolio Platform
                </h3>
                <p class="text-[#2563eb] text-xs sm:text-[13px] font-semibold mb-2.5">
                  Frontend Architecture &amp; Automated Builds
                </p>

                <!-- Tech Badges -->
                <div class="flex flex-wrap gap-1.5 mb-3">
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700">Vue.js 3</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-sky-50 text-sky-700">Tailwind CSS</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-indigo-50 text-indigo-700">Responsive UI</span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">CI &amp; SEO</span>
                </div>

                <p class="text-[#64748b] text-xs sm:text-[13px] font-sans leading-relaxed mb-3">
                  Engineered this personal portfolio platform using Vue.js 3 and Tailwind CSS. Features optimized sub-second load times, JSON-LD structured data, accessible design, and zero-error build verification.
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100">
                <a
                  href="https://github.com/jelmardegoro-byte/jdportforlio"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0a1628] font-semibold text-xs sm:text-[13px] transition-colors"
                >
                  View Code on GitHub
                  <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        <!-- CERTIFICATIONS & PROFESSIONAL DEVELOPMENT -->
        <div id="certifications" class="scroll-mt-24 pt-10 sm:pt-12 border-t border-[#dbe7f3]">
          <!-- Header -->
          <div class="mb-6 sm:mb-8 text-left">
            <p class="text-[#1d72f2] text-xs sm:text-[13px] font-sans font-bold tracking-[0.16em] uppercase mb-2">
              CERTIFICATIONS &amp; TRAINING
            </p>
            <h2 class="font-sans font-extrabold text-[#0a1628] text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] leading-tight tracking-tight">
              Professional Development
            </h2>
          </div>

          <!-- List of 6 Certifications -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <!-- Cert 1 -->
            <div class="flex items-start gap-3 sm:gap-3.5 p-4 rounded-xl bg-white border border-[#e2eaf5] shadow-xs">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-[#e0efff] text-[#1d72f2] flex items-center justify-center mt-0.5">
                <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 class="font-sans font-bold text-[#0a1628] text-xs sm:text-[13.5px] leading-snug">
                  MS Office &ndash; Advanced Efficiency Training
                </h4>
                <p class="text-[#64748b] text-[11px] sm:text-xs mt-0.5">
                  Udemy | Mar 11, 2022 | 2.5 hours
                </p>
              </div>
            </div>

            <!-- Cert 2 -->
            <div class="flex items-start gap-3 sm:gap-3.5 p-4 rounded-xl bg-white border border-[#e2eaf5] shadow-xs">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-[#e0efff] text-[#1d72f2] flex items-center justify-center mt-0.5">
                <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 class="font-sans font-bold text-[#0a1628] text-xs sm:text-[13.5px] leading-snug">
                  PowerPoint &amp; Excel Fusion (+250 PowerPoint Slides)
                </h4>
                <p class="text-[#64748b] text-[11px] sm:text-xs mt-0.5">
                  Udemy | Jul 21, 2022 | 6.5 hours
                </p>
              </div>
            </div>

            <!-- Cert 3 -->
            <div class="flex items-start gap-3 sm:gap-3.5 p-4 rounded-xl bg-white border border-[#e2eaf5] shadow-xs">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-[#e0efff] text-[#1d72f2] flex items-center justify-center mt-0.5">
                <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 class="font-sans font-bold text-[#0a1628] text-xs sm:text-[13.5px] leading-snug">
                  Virtual Meetings with Confidence: 90-minute Guide
                </h4>
                <p class="text-[#64748b] text-[11px] sm:text-xs mt-0.5">
                  Udemy | Apr 6, 2022 | 1.5 hours
                </p>
              </div>
            </div>

            <!-- Cert 4 -->
            <div class="flex items-start gap-3 sm:gap-3.5 p-4 rounded-xl bg-white border border-[#e2eaf5] shadow-xs">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-[#e0efff] text-[#1d72f2] flex items-center justify-center mt-0.5">
                <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 class="font-sans font-bold text-[#0a1628] text-xs sm:text-[13.5px] leading-snug">
                  Write Better Emails: Tactics for Smarter Team Communication
                </h4>
                <p class="text-[#64748b] text-[11px] sm:text-xs mt-0.5">
                  Udemy | Jan 10, 2022 | 1.5 hours
                </p>
              </div>
            </div>

            <!-- Cert 5 -->
            <div class="flex items-start gap-3 sm:gap-3.5 p-4 rounded-xl bg-white border border-[#e2eaf5] shadow-xs">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-[#e0efff] text-[#1d72f2] flex items-center justify-center mt-0.5">
                <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 class="font-sans font-bold text-[#0a1628] text-xs sm:text-[13.5px] leading-snug">
                  Leadership 101 &ndash; Eight-Week Leadership Training
                </h4>
                <p class="text-[#64748b] text-[11px] sm:text-xs mt-0.5">
                  PHL Talent Development | Dec 13, 2022
                </p>
              </div>
            </div>

            <!-- Cert 6 -->
            <div class="flex items-start gap-3 sm:gap-3.5 p-4 rounded-xl bg-white border border-[#e2eaf5] shadow-xs">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-[#e0efff] text-[#1d72f2] flex items-center justify-center mt-0.5">
                <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 class="font-sans font-bold text-[#0a1628] text-xs sm:text-[13.5px] leading-snug">
                  LEAD Program Level 2 &ndash; Pillars of Leadership
                </h4>
                <p class="text-[#64748b] text-[11px] sm:text-xs mt-0.5">
                  PHL Talent Development | Sep 7, 2023
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- EDUCATION & INTELLECTUAL PROPERTY / INNOVATION -->
        <div class="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-[#dbe7f3]">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <!-- Education Card -->
            <div class="bg-white rounded-2xl p-6 sm:p-7 border border-[#e2eaf5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <p class="text-[#1d72f2] text-xs font-sans font-bold tracking-[0.16em] uppercase">
                    EDUCATION
                  </p>
                  <div class="w-10 h-10 rounded-xl bg-[#dbeafe] text-[#2563eb] flex items-center justify-center">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7 4.707v3.085" />
                    </svg>
                  </div>
                </div>
                <h3 class="font-sans font-bold text-[#0a1628] text-base sm:text-lg mb-1 leading-snug">
                  Bachelor of Science in Information Technology
                </h3>
                <p class="text-[#2563eb] text-xs sm:text-sm font-semibold mb-2">
                  University of Southeastern Philippines
                </p>
                <p class="text-[#64748b] text-xs sm:text-[13px] leading-relaxed">
                  Graduated 2017 &bull; Comprehensive study of software development, data systems, computer networking, and system analysis.
                </p>
              </div>
            </div>

            <!-- Intellectual Property & Innovation Card -->
            <div class="bg-white rounded-2xl p-6 sm:p-7 border border-[#e2eaf5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <p class="text-[#1d72f2] text-xs font-sans font-bold tracking-[0.16em] uppercase">
                    INTELLECTUAL PROPERTY &amp; INNOVATION
                  </p>
                  <div class="w-10 h-10 rounded-xl bg-[#fef3c7] text-[#d97706] flex items-center justify-center">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.493 1.508 1.333 1.508 2.316V18" />
                    </svg>
                  </div>
                </div>
                <h3 class="font-sans font-bold text-[#0a1628] text-base sm:text-lg mb-1 leading-snug">
                  Co-Inventor &ndash; A Computer-Implemented Method of Collecting Garbage
                </h3>
                <p class="text-[#d97706] text-xs sm:text-sm font-semibold mb-2">
                  IPOPHL Application No. 1/2017/050084
                </p>
                <p class="text-[#64748b] text-xs sm:text-[13px] leading-relaxed">
                  Patented technological innovation registered with the Intellectual Property Office of the Philippines (IPOPHL).
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Main Content (Dark) -->
    <div class="relative bg-[#0a1628]">

      <!-- CONTACT SECTION -->
      <section
        id="contact"
        class="relative w-full py-8 sm:py-10 md:py-12 px-5 sm:px-10 lg:px-16 xl:px-20 bg-[#0a1628] border-t border-[#1a2d48]"
      >
        <div class="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <!-- Left: Icon + Text -->
          <div class="flex items-center gap-4 sm:gap-5 text-left w-full md:w-auto">
            <!-- Isometric Blue Mail Icon -->
            <div class="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
              <svg class="w-10 h-10 sm:w-11 sm:h-11" viewBox="0 0 48 48" fill="none">
                <path d="M24 6L41 15.5V32.5L24 42L7 32.5V15.5L24 6Z" fill="#1d72f2"/>
                <path d="M24 6L41 15.5L24 24L7 15.5L24 6Z" fill="#3b82f6"/>
                <path d="M7 15.5L24 24V42L7 32.5V15.5Z" fill="#1d4ed8"/>
                <path d="M41 15.5L24 24V42L41 32.5V15.5Z" fill="#1e40af"/>
                <!-- Flap opening curve -->
                <path d="M15 19.5C20 24.5 28 24.5 33 19.5" stroke="#0a1628" stroke-width="3" stroke-linecap="round"/>
                <path d="M15 19.5C20 24 28 24 33 19.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>

            <div>
              <h2 class="font-sans font-bold text-white text-base sm:text-lg lg:text-xl leading-snug">
                Let's Work Together
              </h2>
              <p class="text-[#8fa3bf] text-xs sm:text-[13.5px] font-sans mt-0.5 leading-normal">
                I'm always open to new opportunities, collaborations, and exciting projects.
              </p>
            </div>
          </div>

          <!-- Right: Buttons -->
          <div class="flex-shrink-0 w-full md:w-auto flex flex-wrap items-center justify-start md:justify-end gap-3">
            <button
              @click="copyEmail"
              class="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-full border border-blue-500/40 bg-blue-500/10 hover:bg-blue-500/20 text-[#93c5fd] hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 active:scale-95 whitespace-nowrap"
              :title="copied ? 'Email copied!' : 'Copy email to clipboard'"
            >
              <svg v-if="!copied" class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
              <svg v-else class="w-4 h-4 flex-shrink-0 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{{ copied ? "Copied!" : "Copy Email" }}</span>
            </button>

            <a
              href="mailto:jelmardegoro@gmail.com"
              class="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#0070f3] hover:bg-[#0060df] text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-blue-500/25 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Get In Touch
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <div class="w-full text-center md:text-right mt-1">
              <span class="text-xs text-[#8fa3bf] font-sans">
                Direct: <a href="mailto:jelmardegoro@gmail.com" class="text-[#93c5fd] hover:underline">jelmardegoro@gmail.com</a> &bull; +63 968-443-6113 &bull; Davao City, PH
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    async copyEmail() {
      try {
        await navigator.clipboard.writeText("jelmardegoro@gmail.com");
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2200);
      } catch (e) {
        window.location.href = "mailto:jelmardegoro@gmail.com";
      }
    },
  },
  mounted() {
    this.$emit("sections-ready");
  },
});
</script>
