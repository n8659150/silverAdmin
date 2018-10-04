<template>
  <el-header class="silver-header flex space-between">
    <img src="@/assets/logo.png" width="60" height="60">
    <span class="row-center column-center">欢迎, {{currentUser}}<a @click="logout">&nbsp;&nbsp;&nbsp;&nbsp;[登 出]</a></span>
  </el-header>
</template>

<script>
export default {
    name: "SilverHeader",
    data() {
        return {
          currentUser: ""
        };
    },
    mounted() {
      let currentUser = AV.User.current();
      currentUser === null ? (this.$router.push({path:'/login'})) : (console.log(this.currentUser = currentUser.attributes.username));
    },
    methods: {
      logout() {
        AV.User.logOut();
  // 现在的 currentUser 是 null 了
        let currentUser = AV.User.current();
        currentUser === null ? (this.$router.push({path:'/login'})) : (alert("登出失败，请检查网络"));
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.silver-header {
  width:95%;
  margin:0 auto;
}


</style>
