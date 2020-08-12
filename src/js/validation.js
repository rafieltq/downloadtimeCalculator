import { peso } from './calc'

function validate(){
    if(peso.value == ''){
      peso.setAttribute('class','form-control form-control-lg is-invalid')
    }else{
      peso.setAttribute('class','form-control form-control-lg')
    }
}

export { validate };