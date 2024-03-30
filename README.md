# ABNetflix

ABNetflix is a Vue.js project designed as part of a comprehensive evaluation of front-end development skills, specifically focusing on the utilization of modern web technologies and programming patterns.
This project aims to demonstrate the candidate's proficiency in creating clean, reusable code and their ability to implement a user-friendly interface with a keen eye for design. Utilizing the TVMaze API, ABNetflix offers users an interactive platform to explore and discover TV shows based on various genres and enabling detailed insights into their desired television series. Let's make the employees of ABN happy by watching their favorite shows!

# Features

- Genre-Based Discovery: Facilitates the exploration of TV shows sorted by genres, such as Drama, Comedy, and Sports, presented in an intuitive horizontal list format.

- Search Functionality: Empowers users to search and quickly find specific TV shows, enhancing the user experience with efficient data retrieval.

- Detailed Show Information: Provides comprehensive details about each TV show, including summaries, cast information, and episodes, upon selection.

- Responsive Design: Guarantees a seamless and consistent user experience across a wide range of devices and screen sizes.

# Efficient Data Fetching and State Management

Take into consideration that this is a front end assignement-application that I was given with a small API that contains limited amount of shows. In a normal real life senarion the following steps MUST be taken in order to have a successful application to optimize interactions with the external API to ensure responsiveness, minimize bandwidth usage, and avoid hitting the rate limit.

Lazily Loading Data: Data is fetched on-demand, based on user actions or navigation. This ensures that only necessary data is loaded, reducing the number of API calls.

Pagination and Incremental Fetching: For views requiring lists of items (e.g. shows, episodes), data is fetched in paginated batches or incrementally as the user scrolls, limiting the initial load impact.

# Caching and State Management

To further optimize data usage and improve user experience, we should employ caching strategies and proper state management:

Client-Side Caching: Repeated requests for the same resources within a session are minimized by caching responses client-side. This is particularly effective for data that doesn't change frequently.

Vuex for Global State Management: Although I haven't used Vue as a framework more than the assignement that was given to me, all those frameworks contains global state managements that can be used to store the data you need limiting the api calls that needs to be made.

# Node version

v20.10.0

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/)

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```
