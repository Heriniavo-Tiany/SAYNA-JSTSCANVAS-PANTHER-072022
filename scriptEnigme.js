// popup2
const form = document.querySelector('form');
const popup = document.getElementById('popup2');
const questionSuivanteBtn = document.getElementById('question-suivante');

let actualQuestion = 0;
const idSpan = document.getElementById("idQuestion");
const q1 = document.getElementById("q1");
const texteEnigme = document.getElementById("texteEnigme");
const questionEnigme = document.getElementById("questionEnigme");

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Display the popup
    popup.classList.add('popup2-active');
});

questionSuivanteBtn.addEventListener('click', function() {
    // Hide the popup
    popup.classList.remove('popup2-active');
    actualQuestion++;
    idSpan.innerText = actualQuestion.toString();
    q1.remove();
    texteEnigme.innerText = enigmes[actualQuestion].text;
    questionEnigme.innerText = enigmes[actualQuestion].question;
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
        text: "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code\n" +
            "césar également appelé code de chiffrement par décalage . L’alphabet a été décalé,\n" +
            "trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la\n" +
            "phrase :",
        question: "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab\n" +
            "wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm\n" +
            "uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
        le_savais_tu: "Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français\n" +
            "est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une\n" +
            "phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire\n" +
            "son décalage dans l’alphabet ? "
    },
    {
        id: 3,
        text: "Lorsque T'challa mange l'herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d'un certain film  où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
        question: "01001100 01000101 00100000 01010010 01001111 01001001\n" +
            "00100000 01001100 01001001 01001111 01001110 00001101\n" +
            "00001010",
        le_savais_tu: "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement\n" +
            "composé des deux lettres A et B. Cest en quelque sorte lancêtre du système\n" +
            "binaire des ordinateurs actuels car toute lettre pouvait être construite avec un\n" +
            "enchainement précis de ces deux lettres, tandis que le système binaire\n" +
            "informatique utilise 0 et 1."
    }
]