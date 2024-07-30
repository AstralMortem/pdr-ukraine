<script lang="ts" setup>

</script>

<template>
  <div class="card bg-white w-96 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">
        <slot name="title" />
      </h2>
      <slot />
    </div>
  </div>
</template>

<style>

</style>
