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

const projectsToggle = document.getElementById("projectsToggle");
const projectsGrid = document.getElementById("projectsGrid");

if (projectsToggle && projectsGrid) {
  projectsToggle.addEventListener("click", () => {
    const isOpen = projectsGrid.classList.contains("open");
    const label = projectsToggle.querySelector(".toggle-label");
    if (isOpen) {
      projectsGrid.style.maxHeight = "0px";
      projectsGrid.classList.remove("open");
      projectsToggle.setAttribute("aria-expanded", "false");
      label.textContent = "Show Projects";
    } else {
      projectsGrid.classList.add("open");
      projectsGrid.style.maxHeight = projectsGrid.scrollHeight + "px";
      projectsToggle.setAttribute("aria-expanded", "true");
      label.textContent = "Hide Projects";
    }
  });

  window.addEventListener("resize", () => {
    if (projectsGrid.classList.contains("open")) {
      projectsGrid.style.maxHeight = projectsGrid.scrollHeight + "px";
    }
  });
}
