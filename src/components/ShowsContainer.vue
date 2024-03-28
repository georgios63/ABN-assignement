<template>
  <section>
    <h2>{{ containerTitle }}</h2>
    <div class="shows-container">
      <ShowCard v-for="show in shows" :key="show.id" :show="show" />
    </div>
  </section>
</template>

<script>
import ShowCard from "./ShowCard.vue";

export default {
  name: "ShowsContainer",
  components: {
    ShowCard,
  },
  props: {
    containerTitle: String,
    shows: Array,
  },
};
</script>

<style scoped>
.shows-container {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 15px;
  max-width: 100vw;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  } /* Chrome, Safari, Opera */
}
</style>
