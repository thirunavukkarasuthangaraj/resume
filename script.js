document.getElementById("year").textContent = new Date().getFullYear();

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
}

const savedTheme = localStorage.getItem("theme");
const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
applyTheme(savedTheme || (systemPrefersLight ? "light" : "dark"));

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const freelanceToggle = document.getElementById("freelanceToggle");
const freelanceGrid = document.getElementById("freelanceGrid");

if (freelanceToggle && freelanceGrid) {
  freelanceToggle.addEventListener("click", () => {
    const isOpen = freelanceGrid.classList.contains("open");
    const label = freelanceToggle.querySelector(".toggle-label");
    if (isOpen) {
      freelanceGrid.style.maxHeight = "0px";
      freelanceGrid.classList.remove("open");
      freelanceToggle.setAttribute("aria-expanded", "false");
      label.textContent = "Show Projects";
    } else {
      freelanceGrid.classList.add("open");
      freelanceGrid.style.maxHeight = freelanceGrid.scrollHeight + "px";
      freelanceToggle.setAttribute("aria-expanded", "true");
      label.textContent = "Hide Projects";
    }
  });

  window.addEventListener("resize", () => {
    if (freelanceGrid.classList.contains("open")) {
      freelanceGrid.style.maxHeight = freelanceGrid.scrollHeight + "px";
    }
  });
}
