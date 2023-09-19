import search_result from "../../db-simulation/search-result.js";
import createDisplayCard from "../components/search-display/search_display.js";
import createListItemRound from "../components/list_item_round/list_item_round.js";
import { createMovementPill } from "../components/pill/pill.js";

// TO DO
function searchPage() {
  // data
  const res = search_result;
  const concertos = res.concertos;
  const bilhetes = res.bilhetes;
  const availableTicket = 'assets/icons/nav_ticket_active.svg';
  const unavailableTicket = 'assets/icons/ticket.svg';

  //page construction
  const page = document.createElement("div");
  page.className = "page";

  // Event ---------
  const containerEvent = document.createElement('div') // Event
  containerEvent.className = "container";
  const display = createDisplayCard(res.img,res.name,res.liked)// display

  const titleEvent = document.createElement('h1'); // Event name
  titleEvent.textContent = res.name.toUpperCase()
  const dateEvent = document.createElement('span'); // Event date span
  dateEvent.textContent = res.date
  const locationEvent = document.createElement('p'); // Event location p
  locationEvent.textContent = res.location
  const hrEvent = document.createElement('hr')// division

  containerEvent.appendChild(display) // Event container
  containerEvent.appendChild(titleEvent)
  containerEvent.appendChild(dateEvent)
  containerEvent.appendChild(locationEvent)
  containerEvent.appendChild(hrEvent)

  // Concertos ---------
  const containerConcertos = document.createElement("div");
  containerConcertos.className = "container";
  const headingConcertos = document.createElement("h1"); // Title Concertos
  headingConcertos.textContent = "Concertos";
  containerConcertos.appendChild(headingConcertos); // add title
  for(const concerto of concertos) {
    const listItemRound = createListItemRound(concerto.img,concerto.name,concerto.name,concerto.date,concerto.liked);
    containerConcertos.appendChild(listItemRound)
  }
  const hrConcertos = document.createElement('hr')// division
  containerConcertos.appendChild(hrConcertos)

  // Informações ---------
  const containerInfo = document.createElement("div");
  containerInfo.className = "container";
  const headingInfo = document.createElement("h1"); // Title Info
  headingInfo.textContent = "Informações";
  const description = document.createElement('p') // description
  description.textContent = res.description
  const hrInfo = document.createElement('hr')// division

  containerInfo.appendChild(headingInfo)
  containerInfo.appendChild(description)
  containerInfo.appendChild(hrInfo)

  // Bilhetes ---------
  const containerTickets = document.createElement("div");
  containerTickets.className = "container";
  const headingTickets = document.createElement("h1"); // Title Bilhetes
  headingTickets.textContent = "Bilhetes";
  containerTickets.appendChild(headingTickets) // add title
  for(const bilhete of bilhetes) { // edit
    let imgSrc = availableTicket
    let available = true
    if(bilhete.date === 'indisponível') {
      imgSrc = unavailableTicket
      available = false
    }
    const movementPill = createMovementPill(imgSrc,available? 'available':'unavailable',bilhete.name,bilhete.date,'',bilhete.price,false);
    movementPill.classList.add(available? 'available':'unavailable')
    containerTickets.appendChild(movementPill);
  }


  page.appendChild(containerEvent) // Page
  page.appendChild(containerConcertos)
  page.appendChild(containerInfo)
  page.appendChild(containerTickets)

  return page;
}
export default searchPage;