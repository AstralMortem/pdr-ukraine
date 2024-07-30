<script lang="ts" setup>
defineProps(['id'])
const show = ref(false)
const data = ref({})
const pending = ref(false)

async function showModal(id) {
  pending.value = true
  const { data: sign } = await useAsyncData(`fetch-sign-${id}`, () => queryContent('theory', 'road-signs', id).findOne())
  pending.value = false
  show.value = true
  data.value = sign.value
}
</script>

<template>
  <span class="link inline-flex flex-row gap-2 justify-start items-center px-2 bg-base-200 rounded-full hover:bg-base-300" @click="showModal($props.id)">
    {{ $props.id }}
    <UIAvatar size="w-4" :src="`/img/signs/${$props.id}.png`" />
  </span>
  <UIModal v-model:show="show">
    <div v-if="pending">
      loading...
    </div>
    <div v-else class="flex flex-col w-full ">
      <ContentRenderer :value="data" />
      <div class="flex flex-row justify-start items-center gap-2">
        <UIButton label="More" color="primary" @click="navigateTo(`/theory/road-signs/${$props.id}`)" />
        <UIButton label="Close" @click="show = false" />
      </div>
    </div>
  </UIModal>
</template>

<style>

</style>
