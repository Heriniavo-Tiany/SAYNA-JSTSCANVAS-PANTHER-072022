// popup2
const form = document.querySelector('form');
const popup = document.getElementById('popup2');
const questionSuivanteBtn = document.getElementById('question-suivante');

let actualQuestion = 0;
const idSpan = document.getElementById("idQuestion");
const q1 = document.getElementById("q1");
const texteEnigme = document.getElementById("texteEnigme");
const questionEnigme = document.getElementById("questionEnigme");
const le_savais_tu = document.getElementById("le_savais_tu");
const le_savais_tu_content = document.getElementById("le_savais_tu_content");
const bonne_Reponse = document.getElementById("bonne_Reponse");
const countdownParagraph = document.createElement('p');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Last popup
    if (actualQuestion === 2) {
        const lineBreak = document.createElement('br');
        bonne_Reponse.innerText = 'Coming soon!';
        countdownParagraph.classList.add('cantarell', 'white');
        const image = document.createElement('img');
        image.src = './assets/Enigme/figma_logo.svg';
        bonne_Reponse.appendChild(lineBreak);
        bonne_Reponse.appendChild(image);
        bonne_Reponse.appendChild(countdownParagraph);
        // Mise à jour initiale du compte à rebours
        updateCountdown();

// Mise à jour du compte à rebours toutes les secondes
        setInterval(updateCountdown, 1000);
    }
    // Display the popup
    popup.classList.add('popup2-active');
});

questionSuivanteBtn.addEventListener('click', function () {
    if (actualQuestion === 2)
        location.reload();

    // Hide the popup
    popup.classList.remove('popup2-active');
    actualQuestion++;
    idSpan.innerText = (actualQuestion + 1).toString();
    q1.remove();
    texteEnigme.innerText = enigmes[actualQuestion].text;
    questionEnigme.innerText = enigmes[actualQuestion].question;
    le_savais_tu.innerText = "Le savais tu?";
    le_savais_tu_content.innerText = enigmes[actualQuestion].le_savais_tu;
});


//Enigme
const enigmes = [
    {
        id: 1,
        text: "Prouve ton talent d’espion et déchiffre cette réplique d’Okoyé écrite en Wakandais, et\n" +
            "apprend par la même occasion la première valeur d’une Dora Milaje !",
        question: ' " SI JE SUIS FIDELE C’EST A CE TRONE\n' +
            'PEU IMPORTE QUI MONTE DESSUS "',
        le_savais_tu: "Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la\n" +
            "lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et\n" +
            "si tu regardais quel symbole revient le plus souvent ? "
    },
    {
        id: 2,
        text: "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
        question: "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab\n" +
            "wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm\n" +
            "uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
        le_savais_tu: "Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l’alphabet ? "
    },
    {
        id: 3,
        text: "Lorsque T'challa mange l'herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d'un certain film  où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
        question: "01001100 01000101 00100000 01010010 01001111 01001001\n" +
            "00100000 01001100 01001001 01001111 01001110 00001101\n" +
            "00001010",
        le_savais_tu: "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. Cest en quelque sorte lancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1."
    }
]

// TImer
const countdownDate = new Date('2023-07-25');

// Fonction pour calculer le temps restant jusqu'à la date de fin
function calculateTimeRemaining() {
    const now = new Date();
    const difference = countdownDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
        days,
        hours,
        minutes,
        seconds
    };
}

// Fonction pour formater le temps restant sous forme de chaîne de caractères
function formatTimeRemaining(time) {
    const {days, hours, minutes, seconds} = time;

    return `${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes`;
}

// Fonction pour mettre à jour le compte à rebours
function updateCountdown() {
    const timeRemaining = calculateTimeRemaining();
    countdownParagraph.textContent = formatTimeRemaining(timeRemaining);
}
