<template>
  <div class="home">
    <el-row type="flex" class="row-bg">
      <el-col :span="4" width="150px">
        <p style="text-align:center;font-size: 25px;">RIN1208</p>
      </el-col>
      <el-col :span="20">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          class="el-menu-demo"
          :router="true"
          active-text-color="＃303133"
          @select="handleSelect"
        >
          <el-menu-item index="/">
            <p>HOME</p>
          </el-menu-item>
          <el-menu-item index="/skill">
            <p>SKILL</p>
          </el-menu-item>
          <el-menu-item index="/career">
            <p>CAREER</p>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyHeader from "~/components/Header.vue";
export default {
  name: "navbar",
  components: {
    MyHeader
  }
};
</script>
<style>
p {
  font-size: 18px;
}
</style>
