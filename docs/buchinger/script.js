function pruefen(antwort) {
    let ergebnis = document.getElementById("ergebnis");

    if (antwort === "herz") {
        ergebnis.innerHTML = "✅ Richtig! Das Herz pumpt Blut durch den Körper.";
        ergebnis.style.color = "green";
    } else {
        ergebnis.innerHTML = "❌ Falsch. Das Herz ist die richtige Antwort.";
        ergebnis.style.color = "red";
    }
}

let gerettet = false;

function retten() {
    gerettet = true;
    document.getElementById("status").innerHTML =
        "✅ Patient erfolgreich versorgt!";
}

setTimeout(function () {
    if (!gerettet) {
        document.getElementById("status").innerHTML =
            "❌ Zu spät! Der Patient braucht Hilfe.";
    }
}, 3000);