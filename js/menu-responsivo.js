const menu = document.querySelector(".logo-menu");

const nav = document.querySelector(".nav-menu");

const nav_elemento1 = document.getElementById("nav-elemento1");

const nav_elemento2 = document.getElementById("nav-elemento2");

const nav_elemento3 = document.getElementById("nav-elemento3");

const nav_elemento4 = document.getElementById("nav-elemento4");

menu.addEventListener("click", () => nav.classList.toggle("active"));

menu.addEventListener("click", () => menu.classList.toggle("fechar"));

nav_elemento1.addEventListener("click", () => nav.classList.toggle("active"));

nav_elemento2.addEventListener("click", () => nav.classList.toggle("active"));

nav_elemento3.addEventListener("click", () => nav.classList.toggle("active"));

nav_elemento4.addEventListener("click", () => nav.classList.toggle("active"));

nav_elemento1.addEventListener("click", () => menu.classList.toggle("fechar"));

nav_elemento2.addEventListener("click", () => menu.classList.toggle("fechar"));

nav_elemento3.addEventListener("click", () => menu.classList.toggle("fechar"));

nav_elemento4.addEventListener("click", () => menu.classList.toggle("fechar"));