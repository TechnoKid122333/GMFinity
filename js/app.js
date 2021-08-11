const messageList = ["Relentless", "Versatile", "Unstoppable", "Resilient"];
let message = document.querySelector("#changing-message");
console.log(message);
let i = 0;
setInterval(() => {
  if (i > 3) {
    i = 0;
  }
  message.textContent = messageList[i];
  i++;
}, 1000);
