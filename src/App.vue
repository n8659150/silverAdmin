<template>

  <!-- <img src="./assets/logo.png"> -->
  <div id="app">
    <!-- <el-container direction="vertical" style="height:100%;">
      
      <router-view/>
      
    </el-container> -->
    <el-container direction="vertical" style="height:100%;">
      <silverHeader></silverHeader>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container direction="vertical">
          <router-view/>
          <silverFooter></silverFooter>
        </el-container>
      </el-container>
    </el-container>

  </div>

</template>

<script>
import silverHeader from "@/components/silverHeader/silverHeader";
import silverFooter from "@/components/silverFooter/silverFooter";
export default {
    name: "App",
    components: {
        silverHeader,
        silverFooter
    }
};
</script>

<style>
html,
body {
    height: 100%;
}
body {
    margin: 0;
}

#app {
    /* font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px; */
    height: 100%;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.el-header,
.el-footer {
    /* background-color: #b3c0d1;
    color: #333;
    text-align: center; */
    line-height: 60px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>
