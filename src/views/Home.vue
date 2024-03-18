<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>
<script>
import { VueDraggableNext } from "vue-draggable-next";

export default {
  name: "kanban-board",
  components: {
    //import draggable as a component
    VueDraggableNext
  },
  data() {
    return {
      // for new tasks
      newTask: "",
      arrBackLog: [
        { name: "1" },
        { name: "2" },
        { name: "3" },
        { name: "4" }
      ],
      arrInProgress: [],
      arrTested: [],
      arrDone: []
    };
  },
  methods: {
    //add new tasks method
    add: function() {
      if (this.newTask) {
        this.arrBackLog.push({ name: this.newTask });
        this.newTask = "";
      }
    }
  }
};
</script>
<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col form-inline">
        <b-form-input id="input-2" v-model="newTask" required placeholder="Enter Task" @keyup.enter="add"></b-form-input>
        <button @click="add" variant="primary" class="ml-3">Add</button>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-3">
        <div class="p-2 alert alert-secondary">
          <h3>New Task</h3>
          <!-- Backlog draggable component. Pass arrBackLog to list prop -->
          <VueDraggableNext
            class="list-group kanban-column"
            :list="arrBackLog"
            group="tasks"
          >
            <div
              class="list-group-item"
              v-for="element in arrBackLog"
              :key="element.name"
            >
              {{ element.name }}
            </div>
          </VueDraggableNext>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-primary">
          <h3>In Progress</h3>
          <!-- In Progress draggable component. Pass arrInProgress to list prop -->
          <VueDraggableNext
            class="list-group kanban-column"
            :list="arrInProgress"
            group="tasks"
          >
            <div
              class="list-group-item"
              v-for="element in arrInProgress"
              :key="element.name"
            >
              {{ element.name }}
            </div>
          </VueDraggableNext>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-success">
          <h3>Done</h3>
          <!-- Done draggable component. Pass arrDone to list prop -->
          <VueDraggableNext
            class="list-group kanban-column"
            :list="arrDone"
            group="tasks"
          >
            <div
              class="list-group-item"
              v-for="element in arrDone"
              :key="element.name"
            >
              {{ element.name }}
            </div>
          </VueDraggableNext>
        </div>
      </div>
    </div>
  </div>
</template>
