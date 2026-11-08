<template>
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-10">
        <h2 class="text-2xl font-bold mb-6 border-b pb-2">Hobbies</h2>

        <p class="text-gray-700 mb-6 italic">
            Nem tudo gira em torno de tecnologia. Gosto de música, boas conversas, café e de tudo aquilo que desperta curiosidade.

            Sou apaixonando por todas estas coisas, de tecnologia, de música, cinema, no intuito de acalmar uma mente em maior parte do tempo ocupada.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="hobby in hobbies" :key="hobby.nome" class="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                <h3 class="font-bold text-gray-800 mb-1">{{ hobby.nome }}</h3>
                <p class="text-sm text-gray-600">{{ hobby.descricao }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
      name: 'Hobbies',
      data() {
        return {
          hobbies: [
            { nome: 'Música', descricao: 'Post-punk, stoner rock, doom metal e vertentes alternativas. Descobrir bandas e sonoridades.' },
            { nome: 'Café', descricao: 'Apreciador da cultura do café e conversa com amigos no fim da tarde.' },
            { nome: 'Leitura e Pesquisa', descricao: 'Sou apaixonado por tecnologia, ciência, futurismo, mas o tema que mais exploro para minha mente é a física quântica. Estou há 10 anos tentando entender a primeira linha.' },
            { nome: 'Criatividade e Design', descricao: 'Identidade visual, design, projetos autorais e experimentação com novas ideias.' },
            { nome: 'Natureza e Amazônia', descricao: 'Interesse por questões socioambientais, sustentabilidade e preservação.' },
            { nome: 'Tecnologia', descricao: 'Explorar ferramentas, experimentar novas tecnologias e entender como as coisas funcionam.' }
          ]
        };
      }
};
</script>