import type { Post } from "./types";

export const posts: Post[] = [
  {
    title: "Handling Big Numbers in JavaScript Without Losing Your Mind",
    description: "JavaScript has numeric precision limits and a defined safe integer range. Using BigInt and libraries such as BigNumber.js enables accurate handling of very large numbers without precision loss in financial or high-precision computations.",
    link: "https://bagustambunan.medium.com/handling-big-numbers-in-javascript-without-losing-your-mind-8aa221643428",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*VOiObNijwXttTnd8",
    tags: ["JavaScript", "React", "Front End Development"],
    date: new Date("2025-11-24"),
  },
  {
    title: "Project Using the Spotify API in React JS",
    description: "Built a React application integrating Spotify API authentication, search functionality, and track display using Axios and Tailwind styling for users.",
    link: "https://bagustambunan.medium.com/project-menggunakan-spotify-api-di-react-js-19dbc5765a05",
    image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*S9hNiJpv4OEX4CohCK8Fiw.png",
    tags: ["JavaScript", "React", "Front End Development"],
    date: new Date("2021-07-21")
  },
  {
    title: "Displaying COVID-19 data for each province in Indonesia in the form of a choropleth map",
    description: "Indonesia COVID-19 provincial case data are mapped as a choropleth visualization, showing case counts or rates by province on a colored geographic map to reveal spatial distribution patterns using GIS and API data.",
    link: "https://bagustambunan.medium.com/menampilkan-data-covid-19-tiap-provinsi-di-indonesia-dalam-bentuk-choropleth-map-a331232c9b8b",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*O5fQ6hGvrw4DuUP1.png",
    tags: ["Python", "GeoPandas", "Data Visualization"],
    date: new Date("2020-15-11"),
  }
];