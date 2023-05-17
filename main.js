const screen1 = document.getElementById("screen1")
const screen2 = document.getElementById("screen2")
const main = document.getElementById("mainScreen")
const firstImage = document.getElementById("firstImage")
const returnButton = document.getElementById("returnButton")
const luckPhrase = document.getElementById("luckPhrase")
const myList = [
    "Grandes oportunidades esperam por você. Acredite em si mesmo e aproveite-as.",
    "O sucesso é alcançado através da perseverança e do trabalho árduo. Continue persistindo!",
    "A vida é cheia de surpresas agradáveis. Esteja aberto para recebê-las.",
    "A felicidade verdadeira vem de dentro. Cultive pensamentos positivos e sorria todos os dias.",
    "Seja corajoso e siga seus sonhos. Eles têm o poder de se tornarem realidade.",
    "A gratidão transforma o comum em extraordinário. Agradeça pelas pequenas coisas da vida.",
    "Acredite no poder das suas escolhas. Elas moldam o seu destino.",
    "A sabedoria está em aprender com os erros. Levante-se e siga em frente com mais experiência.",
    "Aproveite cada momento como se fosse o último. A vida é uma jornada preciosa.",
    "O amor é a chave para a harmonia. Espalhe-o por onde você passar."
    ]

function switchScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function changeMainHeight(){
    main.style.height = "564px";
}

function returnMainHeight(){
    main.style.height = "424px";
}

function selectPhrase(){
    var numeroAleatorio = Math.floor(Math.random() * 10);
    let phrase = myList[numeroAleatorio]

    luckPhrase.innerText = phrase
}


firstImage.addEventListener("click" , changeMainHeight)
firstImage.addEventListener("click" , selectPhrase)

returnButton.addEventListener("click", returnMainHeight)


