<template>
  <div>
    <h3>Продукт {{ id }}</h3>
  </div>
</template>

<script setup lang="ts">
//на данный момент можно вибить любой урл по такой системе и он отработает, нужно понять как блокировать несуществующие пути
 const { id } = useRoute().params;
 console.log(useRoute());

 definePageMeta({
    layout: 'products',
  });
 
</script>

<style scoped>

</style>