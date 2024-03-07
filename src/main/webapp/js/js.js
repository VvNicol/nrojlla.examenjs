//funcion para convertir la fecha a ingles dentro de esta las funciones de meses y los requisitos
function convertirFechaAIngles(dia, mes, año) {
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const mesTexto = meses[mes - 1];
    const fechaIngles = `${dia} ${mesTexto}  ${año}`;
    return fechaIngles;
}
//Se hace una funcion para pedir una fecha se usa un while para que sea ciclico, dentro de este
//un try catch y dentro de esta las funcionalidades para introducir y el catch para que cuando de error
//no se cierre la manera ciclica.
function pedirFecha() {
    while (true) {
        try {
            const dia = parseInt(prompt("Introduce el día:"));
            const mes = parseInt(prompt("Introduce el mes:"));
            const año = parseInt(prompt("Introduce el año:"));
            if (isNaN(dia) || isNaN(mes) || isNaN(año) || mes < 1 || mes > 12 || dia < 1 || dia > 31 || año < 0) {
                alert("Fecha incorrecta. Inténtalo de nuevo.");
                continue;
            }
            return [dia, mes, año];
        } catch (error) {
            alert("Introduce solo números.");
        }
    }
}
//este es el menu tambien con un while para que sea ciclico y dentro de esta las opciones
//y dento llmando las funciones 
function main() {
    alert("Conversor de fechas.");

    while (true) {
        const opcion = prompt("Eligir-opcion:\n1.convertir fecha a formato inglés.\n2.convertir fecha a formato numérico.\n 3.salir").toLowerCase();

        if (opcion === "1") {
            const [dia, mes, año] = pedirFecha();
            const fechaIngles = convertirFechaAIngles(dia, mes, año);
            alert(`La fecha en formato inglés es: ${fechaIngles}`);
        } else if (opcion === "2") {
            const fecha = prompt("Introduc la fecha en formato inglés (ejemplo, 1 enero 2024):").toLowerCase();
            const fechaNumeros = convertirFechaANumeros(fecha);
            alert(`formato numérico en fecha es: ${fechaNumeros}`);
        } else if (opcion === "3") {
            alert("Cerrado");
            break;
        } else {
            alert("Opción inválida. Inténtalo de nuevo.");
        }
    }
}

main();