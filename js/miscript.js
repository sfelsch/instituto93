function serializeFormToJson(form) {
    const formData = {};
    const elements = form.elements;

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const name = element.name;

        if (name) {
            if (element.type === "radio" || element.type === "checkbox") {
                if (element.checked) {
                    formData[name] = element.value;
                }
            } else {
                formData[name] = element.value;
            }
        }
    }

    return formData;
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const formDataObject = serializeFormToJson(form);
        const formDataJSON = JSON.stringify(formDataObject, null, 2);

        console.log(formDataJSON); // Muestra el objeto JSON en la consola

        // Puedes enviar el formDataJSON a través de una solicitud AJAX o realizar otras acciones según tus necesidades.
    });
});




document.addEventListener('DOMContentLoaded', function () {
    // Obtén los elementos relevantes
    const usaRedesSocialesSi = document.getElementById("UsaRedesSocialesSi");
    const redesSocialesCheckboxes = document.querySelectorAll('input[name="RedesSociales"]');
    const formulario = document.querySelector('form');

    // Agrega un controlador de eventos para el envío del formulario
    formulario.addEventListener('submit', function (event) {
        if (usaRedesSocialesSi.checked) {
            // Al menos una opción de redes sociales debe estar marcada
            const alMenosUnaSeleccionada = [...redesSocialesCheckboxes].some(cb => cb.checked);
            if (!alMenosUnaSeleccionada) {
                event.preventDefault(); // Detener el envío del formulario
                alert('Debe seleccionar al menos una red social si usa redes sociales.');
            }
        }
    });
});

//VALIDACIONES
$(document).ready(function () {
    // Inicializa el plugin de jQuery Validate en tu formulario
    $("#contactForm").validate({
        rules: {
            Apellido: {
                minlength: 2 // Puedes ajustar la longitud mínima según tus necesidades
            },
            Nombres: {
                minlength: 2 // Puedes ajustar la longitud mínima según tus necesidades
            },
            NumeroDocumento: {
                digits: true // Asegura que solo se ingresen dígitos
            }
        },
        // Puedes personalizar los mensajes de error si lo deseas
        messages: {
            CarreraId: {
                required: "Por favor, seleccione una carrera"
            },
            Apellido: {
                required: "El campo Apellidos es obligatorio",
                minlength: "Ingrese al menos {0} caracteres"
            },
            Nombres: {
                required: "El campo Nombres es obligatorio",
                minlength: "Ingrese al menos {0} caracteres"
            },
            TipoDocumentoId: {
                required: "Por favor, seleccione un tipo de documento"
            },
            NumeroDocumento: {
                required: "El campo Número de Documento es obligatorio",
                digits: "Ingrese solo dígitos"
            },
            EstadoCivilId: {
                required: "Por favor, seleccione un estado civil"
            },
            Sexo: {
                required: "El campo Sexo es obligatorio"
            },
            FechaNacimiento: {
                required: "El campo Fecha de Nacimiento es obligatorio"
            },
            LocalidadNacimiento: {
                required: "Por favor, seleccione una localidad de nacimiento"
            },
            PaisNacionalidadId: {
                required: "Por favor, seleccione un país de nacionalidad"
            },
            Calle: "El campo Calle es obligatorio",
            Altura: {
              required: "El campo Altura es obligatorio",
              number: "Ingrese un número válido en el campo Altura"
            },
            
            ProvinciaId: "Por favor, seleccione una provincia",
            Distrito: "El campo Distrito es obligatorio",
            LocalidadId: "Por favor, seleccione una localidad",
            CodigoPostal:{
                required:"El campo Código Postal es obligatorio",
                digits: "Ingrese solo dígitos en el campo"
            },
            Telefono: {
              required: "El campo Teléfono es obligatorio",
              digits: "Ingrese solo dígitos en el campo Teléfono"
            },
            Celular: {
              required: "El campo Celular es obligatorio",
              digits: "Ingrese solo dígitos en el campo Celular"
            },
            Email: {
              required: "El campo Email es obligatorio",
              email: "Ingrese una dirección de correo electrónico válida"
            }
        },
        // Puedes agregar otras opciones según tus necesidades
        submitHandler: function (form) {
            // Aquí puedes agregar el código que deseas ejecutar cuando el formulario es válido
            alert("Formulario válido. Puedes realizar acciones adicionales aquí.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtén referencias a los elementos relevantes
    var tituloSecundarioSi = document.getElementById("TituloSecundarioSi");
    var tituloSecundarioNo = document.getElementById("TituloSecundarioNo");

    var materiasAdeuda = document.getElementById("MateriasAdeuda");
    var descripcionMaterias = document.getElementById("DescripcionMaterias");

    var titulo = document.getElementById("Titulo");
    var orientacion = document.getElementById("Orientacion");
    var otorgadoPor = document.getElementById("OtorgadoPor");
    var anioEgreso = document.getElementById("AnioEgreso");
    var promedio = document.getElementById("Promedio");

    // Agrega un evento de cambio a los radio buttons
    tituloSecundarioSi.addEventListener("change", function() {
      // Si selecciona "Sí", habilita los campos de título secundario y deshabilita los campos de materias adeudadas
      if (tituloSecundarioSi.checked) {
        materiasAdeuda.disabled = true;
        descripcionMaterias.disabled = true;

        titulo.disabled = false;
        orientacion.disabled = false;
        otorgadoPor.disabled = false;
        anioEgreso.disabled = false;
        promedio.disabled = false;
      }
    });

    tituloSecundarioNo.addEventListener("change", function() {
      // Si selecciona "No", habilita los campos de materias adeudadas y deshabilita los campos de título secundario
      if (tituloSecundarioNo.checked) {
        materiasAdeuda.disabled = false;
        descripcionMaterias.disabled = false;

        titulo.disabled = true;
        orientacion.disabled = true;
        otorgadoPor.disabled = true;
        anioEgreso.disabled = true;
        promedio.disabled = true;
      }
    });

    // Ejecuta el evento de cambio al cargar la página para asegurar el estado inicial
    tituloSecundarioSi.dispatchEvent(new Event("change"));
  });

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    // Obtén referencias a los elementos relevantes
    const trabajaSi = document.getElementById("TrabajaSi");
    const trabajaNo = document.getElementById("TrabajaNo");

    const sectorTrabajoCheckboxes = document.querySelectorAll('[id^="Sector"]');
    const otroSectorTrabajoInput = document.getElementById("OtroSectorTrabajo");
    const horasTrabajoDiarioRadios = document.getElementsByName("HorasTrabajoDiario");

    // Agrega un evento de cambio a los radio buttons
    trabajaSi.addEventListener("change", function () {
        // Si selecciona "Sí", habilita los campos relacionados
        if (trabajaSi.checked) {
            sectorTrabajoCheckboxes.forEach(checkbox => {
                checkbox.disabled = false;
            });
            otroSectorTrabajoInput.disabled = false;

            // Habilita los radio buttons de Horas de Trabajo Diario
            horasTrabajoDiarioRadios.forEach(radio => {
                radio.disabled = false;
            });
        }
    });

    trabajaNo.addEventListener("change", function () {
        // Si selecciona "No", deshabilita los campos relacionados
        if (trabajaNo.checked) {
            sectorTrabajoCheckboxes.forEach(checkbox => {
                checkbox.disabled = true;
            });
            otroSectorTrabajoInput.disabled = true;

            // Deshabilita los radio buttons de Horas de Trabajo Diario
            horasTrabajoDiarioRadios.forEach(radio => {
                radio.disabled = true;
            });
        }
    });

    // Ejecuta el evento de cambio al cargar la página para asegurar el estado inicial correctamente
    trabajaSi.dispatchEvent(new Event("change"));

    // Agrega un controlador de eventos al formulario para validar y serializar datos
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Aquí puedes agregar cualquier validación adicional según tus necesidades antes de serializar los datos
        const formDataObject = serializeFormToJson(form);
        const formDataJSON = JSON.stringify(formDataObject, null, 2);

        console.log(formDataJSON); // Muestra el objeto JSON en la consola

        // Puedes enviar el formDataJSON a través de una solicitud AJAX o realizar otras acciones según tus necesidades.
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    // Obtén referencias a los elementos relevantes
    const viveSoloSi = document.getElementById("ViveSoloSi");
    const viveSoloNo = document.getElementById("ViveSoloNo");

    const viveConCheckboxes = document.querySelectorAll('[id^="ViveCon"]');

    // Agrega un evento de cambio a los radio buttons
    viveSoloSi.addEventListener("change", function () {
        // Si selecciona "Sí", habilita los campos relacionados
        if (viveSoloSi.checked) {
            viveConCheckboxes.forEach(checkbox => {
                checkbox.disabled = false;
            });
        }
    });

    viveSoloNo.addEventListener("change", function () {
        // Si selecciona "No", deshabilita los campos relacionados
        if (viveSoloNo.checked) {
            viveConCheckboxes.forEach(checkbox => {
                checkbox.disabled = true;
            });
        }
    });

    // Ejecuta el evento de cambio al cargar la página para asegurar el estado inicial correctamente
    viveSoloSi.dispatchEvent(new Event("change"));

    // Agrega un controlador de eventos al formulario para validar y serializar datos
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Aquí puedes agregar cualquier validación adicional según tus necesidades antes de serializar los datos
        const formDataObject = serializeFormToJson(form);
        const formDataJSON = JSON.stringify(formDataObject, null, 2);

        console.log(formDataJSON); // Muestra el objeto JSON en la consola

        // Puedes enviar el formDataJSON a través de una solicitud AJAX o realizar otras acciones según tus necesidades.
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    // Obtén referencias a los elementos relevantes
    const familiaresACargoSi = document.getElementById("FamiliaresACargoSi");
    const familiaresACargoNo = document.getElementById("FamiliaresACargoNo");

    const aCargoDeCheckboxes = document.querySelectorAll('[id^="ACargoDe"]');

    // Agrega un evento de cambio a los radio buttons
    familiaresACargoSi.addEventListener("change", function () {
        // Si selecciona "Sí", habilita los campos relacionados
        if (familiaresACargoSi.checked) {
            aCargoDeCheckboxes.forEach(checkbox => {
                checkbox.disabled = false;
            });
        }
    });

    familiaresACargoNo.addEventListener("change", function () {
        // Si selecciona "No", deshabilita los campos relacionados
        if (familiaresACargoNo.checked) {
            aCargoDeCheckboxes.forEach(checkbox => {
                checkbox.disabled = true;
            });
        }
    });

    // Ejecuta el evento de cambio al cargar la página para asegurar el estado inicial correctamente
    familiaresACargoSi.dispatchEvent(new Event("change"));

    // Agrega un controlador de eventos al formulario para validar y serializar datos
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Aquí puedes agregar cualquier validación adicional según tus necesidades antes de serializar los datos
        const formDataObject = serializeFormToJson(form);
        const formDataJSON = JSON.stringify(formDataObject, null, 2);

        console.log(formDataJSON); // Muestra el objeto JSON en la consola

        // Puedes enviar el formDataJSON a través de una solicitud AJAX o realizar otras acciones según tus necesidades.
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    // Obtén referencias a los elementos relevantes
    const becaProgramaNinguno = document.getElementById("BecaProgramaNinguno");
    const otrosBecasCheckboxes = document.querySelectorAll('[id^="BecaPrograma"]:not(#BecaProgramaNinguno)');

    // Agrega un evento de cambio al checkbox "Ninguno"
    becaProgramaNinguno.addEventListener("change", function () {
        // Si selecciona "Ninguno", deshabilita los demás checkboxes
        if (becaProgramaNinguno.checked) {
            otrosBecasCheckboxes.forEach(checkbox => {
                checkbox.disabled = true;
            });
        } else {
            // Si deselecciona "Ninguno", habilita los demás checkboxes
            otrosBecasCheckboxes.forEach(checkbox => {
                checkbox.disabled = false;
            });
        }
    });

    // Ejecuta el evento de cambio al cargar la página para asegurar el estado inicial correctamente
    becaProgramaNinguno.dispatchEvent(new Event("change"));

    // Agrega un controlador de eventos al formulario para validar y serializar datos
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Aquí puedes agregar cualquier validación adicional según tus necesidades antes de serializar los datos
        const formDataObject = serializeFormToJson(form);
        const formDataJSON = JSON.stringify(formDataObject, null, 2);

        console.log(formDataJSON); // Muestra el objeto JSON en la consola

        // Puedes enviar el formDataJSON a través de una solicitud AJAX o realizar otras acciones según tus necesidades.
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    // Obtén referencias a los elementos relevantes
    const lecturasFrecuentesSi = document.getElementById("LecturasFrecuentesSi");
    const tiposLecturaFrecuenteCheckboxes = document.querySelectorAll('[id^="TipoLecturaFrecuente"]');

    // Agrega un evento de cambio al radio "Sí" de lecturas frecuentes
    lecturasFrecuentesSi.addEventListener("click", function () {
        // Si selecciona "Sí", habilita los checkboxes de tipos de lectura frecuente
        tiposLecturaFrecuenteCheckboxes.forEach(checkbox => {
            checkbox.disabled = !lecturasFrecuentesSi.checked;
        });
    });

    // Ejecuta el evento de cambio al cargar la página para asegurar el estado inicial correctamente
    lecturasFrecuentesSi.dispatchEvent(new Event("click"));

    // Agrega un controlador de eventos al formulario para validar y serializar datos
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Aquí puedes agregar cualquier validación adicional según tus necesidades antes de serializar los datos
        const formDataObject = serializeFormToJson(form);
        const formDataJSON = JSON.stringify(formDataObject, null, 2);

        console.log(formDataJSON); // Muestra el objeto JSON en la consola

        // Puedes enviar el formDataJSON a través de una solicitud AJAX o realizar otras acciones según tus necesidades.
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    // Obtén referencias a los elementos relevantes
    const usaInternetSi = document.getElementById("UsaInternetSi");
    const usaInternetNo = document.getElementById("UsaInternetNo");
    const usaInternetCheckboxes = document.querySelectorAll('[id^="DondeUsaInternet"]');

    // Agrega un evento de cambio al radio "Sí" de usa Internet
    usaInternetSi.addEventListener("change", function () {
        // Si selecciona "Sí", habilita los checkboxes de "Dónde utiliza Internet"
        usaInternetCheckboxes.forEach(checkbox => {
            checkbox.disabled = !usaInternetSi.checked;
        });
    });

    // Agrega un evento de cambio al radio "No" de usa Internet
    usaInternetNo.addEventListener("change", function () {
        // Si selecciona "No", deshabilita los checkboxes de "Dónde utiliza Internet"
        usaInternetCheckboxes.forEach(checkbox => {
            checkbox.disabled = usaInternetNo.checked;
        });
    });

    // Ejecuta el evento de cambio al cargar la página para asegurar el estado inicial correctamente
    usaInternetSi.dispatchEvent(new Event("change"));

    // Agrega un controlador de eventos al formulario para validar y serializar datos
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Aquí puedes agregar cualquier validación adicional según tus necesidades antes de serializar los datos
        const formDataObject = serializeFormToJson(form);
        const formDataJSON = JSON.stringify(formDataObject, null, 2);

        console.log(formDataJSON); // Muestra el objeto JSON en la consola

        // Puedes enviar el formDataJSON a través de una solicitud AJAX o realizar otras acciones según tus necesidades.
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    // Obtén referencias a los elementos relevantes
    const usaRedesSocialesSi = document.getElementById("UsaRedesSocialesSi");
    const usaRedesSocialesNo = document.getElementById("UsaRedesSocialesNo");
    const redesSocialesCheckboxes = document.querySelectorAll('[id^="RedesSociales"]');

    // Agrega un evento de cambio al radio "Sí" de usa redes sociales
    usaRedesSocialesSi.addEventListener("change", function () {
        // Si selecciona "Sí", habilita los checkboxes de "Redes Sociales que utiliza"
        redesSocialesCheckboxes.forEach(checkbox => {
            checkbox.disabled = !usaRedesSocialesSi.checked;
        });
    });

    // Agrega un evento de cambio al radio "No" de usa redes sociales
    usaRedesSocialesNo.addEventListener("change", function () {
        // Si selecciona "No", deshabilita los checkboxes de "Redes Sociales que utiliza"
        redesSocialesCheckboxes.forEach(checkbox => {
            checkbox.disabled = !usaRedesSocialesNo.checked;
        });
    });

   
    // Ejecuta el evento de cambio al cargar la página para asegurar el estado inicial correctamente
    usaRedesSocialesSi.dispatchEvent(new Event("change"));

    // Agrega un controlador de eventos al formulario para validar y serializar datos
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Aquí puedes agregar cualquier validación adicional según tus necesidades antes de serializar los datos
        const formDataObject = serializeFormToJson(form);
        const formDataJSON = JSON.stringify(formDataObject, null, 2);

        console.log(formDataJSON); // Muestra el objeto JSON en la consola

        // Puedes enviar el formDataJSON a través de una solicitud AJAX o realizar otras acciones según tus necesidades.
    });
});





