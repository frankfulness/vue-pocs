<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { getCurrentInstance } from 'vue'

onMounted(() => {
  const app = getCurrentInstance()
  console.log('Vue version:', app.appContext.app.version)
  console.log('Vue devtools enabled:', app.appContext.app.config.devtools)
  console.log('Vue performance enabled:', app.appContext.app.config.performance)
})
</script>
