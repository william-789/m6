import { createPill } from "../pill/pill";

function createShortPill(imageSrc, imageAlt, dateTime, value, price) {
  const s_pill = createPill(imageSrc, imageAlt, '', dateTime, value, price);
  s_pill.classList.add('s-pill');
  return s_pill;
}
export default createShortPill;
/* HTML
  <div className="pill s-pill">
    <img
      src="https://ucf8b532124eca3be211ab0ccfd5.previews.dropboxusercontent.com/p/thumb/ACAzZwfUF5x-6moAv44uPHmushYMywZwIJAlTWFU4CAO5PoBGiki6sTmXkp8CPujcKRS3F9X3Sa0cqC-AMxzLZnD745XaE5ycJKTCRpvlZ7fPR56yssy9qEqZ33WMXVCOqMhhJm4fuZanPLY0xjleD9WOONOkUW9k5dXdEJDJi9rPJ42pYcc_Rybk8CghMqc6z8YtTWruY-raw_35x5BAWCw2aHjSa7oE9AO_a5NFKS3982Qpx11hqk88hE-tigCOXPmpRZBDiiufJPyFUm6JPbb3A7wsB_IPPkSreFKnjDUTZjujqx46-IHxApFCfseP2OdwLWHOoqRc0LQm6E9Nlto0SPP171peFWd9yL0ZF9ibCce3FKpfDRgHGiZHDlJEnw/p.jpeg">
      <div className="info">
        <div className="text">
          <span>+ 20.00 €</span>
          <p>10/09/2023 25:50</p>
        </div>
        <p className="side-info">20.00 €</p>
      </div>
  </div>
*/