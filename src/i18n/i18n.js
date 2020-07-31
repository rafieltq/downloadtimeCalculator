//languages config
const englishConfig = {
    Peso: "File weight",
    Velocidad: "Internet speed",
    Calcular: "Calculate",
    Resultado: "Here you will see how long your download will take.",
    Verificar: "Don't you know what your internet speed is? You can check it at:",
    Idiomas: "Languages"
}

const spanishConfig = {
    Peso: "Peso del archivo",
    Velocidad: "Velocidad de internet",
    Calcular: "Calcular",
    Resultado: "Aquí verá cuánto tardará su descarga.",
    Verificar: "¿No sabes cuál es tu velocidad de internet? Puedes consultarlo en:",
    Idiomas: "Idiomas"
}

const franchConfig = {
    Peso: "Poids du fichier",
    Velocidad: "Vitesse Internet",
    Calcular: "Calculer",
    Resultado: "Ici, vous verrez combien de temps votre téléchargement prendra.",
    Verificar: "Vous ne savez pas quel est votre débit Internet? Vous pouvez le vérifier à l'adresse:",
    Idiomas: "Langues"
}

//switch languages

function switchLanguages(lang){
    languages = '';
    
    if(lang == 'ES'){
        languages=spanishConfig;
    } else if (lang == 'EN'){
        languages=englishConfig;
    }else if (lang=='FR'){
        languages=franchConfig;
    }  
}

//Selector of data-i18n attribute
const elements = document.querySelectorAll("[data-i18n]");

//Replace text function
const replaceText = (el) => {
    const key = el.innerText;
    el.innerText = spanishConfig[key] || key;
}
elements.forEach(el => replaceText(el));







