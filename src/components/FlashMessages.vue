<template>
    <div class="flex flex-col gap-2">
      <div v-for="(alert, index) in alerts" :key="index"
        class="flex justify-between items-center gap-4 w-96 z-50 py-2 px-4 rounded shadow" :class="{
          'bg-red-200 text-red-600': alert.status === 'error',
          'bg-green-200 text-green-600': alert.status === 'success',
          'bg-yellow-200 text-yellow-600': alert.status === 'warning',
          'bg-blue-200 text-blue-600': alert.status === 'info',
        }">
        <p>{{ alert.message }}</p>
        <button @click="removeAlert(index)">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </template>
    
  <script>
  import { get_alerts, removeByIndex } from '../store/alerts.js'
  export default {
    name: 'FlashMessages',
    computed: {
      alerts() {
        return get_alerts
      },
    },
    methods: {
      removeAlert(index) {
        removeByIndex(index)
      },
    },
  }
  </script>
    