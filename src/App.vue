<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <!-- Here we ll have the home page and details page -->
        <RouterLink to="/">Home of ABNetflix</RouterLink>
        <!-- <RouterLink to="/about">Details Page</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
template {
  display: flex;
  flex-direction: column;
}

header {
  max-height: 100vh;
  display: flex;
  justify-content: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  font-size: 24px;
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  color: hsla(160, 100%, 37%, 1);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  font-size: 24px;
  color: hsla(160, 100%, 37%, 1);
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
