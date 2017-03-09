<template lang="html">
  <div class="app">
    <!-- <div class="modal">
      <button class="modal__btn">X</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div> -->
    <header>
      <nav>
        <div class="nav-container">
          <h1>Marvel</h1>
        </div>
      </nav>
    </header>
    <main>
      <!-- Add a if statement around the left side of your application so that it only shows up when seriesInfo is filled in -->
      <!-- Using Vue templating to fill in the series info sidebar -->
      <div class="sidebar" v-if="seriesInfo">
        <!-- Show img for series -->
        <img :src=" `${seriesInfo.thumbnail.path}.${seriesInfo.thumbnail.extension}` " alt="">
        <!-- Show series name -->
        <h2>{{seriesInfo.title}}</h2>
        <!-- Show series start and end date -->
        <h3>{{seriesInfo.startYear}} - {{seriesInfo.endYear}}</h3>
        <!-- Show list of series creators -->
        <h2 class="bottom-border">Creators</h2>
        <ul>
          <li v-for="creator in seriesInfo.creators.items">{{creator.name}}</li>
        </ul>
      </div>
      <div class="grid">
        <div class="grid-item">
          <h1 class="bottom-border">Characters</h1>
          <div class="row">
            <!-- Loop through characters and create a character-item for each one passing in the character data -->
            <character-item v-for="character in characterData" v-bind:character="character"> </character-item>
        </div>
        <div class="grid-item">
          <h1 class="bottom-border">Comics</h1>
          <div class="row">
            <!-- Loop through comics and create a comic-item for each one passing in the comic data -->
            <comic-item v-for="comic in comicData" v-bind:comic="comic"> </comic-item>
          </div>
        </div>
      </div>
    </main>
</div>
</template>

<script>
import store from '../store';
import { seriesInfoSearch  } from '../actions';

import characterItem from './character-item.vue';
import comicItem from './comic-item.vue';

export default {
  components: {
    characterItem,
    comicItem,
  },

  data() {
    return {
      seriesInfo: this.$select('seriesInfo'),
      characterData: this.$select('characterData'),
      comicData: this.$select('comicData'),
    };
  },

  created() {
    store.dispatch(seriesInfoSearch('Spider-Man'));
  },

  methods: {

  },
};
</script>
