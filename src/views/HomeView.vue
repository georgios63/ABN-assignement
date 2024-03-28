<template>
  <div class="home">
    <input
      type="text"
      class="search-bar"
      v-model="searchQuery"
      placeholder="Search shows..."
      @input="searchShows"
    />
    <ShowsContainer
      v-if="searchResults.length"
      container-title="Search Results"
      :shows="searchResults"
    />

    <ShowsContainer container-title="Featured Shows" :shows="featuredShows" />
    <ShowsContainer
      container-title="High Rating Shows"
      :shows="highRatingShows"
    />
    <ShowsContainer
      v-for="genreGroup in showsByGenre"
      :key="genreGroup.genre"
      :containerTitle="genreGroup.genre"
      :shows="genreGroup.shows"
    />
  </div>
</template>

<script>
import ShowsContainer from "@/components/ShowsContainer.vue";
import { fetchShows } from "@/services/TvMazeService.js";

export default {
  name: "HomeView",
  components: {
    ShowsContainer,
  },
  data() {
    return {
      featuredShows: [],
      highRatingShows: [],
      showsByGenre: [],
      searchQuery: "", // Holds the current search query
      searchResults: [], // Holds the search results
    };
  },
  async created() {
    const shows = await fetchShows();
    this.featuredShows = shows;
    this.highRatingShows = this.filterAndSortByRating(shows);
    this.showsByGenre = this.organizeShowsByGenre(shows);
  },
  methods: {
    filterAndSortByRating(shows) {
      return shows
        .filter((show) => show.rating && show.rating.average !== null)
        .sort((a, b) => b.rating.average - a.rating.average);
    },

    organizeShowsByGenre(shows) {
      const genresMap = new Map();

      shows.forEach((show) => {
        show.genres.forEach((genre) => {
          if (!genresMap.has(genre)) {
            genresMap.set(genre, []);
          }
          genresMap.get(genre).push(show);
        });
      });

      return Array.from(genresMap, ([genre, shows]) => ({ genre, shows }));
    },

    async searchShows() {
      if (this.searchQuery.trim() === "") {
        this.searchResults = []; // Clear results if query is empty
        return;
      }
      try {
        const response = await fetch(
          `http://api.tvmaze.com/search/shows?q=${encodeURIComponent(
            this.searchQuery
          )}`
        );
        const results = await response.json();
        this.searchResults = results.map((item) => item.show); // Extract the show data from the search results
      } catch (error) {
        console.error("Error fetching search results:", error);
        this.searchResults = [];
      }
    },
  },
};
</script>

<style>
.home {
  position: relative;
}

.shows-container {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 15px;
  margin: 10px 0 0 0;
}

.search-bar {
  padding: 10px 15px;
  position: absolute;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  right: 0;
}

.search-bar:focus {
  border-color: #007bff; /* Highlight color when focused */
}

/* Optionally, style the placeholder text */
.search-bar::placeholder {
  color: #888;
}
</style>
