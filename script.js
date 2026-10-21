const searchInput = document.querySelector("#event-search-input");
const clearButton = document.querySelector("#event-search-clear");
const eventCards = [...document.querySelectorAll("#event-list article")];
const resultCount = document.querySelector("#event-search-count");
const emptyMessage = document.querySelector("#event-search-empty");

function updateEventSearch() {
  const query = searchInput.value.trim().toLocaleLowerCase("tr-TR");
  let visibleCount = 0;

  for (const card of eventCards) {
    const title = card.querySelector("h2").textContent.trim().toLocaleLowerCase("tr-TR");
    const matches = title.includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  }

  resultCount.textContent = `${visibleCount} etkinlik bulundu.`;
  emptyMessage.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", updateEventSearch);
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  updateEventSearch();
  searchInput.focus();
});

updateEventSearch();
