<template>
  <el-header class="silver-header flex space-between">
    <img src="@/assets/logo.png" width="60" height="60">
    <span class="silver-user row-center column-center">欢迎,admin</span>
  </el-header>
</template>

<script>
export default {
    name: "SilverHeader",
    data() {
        return {
            
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.silver-header {
  width:95%;
  margin:0 auto;
}
.silver-user {

}
</style>
