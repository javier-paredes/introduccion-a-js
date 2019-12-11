// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

/*
function convertirTiempoHMS(horas){
    const HORAS = Math.trunc(horas);
    let minutos = (horas%1)*60;
    let segundos = (minutos%1)*60;
    minutos = Math.trunc(minutos);
    segundos = Math.trunc(segundos);

    return `${HORAS}h ${minutos}min ${segundos}seg`;    
}
*/

/*
let tiempoHoras = 4;
let tiempoMinutos = 78;
let tiempoSegundos = 240;


function convertirMinutosAHoras(tiempoMinutos) {
    
    
    console.log(tiempoMinutos %60);
}
*/
/*
document.querySelector('header').appendChild(nodoImagen);
const nodoImagen = document.createElement('img');
*/

    
/*
document.querySelector("#enviar-cantidad-videos").onclick = function () {

    
    let cantidadVideos = Number(document.querySelector("#cantidad-videos").value);
    
    console.log (cantidadVideos);
    let nodoForm = document.querySelector("#cantidad-tiempo");
    let cantidadHoras = document.querySelector("#cantidad-horas");
    let cantidadMinutos = document.querySelector("#cantidad-minutos");
    let cantidadSegundos = document.querySelector("#cantidad-segundos");
    
    const nodoCantidadHoras = document.createElement("input"); 
    "input".type="number"        
    const nodoCantidadMinutos = document.createElement("input"); 
    "input".type="number"    
    const nodoCantidadSegundos = document.createElement("input"); 
    "input".type="number"    

    const etiquetaHoras = document.createElement("label");
    etiquetaHoras.innerHTML = " Cantidad de horas: ";
    const etiquetaMinutos = document.createElement("label");    
    etiquetaMinutos.innerHTML = " Cantidad de minutos: ";
    const etiquetaSegundos = document.createElement("label");
    etiquetaSegundos.innerHTML = " Cantidad de segundos: ";
    nodoDiv = document.createElement('div')
    nodoDiv.setAttribute("class", "cantidades-div");

    for (i=1 ; i < cantidadVideos ; i++) {
       
       
        nodoForm.appendChild(nodoDiv);

        let cantidadesDiv = Number(document.querySelectorAll(".cantidades-div").length)

        if (cantidadesDiv <= i) {

            nodoForm.appendChild(nodoDiv);

            nodoDiv.appendChild(etiquetaHoras);
            nodoDiv.appendChild(nodoCantidadHoras);
            nodoDiv.appendChild(etiquetaMinutos);
            nodoDiv.appendChild(nodoCantidadMinutos);      
            nodoDiv.appendChild(etiquetaSegundos);
            nodoDiv.appendChild(nodoCantidadSegundos);
        }

    }
    
    
}
*/

document.querySelector("#calcular-tiempo-total").onclick = function () {
    
    let cantidadHorasVideoUno = Number(document.querySelector(".cantidad-horas-uno").value);
    let cantidadMinutosVideoUno = Number(document.querySelector(".cantidad-minutos-uno").value);
    let cantidadSegundosVideoUno = Number(document.querySelector(".cantidad-segundos-uno").value);

    let cantidadHorasVideoDos = Number(document.querySelector(".cantidad-horas-dos").value)
    let cantidadMinutosVideoDos = Number(document.querySelector(".cantidad-minutos-dos").value);
    let cantidadSegundosVideoDos = Number(document.querySelector(".cantidad-segundos-dos").value);

    let cantidadHorasVideoTres = Number(document.querySelector(".cantidad-horas-tres").value);
    let cantidadMinutosVideoTres = Number(document.querySelector(".cantidad-minutos-tres").value);
    let cantidadSegundosVideoTres = Number(document.querySelector(".cantidad-segundos-tres").value);

    let cantidadHorasVideoCuatro = Number(document.querySelector(".cantidad-horas-cuatro").value);
    let cantidadMinutosVideoCuatro = Number(document.querySelector(".cantidad-minutos-cuatro").value);
    let cantidadSegundosVideoCuatro = Number(document.querySelector(".cantidad-segundos-cuatro").value);

    let cantidadHorasVideoCinco = Number(document.querySelector(".cantidad-horas-cinco").value);
    let cantidadMinutosVideoCinco = Number(document.querySelector(".cantidad-minutos-cinco").value);
    let cantidadSegundosVideoCinco = Number(document.querySelector(".cantidad-segundos-cinco").value);

    let sumaTotalSegundos = cantidadSegundosVideoUno + cantidadSegundosVideoDos + cantidadSegundosVideoTres + cantidadSegundosVideoCuatro + cantidadSegundosVideoCinco;

    let restoSegundos = Math.round((sumaTotalSegundos /60));
    let totalSegundos = (sumaTotalSegundos %60);
  
    
    let sumaTotalMinutos = cantidadMinutosVideoUno + cantidadMinutosVideoDos + cantidadMinutosVideoTres + cantidadMinutosVideoCuatro + cantidadMinutosVideoCinco + restoSegundos;

    let restoMinutos = Math.round((sumaTotalMinutos /60));
    let totalMinutos = (sumaTotalMinutos %60);


   
    let sumaTotalHoras = cantidadHorasVideoUno + cantidadHorasVideoDos + cantidadHorasVideoTres + cantidadHorasVideoCuatro + cantidadHorasVideoCinco + restoMinutos;

    console.log(sumaTotalHoras, totalMinutos, totalSegundos);

    let resultadoFinal = document.querySelector("#resultado-final");

    resultadoFinal.textContent = (`El tiempo total es de ${sumaTotalHoras} horas ${totalMinutos} minutos y ${totalSegundos} segundos.`);
    
}

