document //modifica il comportamento del form
  .getElementById("contactForm")
  .addEventListener("submit", function (evento) {
    evento.preventDefault();
    console.log("Il form è stato inviato.");

    //  tipo di lavoro selezionato
    let tipoDiLavoro = document.getElementById("jobType").value;
    console.log("Tipo di lavoro scelto:", tipoDiLavoro);

    //  codice promozionale scritto dall'utente
    let codicePromozionale = document.getElementById("promoCode").value;
    console.log("Codice promozionale inserito:", codicePromozionale);

    // Lista dei codici promozonali validi
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

    // Calcola il prezzo toale per 10 ore
    let prezzoFinale = prezzoOrario * 10;
    console.log("Prezzo iniziale (10 ore):", prezzoFinale);

    // Controlla se il codice promozionale è nella lista
    let codicePromozionaleValido = false;
    for (let i = 0; i < codiciPromozionaliValidi.length; i++) {
      if (codicePromozionale === codiciPromozionaliValidi[i]) {
        codicePromozionaleValido = true;
        console.log("Codice promozionale valido:", codicePromozionale);
        break;
      }
    }

    // Applica lo sconto del 25% se il codice è valido
    if (codicePromozionaleValido) {
      prezzoFinale = prezzoFinale * 0.75;
      console.log("Sconto applicato. Prezzo finale:", prezzoFinale);
    } else if (codicePromozionale) {
      console.log("Codice promozionale non valido.");
      document.getElementById("result").textContent =
        "Codice promozionale non valido.";
    }

    // Mostra il prezzo finale
    document.getElementById("result").textContent =
      "Il prezzo finale è: €" + prezzoFinale.toFixed(2);
    console.log("Prezzo finale mostrato all'utente:", prezzoFinale.toFixed(2));
  });

//
