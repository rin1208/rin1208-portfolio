<template>
  <div>
    <div class="profile">
      <h1>PROFILE</h1>
      <el-row :gutter="20">
        <el-col
          :xs="{span: 24, offset: 1}"
          :sm="{span: 24, offset: 1}"
          :md="{span: 24, offset: 1}"
          :lg="{span: 6, offset: 3}"
          :xl="{span: 6, offset: 3}"
        >
          <img src="icon_mikisai.png" :height="300" />
        </el-col>
        <el-col
          :xs="{span: 24, offset: 0}"
          :sm="{span: 24, offset: 0}"
          :md="{span: 24, offset: 0}"
          :lg="{span: 10, offset: 2}"
          :xl="{span: 10, offset: 2}"
        >
          <ul>
            <li class="tab">Name:</li>
            <p class="coment">RIN1208 (Backend Engineer)</p>
          </ul>
          <ul>
            <li class="tab">Date of birth:</li>
            <p class="coment">August , 23 , 1999</p>
          </ul>
          <ul>
            <li class="tab">My location:</li>
            <p class="coment">Japan, Tokyo</p>
          </ul>
          <ul>
            <li class="tab">My Hobby:</li>
            <p class="coment">Anime , Game, Comic market</p>
          </ul>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tab {
  font-size: 30px;
}
h1 {
  font-size: 40px;
  margin: 30px 40px;
}
.coment {
  margin: 0px 0px 0px 40px;
  font-size: 23px;
}
.profile {
  margin: 20px;
  padding: 10px 0px 35px 0px;
  background-color: #f5f5f5;
  border-radius: 10px;
}
</style>
