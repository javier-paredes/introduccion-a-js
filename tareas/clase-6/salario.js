/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels 
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


let clicks = 0;

document.querySelector("#crear-integrante").onclick = function() {

    clicks += 1;
    
    crearInputsIntegrantes();
    mostrarBotonCalcular();

    return false

}


function crearInputsIntegrantes(){

    for(i=1 ; i <= clicks ; i++){

        const $div = document.createElement("div");
        $div.className = "integrante"

        const $label = document.createElement("label");
        $label.textContent = 'Integrante #' + (clicks) + ':' ;
        const $input = document.createElement("input");
        $input.type = "number";

        $div.appendChild($label);
        $div.appendChild($input);

        const $nodoIntegrantes = document.querySelector("#integrantes");
        $nodoIntegrantes.appendChild($div);

        let $integrantes = document.querySelectorAll(".integrante");
  
        for(i=clicks ; i < $integrantes.length ; i++){
    
            $integrantes[i].remove();
            
        }
    }

}

document.querySelector("#borrar-integrante").onclick = function(){
    


    let $integrantes = document.querySelectorAll(".integrante");

    if(clicks > 0){

        clicks -= 1;

        contador = $integrantes.length - 1;
        $integrantes[contador].remove();
        return false

    }   

    else {
        
        alert('No quedan más integrantes');
        ocultarBotonCalcular();
        return false;
    }
    

}

function mostrarBotonCalcular(){

    document.querySelector("#calcular").className = '';

}

function ocultarBotonCalcular(){

    document.querySelector("#calcular").className = 'oculto';

}

const $botonCalcular = document.querySelector("#calcular");

$botonCalcular.onclick = function(event){

    const valoresSalarios = obtenerSalarios();
    document.querySelector("#mayor-salario").textContent = calcularSalarioMayor(valoresSalarios);
    document.querySelector("#menor-salario").textContent = calcularSalarioMenor(valoresSalarios);
    document.querySelector("#salario-promedio-anual").textContent = calcularPromedioAnual(valoresSalarios);
    document.querySelector("#salario-promedio-mensual").textContent = calcularPromedioMensual(valoresSalarios);

    event.preventDefault();

}

function obtenerSalarios(){

    const salariosIntegrantes = [];

    const $integrantes = document.querySelectorAll(".integrante input");

    for(i=0 ; i < $integrantes.length ; i++){

        if($integrantes[i].value == ""){
            continue;
        }
        else{
            salariosIntegrantes.push(Number($integrantes[i].value))
        }        

    }

    return salariosIntegrantes;
      
}


function calcularSalarioMayor(salariosIntegrantes){

    let salarioMayor = salariosIntegrantes[0];

    for(i=0 ; i < salariosIntegrantes.length ; i++){

        if(salariosIntegrantes[i] > salarioMayor){

            salarioMayor = salariosIntegrantes[i];

        }

    }

    return salarioMayor;
}

function calcularSalarioMenor(salariosIntegrantes){

    let salarioMenor = salariosIntegrantes[0];

    for(i=0 ; i < salariosIntegrantes.length ; i++){

        if(salariosIntegrantes[i] < salarioMenor){
            salarioMenor = salariosIntegrantes[i];
        }
    }
    return salarioMenor;
}

function calcularPromedioAnual(salariosIntegrantes){

    let promedioAnualSalarios = 0;
    let sumaSalarios = 0;
    for(i=0 ; i < salariosIntegrantes.length ; i++){
        sumaSalarios += salariosIntegrantes[i];
    }

    promedioAnualSalarios = (Number(sumaSalarios/salariosIntegrantes.length));

    return promedioAnualSalarios;
}

function calcularPromedioMensual(salariosIntegrantes){

    
    let promedioMensualSalarios = 0;

    let sumaSalarios = 0;

    for(i=0; i < salariosIntegrantes.length ; i++){
        sumaSalarios += salariosIntegrantes[i];
    }

    

    promedioMensualSalarios = (Number (sumaSalarios/salariosIntegrantes.length)/12);

    return promedioMensualSalarios;

}

