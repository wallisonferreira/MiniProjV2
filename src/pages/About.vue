<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-10">
    <div class="flex flex-col md:flex-row items-center md:items-start gap-8">

      <!-- Avatar -->
      <div class="relative group flex-shrink-0">
        <div class="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gray-100 shadow-sm overflow-hidden">
          <img
            src="../../public/profile.jpg"
            alt="Wallison Ferreira"
            class="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
          >
        </div>
        <label class="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center cursor-pointer shadow-md hover:bg-gray-700 transition-colors" title="Simular troca de foto">
          <span class="material-symbols-outlined text-[16px]">photo_camera</span>
          <input type="file" accept="image/*" class="hidden" @change="previewAvatar">
        </label>
      </div>

      <!-- Identidade -->
      <div class="flex-1 text-center md:text-left">
        <div class="flex items-center justify-center md:justify-start gap-2 mb-1">
          <h2 class="text-2xl font-bold">Wallison Ferreira</h2>
          <span class="material-symbols-outlined text-[20px] text-black" style="font-variation-settings:'FILL' 1;">verified</span>
        </div>
        <div class="flex items-center justify-center md:justify-start gap-2 mb-4 text-xs text-gray-500 flex-wrap">
          <span>@wallisonferreira_</span>
          <span class="w-1.5 h-1.5 rounded-full bg-black"></span>
          <span class="px-2 py-0.5 rounded bg-gray-100">Portugal • UTAD</span>
        </div>

        <!-- Stats -->
        <div class="flex justify-center md:justify-start items-center gap-6 py-3 border-y border-gray-100 mb-4 flex-wrap">
          <div class="text-center md:text-left"><span class="block text-lg font-bold">7+</span><span class="text-xs text-gray-500">Anos MPAC</span></div>
          <div class="text-center md:text-left"><span class="block text-lg font-bold">2x</span><span class="text-xs text-gray-500">Acre For Startups</span></div>
          <div class="text-center md:text-left"><span class="block text-lg font-bold">1ª</span><span class="text-xs text-gray-500">Fase Centelha</span></div>
          <div class="text-center md:text-left"><span class="block text-lg font-bold">BSc</span><span class="text-xs text-gray-500">Sistemas de Informação (UFAC)</span></div>
        </div>

        <!-- Bio -->
        <div class="space-y-4 text-gray-700 leading-relaxed text-sm">
          <p class="font-semibold text-gray-900">Desenvolvedor Full-Stack e entusiasta de inovação</p>
          <p>
            Bacharel em Sistemas de Informação pela Universidade Federal do Acre (UFAC). Atualmente cursando o mestrado MEITW (Engenharia Informática e Tecnologia Web) na UTAD/UAB, em Portugal.
          </p>
          <p>
            Atuei por cerca de 7 anos como desenvolvedor no Ministério Público do Acre (MPAC), participando de projetos de inovação. Passei pelo setor de Hiperautomação e Hipercognição do DETRAN-SP e, em seguida, pela Virtusa (Estados Unidos), sempre envolvido com projetos de tecnologia, inovação e estruturação de startups.
          </p>
          <p>
            Entre as iniciativas em que atuei estão a Moniva (soluções ambientais) e a DocFlowe (soluções para a área da saúde).
          </p>

          <!-- Reconhecimentos / logos -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <div class="flex items-center gap-2 px-2 py-1.5 rounded bg-gray-50 border border-gray-100">
              <img
                src="https://www.solucoescampinas.com.br/wp-content/uploads/2016/03/Logo-Sebrae-branco-300x212.jpg"
                alt="SEBRAE"
                class="h-6 w-auto rounded-sm bg-white object-contain"
              >
              <span class="text-[11px] text-gray-600">Aprovado 2x no Acre For Startups</span>
            </div>
            <div class="flex items-center gap-2 px-2 py-1.5 rounded bg-gray-50 border border-gray-100">
              <img
                src="https://ac.programacentelha.com.br/assets/inicio/Logotipos_Centelha_Estaduais-AC-733acaf5e81179bea3a93d6895e4bd79.png"
                alt="Centelha"
                class="h-6 w-auto rounded-sm object-contain"
              >
              <span class="text-[11px] text-gray-600">Aprovado na 1ª fase do Centelha (via DocFlowe)</span>
            </div>
          </div>

          <!-- Links externos -->
          <div class="pt-2 flex flex-wrap items-center gap-3 text-xs font-medium">
            <a href="https://github.com/wallisonferreira" target="_blank" class="flex items-center gap-1 text-black hover:underline">
              <svg class="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" v-html="socials.github"></svg>
              github.com/wallisonferreira
            </a>
            <span class="text-gray-300">•</span>
            <a href="https://medium.com/@wallisonferreira" target="_blank" class="flex items-center gap-1 text-gray-600 hover:text-black">
              <svg class="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" v-html="socials.medium"></svg>
              medium.com/@wallisonferreira
            </a>
          </div>

          <!-- Startups -->
          <div class="pt-2 flex flex-wrap items-center gap-4">
            <span class="text-[11px] text-gray-500">Startups que atualmente atuo na estruturação:</span>
            <a href="https://www.instagram.com/docflowe.ai/" target="_blank" rel="noopener" class="flex items-center gap-1.5 text-[11px] text-gray-600 hover:text-black transition-colors">
              <svg class="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" v-html="socials.instagram"></svg>
              @docflowe.ai
            </a>
            <a href="https://www.instagram.com/moniva.ambiental/" target="_blank" rel="noopener" class="flex items-center gap-1.5 text-[11px] text-gray-600 hover:text-black transition-colors">
              <svg class="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" v-html="socials.instagram"></svg>
              @moniva.ambiental
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Instituições (cards quadrados arredondados com logo) -->
    <div class="mt-8 pt-6 border-t border-gray-100">
      <span class="text-[11px] uppercase tracking-wider text-gray-500 block mb-3">Instituições por onde passei</span>
      <div class="flex items-start gap-4 overflow-x-auto pb-2">
        <button
          v-for="inst in institutions" :key="inst.key"
          class="flex flex-col items-center gap-2 flex-shrink-0 group w-[88px]"
          @click="openHighlight(inst)"
        >
          <div class="w-[72px] h-[72px] rounded-xl p-2 bg-gray-50 border border-gray-200 group-hover:bg-gray-100 group-hover:border-gray-300 transition-colors flex items-center justify-center shadow-sm">
            <img :src="inst.logo" :alt="inst.label" class="max-w-full max-h-full object-contain rounded-sm">
          </div>
          <span class="text-[10px] text-gray-700 text-center leading-tight">{{ inst.label }}</span>
        </button>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="activeHighlight" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" @click.self="activeHighlight = null">
      <div class="bg-white max-w-md w-full rounded-xl p-6 shadow-xl relative">
        <button class="absolute top-4 right-4 text-gray-400 hover:text-black" @click="activeHighlight = null">
          <span class="material-symbols-outlined text-[24px]">close</span>
        </button>
        <div class="flex items-center gap-2 mb-3">
          <div class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
            <span class="material-symbols-outlined text-[18px]">{{ activeHighlight.icon }}</span>
          </div>
          <div>
            <h4 class="text-sm font-semibold">{{ activeHighlight.title }}</h4>
            <span class="text-[11px] text-gray-500">{{ activeHighlight.subtitle }}</span>
          </div>
        </div>
        <p class="text-sm text-gray-600 leading-relaxed">{{ activeHighlight.desc }}</p>
        <button class="mt-5 w-full py-2 rounded bg-black text-white text-xs font-semibold" @click="activeHighlight = null">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      activeHighlight: null,
      // SVG paths para redes sociais (W3Schools / Simple Icons)
      socials: {
        instagram: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>',
        github: '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>',
        medium: '<path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>'
      },
      institutions: [
        {
          key: 'mpac', label: 'MPAC', icon: 'account_balance',
          logo: 'https://www.mpac.mp.br/wp-content/themes/mpac-theme-2022-temporario/images/brand_complete.png',
          title: 'Ministério Público do Acre', subtitle: 'Desenvolvedor • ~7 anos',
          desc: 'Atuação como desenvolvedor por cerca de 7 anos no MPAC, com participação em projetos de inovação e modernização de sistemas internos.'
        },
        {
          key: 'detran', label: 'DETRAN-SP', icon: 'memory',
          logo: 'https://www.detran.sp.gov.br/702a783633529610cd8381ac4f5c7b5b.iix',
          title: 'DETRAN-SP', subtitle: 'Hiperautomação & Hipercognição',
          desc: 'Passagem pelo setor de Hiperautomação e Hipercognição do DETRAN-SP, trabalhando com automação de processos e soluções cognitivas.'
        },
        {
          key: 'virtusa', label: 'Virtusa', icon: 'public',
          logo: 'https://media.licdn.com/dms/image/v2/D560BAQHo4ozLbEAXCA/company-logo_200_200/B56Zmf39MeJ8AI-/0/1759323870828/virtusa_sri_lanka_logo?e=2147483647&v=beta&t=MeCEXccK4byZLUcXEZSdWkrot8EKzFcQBoUQ9UpUk1k',
          title: 'Virtusa (EUA)', subtitle: 'Projetos de Tecnologia',
          desc: 'Experiência na Virtusa, nos Estados Unidos, atuando em projetos de tecnologia e inovação.'
        },
        {
          key: 'ufac', label: 'UFAC', icon: 'school',
          logo: 'https://www.ufac.br/site/noticias/2026/propeg-altera-datas-em-editais-de-programas-de-iniciacao-cientifica/ufac-logo.png/@@images/1b424b4e-87da-4d1b-8e08-7aa05b446899.png',
          title: 'Universidade Federal do Acre', subtitle: 'Bacharel em Sistemas de Informação',
          desc: 'Graduação em Sistemas de Informação pela UFAC, no Acre, Brasil.'
        },
        {
          key: 'utad', label: 'UTAD', icon: 'school',
          logo: '', // sem URL fornecida
          title: 'UTAD', subtitle: 'Mestrado MEITW • Em andamento',
          desc: 'Atualmente cursando o mestrado em Engenharia Informática e Tecnologia Web (MEITW) na UTAD, em Portugal.'
        },
        {
          key: 'uab', label: 'UAB', icon: 'school',
          logo: 'https://portal.uab.pt/wp-content/uploads/2017/10/IG_Logo_vertical_cor.jpg',
          title: 'Universidade Aberta (UAB)', subtitle: 'Mestrado MEITW • Em andamento',
          desc: 'Mestrado MEITW em parceria com a Universidade Aberta (UAB), Portugal.'
        }
      ]
    };
  },
  methods: {
    openHighlight(hl) { this.activeHighlight = hl; },
    previewAvatar(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => { this.$el.querySelector('img').src = ev.target.result; };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style scoped>
/* fallback visual quando não houver logo (UTAD) */
.institution-placeholder {
  font-size: 10px;
  color: #6b7280;
  text-align: center;
}
</style>