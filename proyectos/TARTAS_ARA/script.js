// ================================
// TAMAÑO
// ================================

const opcionesTamaño = document.querySelectorAll('input[name="tamaño"]');
const resumenTamaño = document.querySelector('#resumen-tamaño');
const precioFinal = document.querySelector('#precio-final');

opcionesTamaño.forEach(function (opcion) {

    opcion.addEventListener('change', function () {

        const tarjeta = opcion.parentElement;

        const nombreTamaño =
            tarjeta.querySelector('span strong').textContent;

        const precio =
            tarjeta.querySelector('b').textContent;

        resumenTamaño.textContent = nombreTamaño;
        precioFinal.textContent = precio;

    });

});


// ================================
// BIZCOCHO
// ================================

const opcionesBizcocho =
    document.querySelectorAll('input[name="bizcocho"]');

const resumenBizcocho =
    document.querySelector('#resumen-bizcocho');

opcionesBizcocho.forEach(function (opcion) {

    opcion.addEventListener('change', function () {

        resumenBizcocho.textContent =
            opcion.parentElement.querySelector('span').textContent;

    });

});


// ================================
// RELLENO
// ================================

const opcionesRelleno =
    document.querySelectorAll('input[name="relleno"]');

const resumenRelleno =
    document.querySelector('#resumen-relleno');

opcionesRelleno.forEach(function (opcion) {

    opcion.addEventListener('change', function () {

        resumenRelleno.textContent =
            opcion.parentElement.querySelector('span').textContent;

    });

});


// ================================
// OCASIÓN
// ================================

const opcionesOcasion =
    document.querySelectorAll('input[name="ocasión"]');

const resumenOcasion =
    document.querySelector('#resumen-ocasion');

opcionesOcasion.forEach(function (opcion) {

    opcion.addEventListener('change', function () {

        resumenOcasion.textContent =
            opcion.parentElement.querySelector('span').textContent;

    });

});


// ================================
// BOTÓN PEDIDO
// ================================

const botonPedido =
    document.querySelector('#btn-pedido');

botonPedido.addEventListener('click', function () {

    const tamañoElemento =
        document.querySelector('input[name="tamaño"]:checked');

    const bizcochoElemento =
        document.querySelector('input[name="bizcocho"]:checked');

    const rellenoElemento =
        document.querySelector('input[name="relleno"]:checked');

    const ocasionElemento =
        document.querySelector('input[name="ocasión"]:checked');


    // ================================
    // COMPROBAR OPCIONES
    // ================================

    if (
        !tamañoElemento ||
        !bizcochoElemento ||
        !rellenoElemento ||
        !ocasionElemento
    ) {

        alert('Por favor, selecciona todas las opciones de tu tarta.');

        return;
    }


    // ================================
    // TAMAÑO
    // ================================

    const tarjetaTamaño =
        tamañoElemento.parentElement;

    const tamaño =
        tarjetaTamaño.querySelector('span strong').textContent;

    const porciones =
        tarjetaTamaño.querySelector('span small').textContent;

    const precio =
        tarjetaTamaño.querySelector('b').textContent;


    // ================================
    // DEMÁS OPCIONES
    // ================================

    const bizcocho =
        bizcochoElemento.parentElement
            .querySelector('span').textContent;

    const relleno =
        rellenoElemento.parentElement
            .querySelector('span').textContent;

    const ocasion =
        ocasionElemento.parentElement
            .querySelector('span').textContent;


    // ================================
    // DATOS DEL CLIENTE
    // ================================

    const nombre =
        document.querySelector('#nombre').value;

    const telefono =
        document.querySelector('#telefono').value;

    const fechaOriginal =
        document.querySelector('#fecha').value;

    const partesFecha =
        fechaOriginal.split('-');

    const fecha =
        `${partesFecha[2]}/${partesFecha[1]}/${partesFecha[0]}`;

    const idea =
        document.querySelector('#idea-tarta').value;


    // ================================
    // MENSAJE WHATSAPP
    // ================================
    const mensaje =
        'Hola, Tartas Ara. Me gustaría realizar el siguiente pedido:\n\n' +

        'MI TARTA\n\n' +

        'Tamaño: ' + tamaño + '\n' +
        'Porciones: ' + porciones + '\n' +
        'Bizcocho: ' + bizcocho + '\n' +
        'Relleno: ' + relleno + '\n' +
        'Ocasión: ' + ocasion + '\n\n' +

        'IDEA DE MI TARTA\n\n' +

        idea + '\n\n' +

        'DATOS DE ENTREGA\n\n' +

        'Nombre: ' + nombre + '\n' +
        'Teléfono: ' + telefono + '\n' +
        'Fecha de entrega: ' + fecha + '\n\n' +

        'Precio: ' + precio + '\n\n' +

        'Quedo pendiente de confirmación. ¡Gracias!\n\n' +

        'FOTO DE REFERENCIA';

    // ================================
    // ABRIR WHATSAPP
    // ================================

    const numeroWhatsApp = '34654257496';

    const urlWhatsApp =
        'https://wa.me/' +
        numeroWhatsApp +
        '?text=' +
        encodeURIComponent(mensaje);

    window.location.href = urlWhatsApp;

});


// ================================
// ANIMACIONES AL HACER SCROLL
// ================================

const elementos =
    document.querySelectorAll('.reveal');

const observer =
    new IntersectionObserver(function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add('active');

            }

        });

    }, {
        threshold: 0.15
    });


elementos.forEach(function (elemento) {

    observer.observe(elemento);

});