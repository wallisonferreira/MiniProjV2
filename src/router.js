<script setup>
import { ref, computed } from 'vue'
import About from './About.vue'
import Work from './Work.vue'
import Hobbies from './Hobbies.vue'

const routes = {
  '/': About,
  '/Work': Work,
  '/Hobbies': Hobbies
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <a href="/">Home</a> |
  <a href="#/about">About</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />
</template>