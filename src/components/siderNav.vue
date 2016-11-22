<template>
  <el-menu default-active="2" theme="dark" class="so-sidenav" @open="handleOpen" @close="handleClose">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>导航一</template>
      <el-menu-item-group title="分组一">
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
    <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang='less'>
  .so-sidenav{
    border-radius: 0;
  }
</style>
