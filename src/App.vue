<template>

    <!-- <img src="./assets/logo.png"> -->
    <div id="app">
        <!-- <el-container direction="vertical" style="height:100%;">
      
      <router-view/>
      
    </el-container> -->
        <el-container direction="vertical" style="height:100%;">
            <silverHeader></silverHeader>
            <el-container>
                <el-aside width="200px">
                    <el-menu default-active="2" style="height:100%;">
                        <el-menu-item index="1">
                            <i class="el-icon-location"></i>
                            <span slot="title">导航一</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
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
