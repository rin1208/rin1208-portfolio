<template>
  <div class="home">
    <el-row>
      <el-col
        :xs="{span: 12, offset: 0}"
        :sm="{span: 4, offset: 0}"
        :md="{span: 4, offset: 0}"
        :lg="{span: 4, offset: 0}"
        :xl="{span: 4, offset: 0}"
      >
        <p style="text-align:center;font-size: 25px;">RIN1208</p>
      </el-col>
      <el-col
        :xs="{span: 0, offset: 0}"
        :sm="{span: 20, offset: 0}"
        :md="{span: 20, offset: 0}"
        :lg="{span: 20, offset: 0}"
        :xl="{span: 20, offset: 0}"
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
      <el-col
        :xs="{span: 6, offset: 4}"
        :sm="{span: 0, offset: 0}"
        :md="{span: 0, offset: 0}"
        :lg="{span: 0, offset: 0}"
        :xl="{span: 0, offset: 0}"
      >
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          class="el-menu-demo"
          :router="true"
          active-text-color="＃303133"
          @select="handleSelect"
        >
          <el-submenu index="2-4">
            <template slot="title">MENU</template>
            <el-menu-item index="/">
              <p>HOME</p>
            </el-menu-item>
            <el-menu-item index="/skill">
              <p>SKILL</p>
            </el-menu-item>
            <el-menu-item index="/career">
              <p>CAREER</p>
            </el-menu-item>
          </el-submenu>
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
