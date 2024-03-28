<template>
  <div class="show-details">
    <h1>{{ showTitleWithGenres }}</h1>
    <img v-if="show.image" :src="show.image.original" :alt="show.name" />
    <div v-html="show.summary" class="show-summary"></div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      show: null,
    };
  },
  computed: {
    // This is how we can compute the array to a readable format! Kinda amazing.
    showTitleWithGenres() {
      if (!this.show) return "";
      const genres = this.show.genres.join(", ");
      return `${this.show.name} (${genres})`;
    },
  },

  async created() {
    const response = await fetch(`http://api.tvmaze.com/shows/${this.id}`);
    this.show = await response.json();
  },
};
</script>

<style>
/* Styles for your show details */
</style>
