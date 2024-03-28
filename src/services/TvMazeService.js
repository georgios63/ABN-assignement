// export const fetchAllShows = async () => {
//   try {
//     const response = await fetch(`http://api.tvmaze.com/shows`);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const shows = await response.json();
//     return shows;
//   } catch (error) {
//     console.error("There was a problem with the fetch operation:", error);
//     throw error;
//   }
// };

export const fetchShows = async (page = 1) => {
  try {
    const response = await fetch(`http://api.tvmaze.com/shows?page=${page}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const shows = await response.json();
    return shows; // Return all shows from the page without slicing
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};

// export const fetchShowsByRating = async (rating) => {
//   try {
//     const response = await fetch(
//       `http://api.tvmaze.com/shows?filter=shows&rating=${rating}`
//     );
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const shows = await response.json();
//     return shows;
//   } catch (error) {
//     console.error("There was a problem with the fetch operation:", error);
//     throw error;
//   }
// };
