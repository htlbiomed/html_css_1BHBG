const correctWord = "HERZDRUCKMASSAGE";
let letters = correctWord.split("");

// Buchstaben mischen
for (let i = letters.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
}

const container = document.getElementById("word-container");

function renderLetters() {
    container.innerHTML = "";

    letters.forEach((letter, index) => {
        const btn = document.createElement("button");
        btn.textContent = letter;
        btn.style.margin = "5px";
        btn.style.padding = "10px";
        btn.style.fontSize = "20px";

        btn.onclick = () => {
            if (index < letters.length - 1) {
                [letters[index], letters[index + 1]] =
                    [letters[index + 1], letters[index]];
                renderLetters();
            }
        };

        container.appendChild(btn);
    });
}

function checkWord() {
    const currentWord = letters.join("");

    if (currentWord === correctWord) {
        document.getElementById("result").innerHTML =
            "<div style='font-size:150px; color:green;'>✔</div>" +
            "<h2 style='color:green;'>Richtig! Herzdruckmassage</h2>";
    } else {
        document.getElementById("result").innerHTML =
            "<h2 style='color:red;'>Leider noch nicht richtig!</h2>";
    }
}

renderLetters();