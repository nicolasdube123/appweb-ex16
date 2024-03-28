<script setup lang="ts">
    import { Song, Author } from "../scripts/songsService"

    const song = defineProps<{ 
      song: Song | undefined,
      author: Author | undefined
    }>()
</script>
<template>
    <div id="songPlayerDatas" class="col-12">
      <p id="songName" class="bg-secondary text-white p-2 border border-3 border-dark">
        {{ song.song?.songName }}
      </p>
      <p id="artistName" class="bg-secondary text-white p-2 border border-3 border-dark">
        {{ song.author?.name }}
      </p>
    </div>
</template>
<style scoped>

</style>