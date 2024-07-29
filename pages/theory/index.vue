<script lang="ts" setup>
import type { INavBarLink } from '~/types'

const links = [{
  label: 'Rules',
  path: '/theory/rules',
  icon: 'ph:book',
}, {
  label: 'Road signs',
  path: '/theory/road-signs',
  icon: 'ph:traffic-sign',
}, {
  label: 'Road markings',
  path: '/theory/road-markings',
  icon: 'ph:road-horizon',
}, {
  label: 'regulator',
  path: '/theory/regulator',
  icon: 'ph:person',
}, {
  label: 'Trafic light',
  path: '/theory/trafic-light',
  icon: 'ph:traffic-signal',
}] as INavBarLink[]
</script>

<template>
  <div class="flex flex-col justify-center items-center prose">
    <h1>Теорія ПДР</h1>
    <h2>Теоретичний курс майбутнього водія</h2>
    <div class="flex flex-col gap-1 justify-center items-center w-full">
      <NavBigLink v-for="link in links" :key="link.path" :icon="link.icon" :to="link.path" :title="link.label" />
    </div>
  </div>
</template>

<style>

</style>
