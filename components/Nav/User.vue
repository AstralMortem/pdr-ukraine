<script lang="ts" setup>
const userStore = useUserStore()
const { isAuthenticated } = storeToRefs(userStore)
const show = ref(false)
</script>

<template>
  <div>
    <div class="flex flex-row justify-end gap-4">
      <UIButton label="Увійти" variant="rounded" />
      <UIButton label="Зареєструватись" variant="rounded" color="primary" @click="show = true" />
    </div>
    <UIModal v-model:show="show" title="Hello" />
  </div>
</template>

<style>

</style>
