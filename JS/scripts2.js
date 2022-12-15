
const preguntas = [
    {
    "titulo":"¿Cómo se llama el personaje de la tienda de cómics?",
    "respuesta1": "Dependiente tienda cómics",
    "respuesta2": "Rex Banner",
    "respuesta3": "Jeff Albertson",
    "respuesta4": "Milhouse Van Houten",
    "src":"Apu.jpg"
    },
    {
   "titulo":"¿Quiénes son los únicos personajes de los Simpsons que tiene cinco dedos?",
    "respuesta1": "Maggie Simpson y Homer Simpsons",
    "respuesta2": "Dios y Jesús",
    "respuesta3": "Matt Groening y Sam Simon",
    "respuesta4": "Milhouse Van Houten",
    "src":""
    },
    {
   "titulo":"¿Cuál de estas frases no es de Ralph Wiggum?",
    "respuesta1": "¡Nos va a poner en una tarta!",
    "respuesta2": "Soy un unicornio retrasado",
    "respuesta3": "¿Te acuerdas de Alf? ¡Ha vuelto! ¡y en forma de chapas!",
    "respuesta4": "Milhouse Van Houten",
    "src":12345
    },
    {
   "titulo":"¿Cuántos años tiene Lisa Simpson?",
    "respuesta1": "10 años",
    "respuesta2": "8 años",
    "respuesta3": "9 años",
    "respuesta4": "Milhouse Van Houten",
    "src":12345
    },
    {
   "titulo":"¿Qué marca de cerveza toma Homer Simpson?",
    "respuesta1": "Buzz",
    "respuesta2": "Tropical",
    "respuesta3": "Duff",
    "respuesta4": "Milhouse Van Houten",
    "src":12345
    },
    {
   "titulo":"¿Cuántos hijos tiene Apu?",
    "respuesta1": "8",
    "respuesta2": "12",
    "respuesta3": "5",
    "respuesta4": "Milhouse Van Houten",
    "src":12345
    },
    {
   "titulo":"¿Cómo se llama la madre de Homer Simpson?",
    "respuesta1": "Agnes",
    "respuesta2": "Betty",
    "respuesta3": "Mona",
    "respuesta4": "Milhouse Van Houten",
    "src":12345
    },
    {
   "titulo":"¿Cómo se llama el hermano gemelo de Bart?",
    "respuesta1": "Gabriel",
    "respuesta2": "Hugo",
    "respuesta3": "Hank",
    "respuesta4": "Milhouse Van Houten",
    "src":12345
    },
    {
   "titulo":"¿Por qué desapareció Troy Mcclure de Los Simpsons?",
    "respuesta1": "Por su muerte en la temporada número 20",
    "respuesta2": "Por la trágica muerte de su actor de doblaje, Phil Hartman",
    "respuesta3": "Simplemente desapareció tras su boda con Selma",
    "respuesta4": "Milhouse Van Houten",
    "src":12345
    },
    {
   "titulo":"¿Cuál es el apellido de Apu?",
    "respuesta1": "AgNahasannes",
    "respuesta2": "Nahasapeemapetilon",
    "respuesta3": "Poonam",
    "respuesta4": "Milhouse Van Houten",
    "src":12345
    },
]


//creo section 
    //  > h3 titulo pregunta
    //  - label > input - respuesta 1
    //  - label > input - respuesta 2
    //  - label > input - respuesta 3
    //  - label > input - respuesta 4

for ( let i = 0 ; i < preguntas.length ; i++) {

    let section = document.createElement("section");
    section.id="preguntas";
    // section.classList.add("fielset");


    let tituloPregunta = document.createElement("h3");
    tituloPregunta.textContent = preguntas[i].titulo;
    // tituloPregunta.classList.add("tituloPregunta")
    section.appendChild(tituloPregunta);

    // respuesta 1, input radio 1

    let label1 = document.createElement("label");
    label1.innerHTML = preguntas[i].respuesta1;
    section.appendChild(label1);

    let input1 = document.createElement("input");
    input1.innerHTML = preguntas[i].respuesta1;
    // input1.classList.add("input1");
    input1.type ="radio";
    input1.name = "p" + (i + 1); //nose si funcionara quiero que no empiece de 0 sino de 1
    input1.value = "a";
    label1.appendChild(input1);

    // respuesta 2, input radio 2
    
    let label2 = document.createElement("label");
    label2.innerHTML = preguntas[i].respuesta2;
    label2.classList.add("label2")
    section.appendChild(label2);

    let input2 = document.createElement("input");
    input2.innerHTML = preguntas[i].respuesta2;
    // input2.classList.add("input2");
    input2.type ="radio";
    input2.name = "p" + (i + 1);
    input2.value = "b";
    label2.appendChild(input2);

     // respuesta 3, input radio 3
    
     let label3 = document.createElement("label");
     label3.innerHTML = preguntas[i].respuesta3;
     label3.classList.add("label3")
     section.appendChild(label3);
 
     let input3 = document.createElement("input");
     input3.innerHTML = preguntas[i].respuesta3;
    //  input3.classList.add("input3");
     input3.type ="radio";
     input3.name = "p" + (i + 1);
     input3.value = "c";
     label3.appendChild(input3);

     // respuesta 4, input radio 4
    
     let label4 = document.createElement("label");
     label4.innerHTML = preguntas[i].respuesta4;
     label4.classList.add("label4")
     section.appendChild(label4);
 
     let input4 = document.createElement("input");
     input4.innerHTML = preguntas[i].respuesta4;
     input4.classList.add("input4");
     input4.type ="radio";
     input4.name = "p" + (i + 1);
     input4.value = "d";
     label4.appendChild(input4);


     // no he sabido meter el boton al final de formulario..................

    //  let inputButton = document.createElement("input");
    //  inputButton.type ="submit";
    //  inputButton.value = "Enviar";
    //  inputButton.id ="boton";
    //  inputButton.textContent ="Comprueba tus respuestas";



// selecciono el form y añado todo lo anterior, todo lo que este escrito arriba se añade dentro del form.
   
    let form = document.getElementsByClassName("container")[0];
    form.appendChild(section);
}



// funciones verificar respuestas e imprimir texto.

function verificarRespuestas(){

let total = 10;
let puntos = 0;

let myForm = document.forms["quizForm"];
let respuestas = ["c","b","c","b", "c", "a", "c", "b", "b", "b"];

for(let i = 1; i <= total;i++){
    if(myForm["p" + i].value === null || myForm["p" + i].value === "" ){
        alert ("Porfavor responde a la pregunta nº  " + i);
        return false;
    } else {
        if (myForm["p"+ i].value === respuestas[i-1]){
            puntos ++;

        }
    }
}

let resultado = document.getElementById("resultado");
resultado.innerHTML = "<h3> Has conseguido... <spam>" + puntos +"</spam>  de  <spam>" + total + " puntos</spam> </h3>"

return false;
}