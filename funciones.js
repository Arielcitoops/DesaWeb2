var fechaNacimiento;

function guardarFecha() {
    var fechaInput = document.getElementById("fechaNacimientoInput").value;
    if (fechaInput) {
        fechaNacimiento = new Date(fechaInput);
        alert("Fecha de nacimiento guardada correctamente.");
    } else {
        alert("Por favor, ingrese una fecha.");
    }
}

function calcularEdad() {
    if (!fechaNacimiento) {
        alert("Por favor, guarde primero la fecha de nacimiento.");
        return;
    }

    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var mes = hoy.getMonth() - fechaNacimiento.getMonth();
    var dia = hoy.getDate() - fechaNacimiento.getDate();

    if (mes < 0 || (mes === 0 && dia < 0)) {
        edad--;
        mes += 12;
    }

    if (dia < 0) {
        var lastMonth = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
        dia += lastMonth.getDate();
        mes--;
    }

    document.getElementById("edadCalculada").innerText = `${edad} años, ${mes} meses, ${dia} días`;
}

function verificarCedula() {
    var cedula = document.getElementById("cedula").value;
    var resultado = document.getElementById("resultadoCedula");

    if (cedula.length === 10 && !isNaN(cedula)) {
        var provincia = parseInt(cedula.substr(0, 2));
        
        if (provincia >= 1 && provincia <= 24) {
            var total = 0;
            var verificador = parseInt(cedula.charAt(9)); 

            for (var i = 0; i < 9; i++) {
                var digito = parseInt(cedula.charAt(i));
                if (i % 2 === 0) {
                    digito *= 2;
                    if (digito > 9) digito -= 9; 
                }
                total += digito;
            }

            var modulo = total % 10;
            var digitoCalculado = (modulo === 0) ? 0 : 10 - modulo;

            if (digitoCalculado === verificador) {
                resultado.innerText = "Cédula válida , Es +593";
            } else {
                resultado.innerText = "Cédula inválida , no eres +593";
            }
        } else {
            resultado.innerText = "No es Ecuatoriano.";
        }
    } else {
        resultado.innerText = "Cédula inválida. Debe tener 10 dígitos.";
    }
}
