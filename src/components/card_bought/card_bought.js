function createBoughtCard(bg, dateTime, name, location) {
  const card = document.createElement("div");
  card.className = "card bought";

  const currentInfo = document.createElement("p");
  currentInfo.className = "side-info current";
  // !!! Shouldn't be used on mock up // YYYY-MM-DD date replaced by written date
  // if(isToday(date)) {
  //   currentInfo.textContent = "a acontecer";
  // } else {
  //   currentInfo.textContent = date;
  // }
  currentInfo.textContent = "a acontecer"; // every day is today :D

  const infoDiv = document.createElement("div"); // info
  infoDiv.className = "info";
  const textDiv = document.createElement("div"); // info > text
  textDiv.className = "text";

  const heading = document.createElement("h1"); // h1
  heading.textContent = name.toUpperCase();
  const dateSpan = document.createElement("span"); // span
  dateSpan.textContent = dateTime;
  const locationP = document.createElement("p"); // p location
  locationP.textContent = location;

  const likeIcon = document.createElement("img");
  likeIcon.alt = "";
  likeIcon.className = "side-info like";
  likeIcon.src = "assets/icons/ticket.svg";


  textDiv.appendChild(heading); // text
  textDiv.appendChild(dateSpan);
  textDiv.appendChild(locationP);

  infoDiv.appendChild(textDiv); // info
  infoDiv.appendChild(likeIcon);

  card.appendChild(currentInfo); // card
  card.appendChild(infoDiv);

  return card;
}
export default createBoughtCard;
// module.exports = createBoughtCard
/* HTML
  <div className="card bought">
    <p className="side-info current">a acontecer</p>
    <div className="info">
      <div className="text">
        <h1>SONAR 2024</h1>
        <span>30 setembro 2024, 23h</span>
        <p>Pavilhão Carlos Lopes</p>
      </div>
      <img alt="" className="side-info like" src="assets/icons/ticket.svg">
    </div>
  </div>
*/

function isToday(date) { // YYYY-MM-DD
  const today = new Date();
  const target = new Date(date);

  return (
    today.getFullYear() === target.getFullYear() &&
    today.getMonth() === target.getMonth() &&
    today.getDate() === target.getDate()
  );
}