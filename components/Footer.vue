<template>
  <div class="footer">
    <el-divider></el-divider>
    <div class="link">
      <el-link class="urllink" href="https://twitter.com/sora1212su" target="_blank">Twitter</el-link>
      <el-link class="urllink" href="https://github.com/rin1208" target="_blank">GitHub</el-link>
      <el-link class="urllink" href="https://qiita.com/rin1208" target="_blank">Qiita</el-link>
    </div>
    <h4 class="text">©2019 RIN1208</h4>
  </div>
</template>

<script>
export default {};
</script>
<style>
.footer {
  bottom: 15px;
  width: 100%;
}
.text {
  text-align: center;
}
.link {
  display: flex;
  justify-content: center;
}
.urllink {
  margin: 0px 15px;
}
</style>
