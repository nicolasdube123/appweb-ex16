<script setup lang="ts">
import { watch } from 'vue';

const props = defineProps<{
  time: String | undefined
  duration: String | undefined
}>()

watch(() => props.time, (newValue) => {
        console.log(newValue)
    })

watch(() => props.duration, (newValue) => {
    console.log(newValue)
})
</script>
<template>
    <div id="songPlayerTime" class="col-3 offset-3 text-white">
      <p class="p-2 bg-secondary text-center">
        Temps courant: <span id="currentTime">{{ props.time }}</span><br />
        Durée: <span id="duration">{{ props.duration }}</span>
      </p>
    </div>
</template>
<style scoped>
</style>