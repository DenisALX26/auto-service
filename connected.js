const calendar = document.getElementById("calendar-container");
calendar.style.display = "none";

const pickTime = document.querySelector(".set-hour");
pickTime.style.display = "none";

const confirmTodayRequestBtn = document.getElementById("today-request");
confirmTodayRequestBtn.style.display = "none";

const seeAvailableHoursBtn = document.querySelector(
  "section .container > button"
);
seeAvailableHoursBtn.style.display = "none";

const checkHours = document.getElementById("today");
checkHours.addEventListener("click", () => {
  seeAvailableHoursBtn.style.display = "block";
  confirmTodayRequestBtn.style.display = "block";
  pickTime.style.display = "block";
  checkHours.style.display = "none";
});

function confirmHour() {
  seeAvailableHoursBtn.style.display = "none";
  confirmTodayRequestBtn.style.display = "none";
  pickTime.style.display = "none";
  checkHours.style.display = "block";
  alert("Rezervarea ta a fost înregistrată!");
}

const bookBtn = document.querySelector(".illustration");
const confirmDay = document.getElementById("confirmDay");
confirmDay.style.display = "none";

bookBtn.addEventListener("click", () => {
  calendar.style.display = "block";
  bookBtn.style.display = "none";
  confirmDay.style.display = "block";
});

confirmDay.addEventListener("click", () => {
  calendar.style.display = "none";
  bookBtn.style.display = "flex";
  confirmDay.style.display = "none";
  alert("Data a fost confirmată!");
});

const myAccountBtn = document.getElementById("blueBtn"),
  myAccountPage = document.getElementById("myAccountPage"),
  headerSection = document.querySelector("header"),
  closeMyaccountPageIcon = document.querySelector("#myAccountPage svg"),
  mainElement = document.querySelector("main"),
  mainChildren = Array.from(mainElement.children),
  footerElement = document.querySelector("footer");
myAccountBtn.addEventListener("click", () => {
  myAccountPage.style.display = "flex";
  headerSection.style.display = "none";
  footerElement.style.display = "none";
  mainChildren.forEach((child, index) => {
    if (index != 0) {
      child.style.display = "none";
    }
  });
});
closeMyaccountPageIcon.addEventListener("click", () => {
  myAccountPage.style.display = "none";
  headerSection.style.display = "flex";
  footerElement.style.display = "flex";
  mainChildren.forEach((child, index) => {
    if (index != 0) {
      child.style.display = "flex";
    }
  });
});

const log_outBtn = document.getElementById("log-out");
log_outBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

const userFirstName = document.getElementById("first-name"),
  userLastName = document.getElementById("last-name"),
  userEmail = document.getElementById("email");

userFirstName.textContent = "Prenume: " + localStorage.getItem("firstName");
userLastName.textContent = "Nume: " + localStorage.getItem("lastName");
userEmail.textContent = "Email: " + localStorage.getItem("email");
