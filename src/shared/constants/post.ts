import type { Post } from "./types";

export const posts: Post[] = [
  {
    title: "Handling Big Numbers in JavaScript Without Losing Your Mind",
    description: "The post explores JavaScript's limitations with large numbers, shows how precision problems appear in real use, and presents clear solutions using BigInt, big-number libraries, and safer JSON parsing to avoid data errors.",
    link: "https://bagustambunan.medium.com/handling-big-numbers-in-javascript-without-losing-your-mind-8aa221643428",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*VOiObNijwXttTnd8",
    tags: ["JavaScript", "React", "Front End Development"],
    date: new Date("2025-11-24"),
  },
  {
    title: "Displaying COVID-19 data for each province in Indonesia in the form of a choropleth map",
    description: "The article explains how to fetch COVID-19 case data for each Indonesian province, combine it with geographic shapefiles, and create a clear choropleth map using Python and GeoPandas. It walks through loading the data, joining it with provincial boundaries, choosing color scales, adding labels, and exporting the final map for use or publication.",
    link: "https://bagustambunan.medium.com/menampilkan-data-covid-19-tiap-provinsi-di-indonesia-dalam-bentuk-choropleth-map-a331232c9b8b",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*O5fQ6hGvrw4DuUP1.png",
    tags: ["Python", "GeoPandas", "Data Visualization"],
    date: new Date("2020-15-11"),
  }
];