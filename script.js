// =========================================================
// PROJECT FILTERING
// =========================================================

const filterBtns = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");


filterBtns.forEach((btn) => {

  btn.addEventListener("click", () => {

    // Remove active class from all buttons
    filterBtns.forEach((button) => {
      button.classList.remove("active");
    });

    // Add active class to clicked button
    btn.classList.add("active");


    // Get selected filter
    const filter = btn.getAttribute("data-filter");


    // Filter project cards
    projectCards.forEach((card) => {

      const category = card.getAttribute("data-category");


      if (
        filter === "all" ||
        category === filter
      ) {

        card.style.display = "flex";

      } else {

        card.style.display = "none";

      }

    });

  });

});


// =========================================================
// CONTACT FORM
// =========================================================

const form = document.getElementById("contactForm");

const alertBox = document.getElementById("formAlert");


form.addEventListener("submit", (e) => {

  // Prevent normal form submission
  e.preventDefault();


  // Get form values
  const name =
    document.getElementById("name").value;

  const email =
    document.getElementById("email").value;

  const message =
    document.getElementById("message").value;


  // Show alert
  alertBox.style.display = "block";


  // Create mailto URL
  const mailto =
    `mailto:yashrajkatiyar852@gmail.com` +
    `?subject=Portfolio Inquiry from ${encodeURIComponent(name)}` +
    `&body=${encodeURIComponent(
      "Sender Email: " +
      email +
      "\n\n" +
      message
    )}`;


  // Open email client
  setTimeout(() => {

    window.location.href = mailto;

  }, 600);

});