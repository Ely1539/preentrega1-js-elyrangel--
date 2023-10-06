// sistema de carga de turnos en un transporte.

let nombre = prompt("INGRESE NOMBRE DEL OPERADOR").toLocaleLowerCase();
let apellido = prompt("INGRESE APELLIDO DEL OPERADOR").toLocaleLowerCase();

if (nombre != "" && apellido != "") {
  alert(`bienvenido ${nombre} ${apellido}`);
} else {
  alert("INTRODUZCA NOMBRE Y APELLIDO");
};


let usuario = prompt("INGRESE USUARIO OPERADOR").toLowerCase();

while (usuario != "luis sanchez") {
  alert("USUARIO INCORRECTO");
  usuario = prompt("INGRESE USUARIO")
};


let clave = prompt("INGRESE CLAVE").toLocaleLowerCase();

while (clave != "luis1234") {
  alert("CLAVE INCORRECTA");
  clave = prompt("INGRESE CLAVE CORRECTA")
};


let cargo = prompt("Cargo SI / NO").toLowerCase();

while (cargo != "si") {
  switch (cargo) {
    case "SI":
      alert("CARGUE DATOS DE REMITO");
      break;

    case "no":
      alert("DIRIGASE A DESPACHO");
      break;

  }
  cargo = prompt("CARGÓ MERCADERIA SI/NO");

};

for (let remito = 1; remito <= 15; remito++) {

  let transportista = prompt("INGRESE TRANSPORTISTA");

  alert(`REMITO # ${remito}
  TRANSPORTISTA: ${transportista}`);

  if (remito === 8) {
    break;
  };
};

alert("FIN DE JORNADA MATUTINA");
