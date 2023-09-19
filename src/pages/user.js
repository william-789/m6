import user_data from "../../db-simulation/user-data.js";
import createBar from "../../src/components/bar/bar.js";
import { createMovementPill } from "../../src/components/pill/pill.js";
import createListItem from "../../src/components/list_item/list_item.js";
import createListItemRound from "../../src/components/list_item_round/list_item_round.js";
import createXSPill from "../../src/components/slim_pill/slim_pill.js";
import createMoreContainer from "../../src/components/more/more.js";

const pendingMSG = "Existem pagamentos pendentes na tua conta"
const cardImgSrc = "assets/icons/card.svg"
function userProfile() {
  // user data
  const favorites = user_data.favorites
  const pending = user_data.payments.filter((payment) => payment.state.toLowerCase() === "pendente");
  const paid = user_data.payments.filter((payment) => payment.state.toLowerCase() === "completo");
  // page construction
  const page = document.createElement("div");
  page.className = "page";
  // pending notice
  if(pending.length > 0) {
    const pendingBar = createBar(pendingMSG);
    page.appendChild(pendingBar)
  }
  // Favorites Section ---------
  const containerFavorites = document.createElement("div");
  containerFavorites.className = "container";
  const headingFav = document.createElement("h1"); // Title Favorites
  headingFav.textContent = "Favoritos";
  containerFavorites.appendChild(headingFav); // add title
  for(const data of favorites) { // add favorite list
    if(data.type === "event") {
      const listItem = createListItem(data.image,data.name,data.name,data.date,data.location,true)
      containerFavorites.appendChild(listItem)
    } else {
      const listItemRound = createListItemRound(data.image,data.name,data.name,'Artista','', true)
      containerFavorites.appendChild(listItemRound)
    }
  }
  const moreFav = createMoreContainer() // add see more symbol
  containerFavorites.appendChild(moreFav)

  // Pending Payments Section ---------
  const containerPending = document.createElement("div");
  containerPending.className = "container";
  const headingPending = document.createElement("h1"); // Title Pending
  headingPending.textContent = "Pagamentos pendentes";
  containerPending.appendChild(headingPending); // add title
  for(const payment of pending) {
    const item = createMovementPill(cardImgSrc, "card","Pagamento","Pendente",payment.date,payment.value,false)
    containerPending.appendChild(item)
    const itemDetails = createXSPill(["Entidade","Referência","Valor"],[payment.entidade,payment.referencia,payment.value],true)
    containerPending.appendChild(itemDetails)
  }
  const morePending = createMoreContainer() // add see more symbol
  containerPending.appendChild(morePending)

  // Paid Payments Section ---------
  const containerPayments = document.createElement("div");
  containerPayments.className = "container";
  const headingPayments = document.createElement("h1"); // Title Paid
  headingPayments.textContent = "Outros pagamentos";
  containerPayments.appendChild(headingPayments); // add title
  for(const payment of paid) {
    const item = createMovementPill(cardImgSrc, "card",payment.type,"Completo",payment.date,payment.value,false)
    item.classList.add('green')
    containerPayments.appendChild(item)
  }
  const morePaid = createMoreContainer() // add see more symbol
  containerPayments.appendChild(morePaid)

  page.appendChild(containerFavorites);
  page.appendChild(containerPending);
  page.appendChild(containerPayments);
  return page;
}
export default userProfile;