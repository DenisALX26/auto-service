const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    header.style.backgroundColor = "white";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

const phoneNumber = "+40712345678";
const callLink = document.getElementById("emergency");
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const callLink2 = document.querySelector(".call-now");

if (isMobile) {
  callLink.setAttribute("href", `tel:${phoneNumber}`);
  callLink2.setAttribute("href", `tel:${phoneNumber}`);
} else {
  callLink.addEventListener("click", () => {
    navigator.clipboard.writeText("+40712345678");
    alert("Phone number copied to clipboard!");
  });
  callLink2.addEventListener("click", () => {
    navigator.clipboard.writeText("+40712345678");
    alert("Phone number copied to clipboard!");
  });
}

const copyrightYear = document.querySelector(
  "footer .container .f-lastPart p:first-of-type"
);
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  copyrightYear.textContent = `Copyright © ${currentYear} Car Repair`;
});

// Script For The Advertisement Form
const formSubmitBtn = document.querySelector(
    ".advertisement .container input[type='submit']"
  ),
  requestSpinner = document.querySelector(".spinner");

document.querySelector(".loading-screen").style.display = "none";

formSubmitBtn.addEventListener("click", () => {
  const emailInput = document.getElementById("i-email"),
    nameInput = document.getElementById("i-name"),
    phoneInput = document.getElementById("i-contact"),
    optionInput = document.getElementById("options");

  let email = 0,
    option = 0,
    phoneNumber = 0,
    allFields = 0;

  if (
    !emailInput.value ||
    !nameInput.value ||
    !phoneInput.value ||
    !phoneInput.value
  ) {
    alert("Completează toate câmpurile!");
  } else {
    allFields = 1;
  }
  if (allFields) {
    if (!emailInput.value.includes("@")) {
      alert("Adresa de email nu este validă!");
    } else {
      email = 1;
    }
    if (email) {
      if (!phoneInput.value.match(/^\d+$/)) {
        alert("Numărul de telefon nu este valid!");
      } else {
        phoneNumber = 1;
      }
    }
    if (email && phoneNumber) {
      if (optionInput.selectedIndex == 0) {
        alert("Selectează o opțiune!");
      } else {
        option = 1;
      }
      if (email && option && phoneNumber && option) {
        formSubmitBtn.style.display = "none";
        localStorage.setItem("forms_email", emailInput.value);
        localStorage.setItem("forms_name", nameInput.value);
        localStorage.setItem("forms_phone", phoneInput.value);
        localStorage.setItem("forms_option", optionInput.selectedIndex);
        setTimeout(() => {
          document.querySelector(".loading-screen").style.display = "none";
          alert("Formularul a fost trimis cu succes!");
          emailInput.value = "";
          nameInput.value = "";
          phoneInput.value = "";
          optionInput.selectedIndex = 0;
          formSubmitBtn.style.display = "block";
        }, 2000);
        document.querySelector(".loading-screen").style.display = "flex";
      }
    }
  }
});
