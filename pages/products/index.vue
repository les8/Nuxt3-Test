<template>
  <div>
    <h1>Products</h1>

    <ul>
      <li v-for="p in products">
        <NuxtLink :to="`products/${p.id}`">{{ p.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products',
  });

  const {data: products} = await useFetch('https://fakestoreapi.com/products')
</script>

<style lang="scss" scoped>

</style>