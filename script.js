// Selezioniamo il form e il pulsante di submit
const contactForm = document.getElementById("contactForm");
const submitButton = contactForm.querySelector('button[type="submit"]');

// Quando il pulsante viene cliccato, eseguiamo questa funzione
submitButton.addEventListener("click"),
  function (event) {
    // Impediamo l'invio del form in modo tradizionale
    event.preventDefault();
  };
// Otteniamo i dati inseriti dall'utente
const jobType = document.getElementById("jobType").value;
const promoCode = document.getElementById("promoCode").value.toUpperCase();

console.log("Tipo di lavoro selezionato:", jobType);
console.log("Codice promozionale inserito:", promoCode);
