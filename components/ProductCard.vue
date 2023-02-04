<template>
  <div>
    <img :src="product.image" alt="image" width="50" height="50">
    <p>{{ product.title }}</p>
    <NuxtLink :to="`products/${product.id}`">View details</NuxtLink>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product']);
</script>

<style lang="scss" scoped>

</style>