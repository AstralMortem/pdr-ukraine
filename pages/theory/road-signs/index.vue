<script setup lang="ts">
const { data: signs } = await useAsyncData('signs-list', async () => {
  let data = await queryContent('theory', 'road-signs').find()
  data = data.map((x) => {
    return {
      id: x.body?.children.find(x => x.tag === 'sign-text')?.props.id,
    }
  })
  return data as { id: string }
})
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="sign-accordion" checked="checked">
      <div class="collapse-title text-xl font-medium flex flex-row justify-start items-center gap-6">
        <UIAvatar size="w-14" src="/img/signs/1.1.png" />
        <p>Попереджувальні знаки</p>
      </div>
      <div class="collapse-content grid grid-cols-6 gap-3 md:grid-cols-9 lg:grid-cols-12">
        <NavSign v-for="sign in signs?.filter(x => x.id.startsWith('1'))" :id="sign.id" :key="sign.id" />
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="sign-accordion" checked="checked">
      <div class="collapse-title text-xl font-medium flex flex-row justify-start items-center gap-6">
        <UIAvatar size="w-14" src="/img/signs/2.1.png" />
        <p>Знаки пріорітету</p>
      </div>
      <div class="collapse-content grid grid-cols-6 gap-3 md:grid-cols-9 lg:grid-cols-12">
        <NavSign v-for="sign in signs?.filter(x => x.id.startsWith('2'))" :id="sign.id" :key="sign.id" />
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="sign-accordion" checked="checked">
      <div class="collapse-title text-xl font-medium flex flex-row justify-start items-center gap-6">
        <UIAvatar size="w-14" src="/img/signs/3.1.png" />
        <p>Заборонні знаки</p>
      </div>
      <div class="collapse-content grid grid-cols-6 gap-3 md:grid-cols-9 lg:grid-cols-12">
        <NavSign v-for="sign in signs?.filter(x => x.id.startsWith('3'))" :id="sign.id" :key="sign.id" />
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="sign-accordion" checked="checked">
      <div class="collapse-title text-xl font-medium flex flex-row justify-start items-center gap-6">
        <UIAvatar size="w-14" src="/img/signs/4.1.png" />
        <p>Наказові знаки</p>
      </div>
      <div class="collapse-content grid grid-cols-6 gap-3 md:grid-cols-9 lg:grid-cols-12">
        <NavSign v-for="sign in signs?.filter(x => x.id.startsWith('4'))" :id="sign.id" :key="sign.id" />
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="sign-accordion" checked="checked">
      <div class="collapse-title text-xl font-medium flex flex-row justify-start items-center gap-6">
        <UIAvatar size="w-14" src="/img/signs/5.1.png" />
        <p>Інформаційно-вказівні знаки</p>
      </div>
      <div class="collapse-content grid grid-cols-6 gap-3 md:grid-cols-9 lg:grid-cols-12">
        <NavSign v-for="sign in signs?.filter(x => x.id.startsWith('5'))" :id="sign.id" :key="sign.id" />
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="sign-accordion" checked="checked">
      <div class="collapse-title text-xl font-medium flex flex-row justify-start items-center gap-6">
        <UIAvatar size="w-14" src="/img/signs/6.1.png" />
        <p>Знаки сервісу</p>
      </div>
      <div class="collapse-content grid grid-cols-6 gap-3 md:grid-cols-9 lg:grid-cols-12">
        <NavSign v-for="sign in signs?.filter(x => x.id.startsWith('6'))" :id="sign.id" :key="sign.id" />
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="sign-accordion" checked="checked">
      <div class="collapse-title text-xl font-medium flex flex-row justify-start items-center gap-6">
        <UIAvatar size="w-14" src="/img/signs/7.1.1.png" />
        <p>Таблички до дорожніх знаків</p>
      </div>
      <div class="collapse-content grid grid-cols-6 gap-3 md:grid-cols-9 lg:grid-cols-12">
        <NavSign v-for="sign in signs?.filter(x => x.id.startsWith('7'))" :id="sign.id" :key="sign.id" />
      </div>
    </div>
  </div>
</template>
