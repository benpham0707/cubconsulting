document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing once element is visible
          }
        });
      },
      {
        threshold: 0.7, // Trigger when 10% of the element is visible
      }
    );
  
    fadeElements.forEach((el) => observer.observe(el));
  });
  