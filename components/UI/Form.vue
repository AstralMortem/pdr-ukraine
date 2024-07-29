<script lang="ts" setup>
import { Form } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

defineProps({
  schema: [Object, Function],
})

const emit = defineEmits(['submit'])

function onSubmit(payload) {
  emit('submit', payload)
}
</script>

<template>
  <Form :validation-schema="toTypedSchema($props.schema)" class="space-y-4 max-w-sm w-full flex-col items-center justify-center" @submit="onSubmit">
    <slot />
  </Form>
</template>

<style>

</style>
