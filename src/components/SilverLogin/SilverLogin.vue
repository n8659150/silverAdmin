<template>

  <div class="abs-center">
    <el-row>
      <el-col style="text-align:center;" class="login-input">
        <img src="@/assets/logo.png" width="60" height="60">
      </el-col>
    </el-row>
    <el-row>
      <el-col class="login-input">
        <el-input id="name" v-model="username" placeholder="请输入帐号">
          <template slot="prepend">帐号</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="login-input">
        <el-input id="password" v-model="password" type="password" placeholder="请输入密码">
          <template slot="prepend">密码</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="login-button">
        <el-button id="login" style="width:100%" type="primary" @click="login()">登 录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name: "SilverLogin",
    data() {
        return {
            username: "",
            password: ""
        };
    },
    mounted() {
        let currentUser = AV.User.current();
        if (currentUser) {
            this.$message({
                message: "当前为登录状态，请先登出",
                type: "warning"
            });
            this.$router.push({ path: "/" });
        } else {
            this.$router.push({ path: "/login" });
        }
    },
    methods: {
        login() {
            let _this = this;
            AV.User.logIn(_this.username, _this.password).then(
                function(loggedInUser) {
                    console.log(loggedInUser);
                    loggedInUser._sessionToken !== null
                        ? (_this.$message({
                              message: "登录成功",
                              type: "success"
                          }),
                          _this.$router.push({ path: "/" }))
                        : alert("登录失败,请检查网络");
                },
                function(error) {
                    alert("用户名密码错误");
                }
            );
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-input,
.login-button {
    width: 292px;
}
.login-input {
    margin-bottom: 12px;
}
.login-button {
    margin-top: 12px;
}

.abs-center {
    position: absolute;
    width: 293px;
    height: 350px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
</style>

