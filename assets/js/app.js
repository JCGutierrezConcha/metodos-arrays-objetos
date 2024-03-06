const radiologiaArray = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' }
];

const traumatologiaArray = [
    { hora: '08:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' }
];

const dentalArray = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' }
];

//1. Agregar las siguientes horas al arreglo de Traumatología:

const adicionalTraumatologia = [
    { hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' },
    { hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
    { hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' }
];

// Se construye un array en que se agregan nuevos pacientes con concat.
const newTraumatologia = traumatologiaArray.concat(adicionalTraumatologia);

// Se ordena el nuevo array según la hora de atención.
newTraumatologia.sort(function (a, b) {
    if (a.hora > b.hora) {
        return 1;
    } else if (a.hora < b.hora) {
        return -1;
    } else {
        return 0;
    }
});

//2. Eliminar el primer y último elemento del arreglo de Radiología.

// Se elimina primer elemento.
radiologiaArray.shift();

//Se elimina último elemento.
radiologiaArray.pop();

//3. Imprimir en la página HTML la lista de consultas médicas de Dental, separando por un guión cada dato desplegado y cada fila separada por un párrafo.

const dentalHtml = document.getElementById("dentalhtml");
dentalHtml.innerHTML = "";
dentalArray.forEach((item) => {
    dentalHtml.innerHTML += `<p>${item.hora} - ${item.especialista} - ${item.paciente} - ${item.rut} -${item.prevision}</p><br>`;
});


//4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico.

// Se construye array con todos los pacientes usando concat.
const totalPacientes = radiologiaArray.concat(newTraumatologia).concat(dentalArray);

// Se renderiza en html el array mostrando el nombre de todos los pacientes.
const pacientesHtml = document.getElementById("pacienteshtml");
pacientesHtml.innerHTML = "";
totalPacientes.forEach((item) => {
    pacientesHtml.innerHTML += `<p>${item.paciente}</p>`;
});

//5. Imprimir pacientes dental con ISAPRE.

// Se construye array con pacientes de dental que tienen Isapre usando filter.
const dentalIsapre = dentalArray.filter((elemento) => elemento.prevision === "ISAPRE");


// Se renderiza en html el array mostrando nombre y previsión de pacientes de dental con Isapre.
const dentalIsapreHtml = document.getElementById("dentalisaprehtml");
dentalIsapreHtml.innerHTML = "";
dentalIsapre.forEach((item) => {
    dentalIsapreHtml.innerHTML += `<p>${item.paciente} - ${item.prevision}</p>`;
});

//6. Imprimir pacientes traumatología con FONASA.

// Se construye array con pacientes de traumatología que tienen Fonasa usando filter.
const traumaFonasa = newTraumatologia.filter((elemento) => elemento.prevision === "FONASA");

// Se renderiza en html el array mostrando nombre y previsión de pacientes de traumatología con Fonasa.
const traumaFonasaHtml = document.getElementById("traumafonasahtml");
traumaFonasaHtml.innerHTML = "";
traumaFonasa.forEach((item) => {
    traumaFonasaHtml.innerHTML += `<p>${item.paciente} - ${item.prevision}</p>`;
});
