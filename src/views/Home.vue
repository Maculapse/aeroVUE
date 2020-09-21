<template>
  <div class="home">

    <div class="home-content">
      <h1>Our products</h1>
      <div class="products">
        <div class="product"
          v-for="product in products" 
          :key="product._id">
          <h3>{{product.name}}</h3>
          <div class="product-image">
            <img src="../assets/pad.jpg">
          </div>
          <span>
            <p>Price: ${{product.price}}</p>
          </span>
          <button>Add to cart</button>
        </div>
      </div>
    </div>




  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      menu: false,
      products: null,
      baseURL: 'api/products/'
    }
  },
  methods: {
    
  },
  mounted() {
    axios
      .get(this.baseURL)
      .then(response => {
        this.products = response.data.products;
        console.log(this.products);
      });
  }

  
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,500;0,600;0,700;1,300;1,600&family=Pacifico&display=swap');

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

  .home {
    width: 100vw;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;

    .home-content {
      height: 100vh;
      
      h1 {
        margin: 20px;
        font-weight: 400;
      }
      .products {
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .product {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 25px;
          width: 80vw;
          -webkit-box-shadow: 4px 4px 10px rgba($color: #000000, $alpha: .3);
          
          h3 {
            margin-top: 15px;
          }
          .product-image {
            width: 50vw;
            margin: 25px;
            img {
              width: 100%;
            }
          }

          button {
            @include button($primary);
          }
        }
      }
    }


  }
</style>