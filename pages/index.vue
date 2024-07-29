<script lang="ts" setup>
const f = ref('f')
watch(f, () => {
  console.log(f.value)
})
</script>

<template>
  <div class="w-full h-full">
    <UIInput v-model="f" color="accent" />
  </div>
</template>

<style>

</style>
