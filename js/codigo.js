var numero = 0;
var signos = "";
var resultados = document.querySelector("#operaciones");
var cantidadSignos = 0;

function operaciones(e) {

    numero = e.innerHTML; //trae el valor desde el html
    cantidadSignos=0;
    
    //console.log(numero);

    if (resultados.innerHTML == "0") {
        
        resultados.innerHTML =  numero;

    }
    else {

        resultados.innerHTML +=  numero; //concatena y muetras los numeros en el html
    }
    
};

function borrar() {
    
    resultados.innerHTML= 0; //vuelve la pantalla a cero

};

function decimal() {
    resultados.innerHTML += "."
}


function digitos(d) {
    cantidadSignos++;
    //console.log(cantidadSignos);
    signos = d.innerHTML;
    //console.log(signos);
    if (cantidadSignos==1){
        if (resultados.innerHTML==0) {
            resultados.innerHTML=0;
        } else {
            resultados.innerHTML += signos;
        }
    }
}

function resultado() {
    resultados.innerHTML=(eval(resultados.innerHTML));
    //eval evalua la cadena de texto y quita las comillas
}

