<script lang="ts" setup>
import type { INavBarLink } from '~/types'

const links = [{
  label: 'General polozhenie',
  path: '/theory/rules/1',
  icon: 'ph:number-circle-one',
}] as INavBarLink[]
</script>

<template>
  <div class="flex flex-col justify-center items-center prose">
    <h1>Правила дорожнього руху</h1>
    <h2>Теоретичний курс майбутнього водія</h2>
    <div class="flex flex-col gap-1 justify-center items-center w-full">
      <NavBigLink v-for="link in links" :key="link.path" :icon="link.icon" :to="link.path" :title="link.label" />
    </div>
  </div>
</template>

<style>

</style>
