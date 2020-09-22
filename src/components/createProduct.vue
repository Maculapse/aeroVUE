<template>
  <div class="createProduct">
    <div @click="onBrowseFiles" class="image">
      <h3>Add image</h3>
      <img src="../assets/plus.svg" alt="">
      <input type="file" ref="fileInput"> 
    </div>
    <input v-model="name" type="text" placeholder="product name">
    <input v-model="price" type="text" placeholder="price">
    <input v-model="quantity" type="text" placeholder="quantity">
    <button @click="onCreate">Create</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      price: '',
      quantity: '',
      baseURL: '/api/products'
    }
  },
  methods: {
    onBrowseFiles() {
      this.$refs.fileInput.click();
    },
    onCreate() {
      const productFormData = new FormData();
      productFormData.set('name', this.name);
      productFormData.set('price', this.price);
      productFormData.set('quantity', this.quantity);
      axios.post(this.baseURL, productFormData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log('Product created')
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/input.scss';
@import '../styles/primary-button.scss';

.createProduct {
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid $text;
  border-radius: 15px;
  overflow: hidden;
  
  
  .image {
    margin-top: 10px;
    width: 200px;
    height: 150px;
    border: 1px solid $text;
    border-radius: 15px;
    img {
      height: 75%;
    }
    input {
      height: 0;
      width: 0;
      overflow: hidden;
      border: none;
    }
  }
  input {
    @include input;
    margin-top: 10px;
  }
  button {
    @include button($primary);
  }
}
</style>