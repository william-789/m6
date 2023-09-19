function createDisplayCard(bg, alt, liked) {
  const card = document.createElement('div');
  card.className = 'card search-display'
  card.style.backgroundImage = `url("${bg}")`

  const icon = document.createElement('img');
  if(liked) {
    icon.alt = 'liked'
    icon.src = "assets/icons/heart_full.svg";
  } else {
    icon.alt = 'like'
    icon.src = "assets/icons/heart_open.svg";
  }

  card.appendChild(icon);

  return card;
}

export default createDisplayCard;