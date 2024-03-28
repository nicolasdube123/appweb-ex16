<script setup lang="ts">
  import { Song, Author, SongService, AuthorsService } from "../scripts/songsService"

  const props = defineProps<{ 
      songService: SongService,
      authorService: AuthorsService,
      songId: Number
  }>()

  let song: Song = await props.songService.getSong(props.songId)
  let author: Author = await props.authorService.getAuthor(song.artistId)
</script>
<template>
    <div id="songInfos" class="p-3">
      <div class="container p-3 bg-dark text-light shadow border border-5 border-primary song-zone">
        <div class="row">
          <div class="col">
            <h2>Informations de la chanson</h2>
            <p id="songDesc">{{ song.desc }}</p>
            <p id="artistDesc">{{ author.desc }}</p>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>

</style>