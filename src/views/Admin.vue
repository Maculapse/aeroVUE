<template>
  <div class="admin">
    <h1>Administrator panel</h1>
    <div class="action">
      <button @click="toggleAction('products')" :class="{selected: productsShow}">Products</button>
        <div class="createProduct shown" v-show="productsShow"></div>
      <button @click="toggleAction('orders')" :class="{selected: ordersShow}">Orders</button>
        <div class="createProduct shown" v-show="ordersShow"></div>
      <button @click="toggleAction('create')" :class="{selected: createShow}">Create product</button>
        <createProduct class="createProduct shown" v-show="createShow"></createProduct>
    </div>
  </div>
</template>

<script>
import createProduct from '../components/createProduct';

export default {
  components: {
    createProduct
  },
  data() {
    return {
      productsShow: false,
      ordersShow: false,
      createShow: false
    }
  },
  methods: {
    toggleAction(action) {
      switch (action) {
        case 'products':
          if (this.productsShow === false) {
            this.productsShow = true;
          } else {
            this.productsShow = false;
          }
          break;
        case 'orders': 
          if (this.ordersShow === false) {
            this.ordersShow = true;
          } else {
            this.ordersShow = false;
          }
          break;
        case 'create': 
          if (this.createShow === false) {
            this.createShow = true;
          } else {
            this.createShow = false;
          }
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/primary-button.scss';

.admin {
  .action {
    button {
      
        @include button($primary);
        transition: .2s;
      
      &.selected {
        background: $red;
        transition: .2s;
      }
    }

    .createProduct {

      &.shown {
        height: 350px;
        opacity: 1;
        @keyframes roll {
          from {
            height: 1px;
            opacity: 0;
          } to {
            height: 350px;
            opacity: 1;
          }
        }
        animation: roll .7s;
      }
    }
  }
}


</style>