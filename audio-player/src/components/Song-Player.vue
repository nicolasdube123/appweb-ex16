<script setup lang="ts">
  import { Song, Author, SongService, AuthorsService } from "../scripts/songsService"
  import SongPlayerData from "./Song-Player-Data.vue";
  import SongPlayerControls from "./Song-Player-Controls.vue";
  import SongPlayerTime from "./Song-Player-Time.vue";
import { ref, watch } from "vue";

  //Pour définir les props
  //https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits
  const props = defineProps<{ 
      songService: SongService,
      authorService: AuthorsService,
      songId: Number
  }>()

  let song: Song = await props.songService.getSong(props.songId)
  let author: Author = await props.authorService.getAuthor(song.artistId)
  
  
  watch(() => props.songId, (newSongId) => {
    ChangeSong(newSongId)
  })
  
  let audio: HTMLAudioElement = document.getElementById("audio") as HTMLAudioElement
  let currentTime = ref<String>(audio?.currentTime.toFixed(0))
  let duration = ref<String>(audio?.duration.toFixed(0))
  let hasAudioStarted = false
  function PlaySong() {
    //Problème avec le play-pause
    if (hasAudioStarted == false) {
      audio.src = "./src/assets/songs/" + song.fileName
      hasAudioStarted = true
    }
    duration.value = audio.duration.toFixed(0)
    audio.play()
    console.log(audio.duration)
  }
  
  function PauseSong() {
    audio.pause()
  }
  
  function StopSong() {
    audio.load()
    hasAudioStarted = false
  }
  
  async function ChangeSong(newSongId: Number) {
    StopSong()
    song = await props.songService.getSong(newSongId)
    author = await props.authorService.getAuthor(song.artistId)
  }

  function UpdateTime() {
    currentTime.value = audio?.currentTime.toFixed(0)
  }
  //audio.addEventListener()
</script>
<template>
    <audio id="audio" ref="audio" src="./src/assets/songs/Undertale_NoMercy_OC_ReMix.mp3" v-on:timeupdate="UpdateTime"></audio>
    <div id="songPlayer" class="p-3">
      <div class="container p-3 bg-dark text-light shadow border border-5 border-primary">
        <div class="row p-2">
          <SongPlayerData  :song="song" :author="author"/>
        </div>

        <div class="row p-2">
          <SongPlayerControls :hasStarted="hasAudioStarted" @play="PlaySong()" @pause="PauseSong()" @stop="StopSong()"/>
          <SongPlayerTime :time="currentTime" :duration="duration"/>
        </div>
      </div>
    </div>
</template>
<style scoped>

</style>