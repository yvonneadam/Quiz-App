export default function toggleBookmark() {
  const bookmarks = document.querySelectorAll("[data-js=bookmarks]");
  bookmarks.forEach((bookmark) => {
    bookmark.addEventListener("click", () => {
      bookmark.classList.toggle("card__bookmark--active");
    });
  });
}
