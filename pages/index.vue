<template>
  <div class="w-full h-screen bg-[#111827] flex justify-center items-center flex-col space-y-8">
    <h1 class="text-white text-7xl font-bold"> Vue.JS Playground </h1>
    <div class="space-x-6">
      <NuxtLink href="/draggable" class="text-white underline">Draggable</NuxtLink>
      <NuxtLink href="/vue-components" class="text-white underline">Vue Components</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>

</style>
