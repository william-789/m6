function createPill(imageSrc, imageAlt, name = '', dateTime, location = '', eventPrice, uppercase = true) {
  const pillDiv = document.createElement("div");
  pillDiv.className = "pill";

  const imgDiv = document.createElement("div") // img div
  imgDiv.className = "img-div"
  const image = document.createElement("img"); // img
  image.alt = imageAlt;
  image.src = imageSrc;
  imgDiv.appendChild(image)

  const infoDiv = document.createElement("div"); // info
  infoDiv.className = "info";
  const textDiv = document.createElement("div"); // text
  textDiv.className = "text";

  const eventNameHeading = document.createElement("h1"); // h1
  if(name) {
    if(uppercase) eventNameHeading.textContent = name.toUpperCase();
    else eventNameHeading.textContent = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  }
  const eventDateTimeSpan = document.createElement("span"); // span
  eventDateTimeSpan.textContent = dateTime;
  const eventLocationP = document.createElement("p"); // p
  if(location) eventLocationP.textContent = location;

  if(name) textDiv.appendChild(eventNameHeading); // text
  textDiv.appendChild(eventDateTimeSpan);
  if(location) textDiv.appendChild(eventLocationP);

  const eventPriceP = document.createElement("p"); // price
  eventPriceP.className = "side-info";
  eventPriceP.textContent = eventPrice.toFixed(2) + ' €';

  infoDiv.appendChild(textDiv); // info
  infoDiv.appendChild(eventPriceP);

  pillDiv.appendChild(imgDiv); // pill
  pillDiv.appendChild(infoDiv);

  return pillDiv;
}

function createMovementPill (imageSrc, imageAlt, name = '', dateTime, location = '', eventPrice, uppercase = true) {
  const pillMovement = createPill(imageSrc, imageAlt, name, dateTime, location, eventPrice, uppercase);
  pillMovement.classList.add('movement')
  return pillMovement
}

export default createPill;

export {
  createPill,
  createMovementPill
}
// module.exports = {
//   createPill,
//   createMovementPill
// }
/* HTML
  <div className="pill">
    <img alt=""
         src="https://ucf8b532124eca3be211ab0ccfd5.previews.dropboxusercontent.com/p/thumb/ACAzZwfUF5x-6moAv44uPHmushYMywZwIJAlTWFU4CAO5PoBGiki6sTmXkp8CPujcKRS3F9X3Sa0cqC-AMxzLZnD745XaE5ycJKTCRpvlZ7fPR56yssy9qEqZ33WMXVCOqMhhJm4fuZanPLY0xjleD9WOONOkUW9k5dXdEJDJi9rPJ42pYcc_Rybk8CghMqc6z8YtTWruY-raw_35x5BAWCw2aHjSa7oE9AO_a5NFKS3982Qpx11hqk88hE-tigCOXPmpRZBDiiufJPyFUm6JPbb3A7wsB_IPPkSreFKnjDUTZjujqx46-IHxApFCfseP2OdwLWHOoqRc0LQm6E9Nlto0SPP171peFWd9yL0ZF9ibCce3FKpfDRgHGiZHDlJEnw/p.jpeg">
      <div className="info">
        <div className="text">
          <h1>SONAR 2024</h1>
          <span>30 setembro 2024, 23h</span>
          <p>Pavilhão Carlos Lopes</p>
        </div>
        <p className="side-info">20.00 €</p>
      </div>
  </div>
*/