<template>
  <el-menu default-active="1-1" theme="dark" class="so-sidenav" @open="handleOpen" @close="handleClose">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>微信CP</template>
      <el-menu-item-group title="新建活动">
        <el-menu-item index="1-1">
          <router-link to="/templateMsg">添加和发送</router-link>
        </el-menu-item>
        <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
      </el-menu-item-group>
      <el-menu-item-group title="查看活动">
        <el-menu-item index="1-3">
          <router-link to="/applicantsTable">报名情况</router-link>
        </el-menu-item>
        <el-menu-item index="1-4">
          <router-link to="/matchTable">配对情况</router-link>
        </el-menu-item>
        <el-menu-item index="1-5">
          <router-link to="/leftTable">剩余情况</router-link>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="历史活动">
        <el-menu-item index="1-5">查看</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
    <el-menu-item index="3"><i class="el-icon-setting"></i>设置</el-menu-item>
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
    a{
      color:#eee;
      text-decoration: none;
    }
  }
</style>
