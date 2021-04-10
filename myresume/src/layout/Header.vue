<template>
  <div>
     <el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
       <el-menu-item index="aboout"></el-menu-item>
       <el-menu-item index="technology"></el-menu-item>
       <el-menu-item index="works"></el-menu-item>
       <el-menu-item index="expirences"></el-menu-item>
       <el-menu-item index="contact"></el-menu-item>
     </el-menu>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activeIndex: "about"
    }
  }

}
</script>

<style>

</style>