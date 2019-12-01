<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <h2 style="text-align:center">RIN1208</h2>
      </el-aside>
      <el-main>
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          class="el-menu-demo"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <router-link to="/">
              <p>HOME</p>
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/skill">
              <p>SKILL</p>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-main>
    </el-container>
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
