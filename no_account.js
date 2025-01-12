const bookADay = document.querySelector(".illustration");
bookADay.addEventListener("click", () => {
  alert("Înregistrează-te pentru a putea rezerva o zi!");
});

const bookHour = document.querySelector(
  "section:last-of-type .container > .button"
);
bookHour.addEventListener("click", () => {
  alert("Înregistrează-te pentru a putea rezerva o oră!");
});
