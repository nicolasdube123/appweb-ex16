<script setup lang="ts">
  import { Song, SongService } from "../scripts/songsService"

  const props = defineProps<{ 
      songService: SongService,
      idSong: Number
  }>()
  const emit = defineEmits<{
    (event: 'update', newSongId: Number): void
  }>()

  const songs = await props.songService.getSongs()

  //Pour avoir un chiffre au hasard
  //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function chooseRandom() {
    let rand:Number
    rand = Math.floor(Math.random() * songs.length+1)
    emit('update', rand)
  }

  function previousSong() {
    if (props.idSong.valueOf() != 1) {
      emit('update', props.idSong.valueOf()-1)
    }
  }

  function nextSong() {
    if (props.idSong != songs.length) {
      emit('update', props.idSong.valueOf()+1)
    }
  }
</script>
<template>
<div id="songsList" class="p-3">
      <div class="container p-3 bg-dark text-light shadow border border-5 border-primary song-zone">
        <div class="row">
            <div class="col">
                <h2>Contrôles de la liste</h2>
                <button id="btnShuffle" type="button" class="btn btn-primary" @click="chooseRandom">
                  <i class="bi bi-shuffle"></i> Au hasard!
                </button>
                <button id="btnNext" type="button" class="btn btn-primary" @click="previousSong">
                  <i class="bi bi-arrow-left-square"></i> Chanson précédente
                </button>
                <button id="btnPrevious" type="button" class="btn btn-primary" @click="nextSong">
                   Chanson suivante <i class="bi bi-arrow-right-square"></i>
                </button>
            </div>
        </div>  
        <div class="row">
              <div class="col">
                  <h2>Liste des chansons</h2>
                  <ul id="songsList" v-for="song in songs">
                    <li>
                      <button @click="emit('update', song.id)">
                        {{ song.songName }}
                      </button>
                    </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
</template>
<style scoped>

</style>