<template>
    <div class="products">
        <div
            v-for="product in products"
            :key="product._id" 
            class="singleProduct">
            <h1>{{product.name}}</h1>
            <h2>{{product.price}}</h2>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            products: null,
            baseURL: 'api/products/'
        }
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

<style lang="scss">
    .products {
        overflow: hidden;
    }
</style>