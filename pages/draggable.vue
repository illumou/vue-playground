<template>
  <main class="w-full h-screen bg-[#111827]">
    <div class="flex flex-col space-y-5">
      <div class="flex justify-center items-center flex-col justify-between gap-y-2">
        <a class="mt-4 text-white underline" target="_blank" href="https://github.com/illumou/vue-dragger"> Github Repo </a>
        <input
            v-model="newTask"
            class="w-96 h-10 p-2 font-medium space-y-0 rounded"
            type="text"
            placeholder="New Task"
            @keypress.enter="addToDo"
        >
      </div>
      <div class="w-full h-full flex justify-center">
        <div v-for="lane in lanes">
          <div class="px-3 py-3 mx-2 bg-gray-300 rounded-lg w-96 min-h-[8rem] flex flex-col">
            <div class="flex flex-row w-full justify-between border-b-2" :style="{borderColor: lane.border}">
              <p class="text-gray-700">
                {{ lane.name }}
              </p>
              <button @click="addTask(lane.id)" class="text-gray-700">Add Task</button>
            </div>
            <Column :list="lane" :id="lane.id" @close="closeTask"/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Column from '../components/draggable/Column.vue';

export default {
  name: 'draggable',
  components: {Column},
  data() {
    return {
      newTask: '',
      lanes: [
        {id: 1, name: 'To Do', tasks: [{name: 'Einkaufen'}], border: 'gray'},
        {id: 2, name: 'In Progress', tasks: [], border: 'yellow'},
        {id: 3, name: 'Done', tasks: [{name: 'Aufräumen'}], border: 'green'},
        {id: 4, name: 'Backlog', tasks: [], border: 'red'},
      ],
    }
  },
  methods: {
    addToDo() {
      if (this.newTask !== '') {
        const lane = this.lanes.find(({id}) => id === 1 )
        lane.tasks.push({name: this.newTask})
        this.newTask = ''
      }
    },
    addTask(laneID) {
      if (this.newTask !== '') {
        const lane = this.lanes.find(({id}) => id === laneID )
        lane.tasks.push({name: this.newTask})
        this.newTask = ''
      }
    },
    closeTask(object) {
      const lane = this.lanes.find(({id}) => id === object.lane)
      const index = lane.tasks.indexOf(object.element)
      if (index > -1) {
        lane.tasks.splice(index, 1)
      }
    }
  }
};
</script>

<style scoped>

</style>
