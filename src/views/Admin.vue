<template>
  <div class="admin">
    <h1>Owner's panel</h1>
    <div class="action">
      <button @click="toggleAction('products')" :class="{selected: productsShow}">Products</button>
        <adminProducts ref="adminProducts" class="roller shown" :class="{hidden: !productsShow}"></adminProducts>
      <button @click="toggleAction('orders')" :class="{selected: ordersShow}">Orders</button>
        <div class="roller shown" :class="{hidden: !ordersShow}"></div>
      <button @click="toggleAction('create')" :class="{selected: createShow}">Create product</button>
        <createProduct class="roller shown" :class="{hidden: !createShow}"></createProduct>
    </div>  
  </div>
</template>

<script>
import createProduct from '../components/createProduct';
import adminProducts from '../components/adminProducts';

export default {
  components: {
    createProduct,
    adminProducts
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

    .roller {

      &.shown {
        height: 350px;
        opacity: 1;
        @keyframes roll-out {
          from {
            height: 0px;
            opacity: 0;
          } to {
            height: 350px;
            opacity: 1;
          }
        }
        animation: roll-out .7s;
      }
      &.hidden {
        height: 0px;
        opacity: 0;
        @keyframes roll-in {
          from {
            height: 350px;
            opacity: 1;
          } to {
            height: 0px;
            opacity: 0;
          }
        }
        animation: roll-in .7s;
      }
    }
  }
}


</style>