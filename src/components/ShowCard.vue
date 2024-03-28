<template>
  <div class="show-card">
    <router-link :to="`/shows/${show.id}`">
      <img v-if="show.image" :src="show.image.medium" :alt="show.name" />
      <p v-else>No Image Available</p>
      <h2>{{ show.name }}</h2>
      <p>Rating: {{ show.rating.average }}</p>
      <p>Status: {{ show.status }}</p>
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
  overflow: hidden;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

.show-card:hover {
}

.show-card h2,
.show-card p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: transform 0.5s ease;
}

.show-card img {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.5s ease;
}

.show-card:hover img {
  transform: scale(1.1);
}

.show-card h2,
.show-card p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 5px 0;
}
</style>
