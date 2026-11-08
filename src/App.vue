<template>
  <div class="min-h-screen bg-ig-bg font-sans text-gray-800 flex flex-col">
    <!-- ===== Header (Instagram Shell Style) ===== -->
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div class="max-w-[935px] mx-auto px-4 h-16 flex items-center justify-between gap-4">

        <!-- Brand (sem ícone, encostado à esquerda) -->
        <router-link to="/" class="flex flex-col leading-none shrink-0">
          <span class="text-sm font-semibold text-gray-900 tracking-tight">Wallison Ferreira</span>
          <span class="hidden sm:block text-[11px] text-gray-500 mt-0.5">Full-Stack &amp; AI • @wallisonferreira_</span>
        </router-link>

        <!-- Nav (Desktop) -->
        <nav class="hidden md:flex items-center gap-6">
          <router-link
            to="/"
            class="text-sm font-medium py-2 border-b-2 border-transparent transition-colors"
            active-class="text-black border-black"
          >Quem Sou Eu?</router-link>
          <router-link
            to="/work"
            class="text-sm font-medium py-2 border-b-2 border-transparent transition-colors"
            active-class="text-black border-black"
          >O que faço?</router-link>
          <router-link
            to="/hobbies"
            class="text-sm font-medium py-2 border-b-2 border-transparent transition-colors"
            active-class="text-black border-black"
          >Hobbies</router-link>
        </nav>

        <!-- Actions (direita, sem o último botão) -->
        <div class="flex items-center gap-2 shrink-0">
          <a
            href="#contact"
            class="hidden sm:inline-flex items-center justify-center h-9 px-4 rounded bg-black text-white text-xs font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
          >Contacto</a>

          <!-- Ícones sociais compactos no header -->
          <div class="hidden sm:flex items-center gap-1 pl-2 border-l border-gray-200">
            <a
              v-for="social in socials" :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener"
              :aria-label="social.name"
              :title="social.name"
              class="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
            >
              <svg class="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" v-html="social.path"></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Nav Mobile -->
      <nav class="md:hidden flex items-center justify-around border-t border-gray-100">
        <router-link to="/" class="flex-1 text-center text-xs font-medium py-3 border-b-2 border-transparent" active-class="text-black border-black">Quem Sou Eu?</router-link>
        <router-link to="/work" class="flex-1 text-center text-xs font-medium py-3 border-b-2 border-transparent" active-class="text-black border-black">O que faço?</router-link>
        <router-link to="/hobbies" class="flex-1 text-center text-xs font-medium py-3 border-b-2 border-transparent" active-class="text-black border-black">Hobbies</router-link>
      </nav>
    </header>

    <!-- ===== Content ===== -->
    <main class="w-full max-w-[935px] mx-auto px-4 py-8 flex-1">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- ===== Footer ===== -->
    <footer class="w-full bg-gray-50 border-t border-gray-200 mt-10">
      <div class="max-w-[935px] mx-auto px-4 py-10">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex flex-col items-center md:items-start">
            <span class="text-lg font-semibold text-gray-900 tracking-tight">Wallison Ferreira</span>
            <span class="text-xs text-gray-500">Full-Stack &amp; AI Specialist • @wallisonferreira_</span>
          </div>

          <div class="flex items-center gap-4 flex-wrap justify-center">
            <a
              v-for="social in socials" :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-1.5 text-xs text-gray-500 hover:text-black transition-colors"
            >
              <svg class="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" v-html="social.path"></svg>
              <span>{{ social.name }}</span>
            </a>
          </div>
        </div>

        <div class="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© 2024 Wallison Ferreira • SPA Curricular. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // SVG paths (W3Schools / Simple Icons)
      socials: [
        {
          name: 'Instagram',
          url: 'https://instagram.com/wallisonferreira_',
          path: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>'
        },
        {
          name: 'GitHub',
          url: 'https://github.com/wallisonferreira',
          path: '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>'
        },
        {
          name: 'Medium',
          url: 'https://medium.com/@wallisonferreira',
          path: '<path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>'
        },
        {
          name: 'LinkedIn',
          url: 'https://linkedin.com/in/wallisonferreira',
          path: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>'
        }
      ]
    };
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>