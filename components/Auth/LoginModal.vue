<script lang="ts" setup>
import { z } from 'zod'

defineEmits(['replaceModal'])
const model = defineModel('show', { default: false })
const state = ref({
  email: '',
  password: '',
})

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 character'),
})
</script>

<template>
  <UIModal v-model:show="model" title="Вхід">
    <div class="flex flex-col items-center w-full gap-2">
      <UIForm :schema="schema">
        <UIInput label="Email" name="email" placeholder="example@domain.com" type="email" leading-icon="ph:user" />
        <div class="flex flex-col justify-center items-center gap-0.5">
          <UIInput label="Password" name="password" placeholder="*****" leading-icon="ph:lock" type="password" />
          <p class="link self-end">
            Забули пароль?
          </p>
        </div>
        <UIButton
          type="submit" label="Увійти" wide color="primary"
        />
        <UIButton
          label="Зареєструватись" wide color="accent" variant="outline" @click="model = false; $emit('replaceModal')"
        />
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
