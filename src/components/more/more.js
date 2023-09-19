function createMoreContainer() { // can add link or event later
  const containerDiv = document.createElement("div");
  containerDiv.className = "container more";
  const symbolImg = document.createElement("img"); // arrow
  symbolImg.className = "symbol";
  symbolImg.src = "assets/icons/arrow_right.svg";
  containerDiv.appendChild(symbolImg);

  return containerDiv;
}
export default createMoreContainer;
// module.exports = createMoreContainer

/* HTML
  <div className="container more">
    <img className="symbol" src="assets/icons/arrow_right.svg">
  </div>
*/