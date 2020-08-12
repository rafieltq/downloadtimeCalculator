//languages config
import { englishConfig } from './languages/english'
import { spanishConfig } from './languages/spanish'
import { franchConfig } from './languages/franch'
//Switches
export var spanishSwitch = document.getElementById('spanish');
export var englishSwitch = document.getElementById('english');
export var franchSwitch = document.getElementById('franch');
//Extraer idioma del navegador
export var idioma = navigator.language || navigator.userLanguage;
idioma = idioma.substring(0, 2);
export const elements = document.querySelectorAll("[data-i18n]");
//switch languages
export function switchLanguages(lang) {
    var language = lang;
    const replaceText = (el) => {
        const key = el.getAttribute('data-i18n-key');
        switch (language) {
            case 'es':
                el.innerText = spanishConfig[key] || key;
                idioma = 'es'
                break;
            case 'en':
                el.innerText = englishConfig[key] || key;
                idioma = 'en'
                break;
            case 'fr':
                el.innerText = franchConfig[key] || key;
                idioma =  'fr'
                break;
        }

    }
    elements.forEach(el => replaceText(el));
}

