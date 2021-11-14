<template>
  <input
    class="browser-default h-10 outline-none pl-2 w-1/2 ml-1.5"
    id="input_text"
    type="text"
    placeholder="Search"
    :value="modelValue"
    @input="updateValue"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue:{
      type:String
    }
  },

  setup(_, { emit }) {

  const updateValue = (e:any)=> {
      emit("update:modelValue", e.target.value);
    
    };

      return { updateValue };
  },
});
</script>
