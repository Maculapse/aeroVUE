<template>
    <div class="products">
        <div
            v-for="(product, index) in products"
            :key="product._id" 
            class="singleProduct">
            <p>{{index+1+'.'}}</p>
            <div class="info">
                <p>{{product.name}}</p>
                <p>$ {{product.price}}</p>
                <p>{{product.quantity}}</p>
            </div>
            <div class="image">
                <img :src="product.image" alt="product image">
            </div>
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
        .singleProduct {
            display: flex;
            align-items: center;
            margin: 10px 15px;
            border-radius: 15px;
            -webkit-box-shadow: 4px 4px 10px rgba($color: #000000, $alpha: .3);
            .image {
                width: 20vw;
                img {
                    width: 100%;
                }
            }
            p {
                margin: 10px;
            }
        }
    }
</style>