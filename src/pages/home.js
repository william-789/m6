import user_data from "../../db-simulation/user-data.js";
import createBoughtCard from "../components/card_bought/card_bought.js";
import createMainBar from "../components/main_bar/main_bar.js";
import createCard from "../components/card/card.js";

// TO DO
function generateHome () {
  // data
  const username = user_data.data.name
  const currentEvent = user_data.currentEvent
  const saldo = user_data.cashless.saldo
  const suggestion = user_data.suggestion

  const ticketSrc = "assets/icons/nav_ticket_active.svg";
  const qrSrc = "assets/icons/qr.svg";
  const cashSrc = "assets/icons/cash.svg";

  // page construction
  const page = document.createElement("div");
  page.className = "page";
  // Welcome Section ---------
  const containerWelcome = document.createElement("div");
  containerWelcome.className = "container";
  const headingWelcome = document.createElement("h1"); // Title Welcome
  headingWelcome.textContent = `Bom dia, ${username}`;
  containerWelcome.appendChild(headingWelcome); // add title
  for(const event of currentEvent) {
    const current = createBoughtCard(event.image,event.date,event.name,event.location)// current event
    const venda = createMainBar(ticketSrc,'1 x Venda Final',false,qrSrc)

    containerWelcome.appendChild(current)
    containerWelcome.appendChild(venda)
  }

  const saldoData = createMainBar(cashSrc,'Saldo Cashless',true,saldo)// saldo
  containerWelcome.appendChild(saldoData);

  // Suggestion Section ---------
  const containerSuggestion = document.createElement("div");
  containerSuggestion.className = "container";
  const headingSuggestion = document.createElement("h1"); // Title Suggestion
  headingSuggestion.textContent = "Sugestões";
  containerSuggestion.appendChild(headingSuggestion); // add title
  for(const event of suggestion) {
    const card = createCard(event.image,event.name,event.date,event.location,event.price,event.liked)
    containerSuggestion.appendChild(card)
  }

  page.appendChild(containerWelcome) // page
  page.appendChild(containerSuggestion)

  return page;
}

export default generateHome;