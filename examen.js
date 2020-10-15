

exports.ejercicio1 = (numero) => {
  
  let numeromenor = Math.floor(numero/2)  ;
  let numeromayor = Math.ceil(numero/2);


  let array = []

  array.push({
    numeromenor,
    numeromayor
  });

 return array;

};


exports.ejercicio2 = (num) => {

  let numero = 0 ;
  
 for (let index = 1; index <= num; index++) {
   numero = numero+index;
   
 }
 return numero;


};

// Ejercicio 3 Funcion Retorna Mayor
exports.f = () => {
  
  return 30;
};
exports.g = () => {
  
  return 25;
};
exports.funcionRetornaMayor = (f, g) => {
  if (f > g) {
    return "f";
  }
  else if (g > f) {
    return "g";
  }
  else {
    return "ninguna";
  }

  // Ejercicio 4 Convertir a Base 2
exports.conversionBase2 = (num) => {

  const binario = [];
  let contadora = 0;
  let binString = "";

  while (num >= 2) {
    binario[contadora] = Math.ceil(num%2);
    num = Math.floor(num/2);
    contadora++;
  }

  binario[contadora] = Math.ceil(num/2);
  binario.reverse();

  for (let index = 0; index < binario.length; index++) {
    binString += binario[index];
    
  }

  return binString;
};

// Ejercicio 5 Encontrar el Menor y Mayor
exports.menorMayor = (arrayNumeros) => {
  const string = String(arrayNumeros);
  arrayNumeros = string.split(",");
  let mayor = -Infinity;
  let menor = Infinity;
  const nuevoArray = [];

  for (let index = 0; index < arrayNumeros.length; index++) {

    if (Number(arrayNumeros[index]) > mayor) {
      mayor = Number(arrayNumeros[index]);
    }

    if (Number(arrayNumeros[index]) < menor) {
      menor = Number(arrayNumeros[index]);
    }
    
  }

  nuevoArray.push({
    menor,
    mayor
  })

  return nuevoArray;
};

// Ejercicio 6 Palabra Esconde Multitud
exports.escondeMultitud = (texto) => {

  const arrayOG = Array.from(texto);
  const arrayNew = []; 
  let contadora = 0;

  for (let index = 0; index < arrayOG.length; index++) {
    
    if (arrayOG[index] == arrayOG[index].toLowerCase()) {
      arrayNew[contadora] = arrayOG[index];
      contadora++;
    }
    
  }
  const palabra = String(arrayNew);
  
  return palabra;

};

// Ejercicio 7 Casas Fosforos
exports.casasFosforos = (casas) => {

  let fosforos;
  if (Number(casas) <= 0) {
    fosforos = 0;
  }
  else {
    fosforos = (Number(casas) * 5) + 1;
  }
  
  return Number(fosforos);

};
};