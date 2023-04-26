<template>
  <div class="h-auto w-full">
    <draggable class="h-full rounded-lg" group="tasks" animation="300"
               v-model="lane.tasks"
               tag="ul">
      <template #item="{element}">
        <div class="h-full w-full flex items-start justify-between px-3 py-3 mt-3 bg-white border border-white rounded">
          <div class="w-full h-auto flex flex-row">
            <div class="w-3/4">
              <p class="break-words"> {{element.name}}</p>
            </div>
            <div class="z-10 w-1/4 h-auto flex items-center justify-end">
              <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 cursor-pointer" @click="$emit('close', {lane: lane.id, element: element})">
                <path d="M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5" stroke="#000000"/>
              </svg>
            </div>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'Column',
  components: {
    draggable
  },
  props: ['list'],
  data() {
    return {
      drag: false,
      lane: this.list
    }
  },
  methods: {
    closeTask(element) {
      console.log('DELETE:', element)
      this.$emit('close', element)
    }
  }
};
</script>

<style scoped>

</style>
