
var cifraVacia = "";
let contador = 0;
let p_operacion = true;
let sumar = false;
let restar = false;
let multiplicar=false;
let didivir=false;

// Este la de abajo es el script del display
function display_numeros(numero) {

    document.getElementById("input-display").value = cifraVacia + numero;
    cifraVacia = document.getElementById("input-display").value;
}

// funcion de sumar
function suma() {
    contador = contador + Number(cifraVacia);
    document.getElementById("input-display").value = contador;
    cifraVacia = "";
    sumar = true;
    p_operacion = false;

}
// Aqui debajo creamos la funcion restar
function resta() {
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
//Aqui creamos la funcion multiplicar

function multiplica(){

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

function divide(){
    if(Number(contador) !==0){

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

function poner_a_cero() {
    document.getElementById("input-display").value = 0;
    cifraVacia =" ";
}