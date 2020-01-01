let backgroundone = document.getElementById("background-fact-one");
let backgroundtwo = document.getElementById("background-fact-two");
let backgroundthree = document.getElementById("background-fact-three");

backgroundone.addEventListener("mouseenter", function(event) {
  event.target.textContent = "MACAU. A small city close to Hong Kong.";
  event.target.style.textAlign = "center";
  event.target.style.fontSize = "xx-large";
});

backgroundone.addEventListener("mouseleave", function(event) {
  event.target.style.fontSize = "180%";
  event.target.textContent =
    "I have moved to the Netherlands about ten months ago and I am originally from?";
});

backgroundtwo.addEventListener("mouseenter", function(event) {
  event.target.innerHTML = "<img width=250 height=200 src='nietzsche.jpg'/>";
});

backgroundtwo.addEventListener("mouseleave", function(event) {
  event.target.style.fontSize = "180%";
  event.target.textContent =
    "I studied English literature and philosophy. My favorite philosopher is?";
});

backgroundthree.addEventListener("mouseenter", function(event) {
  event.target.textContent = "I want to become a full stack web developer!";
  event.target.style.textAlign = "center";
  event.target.style.fontSize = "xx-large";
});

backgroundthree.addEventListener("mouseleave", function(event) {
  event.target.style.fontSize = "180%";
  event.target.textContent =
    "I used to work as an English lecturer and a wannabe philosopher. But I quit because?";
});
