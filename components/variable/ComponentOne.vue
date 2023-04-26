<template>
  <div class="w-full h-full flex justify-center items-center flex-col space-y-5" :style="{backgroundColor: color}">
    <a class="font-bold text-2xl"> Component 1</a>
    <a class="text-black"> Color: {{ this.color }}</a>
    <button class="border-2 border-black p-2 rounded-xl bg-black text-white" @click="closeComponent"> CLOSE </button>
  </div>
</template>

<script>
export default {
  name: 'ComponentOne',
  props: ['bgColor'],
  data() {
    return {
      defaultColor: 'gray',
      color: ''
    }
  },
  methods: {
    closeComponent() {
      this.$emit('closeComponent')
    }
  },
  watch: {
    bgColor(newColor, oldColor) {
      if (newColor !== oldColor) {
        if (newColor !== 'default') {
          this.color = newColor
        } else {
          this.color = this.defaultColor
        }
      }
    }
  },
  beforeMount() {
    this.color = this.defaultColor
  }
}
</script>

<style scoped>

</style>
