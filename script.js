const prefersLight =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches;

const storedTheme = localStorage.getItem("ankit-theme");
const root = document.documentElement;

const setTheme = (mode) => {
  if (mode === "light") {
    root.classList.add("light");
  } else {
    root.classList.remove("light");
  }
  localStorage.setItem("ankit-theme", mode);
};

setTheme(storedTheme ?? (prefersLight ? "light" : "dark"));

const toggleBtn = document.querySelector(".theme-toggle");
toggleBtn?.addEventListener("click", () => {
  const isLight = root.classList.toggle("light");
  localStorage.setItem("ankit-theme", isLight ? "light" : "dark");
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".main-nav a");

const setActiveLink = () => {
  let current = "hero";
  sections.forEach((section) => {
    const offset = section.offsetTop - 100;
    if (window.scrollY >= offset) {
      current = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
};

window.addEventListener("scroll", setActiveLink);

document.querySelector("#year").textContent = new Date().getFullYear();

