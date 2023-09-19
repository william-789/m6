function createBar (message) {
  const noticeBar = document.createElement("div");
  noticeBar.className = "bar notice";

  const icon = document.createElement("img");
  icon.alt = "notice";
  icon.src = "assets/icons/info_circle.svg";

  const messageSpan = document.createElement("span"); // message
  messageSpan.textContent = message;

  noticeBar.appendChild(icon); // bar
  noticeBar.appendChild(messageSpan);

  return noticeBar;
}
export default createBar;

// module.exports = createBar;