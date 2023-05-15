/*
O exercício consiste na criação de uma programa que receba um array de números inteiros misturados e um número de 1 a 3 que será a opção de retorno, conforme descrito abaixo:

Se a opção recebida for igual a 1 retornar um array com somente os números ímpares
Se a opção recebida for igual a 2 retornar um array com somente os números pares
Se a opção recebida for igual a 3 retornar um objeto contendo os dois arrays separados de números ímpares e pares.
*/

const separador = (array, opcao) => {

    if(opcao == 1) {

       const impares = array.filter(numeros => numeros % 2 == 1)

        return impares
    }


    else if (opcao == 2) {

        const pares = array.filter(numeros => numeros % 2 == 0)

        return pares
    }



    else if (opcao == 3) {

        const impares = array.filter(numeros => numeros % 2 == 1)
        const pares = array.filter(numeros => numeros % 2 == 0)

        const juntaArrays = [[...impares], pares]

        return juntaArrays
    }

        else {
            return 'Opção ' + opcao + ' inválida!'
        }

}

module.exports = {separador}