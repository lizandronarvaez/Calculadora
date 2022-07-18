let cifraVacia = "";
let contador = 0;
let p_operacion = true;
let sumar = false;
let restar = false;
let multiplicar=false;
let didivir=false;

// Input donde se almacena los valores
function NumberDisplay(number) {
    document.getElementById("input-display").value = cifraVacia + number;
    cifraVacia = document.getElementById("input-display").value;
}

// Funcion Sumar
function sumar() {
    contador = contador + Number(cifraVacia);
    document.getElementById("input-display").value = contador;
    cifraVacia = "";
    sumar = true;
    p_operacion = false;

}
//Funcion Resta
function restar() {
    if (p_operacion == false) {

        if (sumar) {
            contador = contador + Number(cifraVacia);
            document.getElementById("display").value = contador;
        } else if (restar) {

            contador = contador - Number(cifraVacia);
            document.getElementById("input-display").value = contador;

        } else {
            contador = Number(cifraVacia);
            p_operacion = false;
        }
        cifraVacia = "";
        sumar = false;
        restar = true;
    }
}

//Funcionmultiplicar
function multiplicar(){

    if(Number(contador) !== 0){
        contador=contador*Number(cifraVacia);
        cifraVacia=contador;
    }else{
        contador= Number(cifraVacia);
        cifraVacia="";
    }
    document.getElementById("input-display").value="";
    multiplicar=true;
    p_operacion=false;

}

//Funcion de divivir

function dividir(){
    if(Number(contador) !== 0){

        contador=contador / Number(cifraVacia);
        cifraVacia=contador
        
    }else{
        contador=Number(cifraVacia);
        cifraVacia="";
    }

    document.getElementById("input-display").value="";
    dividir=true;
    p_operacion=false;

}

// Funcion del boton igual
function resultado() {

    if (sumar) {
        document.getElementById("input-display").value = contador + Number(cifraVacia);
        
    } else if (restar) {

        document.getElementById("input-display").value = contador - Number(cifraVacia);
    }else if(multiplicar){
        document.getElementById("input-display").value= contador * Number(cifraVacia);
    }else if(dividir){
        document.getElementById("input-display").value=contador / Number(cifraVacia);
    }

}

//Funcion de poner a 0

function CountZero() {
    document.getElementById("input-display").value= contador;
}
