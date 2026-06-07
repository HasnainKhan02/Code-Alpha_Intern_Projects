var typed = new Typed("#typed", {
  strings: [
    "Frontend Developer",
    "Computer Science Student",
    "Future Developer",
  ],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true,
});
// Back to Top Visibility
const scrollBtn = document.getElementById("scrollTop");
window.onscroll = function () {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Scroll to top execution
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let skillsSection = document.getElementById("skills");
skillsSection.addEventListener("click", () => {
  document.getElementById("skills-sec").scrollIntoView({
    behavior: "smooth",
  });
});
let projectTag = document.getElementById("projects");
projectTag.addEventListener("click", () => {
  document.getElementById("projects-sec").scrollIntoView({
    behavior: "smooth",
  });
});

let ContactTag = document.getElementById("contact");
ContactTag.addEventListener("click", () => {
  document.getElementById("contact-sec").scrollIntoView({
    behavior: "smooth",
  });
});
let homeTag = document.getElementById("home");
homeTag.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
let logoTag = document.getElementById("logo");
logoTag.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth",cursor:"pointer" });
});
