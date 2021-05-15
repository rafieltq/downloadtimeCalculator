import { getDays,getHours,time,download,velocidadDescarga,unidadPeso,peso,unidad,velocidad,Btn,alerta,pesoArchivo,descarga,tiempo,unidadTemporal,calc } from './calc.js'
import '../css/styles.css'
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import './script'
import '../i18n/i18n'
import { validate } from './validation'
import { spanishSwitch, switchLanguages, englishSwitch, franchSwitch } from '../i18n/i18n'

switchLanguages('en');

peso.addEventListener('blur',validate);

Btn.addEventListener('click',calc);

spanishSwitch.addEventListener('click',()=>{
    switchLanguages('es');
});
englishSwitch.addEventListener('click',()=>{
    switchLanguages('en');
});
franchSwitch.addEventListener('click',()=>{
    switchLanguages('fr');
});

