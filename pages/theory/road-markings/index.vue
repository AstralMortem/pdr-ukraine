<script setup lang="ts">
const { data: markings } = await useAsyncData('markings-list', async () => {
  let data = await queryContent('theory', 'road-markings').find()
  data = data.map((x) => {
    return {
      id: x.body?.children.find(x => x.tag === 'road-marking-text')?.props.id,
    }
  })
  return data as { id: string }
})

useHead({
  title: 'Road Markings',
})
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-3">
    <div class="collapse collapse-arrow bg-base-200 ">
      <input type="checkbox" name="markings-accordion">
      <div class="collapse-title text-xl font-medium flex flex-row justify-start items-center gap-6">
        <UIAvatar size="w-14" src="/img/markings/1.1.png" />
        <p>Горизонтальна розмітка</p>
      </div>
      <div class="collapse-content grid grid-cols-4 gap-3 md:grid-cols-9 lg:grid-cols-12">
        <NavMarking v-for="marking in markings?.filter(x => x?.id && x.id.startsWith('1'))" :id="marking.id" :key="marking.id" />
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="checkbox" name="markings-accordion">
      <div class="collapse-title text-xl font-medium flex flex-row justify-start items-center gap-6">
        <UIAvatar size="w-14" src="/img/markings/2.1.1.png" />
        <p>Вертикальна розмітка</p>
      </div>
      <div class="collapse-content grid grid-cols-4 gap-3 md:grid-cols-9 lg:grid-cols-12">
        <NavMarking v-for="marking in markings?.filter(x => x?.id && x.id.startsWith('2'))" :id="marking.id" :key="marking.id" />
      </div>
    </div>
  </div>
</template>
