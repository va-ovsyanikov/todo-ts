<template>
  <div class="home mr-3 ml-3 lg:mx-auto">
    <div class="container max-w-screen-lg  ">
      <div
        class="
          home_top
          h-16
          mt-10
          bg-item1-color
          flex
          justify-end
          items-center
          pl-5
          pr-3
        "
      >
        <div class="mr-auto text-blue-50 text-2xl">ToDo List</div>

        <input
          class="bg-blue-50 browser-default h-10 outline-none pl-2 w-2/5"
          id="input_text"
          v-model.trim="valueInput"
          @keypress.enter="addTask"
          type="text"
             placeholder="Task"
        />
        <button
          class="bg-item2-color h-10 pl-3 pr-3 text-blue-50 ml-3 text-lg"
          @click="addTask"
        >
          New task
        </button>
      </div>

      <!-- =======home_content========= -->
      <div class="home_content bg-blue-50 pt-10 pb-10">
        <!-- =======Undone========= -->
        <div class=" w-5/6 mx-auto">
          <div
            class="
              flex
              justify-between
              items-center
              pb-4
              border-solid border-b border-gray-400
              mb-7
            "
          >
            <span class="text-xl font-bold">List</span>
            <span class="text-lg font-bold">{{ taskList.length }}</span>
          </div>
<transition-group name="list">
          <div
            class="item_todo flex justify-start mb-5"
            v-for="task in taskList"
            :key="task.id"
          >
            <label>
              <input
                type="checkbox"
                class="filled-in"
                @change="todoChange(task.id, 'list')"
             
              />
              <span></span>
            </label>
            <span class="text-base">{{ task.title }}</span>
            <button
              class="
                bg-item1-color
                ml-auto
                h-7
                pl-3
                pr-3
                text-blue-50 text-base
              "
              @click="removeTask(task.id, 'list')"
            >
              Remove
            </button>
          </div>
</transition-group >
        </div>

        <!-- =======Done========= -->

        <div class="done w-5/6 mx-auto">
          <div
            class="
              flex
              justify-between
              items-center
              pb-4
              border-solid border-b border-gray-400
              mb-6
            "
          >
            <span class="text-xl font-bold">Done</span>
            <span class="text-lg font-bold">{{ taskDone.length }}</span>
          </div>
<transition-group name="list">
          <div
            class="item_todo flex justify-start mb-5"
            v-for="task in taskDone"
            :key="task.id"
          >
            <label>
              <input
                type="checkbox"
                class="filled-in"
                checked="checked"
                @change="todoChange(task.id, 'done')"
              />
              <span></span>
            </label>
            <span class="text-base">{{ task.title }}</span>
            <button
              class="
                bg-item1-color
                ml-auto
                h-7
                pl-3
                pr-3
                text-blue-50 text-base
              "
              @click="removeTask(task.id, 'done')"
            >
              Remove
            </button>
          </div>
          </transition-group >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import {TaskType} from '../types/interface'

export default defineComponent({
  name: "Home",
  components: {},

  setup() {
    // state
    const valueInput = ref<string>('');

    let taskList = ref<TaskType[]>([
      { id: 0, title: "Task1" },
      { id: 1, title: "Task2" },
      { id: 2, title: "Task3" },
    ]);

    let taskDone = ref<TaskType[]>([]);

    //  add task
    const addTask = () => {
      if (valueInput.value === "") {
        return alert("Not empty field");
      }
      taskList.value.push({
        id: Math.round(Math.random() * (0 - 100) + 0),
        title: valueInput.value,
      });
      valueInput.value = "";
    };

    // change task
    const todoChange = (id: number, type: string) => {
      if (type === "list") {
        const index = taskList.value.findIndex((item) => item.id === id);
        if (index !== -1) {
          const el = taskList.value.splice(index, 1);
          taskDone.value.unshift(...el);
        }
      } else {
        const index = taskDone.value.findIndex((item) => item.id === id);
        if (index !== -1) {
          const el = taskDone.value.splice(index, 1);
          taskList.value.unshift(...el);
        }
      }
    };

    // remove task
    const removeTask = (id: number, type: string) => {
      if (type === "list") {
        taskList.value = taskList.value.filter((item) => item.id !== id);
      } else {
        taskDone.value = taskDone.value.filter((item) => item.id !== id);
      }
    };

    return {
      taskList,
      addTask,
      valueInput,
      removeTask,
      todoChange,
      taskDone,
    };
  },
});
</script>
<style scoped>
[type="checkbox"].filled-in:checked + span:not(.lever):after {
  top: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #12b7d8;
  background-color: #12b7d8;
  z-index: 0;
}

.item_todo button:focus {
  background-color: #12b7d8;
}
.home_top button:focus {
  background-color: #12b7d8;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from{
    opacity: 0;
}
.list-leave-to {
  opacity: 0;

}
</style>
