var peso = document.getElementById('PesoArchivo')
var unidad = document.getElementById('SelectUnidad')
var velocidad = document.getElementById('SelectMb')
var Btn = document.getElementById('CalcBtn')
var alerta = document.getElementById('alerta')
var pesoArchivo;
var descarga;
var tiempo;
var unidadTemporal;

function velocidadDescarga(){
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
          velocidad = 1.2
        break;
      case "20mb":
          velocidad = 2.5
        break;
    }
  } else if(unidad.value == "Mb" || unidad.value == "Gb"){
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
          velocidad = 1.25
        break;
      case "20mb":
          velocidad = 0.25
        break;
    }
  }
}

function unidadPeso(){
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
function download(){
  descarga = pesoArchivo / velocidad;
}
function time(){
  tiempo = descarga / 60;
}
function calc(){
    unidadPeso();
    velocidadDescarga()
    download()
    time();
    getHours();
    if(inthour => 24){
      getDays()
      alerta.innerHTML = "Su descarga tomará: " + " " + day + " " + "dia" + "," + " " + dayhours + " " + "horas" + "," + " " + intminutes + " " + "minutos" + " " + intseconds + " " + "segundos";
    } 
    if(inthour < 24){
      alerta.innerHTML = "Su descarga tomará: " + " " + inthour + " " + "horas" + "," + " " + intminutes + " " + "minutos" + " " + intseconds + " " + "segundos";
    }
}
function getHours(){
    
    hour = tiempo / 60 
    inthour = Math.trunc(hour)
    floathour = hour - inthour

    minutes = floathour * 60
    intminutes = Math.trunc(minutes);
    floatminutes = minutes - intminutes

    seconds = floatminutes * 60
    intseconds = Math.trunc(seconds)
}
function getDays(){
  day = inthour / 24;
  dayhours = Math.trunc(inthour) - inthour;
}
function validate(){
  if(peso.value == ''){
    peso.setAttribute('class','form-control form-control-lg is-invalid')
  }else{
    peso.setAttribute('class','form-control form-control-lg')
  }
}

