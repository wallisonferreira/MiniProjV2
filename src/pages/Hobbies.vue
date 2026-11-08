<template>
  <div class="flex flex-col gap-6">

    <!-- Quote header -->
    <div class="border-l-2 border-black pl-4">
      <span class="text-[11px] uppercase tracking-wider text-gray-500">Universo Pessoal</span>
      <blockquote class="text-lg font-semibold italic text-gray-900 max-w-3xl leading-snug mt-1">
        “Nem tudo gira em torno de tecnologia. Gosto de música, boas conversas, café e de tudo aquilo que desperta curiosidade...”
      </blockquote>
    </div>

    <!-- Feed grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <article
        v-for="hobby in hobbies" :key="hobby.nome"
        class="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 flex flex-col justify-between group hover:shadow-md transition-shadow"
      >
        <div>
          <!-- Author mini-header -->
          <div class="p-3 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                <span class="material-symbols-outlined text-[16px] text-gray-800">{{ hobby.icon }}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-[11px] font-semibold text-gray-900">{{ hobby.nome }}</span>
                <span class="text-[10px] text-gray-500">{{ hobby.sub }}</span>
              </div>
            </div>
            <span class="material-symbols-outlined text-[18px] text-gray-400">{{ hobby.emoji }}</span>
          </div>

          <!-- Square photo -->
          <div class="relative aspect-square w-full bg-gray-100 overflow-hidden">
            <img
              :src="hobby.img"
              :alt="hobby.nome"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            >
            <div class="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-white/80 backdrop-blur-sm text-[10px] font-medium text-gray-900">
              {{ hobby.badge }}
            </div>
          </div>

          <!-- Caption -->
          <div class="p-3 flex flex-col gap-2">
            <div class="flex items-center gap-3 text-gray-900">
              <span class="material-symbols-outlined text-[20px] cursor-pointer">favorite</span>
              <span class="material-symbols-outlined text-[20px] cursor-pointer">chat_bubble</span>
              <span class="material-symbols-outlined text-[20px] cursor-pointer">send</span>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed pt-1">
              <strong class="text-gray-900">wallisonferreira_</strong> {{ hobby.descricao }}
            </p>
          </div>
        </div>
        <div class="px-3 pb-3 text-[11px] text-gray-500">
          {{ hobby.tags }}
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hobbies',
  data() {
    return {
      hobbies: [
        {
          nome: 'Música', sub: 'Post-punk • Stoner • Doom',
          icon: 'graphic_eq', emoji: 'music_note',
          badge: 'Vinil • Fones • Boa companhia',
          descricao: 'Gosto de perder tempo escolhendo o disco, limpar a agulha e deixar o som ocupar o ambiente. É quando minha cabeça desacelera. Às vezes é só barulho bom, outras vezes é a melhor forma de organizar as ideias antes de voltar pro código.',
          tags: '#VinylCollector #PostPunk #MúsicaDeFundo',
          img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_ZGooWyWbeODrEJWrGqtx7lBXjkC3tuLiTiDWTdhMa-zJSnADDSVfK6iU_ww2LczhvD5PUQkQwfASpCyHfAWXuyLvojVhwShKkX7dxIWvDdVopsd5Xx39h2f_CeFv6Qa8JC1Ux6gwdzcS1ImJfeORyVgIXtMYidExpNEiCbMF6qdtDHSEFB7bnUPgSQpe6CAKvqRcox9BN_6-Ftd0WopoaLNZOiLot2xFAIRW8do'
        },
        {
          nome: 'Café', sub: 'Coado • Sem pressa',
          icon: 'coffee', emoji: 'local_cafe',
          badge: 'V60 • Fim de tarde',
          descricao: 'Aprendi a gostar do café com calma: moer na hora, esperar a água, prestar atenção no cheiro. Virou um intervalo no meio do dia. Não entendo tanto de grão quanto gostaria, mas gosto de testar métodos diferentes e conversar sobre isso com quem também curte.',
          tags: '#CaféCoado #V60 #PausaDoDia',
          img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlvn9-wF4632bAhPReh7OtNctoPCqPEMM3d_thJ-6lhmd7O2FHlIIeQv81G8CFoW9BtcZ4p67tUDvrUEBA5qh6Ej-ijnVuBKZScT4yGt70Lx4pSpA1fC3muO09PXwHcjceDLM-RJCpKfHKwWeZcN0h__a_Je1tHCoXVPpsvP4vTlLcyeEBEKll526wXBMyYWpoGPZarmTJiDBf8SPYuspbpNHhrf8gDgClSNkceRQ'
        },
        {
          nome: 'Compreender a Sociedade', sub: 'Leitura • Conversa • Curiosidade',
          icon: 'menu_book', emoji: 'auto_stories',
          badge: 'Livros • Boas conversas',
          descricao: 'Gosto de ler sobre como as coisas funcionam por trás das aparências: política, tecnologia, comportamento. Não sou especialista em nada disso, mas gosto de entender o contexto em que a gente vive. Boas conversas costumam me ensinar mais do que livros — e eu gosto disso também.',
          tags: '#Leitura #BoasConversas #Curiosidade',
          img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJSQviAqYNrCMQe6nEzLrZ0JALTvyWoVCSqPM7UVjP7L3lPM5qjtIoiThvHSth-siGEZFnm-VPePvJFklhhvHE5u-LX-ryC71-j-hiIJk4eYM77YBs2LnpOzwOyq11xosqkka6RTGAcwXDimeF10O0RcxAMHrwdWPBdPWAp_lAxGAeKqr_aXP6Q6_6EFmnIdIGpdDVeGuf3ws9iNSaFoRDRCeDXxnVksBeW07lu28'
        }
      ]
    };
  }
};
</script>