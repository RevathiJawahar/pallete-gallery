import gradientPalette from "./gradients.json";

export default function filterEmoji(searchText, maxResults) {
  return gradientPalette
    .filter(colors => {
      if (colors.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (colors.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}
