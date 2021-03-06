'use strict'

$(document).ready(function () {


     //---------------------------PÁGINA CONTACTA.HTML----------------------



    //Hemos hecho dos validaciones. 1º en vivo y 2º al hacer click en el botón enviar(empieza en linea 364)


    // 1º VALIDACIÓN EN VIVO
    //----------------------------------------------------------------

    // 1º seleccionamos todos los inputs
    let inputs = document.querySelectorAll("#inputElemento");
    let inputsValue = document.querySelectorAll("#inputElemento");


    //2º recorremos cada input y cuando escriba dentro se haga una función y cuando salga del input se haga otra función

    inputs.forEach(function (input) {

        input.addEventListener("focus", function () {
            input.classList.add("inputIncorrecto");

        });

        input.addEventListener("blur", validarCampo);


    });


    //console.log(validar.nombre)

    function validarCampo(e) {

        switch (e.target.name) {

            case "nombre": //validar nombre
                let value1 = e.target.value;

                if (isNaN(value1) && (value1.length <= 25) && (value1 !== null)) {
                    document.querySelectorAll("input")[0].classList.remove("inputIncorrecto");
                    document.querySelectorAll("input")[0].classList.add("inputCorrecto");
                    document.getElementsByClassName("name__p")[0].style.display = "none";

                } else {
                    document.getElementsByClassName("name__p")[0].style.display = "block";
                }
                break;

            case "correo": //validar correo

                let value2 = e.target.value;
                let emailValidacion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

                function validarEmail(value2) {

                    if (emailValidacion.test(value2)) {

                        document.querySelectorAll("input")[1].classList.remove("inputIncorrecto");
                        document.querySelectorAll("input")[1].classList.add("inputCorrecto");
                        document.getElementsByClassName("email__p")[0].style.display = "none";

                    } else {

                        document.getElementsByClassName("email__p")[0].style.display = "block";

                    }
                }

                validarEmail(value2);

                break;

            case "telefono": //validar telefono

                let value3 = e.target.value;
                let telefonoValidacion = /^\d{7,14}$/;

                function validarTelefono(value3) {

                    if (telefonoValidacion.test(value3)) {
                        document.querySelectorAll("input")[2].classList.remove("inputIncorrecto");
                        document.querySelectorAll("input")[2].classList.add("inputCorrecto");
                        document.getElementsByClassName("telefono__p")[0].style.display = "none";

                    } else {
                        document.getElementsByClassName("telefono__p")[0].style.display = "block";
                    }

                }

                validarTelefono(value3);

                break;


            case "textoArea": // validar text area

                let value4 = e.target.value;

                if (value4.length > 200) {

                    document.getElementsByClassName("textarea__p")[0].style.display = "block";

                } else if (value = null) {

                    document.querySelectorAll("input")[3].classList.remove("inputIncorrecto");
                    document.querySelectorAll("input")[3].classList.add("inputCorrecto");
                    document.getElementsByClassName("textarea__p")[0].style.display = "none";

                } else {

                    document.querySelectorAll("input")[3].classList.remove("inputIncorrecto");
                    document.querySelectorAll("input")[3].classList.add("inputCorrecto");
                    document.getElementsByClassName("textarea__p")[0].style.display = "none";

                }



                break;

            case "dia": //validar dia del tipo de evento

                let value5 = e.target.value;

                function validarFecha() {

                    let diaActual = new Date();
                    let diaIntroduceCliente = new Date(value5);


                    diaActual.setHours(0, 0, 0, 0);
                    diaIntroduceCliente.setHours(0, 0, 0, 0);

                    if (diaIntroduceCliente > diaActual) {

                        document.querySelectorAll("input")[4].classList.remove("inputIncorrecto");
                        document.querySelectorAll("input")[4].classList.add("inputCorrecto");
                        document.getElementsByClassName("date__p")[0].style.display = "none";


                    } else if (value5 == 0) {

                        document.querySelectorAll("input")[4].classList.remove("inputIncorrecto");
                        document.querySelectorAll("input")[4].classList.add("inputCorrecto");
                        document.getElementsByClassName("date__p")[0].style.display = "none";

                    } else {
                        document.getElementsByClassName("date__p")[0].style.display = "block";
                    }



                }

                validarFecha(value5);



                break;


            default:
                break;
        }




    }



    //función cuando un campo es correcto cambiar el borde


    function bordeNormal() {
        inputs.forEach((input) => {
            input.addEventListener("blur", function () {
                input.style.border = "none";
            })
        })
    }


    //validar telefono y email de los RADIO BUTTONS

    let campoTelefono = document.querySelector(".input_form-radio"); //input teléfono
    let campoEmail = document.getElementsByClassName("input_form-radio")[1]; //input email



    campoTelefono.addEventListener("focus", function () {
        document.querySelector(".input_form-radio").classList.add("inputCorrecto");

    });
    campoTelefono.addEventListener("blur", function () {
        if (campoTelefono.checked && campoEmail.checked) {
            document.getElementsByClassName("radio__block")[0].style.display = "block";
        } else if (campoEmail.checked) {
            document.getElementsByClassName("radio__block")[0].style.display = "none";
        }


    });




    campoEmail.addEventListener("focus", function () {
        document.querySelector(".input_form-radio").classList.add("inputCorrecto");

    });
    campoEmail.addEventListener("blur", function () {
        if (campoTelefono.checked && campoEmail.checked) {
            document.getElementsByClassName("radio__block")[0].style.display = "block";
        } else if (campoEmail.checked) {
            document.getElementsByClassName("radio__block")[0].style.display = "none";
        } else {
            document.getElementsByClassName("radio__block")[0].style.display = "none";
        }

    });





    // validar la fecha de abajo, si ha elegido el telefono tenemos que validar esta fecha
    //--------------------------------------------------------------

    let campoFecha = document.getElementById("fechaRadio"); // input fecha
    //console.log(campoFecha)

    function validarFechaAbajo() {

        let fechaAbajo = new Date;
        let fechaAbajoCliente = new Date(campoFecha.value);
        let parrafoFechaAbajo = document.querySelectorAll(".date__p")[1];

        fechaAbajo.setHours(0, 0, 0, 0);
        fechaAbajoCliente.setHours(0, 0, 0, 0);

        parrafoFechaAbajo.style.display = "block";
        campoFecha.style.border = "3px solid red";

        if (fechaAbajoCliente <= fechaAbajo || campoFecha.value == 0) {
            parrafoFechaAbajo.style.display = "block";
            //console.log("fecha erronea");

        } else {
            parrafoFechaAbajo.style.display = "none";
            campoFecha.style.border = "none";
            //console.log("fecha correcta");
        }

    }


    campoFecha.addEventListener("focus", () => {



        //console.log("has hecho focus");
        campoFecha.style.border = "3px solid red";
    });

    campoFecha.addEventListener("blur", validarFechaAbajo);




    // validamos hora debajo de fecha
    //--------------------------------------

    let horaAbajo = document.querySelectorAll("#inputElemento")[7];

    function validarHoraAbajo() {




        let parrafoHoraAbajo = document.querySelectorAll(".date__p")[2];
        //console.log(horaAbajo)
        if (horaAbajo.value == 0) {
            parrafoHoraAbajo.style.display = "block";
        } else {
            horaAbajo.style.border = "none";
            parrafoHoraAbajo.style.display = "none";
        }

    }

    horaAbajo.addEventListener("focus", () => {

        //console.log("has hecho focus");
        horaAbajo.style.border = "3px solid red";
    });

    horaAbajo.addEventListener("blur", validarHoraAbajo);



    //----------------------------------------------


    // 2º VALIDACIÓN AL HACER CLICK EN EL BOTÓN ENVIAR
    //----------------------------------------------------------------

    let form = document.getElementById("formulario");

    form.addEventListener("submit", validarTodoElFormulario)


    function validarTodoElFormulario(e) {

        //TODOS LOS INPUTS
        let inputs = document.querySelectorAll("#inputElemento");
        //console.log(inputs)



        //CAMPO NOMBRE

        let nombreInput = document.getElementById("inputElemento").value;
        //console.log(nombreInput);

        if (isNaN(nombreInput) && (nombreInput.length <= 25) && (nombreInput !== null)) {
            document.querySelectorAll("input")[0].classList.remove("inputIncorrecto");
            document.querySelectorAll("input")[0].classList.add("inputCorrecto");
            document.getElementsByClassName("name__p")[0].style.display = "none";
            //console.log("input valido");

        } else {
            document.getElementsByClassName("name__p")[0].style.display = "block";
            //console.log("input incorrecto");
            e.preventDefault();
        }

        //CAMPO EMAIL

        let correoInput = inputs[1].value;
        //console.log(correoInput);



        let emailValidacion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        function validarEmail(correoInput) {

            if (emailValidacion.test(correoInput)) {

                document.querySelectorAll("input")[1].classList.remove("inputIncorrecto");
                document.querySelectorAll("input")[1].classList.add("inputCorrecto");
                document.getElementsByClassName("email__p")[0].style.display = "none";

            } else {

                document.getElementsByClassName("email__p")[0].style.display = "block";
                e.preventDefault();

            }
        }

        validarEmail(correoInput);


        //CAMPO TELÉFONO

        let telefonoInput = inputs[2].value;

        let telefonoValidacion = /^\d{7,14}$/;

        function validarTelefono(telefonoInput) {

            if (telefonoValidacion.test(telefonoInput)) {
                document.querySelectorAll("input")[2].classList.remove("inputIncorrecto");
                document.querySelectorAll("input")[2].classList.add("inputCorrecto");
                document.getElementsByClassName("telefono__p")[0].style.display = "none";

            } else {
                document.getElementsByClassName("telefono__p")[0].style.display = "block";
                e.preventDefault();
            }

        }

        validarTelefono(telefonoInput);


        //CAMPO MENSAJE


        let textareaInput = inputs[3].value;



        if (textareaInput.length > 200) {

            document.getElementsByClassName("textarea__p")[0].style.display = "block";
            e.preventDefault();

        } else if (textareaInput = null) {

            document.querySelectorAll("input")[3].classList.remove("inputIncorrecto");
            document.querySelectorAll("input")[3].classList.add("inputCorrecto");
            document.getElementsByClassName("textarea__p")[0].style.display = "none";

        } else {

            document.querySelectorAll("input")[3].classList.remove("inputIncorrecto");
            document.querySelectorAll("input")[3].classList.add("inputCorrecto");
            document.getElementsByClassName("textarea__p")[0].style.display = "none";

        }

        // CAMPO DIA INFORMACION EVENTOS

        let diaInput = inputs[4].value;



        function validarFecha() {

            let diaActual = new Date();
            let diaIntroduceCliente = new Date(diaInput);


            diaActual.setHours(0, 0, 0, 0);
            diaIntroduceCliente.setHours(0, 0, 0, 0);

            if (diaIntroduceCliente > diaActual) {

                document.querySelectorAll("input")[4].classList.remove("inputIncorrecto");
                document.querySelectorAll("input")[4].classList.add("inputCorrecto");
                document.getElementsByClassName("date__p")[0].style.display = "none";


            } else if (diaInput == 0) {

                document.querySelectorAll("input")[4].classList.remove("inputIncorrecto");
                document.querySelectorAll("input")[4].classList.add("inputCorrecto");
                document.getElementsByClassName("date__p")[0].style.display = "none";

            } else {
                document.getElementsByClassName("date__p")[0].style.display = "block";
                e.preventDefault();
            }



        }

        validarFecha(diaInput);



        // CAMPO TELEFONO Y EMAIL


        let campoTelefono = document.querySelector(".input_form-radio"); //input teléfono
        let campoEmail = document.getElementsByClassName("input_form-radio")[1]; //input email



        if (campoTelefono.checked && campoEmail.checked) {
            document.getElementsByClassName("radio__block")[0].style.display = "block";
        }



        // CAMPO FECHA INFORMACION CONTACTO


        let campoFecha = document.getElementById("fechaRadio"); // input fecha
        //console.log(campoFecha)

        function validarFechaAbajo() {

            let fechaAbajo = new Date;
            let fechaAbajoCliente = new Date(campoFecha.value);
            let parrafoFechaAbajo = document.querySelectorAll(".date__p")[1];

            fechaAbajo.setHours(0, 0, 0, 0);
            fechaAbajoCliente.setHours(0, 0, 0, 0);

            parrafoFechaAbajo.style.display = "block";
            campoFecha.style.border = "3px solid red";

            if (fechaAbajoCliente <= fechaAbajo || campoFecha.value == 0) {
                parrafoFechaAbajo.style.display = "block";
                e.preventDefault();
                //console.log("fecha erronea");

            } else {
                parrafoFechaAbajo.style.display = "none";
                campoFecha.style.border = "none";
                //console.log("fecha correcta");
            }

        }


        //console.log("has hecho focus");
        campoFecha.style.border = "3px solid red";


        validarFechaAbajo();



        // CAMPO HORA FINAL




        let horaAbajo = document.querySelectorAll("#inputElemento")[7];

        function validarHoraAbajo() {




            let parrafoHoraAbajo = document.querySelectorAll(".date__p")[2];
            //console.log(horaAbajo)
            if (horaAbajo.value == 0) {
                parrafoHoraAbajo.style.display = "block";
                e.preventDefault();
            } else {
                horaAbajo.style.border = "none";
                parrafoHoraAbajo.style.display = "none";
            }

        }

        validarHoraAbajo();


    }


});