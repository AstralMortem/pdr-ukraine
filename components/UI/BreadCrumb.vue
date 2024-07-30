<script lang="ts" setup>
const links = useBreadcrumbItems({ hideRoot: true })
</script>

<template>
  <div class="breadcrumbs text-sm">
    <ul>
      <li v-for="link in links" :key="link.to" :class="link.current ? 'text-primary' : ''">
        <NuxtLink :to="link.to">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
