alert("Te-ai logat ca admin!");

if (localStorage.getItem("forms_email")) {
  const email = localStorage.getItem("forms_email"),
    name = localStorage.getItem("forms_name"),
    phone = localStorage.getItem("forms_phone"),
    option = localStorage.getItem("forms_option"),
    container = document.getElementById("myAccountPage"),
    formsRequestDiv = document.createElement("div"),
    customerNameP = document.createElement("p"),
    customerEmailP = document.createElement("p"),
    customerContactP = document.createElement("p"),
    customerOptionP = document.createElement("p"),
    services = [
      "servicii de întreținere auto",
      "Reparații sistem frânare",
      "Înlocuirea amortizoarelor și a barelor stabilizatoare",
      "Diagnoză și reparații sisteme",
      "Servicii aer condiționat",
      "Direcție & Echilibrare Roți",
    ];
  formsRequestDiv.className = "forms-request";
  customerNameP.id = "customer_name";
  formsRequestDiv.appendChild(customerNameP);
  customerEmailP.id = "customer_email";
  formsRequestDiv.appendChild(customerEmailP);
  customerContactP.id = "customer_contact";
  formsRequestDiv.appendChild(customerContactP);
  customerOptionP.id = "customer_option";
  formsRequestDiv.appendChild(customerOptionP);
  container.appendChild(formsRequestDiv);

  customerContactP.textContent = `Contact: ${phone}`;
  customerEmailP.textContent = `Email: ${email}`;
  customerNameP.textContent = `Nume: ${name}`;
  customerOptionP.textContent = `Opțiune: ${services[option]}`;

  localStorage.removeItem("forms_email");
  localStorage.removeItem("forms_name");
  localStorage.removeItem("forms_phone");
  localStorage.removeItem("forms_option");
}
