<template>
  <div>
    <el-container>
      <el-header>
        <my-header />
      </el-header>
      <el-main>
        <nuxt />
      </el-main>
      <el-footer>
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "~/components/Header.vue";
import MyFooter from "~/components/Footer.vue";
export default {
  name: "navbar",
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

<style>
</style>
