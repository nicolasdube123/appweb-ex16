<script setup lang="ts">

import { ref } from 'vue'

import SongPlayer from "./components/Song-Player.vue"
import SongInfos from "./components/Song-Infos.vue"
import SongList from "./components/Song-List.vue"
import { SongService, AuthorsService, } from "./scripts/songsService"

const songService = new SongService()
const authorsService: AuthorsService = new AuthorsService() 

const songId = ref<Number>(1);

function setSong(newSongId: Number) {
  songId.value = newSongId
  console.log(songId.value)
}
</script>

<template>
  <header class="container-fluid bg-dark text-light p-4 text-center">
    <!-- TODO Changer le h1 pour le nom du lecteur et effacer ce commentaire -->
    <h1>Lecteur de musique xXSuperMusicHell2000Xx</h1>
  </header>
  <main>
    <Suspense>
      <SongPlayer :songService="songService" :authorService="authorsService" :songId="songId"/>
    </Suspense>
    <Suspense>
      <SongInfos :songService="songService" :authorService="authorsService" :songId="songId"/>
    </Suspense>
    <Suspense>
      <SongList :songService="songService" :idSong="songId" @update="setSong"/>
    </Suspense>

  </main>
  <footer class="container-fluid bg-secondary text-light p-1">
    <!-- TODO Écrire votre nom complet et effacer ce commmmentaire -->
    <p class="text-center">Copyright Raphaël Boudreault</p>
  </footer>
  
</template>

<style scoped>
</style>