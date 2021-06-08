console.log("hola desde un archivo externo");

// document

let container = document.querySelector(".table"); //si lo encuentra retorna el resultado y solo devuelve uno
//lo imprimimos en console
console.log(container);

//el document.querySelectorAll hace seleccionar todos en comun
let link = document.querySelectorAll("a");
console.log(link);
 

//muestra los links 1 por uno y mostrando su ruta
link.forEach(function (link) {
    console.log(link);
}
    )



// cada una de las celdas vamos a adjuntar una accion
let celdas = document.querySelectorAll("td");
/*
celdas.forEach(function (td) {
    td.addEventListener('click',function () {
        console.log(this);
    })
}); */

//obtener los elementos de la clase close
 
let links = document.querySelectorAll(".close");
//recorrerlos

 links.forEach(function (link) {
    //agregar unevento click
     link.addEventListener("click", function (ev) {
         ev.preventDefault();
         let content = document.querySelector('.content');
         //quitar clases
         content.classList.remove("fadeInDown");
         content.classList.remove("animated");
         //agragar classes
         content.classList.add("animated");
         content.classList.add("fadeOutUp");

         Location.href = "/";

         return false;

       
    })
});


let iconos = document.querySelectorAll("i");
iconos.forEach(function (icono) {
    icono.classList.remove("fa-star-o")
    icono.classList.add("fa-star")



}
    )
