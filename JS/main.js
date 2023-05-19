/* ---MENU TOGGLE-- */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      toggle.classList.toggle("fa-solid");
    });
  }
};
showMenu("header-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");
const navMenu = document.getElementById("nav-menu");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ---EMAIL JS--- */
const contactForm = document.getElementById("contact__form");
const contactEmail = document.getElementById("contact-email");
const contactSubject = document.getElementById("contact-subject");
const contactMessage = document.getElementById("contact-message");
const contactMessageAlert = document.getElementById("contact-message-alert");

const sendEmail = (e) => {
  e.preventDefault();

  //Check if the field has a value
  if (
    contactEmail.value === "" ||
    contactSubject.value === "" ||
    contactMessage.value === ""
  ) {
    //Add or remove color class because of condition above
    contactMessageAlert.classList.remove("color-blue");
    contactMessageAlert.classList.add("color-red");

    //Show alert message
    contactMessageAlert.textContent = "Please write all the input fields!";
  } else {
    emailjs
      .sendForm(
        "service_ctuxvjn",
        "template_rcic6h8",
        "#contact__form",
        "Dm6U7UPx2AFbbd08A"
      )
      .then(() => {
        contactMessageAlert.classList.add("color-blue");
        contactMessageAlert.textContent = "Message sent!";

        setTimeout(() => {
          clearForm();
        }, 2000);
      });
  }
};

function clearForm() {
  contactEmail.value = "";
  contactSubject.value = "";
  contactMessage.value = "";
  contactMessageAlert.textContent = "";
}

contactForm.addEventListener("submit", sendEmail);

/* ---FOOTER--- */

//setting date for footer
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

/* ---SHOW SCROLL UP--- */
const navbar = document.getElementById("nav-menu");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 600) {
    topLink.classList.add("show__scroll-up");
  } else {
    topLink.classList.remove("show__scroll-up");
  }
});



