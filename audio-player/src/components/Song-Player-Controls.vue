<script setup lang="ts">
import { watch } from 'vue';


    let btnPlay: HTMLInputElement = document.getElementById("btnPlay") as HTMLInputElement
    let btnPause: HTMLInputElement = document.getElementById("btnPlay") as HTMLInputElement
    let btnStop: HTMLInputElement = document.getElementById("btnPlay") as HTMLInputElement

    let buttonClasses = "btn btn-primary"
    let disappearClass = " d-none"

    const props = defineProps<{ 
      hasStarted: Boolean
    }>()

    const emit = defineEmits(
        ['play', 'pause', 'stop']
    )

    watch(() => props.hasStarted, (newValue) => {
        console.log(newValue)
        if (!newValue) {
            StopSong
        }
    })

    //Pour accéder aux éléments HTML qui me retournait null
    //https://stackoverflow.com/questions/62893262/vue-js-trying-to-get-dom-element-by-id-in-computed-returns-null
    function ButtonClicked() {
        btnPlay.className += disappearClass
        btnPause.className = buttonClasses
        btnStop.className = buttonClasses
        emit('play')
    }
    
    function PauseSong() {
        btnPlay.className = buttonClasses
        btnPause.className += disappearClass
        emit('pause')
    }

    function StopSong() {
        btnPlay.className = buttonClasses
        btnPause.className = buttonClasses + disappearClass
        btnStop.className += disappearClass
        emit('stop')
    }
</script>
<template>
    <div id="songPlayerControls" class="col-6">
        <button type="button" v-bind:class="buttonClasses" ref="btnPlay" v-on:click = "ButtonClicked()">
            <i class="bi bi-play-fill"></i> Jouer
        </button>
        <button type="button" v-bind:class="buttonClasses + disappearClass" ref="btnPause" v-on:click = "PauseSong()">
            <i class="bi bi-pause-fill"></i> Pause
        </button>
        <button type="button" v-bind:class="buttonClasses + disappearClass" ref="btnStop" v-on:click = "StopSong()">
            <i class="bi bi-stop-fill"></i> Stop
        </button>
    </div>
</template>
<style scoped>

</style>