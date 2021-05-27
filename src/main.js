import App from "./App.js";

const initalData = JSON.parse(localStorage.getItem("catSearchResult") || "[]");

new App(document.querySelector("#App"), initalData);
