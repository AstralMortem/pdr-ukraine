<script lang="ts" setup>
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  backArrow: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
})
const emit = defineEmits(['close', 'backArrow'])
const model = defineModel('show', { default: false })
const open = computed(() => model.value ? 'modal-open' : '')

function closeModal() {
  emit('close')
  model.value = false
}
</script>

<template>
  <dialog class="modal" :class="[open]" @click.self="model = false">
    <div class="modal-box">
      <p v-if="loading">
        Loading
      </p>
      <div v-else class="flex flex-col justify-start items-start w-full h-full">
        <div class="flex flex-row items-center justify-between  w-full">
          <UIIcon v-if="$props.backArrow" name="ph:arrow-left" class="self-start" as-button @click="model = false; $emit('backArrow')" />
          <h2 v-if="title" class="text-3xl ">
            {{ $props.title }}
          </h2>
          <UIIcon name="ph:x" class="self-end" as-button @click="closeModal()" />
        </div>
        <slot />
      </div>
    </div>
  </dialog>
</template>

<style>

</style>
