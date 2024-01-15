let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function generarEnteroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
    let citaElem = document.getElementById('cita');
    let autorElem = document.getElementById('autor');
    let indiceAleatorio = Math.floor(Math.random() * citas.length);
    let cita = citas[indiceAleatorio];
  
    if (cita.autor === 'Ricky' && cita.texto.includes('https://youtu.be/')) {
      citaElem.innerHTML = `<a href="${cita.texto}" target="_blank">Tu madre tiene una....</a>`;
    } else {
      citaElem.innerText = `"${cita.texto}"`;
    }
    autorElem.innerText = `- ${cita.autor}`;
  }

cambiarCita();

botonElem.addEventListener("click", cambiarCita);