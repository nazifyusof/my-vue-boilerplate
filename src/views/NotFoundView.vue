<template>
  <div class="not-found">
    <Card class="card">
      <template #header>
        <h1>404</h1>
        <p>The page you are looking for does not exist.</p>
        <p>It might have been moved or deleted, or the URL might be incorrect.</p>
        <RouterLink to="/" class="home-link">Go back to Home</RouterLink>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card'

import { RouterLink } from 'vue-router'
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 5rem;
  color: #34d399;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}

.home-link {
  display: inline-block;
  margin-top: 1rem;
  font-size: 1rem;
  text-decoration: none;
  color: #34d399;
  border: 1px solid #34d399;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.home-link:hover {
  background-color: #34d399;
  color: white;
}
</style>
