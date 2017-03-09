<!-- Create a components/comic-item -->
<!-- Move HTML for a comic over to the template of comic-item -->

<template lang="html">
  <div class="row-item">
    <img :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" alt="">
    <p>{{comic.title}}</p>
    <p>{{comic.issueNumber}}</p>
  </div>
</template>

<script>
export default {
  props: ['comic'],
};
</script>
