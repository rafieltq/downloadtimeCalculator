var peso = document.getElementById('PesoArchivo')
var unidad = document.getElementById('SelectUnidad')
var velocidad = document.getElementById('SelectMb')
var Btn = document.getElementById('CalcBtn')
var alerta = document.getElementById('alerta')
var pesoArchivo;
var descarga;
var tiempo;
var unidadTemporal;

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
  descarga = pesoArchivo / velocidad.value;
}
function time(){
  tiempo = descarga / 60;
  tiempo = Math.round(tiempo);
}
function calc(){
    unidadPeso();
    download();
    time();
    if(tiempo < 60){
      alerta.innerHTML = "Su descarga tomará:" + " " + tiempo + " " + "minutos";
    } else if (tiempo > 60){
      getHours();
      alerta.innerHTML = "Su descarga tomará:" + " " + inthour + " " + "horas" + " " + "y" + " " + intminutes + " " +  "minutos";
    }
    
}
function getHours(){

    hour = tiempo / 60 
    inthour = Math.trunc(hour)
    floathour = hour - inthour

    minutes = floathour * 60
    intminutes = Math.trunc(minutes);
    

}
function validate(){
  if(peso.value == isNaN){
    console.log('object');
  }
}
