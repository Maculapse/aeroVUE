<template>
  <div class="menu" v-click-outside="exitMenu" >
      <div @click="toggleMenu"  class="menu-button" :class="{menuActive: menu}">
        <div class="buttons-group" :class="{menuButtonActive: menu}">
          <button @click="goHome"><p>Home</p></button>
          <button @click="goLogin"><p>Log in</p></button>
          <button @click="goSignup"><p>Sign up</p></button>
        </div>
      </div>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  data() {
    return {
      menu: false
    }
  },
  methods: {
    toggleMenu() {
      if (this.menu===false) {
        this.menu=true;
      } else {
        this.menu=false;
      }
    },
    goHome() {
      if (this.menu===true) {
        this.$router.push('/');
      }
    },
    goLogin() {
      if (this.menu===true) {
        this.$router.push('/login')
      }
    },
    goSignup() {
      if (this.menu===true) {
        this.$router.push('/signup')
      }
    },
    exitMenu() {
        this.menu = false;
      }
  },
  directives: {
    ClickOutside
  }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,500;0,600;0,700;1,300;1,600&family=Pacifico&display=swap');

  .menu {
      .menu-button {
        width: 20vw;
        height: 20vw;
        border-radius: 50%;
        background: $primary;
        position: fixed;
        bottom: 0;
        margin: 5vw;
        -webkit-box-shadow: 4px 4px 10px rgba($color: #000000, $alpha: .4);
        display: grid;
        place-items: center;
        transition: .5s;
        img {
          width: 12vw;
        }
      }
      .menuActive {
        width: 90vw;
        height: 60vw;
        border-radius: 4vw;
      }
      .buttons-group {
        display: grid;
        gap: 5px;
        transition: .5s;
        button {
          transition: .5s;
          outline: none;
          background: white;
          border: none;
          border-radius: 5vw;
          width: 13vw;
          height: 2vw;
          p {
            transition: .2s;
            opacity: 0;
            font-size: 10px;
          }
        }
      }
      .menuButtonActive {
        transition: .5s;
        gap: 4vw;
        button {
          transition: .5s;
          width: 70vw;
          height: 13vw;
          p {
            opacity: 1;
            font-size: 24px;
            transition: .8s;
          }
        }
      }
    }
</style>