<script lang="ts" setup>
import { z } from 'zod'

defineEmits(['goBack'])
const model = defineModel('show', { default: false })
const schema = z.object({
  first_name: z.string().min(2, 'Must be at least 2 character'),
  last_name: z.string().min(2, 'Must be at least 2 character'),
  email: z.string().email('Invalid email'),
  password1: z.string().min(8, 'Must be at least 8 character'),
  password2: z.string(),
}).refine(values => values.password1 === values.password2, {
  message: 'Password should match!',
  path: ['password2'],
})
</script>

<template>
  <UIModal v-model:show="model" title="Реєстрація" back-arrow @back-arrow="$emit('goBack')">
    <div class="flex flex-col items-center w-full gap-2 justify-center">
      <UIForm :schema="schema">
        <UIInput label="First name" name="first_name" />
        <UIInput label="Last name" name="last_name" />
        <UIInput label="E-mail" name="email" type="email" />
        <UIInput label="Password" name="password1" type="password" />
        <UIInput label="Confirm password" name="password2" type="password" />
        <UIButton type="submit" label="Sign Up" />
        <p>Already have account? <span class="link link-primary">Вхід</span></p>
      </UIForm>
      <UIDivider text="Або увійти через" />
      <div class="flex flex-row justify-center items-center gap-4">
        <UIButton leading-icon="ph:google-logo" color="error" label="Увійти через Google" />
        <UIButton leading-icon="ph:facebook-logo" color="info" label="Увійти через Facebook" />
      </div>
    </div>
  </UIModal>
</template>

<style>

</style>
