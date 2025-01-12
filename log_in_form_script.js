const signUpOption = document.getElementById("sign-up-option"),
  logInOption = document.getElementById("log-in-option");

signUpOption.addEventListener("click", () => {
  const signUpPage = document.querySelector("section.sign-up"),
    logInPage = document.querySelector("section.log-in");
  signUpPage.style.display = "flex";
  logInPage.style.display = "none";
});

logInOption.addEventListener("click", () => {
  const signUpPage = document.querySelector("section.sign-up"),
    logInPage = document.querySelector("section.log-in");
  signUpPage.style.display = "none";
  logInPage.style.display = "flex";
});

const loading = document.querySelector(".loading-screen"),
  logInBtn = document.getElementById("log-in-btn"),
  signUpBtn = document.getElementById("sign-up-btn");

function logInOrSignUp() {
  const signUpPage = document.querySelector("section.sign-up"),
    logInPage = document.querySelector("section.log-in"),
    loadingText = document.querySelector(".spinner p"),
    firstName = document.querySelector(
      "section.sign-up input#first-name"
    ).value,
    lastName = document.querySelector("section.sign-up input#last-name").value,
    email = document.querySelector("section.sign-up input#email").value,
    password = document.querySelector("section.sign-up input#password").value;
  let admin_check = false;
  if (signUpPage.style.display === "flex") {
    signUpPage.style.display = "none";
    loadingText.textContent = "Signing up...";
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  } else {
    logInPage.style.display = "none";
    loadingText.textContent = "Logging in...";
    const email = document.querySelector("section.log-in input#email").value,
      password = document.querySelector("section.log-in input#password").value;
    fetch("admins.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (email == data.admin.email && password == data.admin.password) {
          admin_check = true;
        }
        loading.style.display = "flex";
        if (!admin_check) {
          setTimeout(() => {
            window.location.href = "connected.html";
          }, 2000);
        } else {
          setTimeout(() => {
            window.location.href = "admin.html";
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("Error fetching JSON:", error);
      });
  }
}
