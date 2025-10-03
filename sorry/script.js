// Typewriter effect
function typeWriter(text, element, speed = 50) {
  element.innerHTML = "";
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// DOM
const typedBox = document.getElementById("typed");
const showBtn = document.getElementById("showBtn");
const confettiBtn = document.getElementById("confettiBtn");

// Messages
const apologyMessage = "Haya...I'm really really sorry for what I said last night... hn I was rude and mene tumhe apni us bt se hurt kia sorry wasn't enough but I do really want you here with me...beeive me mey tumhe kbh nh jaounga chor kr na esi koi bt krunga . I always want to save u from hurting by others but mene hi kia I won't do that ever again pakka promise na esi koi bt krunga....mujhe pta hai tum nrz hui thi kl aur kiu na hti bhnta tha tumhara nrz hna rt me hi mene tumhe sae se manalena tha agr meri eyes allow krtien😭I say it I'll always say ur the only girl I believe... idk abt others  but  to me u r the most perfect girl... ily bbg🤍(abh to maafi milegi na?😕) ";

// Show apology
showBtn.addEventListener("click", () => {
  typeWriter(apologyMessage, typedBox, 40);
  startConfetti();
  startFallingHearts();
  setTimeout(stopConfetti, 4000);
});

// Confetti setup
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");
let confettiPieces = [];

function resizeCanvas() {
  confettiCanvas.width = confettiCanvas.offsetWidth;
  confettiCanvas.height = confettiCanvas.offsetHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createConfetti() {
  return {
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * confettiCanvas.height - confettiCanvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 0.5 + 0.5,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    tilt: Math.random() * 10 - 10
  };
}

function drawConfetti(c) {
  ctx.beginPath();
  ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
  ctx.fillStyle = c.color;
  ctx.fill();
}

function updateConfetti(c) {
  c.y += c.d;
  c.x += Math.sin(c.tilt);
  if (c.y > confettiCanvas.height) {
    Object.assign(c, createConfetti());
    c.y = 0;
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces.forEach((c) => {
    drawConfetti(c);
    updateConfetti(c);
  });
  requestAnimationFrame(animateConfetti);
}

function startConfetti() {
  confettiPieces = Array.from({ length: 150 }, createConfetti);
  animateConfetti();
}

function stopConfetti() {
  confettiPieces = [];
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
}

confettiBtn.addEventListener("click", startConfetti);

// Falling hearts 💖
function startFallingHearts() {
  const heartsContainer = document.getElementById("hearts");
  for (let i = 0; i < 15; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart-fall");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}
