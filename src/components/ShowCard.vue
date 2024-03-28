<template>
  <div class="show-card">
    <router-link :to="`/shows/${show.id}`">
      <img v-if="show.image" :src="show.image.medium" :alt="show.name" />
      <p v-else>No Image Available</p>
      <h2>{{ show.name }}</h2>
      <p>Rating: {{ show.rating.average }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ShowCard",
  props: {
    show: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.show-card {
  flex: 0 0 auto;
  width: 200px;
  text-align: center;
}

.show-card h2 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.show-card img {
  width: 100%;
  border-radius: 10px;
}
</style>
