 <!-- Create a components/character-item -->
 <!-- Move HTML for a character over to the template of character-item -->
 <!-- Loop through characters and create a character-item for each one passing in the character data -->
<!-- Show character image -->
<!-- Show character name -->

<template lang="html">
  <div class="row-item">
    <img :src="`${character.thumbnail.path}.${character.thumbnail.extension}`" alt="">
    <p>{{character.name}}</p>
 </div>
</template>

<script>
export default {
  props: ['character'],
};
</script>
