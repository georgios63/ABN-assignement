<template>
  <div class="show-details-container">
    <div v-if="show.image" class="show-image-container">
      <img :src="show.image.original" :alt="show.name" class="show-image" />
    </div>
    <div class="show-text-content">
      <h1>{{ showTitleWithGenres }}</h1>
      <p v-if="show.rating && show.rating.average" class="show-rating">
        Rating: {{ show.rating.average }}/10
      </p>
      <p class="show-status">Status: {{ show.status }}</p>
      <div v-html="show.summary" class="show-summary"></div>
    </div>
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

<style scoped>
.show-details-container {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;

  @media (max-width: 700px) {
    flex-direction: column;

    .show-text-content {
      flex: unset;
      max-width: unset;
    }
  }
}

.show-image-container {
  flex: 1;
  max-width: 1000px;
}

.show-image {
  width: 100%;
  height: auto;
}

.show-text-content {
  color: #ffffff;
  flex: 2;
  max-width: 60%;
}

.show-rating {
  padding: 10px 0 0 0;
}

.show-summary {
  margin-top: 20px;
}
</style>
