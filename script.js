document
  .getElementById("contactForm")
  .addEventListener("submit", function (evento) {
    evento.preventDefault(); //modifica il comportamento del form

    console.log("Il form è stato inviato.");

    //  tipo di lavoro selezionato
    let tipoDiLavoro = document.getElementById("jobType").value;
    console.log("Tipo di lavoro scelto:", tipoDiLavoro);

    //  codice promozionale scritto dall'utente
    let codicePromozionale = document.getElementById("promoCode").value;
    console.log("Codice promozionale inserito:", codicePromozionale);

    // Lista dei codici promozionali validi
    const codiciPromozionaliValidi = [
      "YHDNU32",
      "JANJC63",
      "PWKCN25",
      "SJDPO96",
      "POCIE24",
    ];
    console.log("Codici promozionali validi:", codiciPromozionaliValidi);

    // / Imposta  orario in base al lavoro scelto
    let prezzoOrario = 0;
    if (tipoDiLavoro === "full-time") {
      prezzoOrario = 20.5;
    } else if (tipoDiLavoro === "part-time") {
      prezzoOrario = 15.3;
    } else {
      prezzoOrario = 33.6;
    }
    console.log("Prezzo orario:", prezzoOrario);

    // Calcola il prezzo totale per 10 ore
    let prezzoFinale = prezzoOrario * 10;
    console.log("Prezzo iniziale (10 ore):", prezzoFinale);
  });
