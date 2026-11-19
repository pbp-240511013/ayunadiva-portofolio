const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Ganti data kontak dan tautan ini sebelum website dipublikasikan.
const contact = {
  email: "your.email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-profile"
};

document.getElementById("emailLink").href = `mailto:${contact.email}`;
document.getElementById("githubLink").href = contact.github;
document.getElementById("linkedinLink").href = contact.linkedin;
