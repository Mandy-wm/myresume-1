<template>
  <div>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view />
        <About />
        <Works />
      </el-main>
      <el-footer> </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "./Header.vue";

import About from "../views/home/About";
import Works from "../views/home/Works";

export default {
  components: {
    Header,

    About,
    Works,
  },
};
</script>

<style scoped>
</style>>

