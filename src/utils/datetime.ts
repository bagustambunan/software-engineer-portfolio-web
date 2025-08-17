export function formatDate(date: Date) {
  return date.toLocaleString("en-US", { month: "short", year: "numeric" })
}