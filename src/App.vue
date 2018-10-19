<template>
    <div id="app">
        <router-view></router-view>
        <Loading/>
    </div>
</template>

<script>
import Loading from '@/components/Loading'
export default {
  name: "app",
  components: {
    Loading
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
html,
body {
  width: 100%;
  height: 100%;
  font-size: 0.3rem;
  overflow: hidden;
}
</style>
