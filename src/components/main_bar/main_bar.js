function createMainBar(iconSrc1, text1, price = false, iconSrc2OrNumber) {
  const bar = document.createElement("div");
  bar.className = "bar main";

  const icon1 = document.createElement("img"); // 1
  icon1.src = iconSrc1;
  bar.appendChild(icon1); // add first icon
  const text = document.createElement("p"); // text
  text.textContent = text1;
  bar.appendChild(text); // add text1

  if(price) {
    const text2 = document.createElement("p"); // text 2
    text2.textContent = iconSrc2OrNumber.toFixed(2) + ' €';
    bar.appendChild(text2);
  } else {
    const icon2 = document.createElement("img"); // 2
    icon2.src = iconSrc2OrNumber;
    bar.appendChild(icon2);
  }

  return bar;
}

export default createMainBar