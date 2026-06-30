let score = 0;/*Stores the players score*/
let timeLeft = 30;/*Stores the time in sconds*/

function catchVirus(element) {/*Funkcija koja se pokrece kada kliknes na virus*/
    score++;
    document.getElementById("score").textContent = score;/*Azurira prikaz brojeva na stranici*/

    let randomX = Math.random() * 850;/*Generates a normal horizontal position*/
    let randomY = Math.random() * 120;/*Generates a normal vertikal position*/

    element.style.left = randomX + "px";/*Moves the virus to an random place*/
    element.style.top = randomY + "px";

    if (score >= 20) {
        alert("Du bist ein Biomed Profi!!");/*Show a message when player reaches 20 points*/

    }

}
let timer = setInterval(function () {/*Starts a timer*/
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;

    if (timeLeft <= 0) {/*stop the timer*/
        clearInterval(timer);
        alert("Spiel vorbei!Deine Punkte: " + score);
        document.querySelector(".virus").style.display = "none";/*Hides the virus after a game*/

    }
}, 1000);


let score2 = 0;

const cases = [
    {
        text: "Patient cannot breathe!",
        answer: "lungs"
    },
    {
        text: "Patient has memory problems!",
        answer: "brain"
    },
    {
        text: "Patient has circulation problems!",
        answer: "heart"
    }
];

let currentCase = 0;

function checkAnswer(answer) {

    if (answer === cases[currentCase].answer) {

        score2++;

        document.getElementById("score2").textContent = score2;

        alert("Correct!");
    }
    else {
        alert("Wrong!");
    }

    currentCase++;

    if (currentCase >= cases.length) {

        alert("Game finished! Score: " + score2);

        currentCase = 0;
    }

    document.getElementById("task").textContent =
        cases[currentCase].text;
}