<template>
  <div>
    <img :src="product.image" alt="image" width="50" height="50" />
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.description }}</p>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product']);
</script>

<style lang="scss" scoped>

</style>