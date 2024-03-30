<template>
  <div class="show-details-container">
    <div v-if="show?.image" class="show-image-container">
      <img :src="show?.image?.original" :alt="show.name" class="show-image" />
    </div>
    <div class="show-text-content">
      <h1>{{ showTitleWithGenres }}</h1>
      <p v-if="show?.rating && show?.rating.average" class="show-rating">
        Rating: {{ show?.rating.average }}/10
      </p>
      <p class="show-status">Status: {{ show?.status }}</p>
      <div v-html="show?.summary" class="show-summary"></div>
    </div>
  </div>
  <h2>Seasons</h2>
  <div v-for="season in seasons" :key="season?.id" class="seasons-container">
    <h3>Season {{ season?.number }}</h3>
    <div class="season">
      <ul>
        <li
          v-for="episode in filteredEpisodes(season?.number)"
          :key="episode.id"
          @click="toggleModal"
          class="episode"
        >
          <div v-if="episode.image">
            <img
              :src="episode.image.medium"
              :alt="episode.name"
              class="episode-image"
            />
          </div>
          <div class="episode-title">
            Episode {{ episode.number }}: {{ episode.name }}
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div v-if="showModal" class="modal-overlay" @click="showModal = false">
    <div class="modal-content" @click.stop>
      <p>
        The episodes are not available on your account. To be able to view them
        please pass the assignement of the candidate!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      show: null,
      seasons: [],
      episodes: [],
      showModal: false,
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
    await this.fetchShow();
    await this.fetchSeasonsAndEpisodes();
  },
  methods: {
    async fetchShow() {
      const response = await fetch(`http://api.tvmaze.com/shows/${this.id}`);
      this.show = await response.json();
    },
    async fetchSeasonsAndEpisodes() {
      const seasonsResponse = await fetch(
        `http://api.tvmaze.com/shows/${this.id}/seasons`
      );
      this.seasons = await seasonsResponse.json();
      const episodesResponse = await fetch(
        `http://api.tvmaze.com/shows/${this.id}/episodes`
      );
      this.episodes = await episodesResponse.json();
    },
    filteredEpisodes(seasonNumber) {
      return this.episodes.filter((episode) => episode.season === seasonNumber);
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
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

.episode-image {
  height: auto;
  transition: transform 0.3s ease;
  display: block;
}

li:hover .episode-image {
  transform: scale(1.1);
}

.seasons-container {
  h2,
  h3 {
    padding: 0 0 10px 0;
  }
  ul {
    padding: 0 0 10px 0;
    display: flex;
    overflow-x: auto;
    gap: 20px;
    list-style-type: none;
    padding-left: 0;
  }

  li {
    cursor: pointer;
  }
}

.season {
  display: flex;
}

.episode-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

.modal-overlay {
  position: fixed;
  padding: 10px;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
