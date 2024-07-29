<script lang="ts" setup>
const userStore = useUserStore()
const { isAuthenticated } = storeToRefs(userStore)
const showLogin = ref(false)
const showSignUp = ref(false)
const showPasswordChange = ref(false)

function replaceModal(modalToggler: Ref) {
  modalToggler = true
}
</script>

<template>
  <div>
    <div class="flex flex-row justify-end gap-4">
      <UIButton label="Увійти" variant="rounded" @click="showLogin = true" />
      <UIButton label="Зареєструватись" variant="rounded" color="primary" @click="showSignUp = true" />
    </div>
    <AuthLoginModal v-model:show="showLogin" @replace-modal="showSignUp = true" />
    <AuthSignUpModal v-model:show="showSignUp" @go-back="showLogin = true" />
  </div>
</template>

<style>

</style>
