//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(200,150,360,1) 0%, rgba(260,129,12,1) 33%, rgba(255,19,260,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`


//Personalización de las salidas a consola

console.warn("Práctica 07: Repaso de Ciclos y sentencias de control")

console.log("%c1.- Si/Entoces ... (IF)", style_console)

//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero o falso 
let fechaActual=new Date();
console.log(`Hola, la fecha de hoy es: ${fechaActual.toDateString()}`)

//Y si la necesitamos en formato local(?)

const fechaLocalMX= fechaActual.toLocaleString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
});

console.log(`en formato local (México): ${fechaLocalMX}`)

//Si es antes de las doce saluda con buenos días

if(fechaActual.getHours()<12)
    console.log(`Buenos días, hoy es ${fechaLocalMX}`)

//Existe un extensor de la sentencia if(Sí) que es else (En Caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primera mitad del año`)
else
    console.log(`Estas en la segunda mitad del año.`)


//que pasa si la validación tiene varias operaciones 
const anio=fechaActual.getFullYear();
let inicioPrimavera=new Date(anio, 2, 21);
let inicioVerano=new Date(anio, 5, 21);
let inicioOtonio=new Date(anio, 8, 23);
let inicioInvierno=new Date(anio, 11, 21);
let estacion;
let horarioVerano=false;

if(fechaActual>=inicioPrimavera && fechaActual<inicioVerano){
    console.log(`Estamos en PRIMAVERA`);
    console.log("Inicia la floración de muchas plantas.")
    console.log("Los días son más largos y las noches más cortas.")
    console.log("Muchos animales despiertan de la hibernación.")
    estacion="Primavera";
    horarioVerano=true;
} else if(fechaActual>=inicioVerano&&fechaActual<inicioOtonio){
    console.log("Estamos en VERANO");
    console.log("En esta temporada abundan los días soleados y calurosos.")
    console.log("En esta temporada el índice de turismo vacacional sube.")
    console.log("Mucha gente busca realizar actividades al aire.")
    estacion="Verano";
    horarioVerano=true;
}else if(fechaActual>=inicioOtonio&&fechaActual<inicioInvierno){
    console.log("Estamos en OTOÑO")
    console.log("Los árboles suelen cambiar de follaje.")
    console.log("Se registrarán temperaturas más templadas.")
    console.log("Los animales comienzan con la recolección de alimento y preparan sus espacios para la hibernación, incluso algunas aves migran.")
    estacion="Otoño";
    horarioVerano=false;
} else {
    console.log("Estamos en INVIERNO")
    console.log("En esta temporada los días son más cortos y las noches más largas.")
    console.log("En algunas regiones suele nevar.")
    console.log("Dado las bajas temperaturas, se recomienda abrigarse.")
    estacion="Invierno";
    horarioVerano=false;
}



console.log("%c2.- Operador Ternario (validación?cumple:no_cumple)", style_console);
//En JavaScript existe una operación simplificada que valida si una condición se cumple o no, y que hacer en cada caso.

const edadPersona=18;
const mayoriaEdadMX=18;
const mayoriaEdadUS=21;
let evaluarMayoriaEdad=(edad)=>
    edad>=18?"Eres mayor de edad.":"No eres mayor de edad."

console.log("Evaluando la mayoría de edad de una persona: ");
console.log(evaluarMayoriaEdad(edadPersona));

//Sin embargo tenemos que considerar que la mayoría de edad varia en cada país por cuestiones legales, por lo que debemos considerar un segundo parámetro en la evaluación.

evaluarMayoriaEdad=(edad, pais)=>
    (edad>=18 && pais=="MX")?`En ${pais} eres mayor de edad.`:`En ${pais} NO eres mayor de edad.`


console.log("Evaluando la mayoría de edad de una persona en Estados Unidos")
console.log(evaluarMayoriaEdad(edadPersona, "USA"))

console.log("Evaluando la mayoría de edad de una persona en Estados Unidos")
console.log(evaluarMayoriaEdad(edadPersona, "MX"))


console.log("%c3.- SWITCH - CASE (Elección por valor definido)", style_console);

//Calculando tu generación en base a tu edad
let anioNacimiento;
let asignaGeneracion=(anioNacimiento)=>{

    switch(true){
        case(anioNacimiento<1968):
        return "Baby Boomer";

        case(anioNacimiento>1968 && anioNacimiento<=1980):
        return "Generación X";

        case(anioNacimiento>1980 && anioNacimiento<=1994):
        return "Generación Y/Millennial";

        case(anioNacimiento>1994 && anioNacimiento<=2009):
        return "Generación Z/Centennial";

        case(anioNacimiento>2009):
        return "Genración Alfa";
    }
}

console.log(`Dado que nací en el año 1999 soy de la generación ${asignaGeneracion(2003)}`)

console.log("%c4.- Manejo de Excepciones (TRY / CATCH)) ", style_console);

//En algunas ocaciones existiran errores que no son culpa del programa, si no del usuario, la red, el so o incluso de un middleware., pero que si duda debemos controlar para evitar las fallas de ejecución. 
 
console.log("Intentamos dividir : 0/10, el resultado es: ")

try{     //intenta
    let result=  0/10;   //dividir 0 entre un entero
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}


console.log("Intentamos dividir : 10/0, el resultado es: ")

try{     //intenta
    let result=  10/0;   //dividir un entero entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("Intentamos dividir : a/10, el resultado es: ")

try{     //intenta
    let result=  "a"/10;   //dividir una letra entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}



console.log("Intentamos dividir : la variable a / 10, el resultado es: ")

try{     //intenta
    let result=  a/10;   //dividir una variable no definida entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("Intentamos dividir : el valor de la variable x / entre el valor de la variable y, el resultado es: ")

try{     //intenta
    let x=8, y=2, result=  x/y;   
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("%c5.- Control de Ciclos  (BREAK / CONTINUE) ", style_console);

// En alguna ocaciones será importante detener un ciclo de manera abrupta para controlar casos especiales en un ciclo... 

console.log("Vamos a contar del 1 al 10....")
for(let num =1; num <=10; num++)
    console.log(num);

console.log("Ahora necesitamos que si llegas al 7 pares de contar... suponiendo que solo por hoy es de mala suerte...")

for(num =1; num <=10; num++)
    if(num==7)
        break;
    else 
        console.log(num);

console.log("Ahora necesitamos que si llegas al 7 te saltes ese número y continues")

for(num =1; num <=10; num++)
{
    if(num==7)
        {
            continue;
        }
    console.log(num);
}

console.log("%c6.- Ciclo Iterativo - (FOR) ", style_console);
// Recorre de manera iterativa  (i), de incremental o decremental

console.log("Los días de la semana son en orden ascendente son:")
let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

for(let i=0; i<dias.length;i++)
    console.log(dias[i])

console.log("Ahora vamos a imprimir los meses en orden descendente...")
const meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
for(let i=meses.length-1; i>=0; i-- )
    console.log(meses[i]);

console.log("%c7.- Ciclo Condicionales - (WHILE) ", style_console);
//Estos ciclos (BUCKLE) dependen de una condición para continuar ejecutandose
let finDeSemana = false;
let mensaje = "";
let j = 0;


while (j < dias.length ) {

    switch (j) {  // Usamos 'j' para que coincida con el índice
        case 0:
            finDeSemana = true;
            mensaje = "Domingoooo ᶻ 𝗓 𐰁 ";
            break;
        case 1:
            finDeSemana = false;
            mensaje = "Lunes de inicio de la semana (๑-﹏-๑)";
            break;
        case 2:
            finDeSemana = false;
            mensaje = "Segundo día de la semana, ¡a darle!";
            break;
        case 3:
            finDeSemana = false;
            mensaje = "Si se puede, vas a la mitad ";
            break;
        case 4:
            finDeSemana = false;
            mensaje = "Jueveeeees, si se puedeeeee  ";
            break;
        case 5:
            finDeSemana = false;
            mensaje = "Viernes, da lo último para terminar";
            break;
        case 6:
            finDeSemana = true;
            mensaje = "Sabadazooooo, felicidades";
            break;
    }

    // Imprimir el nombre del día y su mensaje
    if(!finDeSemana)
    {
        console.log(`Día: ${dias[j]}`);
        console.log(`Mensaje del día: ${mensaje}`);
    }
    j++;
}

console.log("%c8.- Ciclo condicionales, que se ejecuta al menos una vez - (DO WHILE)", style_console);

//Simulamos una lista de episodios de una temporada

let episodios=[
    "Episodio 1: El comienzo",
    "Episodio 2: El producto",
    "Episodio 3: La iniciación",
    "Episodio 4: Sumergidos en la obscuridad",
    "Episodio 5: Saliendo del alma"
];

let indice = 0;
let continuarViendo=true; //Esta variable simula la decisión del usuario de continuar viendo

do{
    console.log(`Reproduciendo ${episodios[indice]}`);
    
    //Simulamos la reproducción del episodio
    indice++;


    //Simulamos una pregunta al usuario si desea seguir viendo
    if(indice<episodios.length){
        continuarViendo=confirm("¿Deseas continuar con el siguiente episodio?");
    }else{
        continuarViendo=false;
    }
} while(continuarViendo && indice < episodios.length);


console.log("Fin de la reproducción");

//Ciclo para recorrer objetos iterables como mapas, arreglos. cadenas. y conjuntos de datos.
console.log("%c9.- Ciclo para recorrer elementos finitos - (FOR...OF)", style_console);


let seriesTrending=[
    {nombre: "The Witcher", temporada: 3, totalViewers: "1.5M", totalReprods: "3.0M"},
    {nombre: "Stranger Things", temporada: 4, totalViewers: "6.5M", totalReprods: "10.0M"},
    {nombre: "The boys", temporada: 3, totalViewers: "3.2M"},
    {nombre: "Loki", temporada: 2, totalViewers: "250K"},
    {nombre: "Sucession", temporada: 4}

]

//Usando for...of para recorrer la lista

for(let serie of seriesTrending){
    console.log(`Serie: ${serie.nombre}, Temporadas: ${serie.temporada}`);
}

try{
    console.log(`La última serie leida fue: ${serie.nombre}`); //No va a funcionar por la variable serie ya no exite ya que su alcance solo estuvo durante el ciclo
}

catch(error){
    console.log("Mensaje de error: "+error.message)
}

console.log("%c10.- Ciclo para recorrer las propiedades de elementos finitos - (FOR...IN)", style_console);

//Usando for...in para recorrer cada serie

for(let i in seriesTrending){
    console.log(`Serie ${parseInt(i)+1}:`);
    for(let propiedad in seriesTrending[i]){
        console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`);
    }
    console.log(`-------------------------`);
}

console.log("%c11.- Ciclos interrumpidos para cada uno de los elementos del arreglo - (FOR EACH)", style_console);


//Lista de series de TV Trending con temporadas, viewers y reproducciones

let seriesTrending2=[
    {nombre: "The Witcher", temporadas: 3, viewers: 8000000, reproducciones: 25000000},
    {nombre: "Stranger Things", temporadas: 4, viewers: 12000000, reproducciones: 40000000},
    {nombre: "The Boys", temporadas: 3, viewers: 7000000, reproducciones: 22000000},
    {nombre: "Loki", temporadas: 2, viewers: 9000000, reproducciones: 30000000},
    {nombre: "Sucession", temporadas: 4, viewers: 6000000, reproducciones: 18000000},
    {nombre: "Sucession", temporadas: 16, viewers: 16000000, reproducciones: 36000000}

]

//Usando forEach parab recorrer cada serie y calcular la calificación
seriesTrending2.forEach((serie, index)=>{
    let calificacion=(serie.reproducciones / serie.viewers).toFixed(2); //Calcula la calificación y la redondea a 2 decimales

    console.log(`Serie ${index+1}:`);
    console.log(`Nombre: ${serie.nombre}`);
    console.log(`Temporadas: ${serie.temporadas}`);
    console.log(`Viewers: ${serie.viewers}`);
    console.log(`Reproducciones: ${serie.reproducciones}`);
    console.log(`Calificación: ${calificacion}`); //Muestra la calificación
    console.log(`-------------------------------------`)
});


console.log("%c12.- Filtrado, transformación y búsqueda de elementos - (.filter(), .map(), .includes())", style_console);

//Usando Filter para filtrar, y map para transformar la información.
//Lista de series que queremos verificar
let seriesDeseadas= ["The Walking Dead", "The Boys", "Loki"];

//Usando map e includes para filtrar y obtener los nombres de series con 3 temporadas
let seriesConTresTemporadas = seriesTrending2
.filter(serie=> serie.temporadas<=3) //Filtramos las series que tienen 3 temporadas
.map(serie=> serie.nombre)//Obtenemos solo los nombres de esas series
.filter(nombre=> seriesDeseadas.includes(nombre)); //Filtramos las que están en la lista de series deseadas

//Mostrar los resultados
console.log("Series con 3 temporadas que están en la lista deseada: ");
console.log(seriesConTresTemporadas);
