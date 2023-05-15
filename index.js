
const separadorNumeros = require('./moduloSeparadorNumeros')

const arrayInteiros = [1,5,8,6,4]

//ímpares
console.log(separadorNumeros.separador(arrayInteiros, 1))
//pares
console.log(separadorNumeros.separador(arrayInteiros, 2))
//junta arrays
console.log(separadorNumeros.separador(arrayInteiros, 3))

console.log(separadorNumeros.separador(arrayInteiros, 4))