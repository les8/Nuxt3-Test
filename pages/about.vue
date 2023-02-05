<template>
  <h1>About page here</h1>
  {{ data }}
</template>

<script setup>
const { data } = await useFetch('/api/ninja?name=mario', {
  method: 'post',
  body: {
    age: 30,
  },
});
</script>