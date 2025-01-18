<template>
  <div class="bg-white dark:bg-black" :class="isDarkTheme ? 'dark' : 'light'">
    <!-- <div :class="isDarkTheme ? 'dark' : 'light'"> -->
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <Button @click="toggleTheme" class="theme-toggle">
            {{ isDarkTheme ? '🌞 Light' : '🌙 Dark' }}
          </Button>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Button from 'primevue/button'
import HelloWorld from './components/HelloWorld.vue'

const isDarkTheme = ref(false)

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
  document.documentElement.setAttribute('data-theme', isDarkTheme.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDarkTheme.value = savedTheme === 'dark'
  } else {
    isDarkTheme.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  document.documentElement.setAttribute('data-theme', isDarkTheme.value ? 'dark' : 'light')
})

watch(isDarkTheme, (newValue) => {
  localStorage.setItem('theme', newValue ? 'dark' : 'light')
})
</script>
