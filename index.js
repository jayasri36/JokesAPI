import App from "./App.svelte";

const app = new App({
  target: document.body
});

export default app;
const button = document.querySelector(".container button");
const jokeText = document.querySelector(".container p");
document.addEventListener("DOMContentLoaded", getjoke);

button.addEventListener("click", getjoke);

function getjoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  })
    .then((data) => data.json())
    .then((obj) => (jokeText.innerHTML = obj.joke));
}
