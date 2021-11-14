<template>
  <div class="app">
    <nav class="nav-extended lg:pl-7 lg:pr-7">

          <div class="nav-wrapper">
            <a href="#" class="brand-logo">vue</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"
              ><i class="material-icons">menu</i></a
            >
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
            </ul>
          </div>
      
    </nav>

    <ul class="sidenav" ref="sidenav" id="mobile-demo">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>

    <suspense>
      <router-view />
    </suspense>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  setup() {
    const sidenav = ref(null);
    onMounted(() => {
      // if (window.M) {
      // Window.M.Sidenav.init(sidenav.value);
      // }
    });
    return { sidenav, window };
  },
});
</script>

<style lang="less">
body {
  background: #12b7d8;
  font-family: "JetBrains Mono", monospace !important;
}
.nav-extended {
  background-color: #2c2c2c;
}
nav li:hover,
nav li .router-link-exact-active {
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
</style>
