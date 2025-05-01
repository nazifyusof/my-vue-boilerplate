<template>
  <footer class="footer">
    <div class="top-row">
      <RouterLink to="/about" class="link">
        <span>About</span>
      </RouterLink>
    </div>

    <div class="separator"></div>

    <div class="bottom-row">
      <a
        href="https://instagram.com/nazifyusof"
        target="_blank"
        rel="noopener noreferrer"
        class="link"
      >
        <i class="pi pi-instagram"></i>
      </a>
      <a
        href="https://linkedin.com/in/nazifyusof"
        target="_blank"
        rel="noopener noreferrer"
        class="link"
      >
        <i class="pi pi-linkedin"></i>
      </a>
      <a
        href="https://github.com/nazifyusof"
        target="_blank"
        rel="noopener noreferrer"
        class="link"
      >
        <i class="pi pi-github"></i>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f8f9fa;
  border-top: 1px solid #ddd;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  z-index: 999;
}

.top-row {
  margin-bottom: 0.4rem;
}

.separator {
  width: 50%;
  height: 1px;
  background-color: #ccc;
  margin: 0.25rem 0;
}

.bottom-row {
  padding: 3px;
  display: flex;
  gap: 1.5rem;
}

.link {
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.link:hover {
  color: #007bff;
}
</style>
