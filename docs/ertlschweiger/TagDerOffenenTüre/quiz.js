const fragen = [
    {
        text: "Menschen haben 206 Knochen.",
        antwort: true
    },
    {
        text: "Die Lunge pumpt Blut durch den Körper.",
        antwort: false
    },
    {
        text: "Das Gehirn steuert unsere Bewegungen.",
        antwort: true
    },
    {
        text: "Das Herz liegt im Knie.",
        antwort: false
    },
    {
        text: "Wir atmen Sauerstoff ein.",
        antwort: true
    },
    {
        text: "Der Magen hilft beim Verdauen von Nahrung.",
        antwort: true
    },
    {
        text: "Menschen haben drei Herzen.",
        antwort: false
    },
    {
        text: "Blut transportiert Sauerstoff durch den Körper.",
        antwort: true
    }
];

let aktuelleFrage = 0;
let punkte = 0;

function naechsteFrage() {

    document.getElementById("ergebnis").innerHTML = "";

    aktuelleFrage = Math.floor(Math.random() * fragen.length);

    document.getElementById("frage").innerHTML =
        fragen[aktuelleFrage].text;
}

function antwort(auswahl) {

    if (auswahl === fragen[aktuelleFrage].antwort) {

        punkte++;

        document.getElementById("ergebnis").innerHTML =
            "✅ Richtig!";
    }
    else {

        document.getElementById("ergebnis").innerHTML =
            "❌ Leider falsch!";
    }

    document.getElementById("punkte").innerHTML =
        "Punkte: " + punkte;
}

naechsteFrage();