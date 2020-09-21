<template>
  <div id="app">
    <aeroHeader></aeroHeader>
    <router-view class="router"/>
    <aeroMenu></aeroMenu>
  </div>
</template>

<script>
import aeroHeader from './components/aeroHeader'
import aeroMenu from './components/aeroMenu'

export default {
  components: {
    aeroHeader,
    aeroMenu
  }
}
</script>

<style lang="scss">
$text: #2c3e50;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  p {
    color: $text;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .router {
    margin-top: 100px;
  }
}

</style>
