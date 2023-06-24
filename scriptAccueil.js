// -------- SLIDER PERSOS -----------
const persos = [
    {
        img: 'Pantherhome_slider_1',
        name: 'KILLMONGER',
        description: '  La sauvagerie de N\'Jadaka alors qu\'il servait dans une\n' +
            '                    unité d\'opérations noires de l\'armée américaine lui a\n' +
            '                    valu le surnom de Killmonger. D’origine Wakandaise,\n' +
            '                    et se sentant abandoné par sa nation, il cherche à\n' +
            '                    détroner T’Challa dans une quête vers le pourvoir.'
    },
    {
        img: 'Pantherhome_slider_2',
        name: 'OKOYE',
        description: 'Okoye est le général des Dora Milaje (groupe d’élite\n' +
            '                    de femmes guerrières) et le chef des forces armées et\n' +
            '                    des renseignements wakandais. Témoin du\n' +
            '                    couronnement de T\'Challa, elle se joint à lui dans de\n' +
            '                    nombreuses aventures.'
    },
    {
        img: 'Pantherhome_slider_3',
        name: 'SHURI',
        description: 'Shuri est la Princesse du Wakanda, la fille de T\'Chaka et de Ramonda, la soeur de T\'Challa et la leader du groupe de Design du Wakanda. Innovatrice, elle est chargée de créer une grande partie de la technologie moderne du Wakanda ainsi que les habits de la Panthère.'
    },
    {
        img: 'Pantherhome_slider_4',
        name: 'NAKIA',
        description: 'Nakia est une membre des Chiens de Guerre et l\'amoureuse de T\'Challa. Elle est souvent en mission à travers le monde, assistant aux granges détresses de nombreux peuples et commence à croire avec force que le Wakanda pourrait activement les aider.'
    },
    {
        img: 'Pantherhome_slider_5',
        name: 'RAMONDA',
        description: "Ramonda est la Reine Mère du Wakanda, épouse de T'Chaka et mère de T'Challa et Shuri. Elle se tenait aux côtés de son fils quand il devint le Roi du Wakanda, mais fut forcée de partir en exil lorsque Erik Killmonger vainquit T'Challa et pprit le contrôle du trône."
    },
    {
        img: 'Pantherhome_slider_6',
        name: 'W\'KABI',
        description: "W'Kabi est l'ancien chef de la sécurité de la Tribu de la Porte du Wakanda ainsi que l'ancien meilleur ami de T'Challa. Ayant perdu la foi en son roi pour avoir échoué à capturer Ulysses Klaue, l'homme responsable de la mort de ses parents, W'Kabi apporta son soutien à Erik Killmonger et lui permit..."
    },
    {
        img: 'Pantherhome_slider_7',
        name: 'M\'BAKU',
        description: "M'Baku est le chef de la tribu Jabari, un groupe de Wakandais qui s'étaient écartés de la société principale du Wakanda et fervant opposant du pouvoir de T'Challa, mais échoua à le vaincre lors de l'affrontement rituel pour le trône, avant de l'aider à défendre le Wakanda face à Erik Killmonger."
    },
    {
        img: 'Pantherhome_slider_8',
        name: 'ZURI',
        description: 'Zuri était un acncien membre des chiens de Guerre et un shaman Wakandais, loyal conseiller de son Roi. APrès avoir gardé les secrets de T\'Chaka à propos de sa gestion de la mort de N\'Jobu dans le passé, Zuri continua à soutenir le Roi du Wakanda alors que T\'Challa reprenait le trône.'
    },
    {
        img: 'Pantherhome_slider_9',
        name: 'EVERETT KENNETH ROSS',
        description: "L'agent Everett Ross est un agent de la CIA et un ancien Commissaire Exécutif à l'Antiterrorisme pour la Force conjointe Anti-Terroriste. Après avoir quitté la force conjointe Anti-Terroriste, Ross fut chargé de traquer et neutraliser Ulysses Klaue, ce qui plaça Ross sur le..."
    },
    {
        img: 'Pantherhome_slider_10',
        name: 'ULYSSE KLAUE',
        description: "Ullysses Klaue est un criminel international, gangster et vendeur d'armes sur le marché noir. En 1992, il collabora avec N'Gobu afin de voler une quantité importante de vibranium au Wakanda. Bien qu'il soit parvenu à voler et à s'echapper avec un stock important, il reçut une marque..."
    },
]

const slider = document.querySelector('.slider');
let currentPosition = 0;


// Generate slide items

for (let i = currentPosition; i < 2; i++) {
    appendNext(i);
}

function appendNext(i) {
    const perso = persos[i];

    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.classList.add('contentPerso');

    const img = document.createElement('img');
    img.src = `./assets/Accueil/${perso.img}.png`;
    img.alt = `Image of ${perso.name}`;

    const text = document.createElement('div');
    text.classList.add('text');

    const name = document.createElement('h1');
    name.classList.add('beyno', 'lavender');
    name.textContent = perso.name;

    const description = document.createElement('p');
    description.classList.add('cantarell', 'white');
    description.textContent = perso.description;

    const link = document.createElement('a');
    link.classList.add('white', 'cantarell');
    link.href = '#naissance';
    link.textContent = 'Voir plus >';

    // Append elements to the slide
    text.appendChild(name);
    text.appendChild(description);
    text.appendChild(link);

    slide.appendChild(img);
    slide.appendChild(text);

    // Append slide to the slider
    slider.appendChild(slide);
    currentPosition++;
}

// Move the slider to the next slide
function nextSlide() {
    const firstElement = slider.firstChild;
    slider.removeChild(firstElement);
    appendNext(currentPosition);
    if (currentPosition === 10)
        currentPosition = 0;
}

document.querySelector('.next-button').addEventListener('click', nextSlide);