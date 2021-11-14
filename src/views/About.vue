<template>
  <div class="about">
    <div class="mr-3 ml-3 lg:mx-auto">
      <div class="container max-w-screen-lg">
        <div
          class="
            home_top
            h-16
            mt-10
            bg-item1-color
            flex
            justify-between
            items-center
            pl-3
            pr-3
            mb-4
          "
        >
          <select-posts v-model="selectValue" />

          <search-posts v-model="searchInput" />
        </div>
      </div>
    </div>

    <user-list :posts="searchPosts" />
  </div>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import userList from "../components/userItem.vue";
import { postGetAll } from "../services/post.services";
import selectPosts from "../components/selectPosts.vue";
import searchPosts from "../components/searchPosts.vue";
export default defineComponent({
  components: {
    userList,
    searchPosts,
    selectPosts,
  },

  async setup() {
    const searchInput = ref("");
    const selectValue = ref("");

    // posts
    const posts = await postGetAll();

    // search
    const searchPosts = computed(() => {
      return selectsPosts.value.filter((item) =>
        item.title.toLowerCase().includes(searchInput.value.toLowerCase())
      );
    });

    //select
    const selectsPosts = computed(() => {
      return [...posts].sort((a, b) => {
        return a[selectValue.value]?.localeCompare(b[selectValue.value]);
      });
    });

    return { selectsPosts, searchInput, selectValue, searchPosts };
  },
});
</script>
<style scoped>
</style>
