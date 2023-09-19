function createSearchBar() {
  const searchBarDiv = document.createElement("div"); // container
  searchBarDiv.className = "search-bar bar";
  const searchButton = document.createElement("button"); // button
  searchButton.id = "search-button";
  const searchIcon = document.createElement("img"); // search icon
  searchIcon.alt = "search button";
  searchIcon.src = "assets/icons/search.svg";
  searchButton.appendChild(searchIcon);

  const searchInput = document.createElement("input"); // input
  searchInput.type = "text";
  searchInput.id = "input";
  searchInput.placeholder = "Encontra um festival ou artista";

  searchBarDiv.appendChild(searchButton); // searchbar
  searchBarDiv.appendChild(searchInput);

  return searchBarDiv;
}
export default createSearchBar;
// module.exports = createSearchBar
/* HTML
  <div className="search-bar">
    <button id="search-button">
      <img alt="search button" src="assets/icons/search.svg">
    </button>
    <input type="text" id="input" placeholder="Encontra um festival ou artista">
  </div>
*/