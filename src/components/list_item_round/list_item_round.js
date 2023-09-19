import createListItem from "../list_item/list_item";

function createListItemRound(imageSrc, imageAlt, name, dateTime, liked) {
  const el = createListItem(imageSrc, imageAlt, name, dateTime, '', liked);
  el.classList.add("round");
  return el;
}
export default createListItemRound;
// module.exports = createListItemRound
/* HTML
  <div className="pill list-item round">
    <div class="img-div">
      <img
      src="https://ucf8b532124eca3be211ab0ccfd5.previews.dropboxusercontent.com/p/thumb/ACAzZwfUF5x-6moAv44uPHmushYMywZwIJAlTWFU4CAO5PoBGiki6sTmXkp8CPujcKRS3F9X3Sa0cqC-AMxzLZnD745XaE5ycJKTCRpvlZ7fPR56yssy9qEqZ33WMXVCOqMhhJm4fuZanPLY0xjleD9WOONOkUW9k5dXdEJDJi9rPJ42pYcc_Rybk8CghMqc6z8YtTWruY-raw_35x5BAWCw2aHjSa7oE9AO_a5NFKS3982Qpx11hqk88hE-tigCOXPmpRZBDiiufJPyFUm6JPbb3A7wsB_IPPkSreFKnjDUTZjujqx46-IHxApFCfseP2OdwLWHOoqRc0LQm6E9Nlto0SPP171peFWd9yL0ZF9ibCce3FKpfDRgHGiZHDlJEnw/p.jpeg">
     </div>
      <div className="info">
        <div className="text">
          <h1>SONAR 2024</h1>
          <span>30 setembro 2024, 23h</span>
        </div>
        <img className="side-info like" alt="like" src="assets/icons/heart_open.svg">
      </div>
  </div>
*/