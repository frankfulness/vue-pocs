<template>
  <header class=" bg-slate-50 dark:bg-slate-950 dark:text-slate-50">
    <nav>
      <NavigationBar />
    </nav>
  </header>
  <aside class=" bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
    <SideNavigation />
  </aside>
  <main class=" bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
    <TabsTemplate />
  </main>
</template>

<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import SideNavigation from '@/components/SideNavigation.vue';
import TabsTemplate from '@/components/TabsTemplate.vue';
</script>
