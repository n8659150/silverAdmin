<template>
  <el-footer>{{msg}}</el-footer>
</template>

<script>
export default {
    name: "SilverFooter",
    data() {
        return {
            msg: "2018 SilverHouse© Copyrights Reserved"
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
    font-size: 11px;
}
</style>
