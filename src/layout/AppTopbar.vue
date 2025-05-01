<template>
  <Menubar class="topbar-menu">
    <template #start>
      <div class="logo">My App</div>
    </template>

    <template #end>
      <div class="menu-items">
        <Button label="Home" text icon="pi pi-home" @click="router.push('/')" />
        <Button label="About" text icon="pi pi-info-circle" @click="router.push('/about')" />
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'

const router = useRouter()
</script>

<style scoped>
.topbar-menu {
  border: none;
  background-color: transparent;
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
}

.menu-items {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
</style>
