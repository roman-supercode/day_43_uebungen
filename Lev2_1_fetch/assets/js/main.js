// Nutze wieder die Picsum Api
// https://picsum.photos/v2/list

// Da Du Dir die Daten jetzt schon in der Console ausgeben lassen kannst, darfst Du als nächstes für jeden Datensatz eine Kombination aus Bild und Autor in ein figure-Element wrappen und in Deinem HTML ausgeben lassen.


fetch("https://picsum.photos/v2/list")
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            // Zugriff auf Obejkteigenschaften
            const name = element.author;
            const url = element.download_url;

            // Elemente erstellen
            const figureElement = document.createElement("figure");
            const imgElement = document.createElement("img");
            const figcaptionElement = document.createElement("figcaption");

            // Element zuweisungen
            imgElement.src = url;
            imgElement.style.width = "50%";
            figcaptionElement.innerText = name;

            // Kindelemente dem Figure zuweisen
            figureElement.appendChild(imgElement);
            figureElement.appendChild(figcaptionElement);
            // Figure in das HTML einfügen
            document.body.appendChild(figureElement);
        });
    });

