<script lang="ts" setup>
const model = defineModel('show', { default: false })
</script>

<template>
  <UIModal v-model:show="model" title="Вхід">
    <div class="flex flex-col">
      <div class="flex flex-col" />
    </div>
  </UIModal>
</template>

<style>

</style>
