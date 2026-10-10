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
              QA Analyst | Configuration Analyst | Software Testing
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

            <!-- GitHub row -->
            <div class="mb-5 flex justify-center md:justify-start">
              <a href="https://github.com/jelmardegoro-byte" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-[#c8d8ee] hover:text-white text-xs sm:text-[13px] font-sans transition-colors">
                <svg class="w-3.5 h-3.5 text-[#3b82f6] flex-shrink-0 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub: github.com/jelmardegoro-byte
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
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-white/30 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                Download Resume
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </a>
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
              QA &amp; Configuration Analyst<br class="hidden sm:inline" />
              with 5+ Years of Experience
            </h2>

            <!-- Paragraph 1 -->
            <p class="text-[#475569] text-sm sm:text-[15px] lg:text-base font-sans leading-[1.7] mb-4 sm:mb-5">
              I'm a QA and Configuration Analyst with over five years of experience in software quality assurance, insurance system configuration, workflow validation, technical troubleshooting, and data quality. I have hands-on experience with testing and validating Rate, Quote, and Bind workflows, analyzing defects, maintaining XML-based configurations, and supporting client implementations.
            </p>

            <!-- Paragraph 2 -->
            <p class="text-[#475569] text-sm sm:text-[15px] lg:text-base font-sans leading-[1.7]">
              I'm detail-oriented, reliable, and skilled at working with technical requirements, business rules, and cross-functional teams &mdash; even in remote environments.
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
                    Strong QA and testing background (functional, regression, UAT, API testing)
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
                    Experience with insurance system configuration and XML-based workflows
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
                    Proficient in Postman, InsuredApp, Git/GitHub, and modern frontend technologies
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
                    Excellent problem-solving, analytical, and communication skills
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
                    Committed to delivering accurate, high-quality results
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

        <!-- Skills Grid: 6 Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-4.5 lg:gap-4 xl:gap-5">
          <!-- Card 1: Software QA & Testing -->
          <div class="bg-white rounded-2xl p-5 sm:p-6 lg:p-5 xl:p-6 flex flex-col items-center text-center shadow-xs border border-[#e2eaf5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#dbeafe] text-[#2563eb] flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3 class="font-sans font-bold text-[#0a1628] text-sm sm:text-[15px] mb-2 leading-snug">
              Software QA &amp; Testing
            </h3>
            <p class="text-[#64748b] text-xs sm:text-[12.5px] font-sans leading-relaxed">
              Functional, Regression, UAT, Defect Analysis
            </p>
          </div>

          <!-- Card 2: Configuration -->
          <div class="bg-white rounded-2xl p-5 sm:p-6 lg:p-5 xl:p-6 flex flex-col items-center text-center shadow-xs border border-[#e2eaf5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
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
              XML, Insurance Product, Rate/Quote/Bind
            </p>
          </div>

          <!-- Card 3: Data & Workflow Validation -->
          <div class="bg-white rounded-2xl p-5 sm:p-6 lg:p-5 xl:p-6 flex flex-col items-center text-center shadow-xs border border-[#e2eaf5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#dbeafe] text-[#2563eb] flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </div>
            <h3 class="font-sans font-bold text-[#0a1628] text-sm sm:text-[15px] mb-2 leading-snug">
              Data &amp; Workflow Validation
            </h3>
            <p class="text-[#64748b] text-xs sm:text-[12.5px] font-sans leading-relaxed">
              Business Rules, Data Integrity
            </p>
          </div>

          <!-- Card 4: Technical Tools -->
          <div class="bg-white rounded-2xl p-5 sm:p-6 lg:p-5 xl:p-6 flex flex-col items-center text-center shadow-xs border border-[#e2eaf5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#ede9fe] text-[#7c3aed] flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <h3 class="font-sans font-bold text-[#0a1628] text-sm sm:text-[15px] mb-2 leading-snug">
              Technical Tools
            </h3>
            <p class="text-[#64748b] text-xs sm:text-[12.5px] font-sans leading-relaxed">
              Postman, InsuredApp, Git/GitHub
            </p>
          </div>

          <!-- Card 5: Frontend Development -->
          <div class="bg-white rounded-2xl p-5 sm:p-6 lg:p-5 xl:p-6 flex flex-col items-center text-center shadow-xs border border-[#e2eaf5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#d1fae5] text-[#059669] flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
              </svg>
            </div>
            <h3 class="font-sans font-bold text-[#0a1628] text-sm sm:text-[15px] mb-2 leading-snug">
              Frontend Development
            </h3>
            <p class="text-[#64748b] text-xs sm:text-[12.5px] font-sans leading-relaxed">
              HTML, CSS, JavaScript, Vue.js, Tailwind CSS
            </p>
          </div>

          <!-- Card 6: Troubleshooting -->
          <div class="bg-white rounded-2xl p-5 sm:p-6 lg:p-5 xl:p-6 flex flex-col items-center text-center shadow-xs border border-[#e2eaf5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#ffedd5] text-[#d97706] flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.398-3.048 1.182l-7.25 7.25a2.25 2.25 0 01-3.182-3.182l7.25-7.25c.784-.784 1.273-1.972 1.182-3.048A4.5 4.5 0 0117.25 2.25a4.5 4.5 0 014.5 4.5z" />
              </svg>
            </div>
            <h3 class="font-sans font-bold text-[#0a1628] text-sm sm:text-[15px] mb-2 leading-snug">
              Troubleshooting
            </h3>
            <p class="text-[#64748b] text-xs sm:text-[12.5px] font-sans leading-relaxed">
              System Issues, Client Support
            </p>
          </div>
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
                  <li>Configured and maintained insurance workflows supporting Rate, Quote, and Bind processes.</li>
                  <li>Performed functional testing, regression testing, and detailed validation to verify system behavior, configuration accuracy, and business-rule compliance.</li>
                  <li>Used XML configuration to customize, maintain, and validate insurance products and workflow behavior.</li>
                  <li>Analyzed defects and investigated configuration or workflow issues to identify root causes and support resolution.</li>
                  <li>Performed technical troubleshooting across client implementations and validated fixes before completion.</li>
                  <li>Worked with business requirements and technical configurations to help ensure reliable system behavior and accurate client-facing outcomes.</li>
                  <li>Supported quality assurance activities by reviewing system changes and validating that implemented configurations met expected requirements.</li>
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
                  <li>Conducted data research, validation, and quality assurance activities for business-critical information.</li>
                  <li>Reviewed and verified data for accuracy, completeness, and consistency.</li>
                  <li>Performed quality checks to identify incorrect or inconsistent information and supported issue resolution.</li>
                  <li>Maintained a high level of attention to detail when handling business-critical datasets and research outputs.</li>
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
                  <li>Maintained and validated business-critical content and datasets.</li>
                  <li>Performed quality checks to identify data issues and maintain information accuracy.</li>
                  <li>Supported issue resolution and data integrity through consistent validation and review processes.</li>
                  <li>Worked with detailed information and structured datasets while maintaining accuracy and consistency.</li>
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
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

          <!-- LEFT COLUMN: SELECTED PROJECTS -->
          <div class="lg:col-span-7 flex flex-col justify-between">
            <!-- Header -->
            <div class="mb-6 sm:mb-8 text-left">
              <p class="text-[#1d72f2] text-xs sm:text-[13px] font-sans font-bold tracking-[0.16em] uppercase mb-2">
                SELECTED PROJECTS
              </p>
              <h2 class="font-sans font-extrabold text-[#0a1628] text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] leading-tight tracking-tight">
                Featured Work
              </h2>
            </div>

            <!-- 2 Projects Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 flex-1">
              <!-- Card 1: Landing Page Created (Part of Devignlabs) -->
              <div class="bg-white rounded-2xl p-4 sm:p-5 border border-[#e2eaf5] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                    alt="Landing Page Created - Devignlabs"
                    class="w-full h-36 sm:h-40 object-cover rounded-xl mb-4 bg-slate-100"
                  />
                  <h3 class="font-sans font-bold text-[#0a1628] text-sm sm:text-base mb-1">
                    Landing Page Created
                  </h3>
                  <p class="text-[#2563eb] text-xs sm:text-[12.5px] font-semibold mb-1.5">
                    Part of Devignlabs
                  </p>
                  <p class="text-[#64748b] text-xs sm:text-[12.5px] leading-relaxed">
                    Website project:<br class="hidden sm:inline" />
                    <a
                      href="https://www.workwithjimmer.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-[#1d72f2] hover:text-[#175cd3] hover:underline inline-flex items-center gap-1 font-medium break-all mt-0.5"
                    >
                      https://www.workwithjimmer.com/
                      <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </p>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-100">
                  <a
                    href="https://www.workwithjimmer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-[#1d72f2] hover:text-[#175cd3] hover:underline inline-flex items-center gap-1.5 font-semibold text-xs sm:text-[12.5px]"
                  >
                    View Live Website
                    <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Card 2: Vue.js Component Development -->
              <div class="bg-white rounded-2xl p-4 sm:p-5 border border-[#e2eaf5] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full">
                <div>
                  <img
                    src="@/assets/vue-components.jpg"
                    alt="Vue.js Component Development"
                    class="w-full h-36 sm:h-40 object-cover rounded-xl mb-4 bg-slate-100"
                  />
                  <h3 class="font-sans font-bold text-[#0a1628] text-sm sm:text-base mb-1">
                    Vue.js Component Development
                  </h3>
                  <p class="text-[#2563eb] text-xs sm:text-[12.5px] font-semibold mb-1.5">
                    Frontend UI Library
                  </p>
                  <p class="text-[#64748b] text-xs sm:text-[12.5px] font-sans leading-relaxed">
                    Using Tailwind CSS: Frontend development work focused on reusable UI components and styling.
                  </p>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-100">
                  <a
                    href="https://github.com/jelmardegoro-byte"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-[#1d72f2] hover:text-[#175cd3] hover:underline inline-flex items-center gap-1.5 font-semibold text-xs sm:text-[12.5px]"
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

          <!-- RIGHT COLUMN: CERTIFICATIONS & TRAINING -->
          <div id="certifications" class="lg:col-span-5 scroll-mt-24 flex flex-col justify-between">
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
            <div class="space-y-4 sm:space-y-4.5 flex-1 flex flex-col justify-between">
              <!-- Cert 1 -->
              <div class="flex items-start gap-3 sm:gap-3.5">
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
              <div class="flex items-start gap-3 sm:gap-3.5">
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
              <div class="flex items-start gap-3 sm:gap-3.5">
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
              <div class="flex items-start gap-3 sm:gap-3.5">
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
              <div class="flex items-start gap-3 sm:gap-3.5">
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
              <div class="flex items-start gap-3 sm:gap-3.5">
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

          <!-- Right: Get In Touch Button -->
          <div class="flex-shrink-0 w-full md:w-auto flex justify-start md:justify-end">
            <a
              href="mailto:jelmardegoro@gmail.com"
              class="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#0070f3] hover:bg-[#0060df] text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-blue-500/25 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Get In Touch
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    this.$emit("sections-ready");
  },
});
</script>
