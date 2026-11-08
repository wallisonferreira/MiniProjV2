<template>
  <div class="flex flex-col gap-6">

    <!-- Header + filtros -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-1">
      <div>
        <span class="text-[11px] uppercase tracking-wider text-gray-500">Capacidades &amp; Arquitetura</span>
        <h2 class="text-2xl font-bold text-gray-900">O Que Eu Faço</h2>
      </div>
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1">
        <button
          v-for="f in filters" :key="f.key"
          class="px-3 py-1 rounded text-[11px] font-medium transition-all whitespace-nowrap"
          :class="activeFilter === f.key ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'"
          @click="activeFilter = f.key"
        >{{ f.label }}</button>
      </div>
    </div>

    <!-- Grid de cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <article
        v-for="item in filteredAreas" :key="item.titulo"
        class="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex flex-col justify-between transition-all hover:shadow-md hover:-translate-y-1"
      >
        <div class="flex flex-col gap-3">
          <!-- Post header -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                <span class="material-symbols-outlined text-[16px] text-gray-800">{{ item.icon }}</span>
              </div>
              <span class="text-[11px] text-gray-700">{{ item.header }}</span>
            </div>
            <span class="material-symbols-outlined text-[18px] text-gray-400">more_horiz</span>
          </div>

          <!-- Visual: ícones das tecnologias / instituições -->
          <div class="w-full h-36 bg-gray-50 rounded-lg p-3 flex flex-col justify-between relative overflow-hidden">
            <div class="flex justify-between items-center text-[10px] text-gray-500">
              <span>{{ item.visual.label }}</span>
              <span class="px-1.5 py-0.5 rounded bg-black text-white text-[9px]">{{ item.visual.tag }}</span>
            </div>

            <!-- Ícones/imagens -->
            <div class="flex items-center justify-center gap-3 py-1">
              <div
                v-for="(tech, i) in item.visual.icons" :key="i"
                class="flex flex-col items-center gap-1"
                :title="tech.name"
              >
                <div class="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                  <img
                    v-if="tech.logo"
                    :src="tech.logo"
                    :alt="tech.name"
                    class="w-6 h-6 object-contain"
                  >
                  <span v-else class="material-symbols-outlined text-[18px] text-gray-700">{{ tech.symbol }}</span>
                </div>
                <span class="text-[9px] text-gray-600 leading-none">{{ tech.name }}</span>
              </div>
            </div>

            <div class="flex items-center justify-between text-[10px] text-gray-500">
              <span>{{ item.visual.metaLeft }}</span>
              <span class="px-1.5 py-0.5 rounded bg-gray-100 font-semibold">{{ item.visual.metaRight }}</span>
            </div>
          </div>

          <!-- Caption -->
          <h3 class="text-base font-semibold text-gray-900 leading-snug">{{ item.titulo }}</h3>
          <p class="text-sm text-gray-600 leading-relaxed">{{ item.descricao }}</p>
        </div>

        <!-- Footer meta -->
        <div class="pt-3 mt-3 flex items-center justify-between bg-gray-50/70 -mx-4 -mb-4 px-4 py-3 rounded-b-xl">
          <span class="text-[11px] text-gray-500">{{ item.stack }}</span>
          <div class="flex items-center gap-2 text-gray-500">
            <span class="material-symbols-outlined text-[18px] hover:text-black cursor-pointer">favorite</span>
            <span class="material-symbols-outlined text-[18px] hover:text-black cursor-pointer">send</span>
          </div>
        </div>
      </article>
    </div>

    <!-- Stack bar -->
    <div class="p-4 bg-gray-50 rounded-lg text-xs text-gray-600">
      <p><strong class="text-gray-900">Stack principal:</strong> PHP, Laravel, NestJS, ReactJS, Vue.js, TypeScript, Python, Machine Learning, LLMs, RAG, Docker, PostgreSQL, ChromaDB.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data() {
    return {
      activeFilter: 'all',
      filters: [
        { key: 'all', label: 'Todos' },
        { key: 'software', label: 'Software' },
        { key: 'ai', label: 'IA & LLMs' },
        { key: 'fullstack', label: 'Full-Stack' },
        { key: 'research', label: 'Pesquisa' },
        { key: 'consulting', label: 'Startups' }
      ],
      areas: [
        {
          categoria: 'software', icon: 'dns', header: 'Backend & APIs',
          titulo: 'Engenharia de Software & APIs',
          descricao: 'Desenvolvimento de sistemas e APIs com foco em organização, boas práticas e manutenibilidade. Experiência com serviços desacoplados, mensageria assíncrona e modelagem relacional.',
          stack: 'Laravel • NestJS • Docker',
          visual: {
            label: 'BACKEND', tag: 'APIs',
            icons: [
              { name: 'Laravel', symbol: 'code' },
              { name: 'NestJS', symbol: 'dns' },
              { name: 'Postgres', symbol: 'storage' }
            ],
            metaLeft: 'APIs & Serviços', metaRight: 'Boas Práticas'
          }
        },
        {
          categoria: 'ai', icon: 'neurology', header: 'IA Aplicada',
          titulo: 'Inteligência Artificial & RAG',
          descricao: 'Estudos e aplicações com LLMs e Retrieval-Augmented Generation (RAG). Vivência em contexto profissional na Virtusa e aprofundamento durante o mestrado na UTAD.',
          stack: 'Python • VectorDB • LLMs',
          visual: {
            label: 'IA APLICADA', tag: 'RAG',
            icons: [
              { name: 'Python', symbol: 'code' },
              { name: 'VectorDB', symbol: 'database' },
              { name: 'LLMs', symbol: 'psychology' }
            ],
            metaLeft: 'Estudos & Projetos', metaRight: 'Em evolução'
          }
        },
        {
          categoria: 'fullstack', icon: 'layers', header: 'Front-end & Back-end',
          titulo: 'Desenvolvimento Full-Stack',
          descricao: 'Construção de aplicações web com React, Vue.js e TypeScript, priorizando clareza de código, acessibilidade e desempenho em diferentes dispositivos.',
          stack: 'React • Vue • TypeScript',
          visual: {
            label: 'FULL-STACK', tag: 'Web',
            icons: [
              { name: 'React', symbol: 'code' },
              { name: 'Vue', symbol: 'layers' },
              { name: 'TypeScript', symbol: 'terminal' }
            ],
            metaLeft: 'SPAs & Interfaces', metaRight: 'Acessível'
          }
        },
        {
          categoria: 'research', icon: 'science', header: 'Pesquisa & Inovação',
          titulo: 'Pesquisa & Inovação Web',
          descricao: 'Interesse por pesquisa aplicada em tecnologias web emergentes, agentes autônomos e interoperabilidade de dados. Atualmente aprofundando esses temas no mestrado MEITW (UTAD/UAB).',
          stack: 'Web Tech • AI',
          visual: {
            label: 'PESQUISA', tag: 'MSc',
            icons: [
              { name: 'UTAD', logo: 'https://www.utad.pt/wp-content/uploads/2019/01/UTAD-logotipo-300x90.png' },
              { name: 'UAB', logo: 'https://portal.uab.pt/wp-content/uploads/2017/10/IG_Logo_vertical_cor.jpg' }
            ],
            metaLeft: 'Mestrado em curso', metaRight: 'MEITW'
          }
        },
        {
          categoria: 'consulting', icon: 'candlestick_chart', header: 'Startups & Estruturação',
          titulo: 'Estruturação de Startups',
          descricao: 'Apoio técnico e estrutural em iniciativas de base tecnológica, com foco em organização de produto, arquitetura inicial e roadmap. Vivência com as startups Moniva (ambiental) e DocFlowe (saúde).',
          stack: 'Roadmap • MVP • Tech Arch',
          visual: {
            label: 'STARTUPS', tag: 'Ventures',
            icons: [
              { name: 'Moniva', logo: 'https://www.instagram.com/moniva.ambiental/' },
              { name: 'DocFlowe', logo: 'https://www.instagram.com/docflowe.ai/' }
            ],
            metaLeft: 'Ambiental • Saúde', metaRight: 'Aceleração'
          }
        },
        {
          categoria: 'software', icon: 'account_balance', header: 'Setor Público',
          titulo: 'Sistemas para o Setor Público',
          descricao: 'Atuação em projetos estruturantes para órgãos como MPAC e DETRAN-SP, integrando dados, governança e conformidade com foco em confiabilidade.',
          stack: 'GovTech • Dados • Segurança',
          visual: {
            label: 'SETOR PÚBLICO', tag: 'GovTech',
            icons: [
              { name: 'MPAC', logo: 'https://www.mpac.mp.br/wp-content/themes/mpac-theme-2022-temporario/images/brand_complete.png' },
              { name: 'DETRAN-SP', logo: 'https://www.detran.sp.gov.br/702a783633529610cd8381ac4f5c7b5b.iix' }
            ],
            metaLeft: 'Governança', metaRight: 'Confiabilidade'
          }
        }
      ]
    };
  },
  computed: {
    filteredAreas() {
      if (this.activeFilter === 'all') return this.areas;
      return this.areas.filter(a => a.categoria === this.activeFilter);
    }
  }
};
</script>