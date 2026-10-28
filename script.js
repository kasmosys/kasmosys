
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });

    document.getElementById("year").textContent = new Date().getFullYear();

    document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your request has been received. Our team will contact you shortly.");
      this.reset();
    });
