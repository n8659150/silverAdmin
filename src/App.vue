<template>

    <!-- <img src="./assets/logo.png"> -->
    <div id="app">
        <!-- <el-container direction="vertical" style="height:100%;">
      
      <router-view/>
      
    </el-container> -->
        <SilverLogin v-if="$route.path === '/login'"></SilverLogin>
        <el-container direction="vertical" style="height:100%;" v-if="$route.path !== '/login'">
            <SilverHeader></SilverHeader>
            <el-container>
                <el-aside width="200px">
                    <el-menu :default-active="$route.path" style="height:100%;" router>

                        <el-menu-item index="/NewOrder">
                            <span slot="title">添加订单</span>
                        </el-menu-item>

                        <el-menu-item index="/">
                            <span slot="title">查看订单</span>
                        </el-menu-item>

                        <el-menu-item index="3">
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-container direction="vertical">
                    <router-view class="el-main" />
                    <SilverFooter></SilverFooter>
                </el-container>
            </el-container>
        </el-container>

    </div>

</template>

<script>
import SilverLogin from "@/components/SilverLogin/SilverLogin";
import SilverHeader from "@/components/SilverHeader/SilverHeader";
import SilverFooter from "@/components/SilverFooter/SilverFooter";
export default {
    name: "App",
    components: {
        SilverLogin,
        SilverHeader,
        SilverFooter
    },
    data() {
        return { currentUser: "" };
    },
    mounted() {
        let currentUser = AV.User.current();
        if (currentUser) {
            this.currentUser = currentUser.attributes.username;
            console.log(currentUser);
        } else {
            this.$route.push({ path: "/login" });
        }
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
    width: 100%;
    height: 100%;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.el-header,
.el-footer {
    line-height: 60px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
    border-top: solid 1px #e6e6e6;
}

.el-main {
    background-color: #e9eef3;
}

body > .el-container {
    margin-bottom: 40px;
}
.el-container {
    border-top: solid 1px #e6e6e6;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>
