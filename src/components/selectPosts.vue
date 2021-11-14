<template>
  <select
    ref="select"
    class="
      browser-default
      h-10
      bg-gray-50
      w-1/2
      focus:border-none focus:outline-none
      mr-1.5
    "
    :value="modelValue"
    @change="sortPosts"
  >
    <option selected value="" disabled>All</option>
    <option v-for="(option, i) in options" :key="i" :value="option.value">
      {{ option.title }}
    </option>
  </select>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { SelectType } from "../types/interface";
export default defineComponent({
  props: {
    modelValue: {
      type: String,
    },
  },

  setup(_, { emit }) {
    const options = ref<SelectType[]>([
      { value: "title", title: "Title" },
      { value: "body", title: "Content" },
    ]);

    const sortPosts = (e: any) => {
      emit("update:modelValue", e.target.value);
    };
    return { options, sortPosts };
  },
});
</script>
