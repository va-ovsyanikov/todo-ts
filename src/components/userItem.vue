<template>
  <div class="about_content">
  
      <transition-group name="list flip-list" tag="ul">
        <li
          class="
            max-w-screen-lg
            mx-auto
            bg-gray-50
            p-5
            mb-5
            border-solid border-b
            pb-4
            border-gray-400
          "
          v-for="post in posts"
          :key="post.id"
        >
          <p class="text-lg mb-2 font-bold">{{ post.title }}</p>
          <p>{{ post.body }}</p>
        </li>
      </transition-group>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PostsType } from "../types/interface";

export default defineComponent({
  props: {
    posts: {
      type: Array as PropType<PostsType[]>,
      default: () => [],
    },
  },
  setup() {
    return {};
  },
});
</script>
<style scoped>

.list-enter-active,
.list-leave-active {
  transition: all 0.4s ;
}
.list-enter-from{
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);

}

.flip-list-move {
  transition: transform 1s;
}
</style>