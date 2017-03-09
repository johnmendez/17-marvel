 <!-- Create a components/character-item -->
 <!-- Move HTML for a character over to the template of character-item -->

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
