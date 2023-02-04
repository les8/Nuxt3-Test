<template>
  <div>
    <p>{{ error.statusCode }}</p>
    <p>{{ error.message }}</p>
    <button @click="handleClearError">Go home</button>
  </div>
</template>

<script setup>
  defineProps(['error']);

  const handleClearError = () => clearError({redirect: '/'});
</script>

<style lang="scss" scoped>

</style>