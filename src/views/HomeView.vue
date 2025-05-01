<template>
  <div class="home">
    <div class="content-wrapper">
      <h1 class="title">Cat Facts</h1>
      <p class="subtitle">Click the button to get a random cat fact!</p>

      <button
          class="fetch-button"
          @click="fetchRandomFact"
          :disabled="loading"
      >
        {{ loading ? 'Loading...' : 'Get Cat Fact' }}
      </button>

      <div v-if="error" class="error-message">
        {{ error }}
      </div>

      <div v-if="currentFact" class="fact-container">
        <div v-if="loading" class="loading-indicator">
          <div class="spinner"></div>
        </div>
        <div v-else>
          <p class="fact-text">{{ currentFact.fact }}</p>
          <p class="fact-length">{{ currentFact.length }} characters</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CatService from '@/api/cat.api';
import type { CatFact } from '@/api/types/cat';

const currentFact = ref<CatFact | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);

const fetchRandomFact = async () => {
  try {
    loading.value = true;
    error.value = null;
    currentFact.value = await CatService.getRandomFact();
  } catch (err) {
    error.value = 'Failed to load cat fact';
    console.error(err);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
}

.content-wrapper {
  max-width: 600px;
  width: 100%;
  text-align: center;
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1rem;
  color: #7f8c8d;
}

.fetch-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.fetch-button:hover {
  background-color: #3aa876;
}

.fetch-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.loading-indicator {
  margin: 1.5rem 0;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #42b983;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-message {
  color: #e74c3c;
  margin: 1.5rem 0;
  padding: 1rem;
  background-color: #fdecea;
  border-radius: 6px;
}

.fact-container {
  background-color: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1.5rem;
}

.fact-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.fact-length {
  font-size: 0.9rem;
  color: #7f8c8d;
  font-style: italic;
}
</style>