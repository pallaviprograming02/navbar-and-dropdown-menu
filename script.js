
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navLinks = document.getElementById("navLinks");
    const projectsDropdown = document.getElementById("projectsDropdown");
    const projectsToggle = document.getElementById("projectsToggle");

    function closeMobileMenu() {
      navLinks.classList.remove("show");
      projectsDropdown.classList.remove("open");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      projectsToggle.setAttribute("aria-expanded", "false");
    }

    function updateHamburgerState() {
      const isOpen = navLinks.classList.contains("show");
      hamburgerBtn.setAttribute("aria-expanded", isOpen.toString());
    }

    // Toggle main menu on mobile
    hamburgerBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      navLinks.classList.toggle("show");
      updateHamburgerState();
    });

    // Toggle dropdown on mobile
    projectsToggle.addEventListener("click", (event) => {
      if (window.innerWidth <= 768) {
        event.stopPropagation();
        const isOpen = projectsDropdown.classList.toggle("open");
        projectsToggle.setAttribute("aria-expanded", isOpen.toString());
      }
    });

    // Close menus when clicking outside
    document.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        closeMobileMenu();
      }
    });

    // Keep menu state clean when resizing
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    });

    // Close mobile menu with Escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    });
  