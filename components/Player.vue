<template>
  <div>
    Player:
    <div>
      <media-player
        title="Sprite Fight"
        src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
      >
        <media-provider></media-provider>
        <media-video-layout
          thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
        ></media-video-layout>
      </media-player>
    </div>
  </div>
</template>

<script setup lang="ts">
import "vidstack/bundle";
</script>
