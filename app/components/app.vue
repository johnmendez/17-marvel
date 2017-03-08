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
      <div class="sidebar" v-if="series">
        <!-- Show img for series -->
        <img v-bind:src="series.img" alt="">
        <!-- Show series name -->
        <h2>{{series.name}}</h2>
        <!-- Show series start and end date -->
        <h3>{{series.date}}</h3>
        <!-- Show list of series creators -->
        <h2 class="bottom-border">{{series.creators}}</h2>
        <ul>
          <li>Name</li>
          <li>Name</li>
          <li>Name</li>
          <li>Name</li>
        </ul>
      </div>
      <div class="grid">
        <div class="grid-item">
          <h1 class="bottom-border">Characters</h1>
          <div class="row">
            <div class="row-item">
              <img src="http://placehold.it/100x100" alt="">
              <p>Chara Name</p>
          </div>
        </div>
        <div class="grid-item">
          <h1 class="bottom-border">Comics</h1>
          <div class="row">
            <div class="row-item">
              <img src="http://placehold.it/100x100" alt="">
              <p>Comic</p>
            </div>
            <div class="row-item">
              <img src="http://placehold.it/100x100" alt="">
              <p>Comic</p>
            </div>
            <div class="row-item">
              <img src="http://placehold.it/100x100" alt="">
              <p>Comic</p>
            </div>
            <div class="row-item">
              <img src="http://placehold.it/100x100" alt="">
              <p>Comic</p>
            </div>
          </div>
        </div>
      </div>
    </main>
</div>
</template>

<script>
import store from '../store';
import { seriesInfoLoadComplete, findAllCharacters, findAllComics, setModal, clearModal  } from '../actions';

import characterItem from './character-item.vue';

export default {
  data() {
    return {
      series: this.$select('series'),
      character: this.$select('character'),
      comic: this.$select('comic'),
    };
  },

  created() {
    store.dispatch(seriesInfoLoadComplete());
    store.dispatch(findAllCharacters());
    store.dispatch(findAllComics());
  },

  methods: {

  },
};
</script>
