<template>
  <div class="home">
    <el-row>
      <el-col
        :xs="{ span: 24, offset: 0 }"
        :sm="{ span: 0, offset: 0 }"
        :md="{ span: 0, offset: 0 }"
        :lg="{ span: 0, offset: 0 }"
        :xl="{ span: 0, offset: 0 }"
      >
        <div>
          <slide style="top:0px;left:0px;">
            <a href="/">
              <span>HOME</span>
            </a>
            <a href="/skill">
              <span>SKILL</span>
            </a>
            <a href="/career">
              <span>CAREER</span>
            </a>
          </slide>
        </div>
      </el-col>
      <el-col
        :xs="{ span: 24, offset: 0 }"
        :sm="{ span: 4, offset: 0 }"
        :md="{ span: 4, offset: 0 }"
        :lg="{ span: 4, offset: 0 }"
        :xl="{ span: 4, offset: 0 }"
      >
        <p style="text-align:center;font-size: 35px;">
          RIN1208
        </p>
      </el-col>
      <el-col
        :xs="{ span: 0, offset: 0 }"
        :sm="{ span: 20, offset: 0 }"
        :md="{ span: 20, offset: 0 }"
        :lg="{ span: 20, offset: 0 }"
        :xl="{ span: 20, offset: 0 }"
      >
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
