//languages config
const englishConfig = {
    weight: "File weight",
    speed: "Internet speed",
    calculate: "Calculate",
    results: "Here you will see how long your download will take.",
    doYouKnow: "Don't you know what your internet speed is? You can check it at:",
    language: "Languages",
    close:"Close",
    downloadTime: "Your download will take",
    hours:"hours",
    minutes:"minutes",
    seconds:"seconds",
    day:'days'
}

const spanishConfig = {
    weight: "Peso del archivo",
    speed: "Velocidad de internet",
    calculate: "Calcular",
    results: "Aquí verá cuánto tardará su descarga.",
    doYouKnow: "¿No sabes cuál es tu velocidad de internet? Puedes consultarlo en:",
    language: "Idiomas",
    close:"Cerrar",
    downloadTime: "Su descarga tomará",
    hours:"horas",
    minutes:"minutos",
    seconds:"segundos",
    day:'dias'
}

const franchConfig = {
    weight:"Poids du fichier",
    speed:"Vitesse Internet",
    calculate:"Calculer",
    results:"Ici, vous verrez combien de temps votre téléchargement prendra.",
    doYouKnow:"Vous ne savez pas quel est votre débit Internet? Vous pouvez le vérifier à l'adresse:",
    language:"Langues",
    close:"Fermer",
    downloadTime: "Votre téléchargement prendra",
    hours:"Heures",
    minutes:"minutes",
    seconds:"secondes",
    day:'jours'
    
}

//switch languages



//Extraer idioma del navegador
var idioma = navigator.language || navigator.userLanguage;
idioma = idioma.substring(0,2);

const elements = document.querySelectorAll("[data-i18n]");



function switchLanguages(lang){
    var language = lang;
    const replaceText = (el) => {
        const key = el.innerText;
        switch (language) {
            case 'es':
                el.innerText = spanishConfig[key] || key;
                break;
            case 'en':
                el.innerText = englishConfig[key] || key;
                break;
            case 'fr':
                el.innerText = franchConfig[key] || key;
                break;
        }
    
    }
    elements.forEach(el => replaceText(el));
}


