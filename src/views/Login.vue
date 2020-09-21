<template>
  <div class="login">
    <h1>Log in</h1>
    <div class="login-modal">
      <input type="text" placeholder="e-mail/login">
      <input type="password" placeholder="password">
      <button>Log in</button>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
$primary: #03A9F4;
$secondary: #3ec2ff;
$text: #4a4c53;

@mixin button($color) {
  background-color: $color;
  color: white;
  font-size: 24px;
  outline: none;
  border: none;
  border-radius: 15px;
  min-width: 200px;
  max-width: 250px;
  height: 50px;
  margin: 10px;
  -webkit-box-shadow: 4px 4px 10px rgba($color: #000000, $alpha: .3);
  
  &:hover {
    background-color: $secondary;
  }
}

@mixin input {
  height: 50px;
  min-width: 200px;
  max-width: 200px;
  border-radius: 15px;
  border: 1px solid $text;
  text-align: center;
  font-size: 18px;
  outline: none;

  &:focus {
    border: 2px solid $primary;
  }
}

  .login {
    height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin-top: 25px;
    }

    .login-modal {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 90vw;
      height: 250px;
      margin-top: 10px;
      input {
        @include input;
      }
      button {
        @include button($primary);
      }
    }
  }
</style>