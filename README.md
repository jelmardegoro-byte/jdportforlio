# Jelmar Degoro — Personal Portfolio Platform 🚀

[![Live Website](https://img.shields.io/badge/Live_Site-jelmardegoro.vercel.app-1d72f2?style=flat&logo=vercel&logoColor=white)](https://jelmardegoro.vercel.app/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-42b883?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06b6d4?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A high-performance, responsive personal portfolio platform engineered with **Vue.js 3** and **Tailwind CSS**. Built to showcase enterprise QA achievements, automated API validation workflows, and modern web application development.

🌐 **Live Production:** [https://jelmardegoro.vercel.app/](https://jelmardegoro.vercel.app/)

---

## 🌟 Key Features

* **⚡ Sub-Second Load Performance:** Optimized asset delivery, zero render-blocking Google Font chains, and lightweight bundle splitting.
* **📱 Responsive 2×2 Projects Showcase:** Mobile-first layout featuring real-world projects:
  1. **MFC Badminton Club** — Interactive Progressive Web App (PWA) with courtside queue rotation logic.
  2. **REST API Validation Suite** — Automated Postman & Newman regression tests integrated with GitHub Actions CI.
  3. **Devignlabs Landing Page** — High-performance commercial client landing page with cross-browser verification.
  4. **Vue.js Portfolio Platform** — Component-driven portfolio architecture with structured data.
* **🔍 Complete Technical SEO & Discovery:**
  * Open Graph & Twitter Cards for rich social sharing.
  * Google-compliant **JSON-LD Schema (Person)** for structured search indexation.
  * Dynamic `sitemap.xml` and standard `robots.txt`.
* **⏱️ Snappy QA-Themed Preloader:** Custom animated SVG/Canvas status loader verifying environments in under 950ms.
* **📋 Interactive Contact Suite:** One-click clipboard copy for email address with immediate visual checkmark confirmation.

---

## 🛠️ Tech Stack & Tooling

| Layer | Technologies |
|---|---|
| **Frontend Framework** | [Vue.js 3](https://vuejs.org/) (Options API & Composition API) |
| **Styling & Design** | [Tailwind CSS 3](https://tailwindcss.com/) with custom palette and ambient gradients |
| **Build Tooling** | Vue CLI (`@vue/cli-service`), Webpack 5 |
| **Deployment & Hosting** | [Vercel](https://vercel.com/) with continuous integration from `main` |
| **Structured Data** | Schema.org JSON-LD (Person entity) |

---

## 📂 Project Structure

```text
jdportforlio/
├── public/
│   ├── index.html               # Semantic HTML5 shell, SEO meta, JSON-LD Schema
│   ├── robots.txt               # Crawler directives
│   ├── sitemap.xml              # Search engine sitemap
│   └── Jelmar_Degoro_Resume.pdf # Downloadable resume
├── src/
│   ├── assets/                  # Optimized imagery and icons
│   ├── components/
│   │   ├── NavbarElement.vue    # Sticky header with active scroll indicator
│   │   ├── FooterElement.vue    # Semantic footer with contact and legal links
│   │   └── PageLoader.vue       # 950ms QA-themed entrance animation
│   ├── pages/
│   │   └── MainPage.vue         # Hero, About, Core Competencies, Experience, Projects
│   ├── App.vue                  # Root component
│   ├── main.js                  # App bootstrap
│   └── style.css                # Tailwind directives & custom scrollbars
├── tailwind.config.js           # Extended breakpoints, font families, and shadows
└── package.json                 # Dependencies and scripts
```

---

## 🚀 Local Development Setup

### Prerequisites
* **Node.js** (v16 or higher)
* **npm** or **yarn**

### 1. Clone the repository
```bash
git clone https://github.com/jelmardegoro-byte/jdportforlio.git
cd jdportforlio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run serve
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

### 4. Build for production
```bash
npm run build
```
Generates production-ready, minified bundles in the `dist/` directory.

---

## 👤 Author

**Jelmar Degoro**  
*QA Engineer & Full-Stack Developer*  
- 🌐 Portfolio: [jelmardegoro.vercel.app](https://jelmardegoro.vercel.app/)  
- 💼 LinkedIn: [linkedin.com/in/jelmar-degoro-0b874b21a](https://www.linkedin.com/in/jelmar-degoro-0b874b21a/)  
- 🐙 GitHub: [@jelmardegoro-byte](https://github.com/jelmardegoro-byte)  
- 📧 Email: [jelmardegoro@gmail.com](mailto:jelmardegoro@gmail.com)
