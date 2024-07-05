<template>
  <div>
	<NuxtImg src="/tiger.jpg" format="webp" style="max-width: 100%; height: auto;" :width="640" :height="480" />	
	{{ time }}
  </div>
</template>

<script setup lang="ts">
const time = await useFetch('https://worldtimeapi.org/api/timezone/Europe/Vienna')
</script>
