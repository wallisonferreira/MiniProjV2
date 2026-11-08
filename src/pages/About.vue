<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-10">
    <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
      <!-- Foto de Perfil -->
      <div class="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-ig-gradient-start via-ig-gradient-mid to-ig-gradient-end p-1 flex-shrink-0">
        <div class="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm overflow-hidden">
          <img src="/profile.jpg" alt="Wallison Ferreira" class="w-full h-full object-cover">
        </div>
      </div>

      <div class="flex-1 text-center md:text-left">
        <h2 class="text-2xl font-bold mb-2">Wallison Ferreira</h2>
        <p class="text-sm text-gray-500 mb-4">Desenvolvedor Full-Stack | Mestrando em Eng. Informática (UTAD)</p>
        
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Licenciado em Sistemas de Informação pela UFAC (Brasil), com mais de 10 anos de experiência como desenvolvedor Full-Stack. Atuei em instituições como MPAC, DETRAN-SP e na área de IA na Virtusa.
          </p>
          <p>
            Atualmente sou mestrando em Engenharia Informática e Tecnologia Web na UTAD (Portugal), aprofundando conhecimentos em engenharia de software, sistemas inteligentes e tecnologias web. Em paralelo, estruturo startups como a Moniva (soluções ambientais) e DocFlowe (soluções médicas).
          </p>
          <p class="font-medium text-gray-900">
            Interesses: Interseção entre tecnologia, inteligência artificial e inovação.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'About' };
</script>