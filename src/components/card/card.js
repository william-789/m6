function createCard(bg, line1, line2, line3, price, liked) {
  const cardContainer = document.createElement("div"); // card
  cardContainer.className = "card";
  cardContainer.style.backgroundImage = `url("${bg}")`
  const infoDiv = document.createElement("div"); // info
  infoDiv.className = "info";
  const textDiv = document.createElement("div"); // text
  textDiv.className = "text";

  // Variables
  const heading = document.createElement("h1"); // h1
  heading.textContent = line1.toUpperCase();
  const dateSpan = document.createElement("span"); // span
  dateSpan.textContent = line2;
  const locationP = document.createElement("p"); // p
  locationP.textContent = line3;

  const priceP = document.createElement("p"); // side-info
  priceP.textContent = price;
  priceP.className = "side-info";

  const likeIcon = document.createElement("img"); // side-info like

  let alt = "like";
  let src = "assets/icons/heart_open.svg";
  if(liked) {
    src = "assets/icons/heart_full.svg";
    alt = "liked";
  }
  likeIcon.src = src;
  likeIcon.alt = alt;
  likeIcon.className = "side-info like";

  textDiv.appendChild(heading); // text
  textDiv.appendChild(dateSpan);
  textDiv.appendChild(locationP);
  textDiv.appendChild(priceP);

  infoDiv.appendChild(textDiv); // info
  infoDiv.appendChild(likeIcon);

  cardContainer.appendChild(infoDiv); // card

  return cardContainer
}
export default createCard;
// module.exports = createCard
/* HTML
  <div className="card">
    <div className="info">
      <div className="text">
        <h1>SONAR 2024</h1>
        <span>30 setembro 2024, 23h</span>
        <p>Pavilhão Carlos Lopes</p>
        <p className="side-info">20.00 €</p>
      </div>
      <img alt="" className="side-info like" src="assets/icons/heart_open.svg">
    </div>
  </div>
*/