function createXSPill(leftTextList, rightTextList, paymentBoolean) {
  const xsPillDiv = document.createElement("div");
  xsPillDiv.className = "xs-pill";
  if(paymentBoolean) xsPillDiv.classList.add('payment');

  const divLeft = document.createElement("div"); // left div
  leftTextList.forEach((text) => {
    const itemNameHeading = document.createElement("h3");
    itemNameHeading.textContent = text;
    divLeft.appendChild(itemNameHeading);
  })

  const divRight = document.createElement("div"); // right div
  rightTextList.forEach((text) => {
    const dataP = document.createElement("p");
    dataP.textContent = text;
    divRight.appendChild(dataP);
  })

  xsPillDiv.appendChild(divLeft); // xsPill
  xsPillDiv.appendChild(divRight);

  return xsPillDiv;
}
export default createXSPill;
// module.exports = createXSPill