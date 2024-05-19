<script setup>
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="less" scoped>
html，body{
  height: 100%;
  margin: 0;
  }
  div{
  height: 100%;
  }
//   html, body {
//   margin: 0;
//   padding: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden; /* 防止滚动条出现 */
// }

#app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
