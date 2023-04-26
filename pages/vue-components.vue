<template>
  <div class="h-screen w-full bg-[#0d0d0d] flex items-center justify-center flex-col space-y-4">
    <div class="flex items-center justify-center flex-col w-full space-y-2">
      <div class="w-1/2 space-x-10 flex flex-row justify-between pb-2 border-b-2 border-white">
        <h1 class="text-white text-2xl"> Components: </h1>
        <div class="space-x-3">
          <button class="border-2 border-white p-2 bg-white rounded-xl hover:shadow-amber-100" @click="changeComponent('one')"> Component 1 </button>
          <button class="border-2 border-white p-2 bg-white rounded-xl hover:shadow-amber-100" @click="changeComponent('two')"> Component 2 </button>
        </div>
      </div>
      <div class="w-1/2 space-x-10 flex flex-row justify-between pb-2 border-b-2 border-white">
        <h1 class="text-white text-2xl"> Background-color: </h1>
        <div class="space-x-3">
          <button class="border-2 border-white p-2 bg-white rounded-xl" @click="changeColor('default')"> Default </button>
          <button class="border-2 border-white p-2 bg-white rounded-xl" @click="changeColor('green')"> Green </button>
          <button class="border-2 border-white p-2 bg-white rounded-xl" @click="changeColor('red')"> Red </button>
          <button class="border-2 border-white p-2 bg-white rounded-xl" @click="changeColor('blue')"> Blue </button>
        </div>
      </div>
      <div class="w-1/2 space-x-10 flex flex-row justify-between pb-2 border-b-2 border-white">
        <h1 class="text-white text-2xl"> Custom background-color: </h1>
        <div class="space-x-1">
          <input class="h-full rounded-xl text-center" v-model="inputColor" placeholder="custom color" @keypress.enter="changeColor(inputColor)"/>
          <button class="border-2 border-white p-2 bg-white rounded-xl" @click="changeColor(inputColor)"> Go </button>
        </div>
      </div>
    </div>
    <div class="w-1/2 h-96 border-2 border-white flex items-center justify-center">
      <h1 v-if="!componentActive" class="text-white font-bold text-2xl"> NIX HIER</h1>
      <component :is="current" :bgColor="bgColor" v-if="componentActive" @closeComponent="closeComponent"/>
    </div>
    <a class="text-white underline" target="_blank" href="https://github.com/illumou/vue-variable-components"> Github Repo </a>
  </div>
</template>

<script>
import ComponentOne from "../components/variable/ComponentOne";
import ComponentTwo from "../components/variable/ComponentTwo";

export default {
  name: 'vue-components',
  components: [ComponentOne, ComponentTwo],
  data() {
    return {
      current: '',
      bgColor: '',
      inputColor: '',
      componentActive: false
    }
  },
  methods: {
    changeComponent(component) {
      switch (component) {
        case 'one': {
          this.current = ComponentOne
          this.bgColor = 'gray'
          this.componentActive = true
          break
        }
        case 'two': {
          this.current = ComponentTwo
          this.bgColor = 'white'
          this.componentActive = true
          break
        }
      }
    },
    changeColor(color) {
      if(this.inputColor) {
        this.inputColor = ''
      }
      this.bgColor = color
    },
    closeComponent() {
      this.current = ''
      this.componentActive = false
    }
  }
}
</script>

<style scoped>

</style>
