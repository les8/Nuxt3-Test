<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
//на данный момент можно вибить любой урл по такой системе и он отработает, нужно понять как блокировать несуществующие пути
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;

const { data: product } = await useFetch(uri, { key: id });

definePageMeta({
  layout: 'product',
});

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}
 
</script>

<style scoped>

</style>