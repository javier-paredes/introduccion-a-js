
//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

/*
let listaNumeros = document.querySelectorAll("li");


console.log(listaNumeros);

console.log(listaNumeros.length);

console.log(listaNumeros[3].textContent);

let promedioNumeros = ((Number(listaNumeros[0].textContent) + Number(listaNumeros[1].textContent) + Number(listaNumeros[2].textContent) + Number(listaNumeros[3].textContent) + Number(listaNumeros[4].textContent))/listaNumeros.length);

console.log (promedioNumeros);

let nodoEm = document.querySelector("em");
let textoEm = nodoEm.textContent;
*/



/*
function calcularpromedio(array) {
    let suma = 0
    let promedio = 0
  
    for (let x = 0; x < array.length; x++) {
      suma = suma + array[x]
    }
  
    promedio = suma / array.length
    return promedio;
*/


let $listaNumeros = document.querySelectorAll("li");
let arrayNumeros = []
let sumaArrayNumeros = 0;

function ejercicioLista (){
    
    
    for(i=0 ; i < $listaNumeros.length ; i++){
        
        arrayNumeros.push(Number($listaNumeros[i].textContent));
        
        sumaArrayNumeros += arrayNumeros[i];

        

    }
    console.log(arrayNumeros);
    
    
    let promedioNumeros = sumaArrayNumeros / arrayNumeros.length;

    
    
    let $promedio = document.querySelector("#promedio")
    $promedio.textContent = promedioNumeros;

    let numeroMenor = Math.min(...arrayNumeros);
    

    let numeroMasPequeño = document.querySelector("#numero-mas-pequeño");
    numeroMasPequeño.textContent = numeroMenor;

    let numeroMayor = Math.max(...arrayNumeros);
    

    let numeroMasGrande = document.querySelector("#numero-mas-grande");
    numeroMasGrande.textContent = numeroMayor;

    let frecuenciaRepeticion = 1;
    let repeticionesNumero = 0;
    let numeroMasRepetido = 0;

    for(a=0; a < arrayNumeros.length ; a++){

        for(b=0; b < arrayNumeros.length; b++){

            if(arrayNumeros[a] == arrayNumeros[b]){
                repeticionesNumero++;

            }
            if(frecuenciaRepeticion < repeticionesNumero){
                frecuenciaRepeticion = repeticionesNumero
                numeroMasRepetido = arrayNumeros[a];
            }
    
        }
            repeticionesNumero = 0
    }
    console.log (numeroMasRepetido);

    let textoNumeroFrecuente = document.querySelector("#numero-mas-frecuente");
    textoNumeroFrecuente.textContent = numeroMasRepetido;
}

