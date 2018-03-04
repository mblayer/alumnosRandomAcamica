let alumnoRandom = function(lista, preguntas) {
    if (!lista.length) {
        alert('Gracias a todos por presentarse')
        return
    }
    const alumno = Math.round((Math.random() * lista.length - 1))
    const pregunta = Math.round((Math.random() * preguntas.length))
    console.log(alumno)
    mostrarData(lista[alumno], preguntas[pregunta])
    return listadoAlumnos.splice(alumno, 1)
}


let mostrarData = function(nombre, cantidad) {
    const spanAlumno = document.getElementById('nombreAlumno')
    const spanCantidad = document.getElementById('pregunta')

    spanCantidad.innerHTML = cantidad
    spanAlumno.innerText = nombre
}

let accionBtn = function(btn) {
    let btnNombre = document.getElementById('seleccionarAlumno')

    btnNombre.onclick = alumnoRandom(listadoAlumnos, preguntas)
}
const ini = function() {
    const btnNombre = document.getElementById('seleccionarAlumno')

    btnNombre.addEventListener("click", accionBtn, btnNombre);

}