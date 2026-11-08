<template>
    <div class="min-h-screen bg-ig-bg font-sans text-gray-800">
        <!-- Header -->
        <header class="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div class="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                <h1 class="text-xl font-bold italic tracking-tighter">Wallison Ferreira</h1>
                <nav class="flex space-x-4 text-sm font-semibold text-gray-600">
                    <router-link to="/" class="hover:text-black" active-class="text-black">Quem Sou Eu?</router-link>
                    <router-link to="/work" class="hover:text-black" active-class="text-black">O que faço?</router-link>
                    <router-link to="/hobbies" class="hover:text-black" active-class="text-black">Hobbies</router-link>
                </nav>
            </div>
        </header>

        <!-- Content -->
        <main class="max-w-4xl mx-auto px-4 py-8">
            <router-view></router-view>
        </main>

        <!-- Footer -->
        <footer class="bg-white border-t border-gray-200 py-6 mt-auto">
            <div class="max-w-4xl mx-auto px-4 flex justify-center space-x-6">
                <a href="https://instagram.com/wallisonferreira_" target="_blank" class="text-gray-500 hover:text-pink-600 transition">Instagram</a>
                <a href="https://github.com/wallisonferreira" target="_blank" class="text-gray-500 hover:text-black transition">GitHub</a>
                <a href="https://medium.com/@wallisonferreira" target="_blank" class="text-gray-500 hover:text-black transition">Medium</a>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
      name: 'App',
};
</script>