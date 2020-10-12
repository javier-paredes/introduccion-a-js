/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, 
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, 
borrando los inputs ya creados (investigar cómo en MDN).
*/



document.querySelector("#siguiente-paso").onclick = function(event){
    
let $cantidadFamilia = document.querySelector("#cantidad-familiares");
let cantidadFamilia = Number($cantidadFamilia.value);

borrarIntegrantes();
crearInputsIntegrantes(cantidadFamilia);

event.preventDefault();
}

function borrarIntegrantes(){

    const $familiares = document.querySelectorAll('.familiar');

    for(i=0 ; i < $familiares.length ; i++){

        $familiares[i].remove();
        
    }
}

function crearInputsIntegrantes(cantidadFamilia) {

    for(i=0 ; i < cantidadFamilia ; i++){

        const $div = document.createElement("div");
        $div.className = "familiar";

        const $label = document.createElement("label");
        $label.textContent = 'Edad del familiar #' + (i + 1) + ':';
        const $input = document.createElement("input");
        $input.type = "number";

        $div.appendChild($label);
        $div.appendChild($input);

        const $nodoIntegrantes = document.querySelector("#integrantes");
        $nodoIntegrantes.appendChild($div);
    }

    mostrarIntegrantes();

}

function mostrarIntegrantes(){

    let mostrarBotonCalcular = document.querySelector("#calcular");
    mostrarBotonCalcular.className = "";

};

document.querySelector('#calcular').onclick = function(event){

    const valoresEdades = obtenerEdadesIntegrantes();
    document.querySelector("#edad-mayor").textContent = calcularMayorEdad(valoresEdades);
    document.querySelector("#edad-menor").textContent = calcularMenorEdad(valoresEdades);
    document.querySelector("#promedio-edades").textContent = calcularPromedioEdades(valoresEdades);
    mostrarCalculos(valoresEdades);

    event.preventDefault();
}

function obtenerEdadesIntegrantes(){

    const $integrantes = document.querySelectorAll(".familiar input")
    const edadesIntegrantes = [];

    for (i=0 ; i < $integrantes.length ; i++){

        edadesIntegrantes.push(Number($integrantes[i].value));

    }

    return edadesIntegrantes;
}


function calcularMayorEdad(valoresEdades){

    let mayorEdad = valoresEdades[0];
    for(i=1; i < valoresEdades.length; i++){
        if(valoresEdades[i] > mayorEdad) {
            mayorEdad = valoresEdades[i];
        }        
    }
    return mayorEdad;    
}

function calcularMenorEdad(valoresEdades){

    let menorEdad = valoresEdades[0];
    for(i=1; i < valoresEdades.length; i++){
        if(valoresEdades[i] < menorEdad){
            menorEdad = valoresEdades[i];
        }
    }
    return menorEdad;

}

function calcularPromedioEdades(valoresEdades){

    let suma = 0;
    for(i=0 ; i < valoresEdades.length ; i++){

        suma += valoresEdades[i];

    }
    
    promedioEdades = Number((suma / valoresEdades.length));

    return promedioEdades;

}

function mostrarCalculos(){

    let resultadosEdades =  document.querySelector("#resultados");
    resultadosEdades.className = "";

}

document.querySelector("#resetear").onclick = function(){
    borrarIntegrantes()
    ocultarBotonCalculo();
    ocultarResultados(); 
}

function ocultarBotonCalculo(){

    let ocultarBotonCalculo = document.querySelector("#calcular");
    ocultarBotonCalculo.className = "oculto";

}

function ocultarResultados(){

    let ocultarResultados = document.querySelector("#resultados");
    ocultarResultados.className= "oculto";

}
