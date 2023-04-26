<template>
  <div class="w-full h-screen bg-[#111827] flex items-center justify-between flex-col space-y-3">
    <input
        v-model="newTask"
        class="w-96 mt-10 space-y-0 rounded"
        type="text"
        placeholder="New Task"
        @keypress.enter="addToDo"
    >
    <div class="mt-20 w-full h-full flex justify-center">
      <div v-for="lane in lanes">
        <div class="px-3 py-3 mr-4 bg-gray-300 rounded-lg w-96 min-h-[8rem] flex flex-col">
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
