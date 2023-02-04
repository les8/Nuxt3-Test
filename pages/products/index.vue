<template>
  <div>
    <h1>Products</h1>

    <ul>
      <li v-for="(p, index) in products" :key="index">
        <ProductCard :product="p" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import ProductCard from '~~/components/ProductCard.vue';

  definePageMeta({
    layout: 'products',
  });

  const {data: products} = await useFetch('https://fakestoreapi.com/products')
</script>

<style lang="scss" scoped>

</style>