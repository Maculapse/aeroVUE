<template>
  <header>
      <h1>Aero</h1>
    </header>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  header {
      background: url('../assets/header.svg');
      background-repeat: no-repeat;
      min-height: 100px;
      width: 100vw;
      position: fixed;
      top: 0;
      z-index: 10;
      h1 {
        font-family: 'Pacifico';
        font-weight: 100;
        font-size: 40px;
        color: white;
        text-shadow: 4px 4px 10px rgba($color: #000000, $alpha: .3);
      }
    }
</style>