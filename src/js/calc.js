export var peso = document.getElementById('PesoArchivo')
export var unidad = document.getElementById('SelectUnidad')
export var velocidad = document.getElementById('SelectMb')
export var Btn = document.getElementById('CalcBtn')
export var pesoArchivo;
export var descarga;
export var tiempo;
export var unidadTemporal;
export var hour;
export var inthour;
export var floathour;
export var seconds
export var intseconds
export var day;
export var dayhours;
export var minutes;
export var intminutes;
export var floatminutes;
export var numHour = document.getElementById('hour')
export var numMinutes = document.getElementById('minutes')
export var numSeconds = document.getElementById('seconds')
export var numDay = document.getElementById('days')
export var daytxt = document.getElementById('daytxt')
export var hourstxt = document.getElementById('hourtxt')
export var minutestxt = document.getElementById('minutestxt')
export var secondstxt = document.getElementById('secondstxt')

import { switchLanguages,idioma } from '../i18n/i18n'

export function velocidadDescarga(){
  if(unidad.value == "Kb"){
    switch(velocidad.value) {
      case "1mb":
          velocidad = 128
        break;
      case "2mb":
          velocidad = 256
        break;
      case "3mb":
          velocidad = 384
        break;
      case "4mb":
          velocidad = 512
        break;
      case "5mb":
          velocidad = 640
        break;
      case "10mb":
          velocidad = 1280
        break;
      case "20mb":
          velocidad = 2560
        break;
    }
  } else if(unidad.value == "Mb"){
    switch(velocidad.value) {
      case "1mb":
          velocidad = 0.125
        break;
      case "2mb":
          velocidad = 0.25
        break;
      case "3mb":
          velocidad = 0.375
        break;
      case "4mb":
          velocidad = 0.5
        break;
      case "5mb":
          velocidad = 0.625
        break;
      case "10mb":
          velocidad = 1.28
        break;
      case "20mb":
          velocidad = 2.56
        break;
    }
  }else if(unidad.value == "Gb"){
    switch(velocidad.value) {
      case "1mb":
          velocidad = 0.125
        break;
      case "2mb":
          velocidad = 0.25
        break;
      case "3mb":
          velocidad = 0.375
        break;
      case "4mb":
          velocidad = 0.5
        break;
      case "5mb":
          velocidad = 0.625
        break;
      case "10mb":
          velocidad = 1.28
        break;
      case "20mb":
          velocidad = 2.56
        break;
    }
  }
}

export function unidadPeso(){
    switch(unidad.value) {
        case "Kb":
            pesoArchivo = peso.value
          break;
        case "Mb":
            pesoArchivo = peso.value * 1024 / 1000
          break;
        case "Gb":
            pesoArchivo = peso.value * 1024
          break;
      }
}
export function download(){
  descarga = pesoArchivo / velocidad;
}
export function time(){
  tiempo = descarga / 60;
}
export function calc(){
    peso = document.getElementById('PesoArchivo')
    unidad = document.getElementById('SelectUnidad')
    velocidad = document.getElementById('SelectMb')
    numHour = document.getElementById('hour')
    numMinutes = document.getElementById('minutes')
    numSeconds = document.getElementById('seconds')
    numDay = document.getElementById('days')
    pesoArchivo;
    descarga;
    tiempo;
    unidadTemporal;
    unidadPeso();
    velocidadDescarga()
    download()
    time();
    getHours();
    if(inthour => 24){
      getDays()
      numDay.innerHTML = dayhours
      numHour.innerHTML = inthour
      numMinutes.innerHTML = intminutes
      numSeconds.innerHTML = intseconds

      daytxt.innerHTML = 'days'
      hourstxt.innerHTML = 'hours'
      minutestxt.innerHTML = 'minutes'
      secondstxt.innerHTML = 'seconds'
      switchLanguages(idioma);

      daytxt.setAttribute('class','timetext-show')
      hourstxt.setAttribute('class','timetext-show')
      minutestxt.setAttribute('class','timetext-show')
      secondstxt.setAttribute('class','timetext-show')
      
    } 
    if(inthour < 24){
      
      numHour.innerHTML = inthour
      numMinutes.innerHTML = intminutes
      numSeconds.innerHTML = intseconds

      numDay.innerHTML = ''
      hourstxt.innerHTML = 'hours'
      minutestxt.innerHTML = 'minutes'
      secondstxt.innerHTML = 'seconds'
      switchLanguages(idioma);

      daytxt.setAttribute('class','timetext-hide')
      hourstxt.setAttribute('class','timetext-show')
      minutestxt.setAttribute('class','timetext-show')
      secondstxt.setAttribute('class','timetext-show')
      
    }
}
export function getHours(){
    
    hour = tiempo / 60 
    inthour = Math.trunc(hour)
    floathour = hour - inthour

    minutes = floathour * 60
    intminutes = Math.trunc(minutes);
    floatminutes = minutes - intminutes

    seconds = floatminutes * 60
    intseconds = Math.trunc(seconds)
}
export function getDays(){
  day = inthour / 24;
  dayhours = Math.trunc(day);
}