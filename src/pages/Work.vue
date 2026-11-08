<template>
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-10">
        <h2 class="text-2xl font-bold mb-6 border-b pb-2">O que faço?</h2>

        <div class="space-y-6">
            <div v-for="(item, index) in areas" :key="index" class="flex gap-4">
                <div class="w-2 h-2 mt-2 rounded-full bg-gradient-to-tr from-ig-gradient-start to-ig-gradient-end flex-shrink-0"></div>
                <div>
                    <h3 class="font-bold text-lg text-gray-900">{{ item.titulo }}</h3>
                    <p class="text-gray-600">{{ item.descricao }}</p>
                </div>
            </div>
        </div>

        <div class="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
            <p><strong>Tecnologias:</strong> PHP, Laravel, NestJS, ReactJS, Python, Machine Learning, LLMs, RAG.</p>
        </div>
    </div>
</template>

<script>
export default {
      name: 'Work',
      data() {
        return {
          areas: [
            { titulo: 'Engenharia de Software', descricao: 'Arquitetura de sistemas, desenvolvimento Full-Stack, APIs e aplicações escaláveis.' },
            { titulo: 'Inteligência Artificial', descricao: 'Machine Learning, aplicações com LLMs, RAG e integração de modelos de IA.' },
            { titulo: 'Desenvolvimento Web', descricao: 'Construção de aplicações web modernas e eficientes.' },
            { titulo: 'Pesquisa e Inovação', descricao: 'Investigação de novas tecnologias e transformação de ideias em soluções práticas.' },
            { titulo: 'Consultoria Tecnológica', descricao: 'Análise de problemas, desenho de soluções e modernização de processos.' }
          ]
        };
      }
};
</script>