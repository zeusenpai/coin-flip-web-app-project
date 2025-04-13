let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let myLabel = document.getElementById("myLabel");

flipBtn.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);

  coin.style.animation = "none";

  if (i) {
    setTimeout(() => {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
    myLabel.textContent = "Heads!";
  } else {
    setTimeout(() => {
      coin.style.animation = "spin-tails 3s forwards";
    }, 100);
    myLabel.textContent = "Tails!";
  }

  setTimeout(updateStats, 3000);
  disableButton();
});

function updateStats() {
  enableButton();
}

function disableButton() {
  flipBtn.disabled = true;
  flipBtn.style.opacity = 0.5;
}

function enableButton() {
  flipBtn.disabled = false;
  flipBtn.style.opacity = 1;
}

// Dark Mode Toggle
const toggle = document.getElementById("toggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggle.checked);
});
