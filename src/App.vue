<template>
  <html class="h-full bg-gray-100">
    <body class="h-full">
      <router-view />
    </body>
  </html>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>
