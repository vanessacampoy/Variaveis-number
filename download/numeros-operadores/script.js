//Number
var idade = 41
var gols = "399"
var pi = 3.14 //ponto para decimal
var exp = 2e10 //20000000000 - precisão de até 15 números

console.log(idade, gols, pi, exp) //quando é do tipo number o número aparece na cor azul no console

//Operadores aritméticos
var soma = 45 + 34
var subtracao = 43-8
var multiplicação = 24*6
var divisao = 48/4
var expoente = 2**7
var modulo = 14%3 //o resultado é a quantidade que resta

console.log(soma)
console.log(subtracao)
console.log(multiplicação)
console.log(divisao)
console.log(expoente)
console.log(modulo)

//Operadores aritméticos(strings)
var subtraindo = "20" - 4
console.log(subtraindo) //como não dá para subtrair strings ele entende que é uma operação matemática

var dividindo = "20" / 4
console.log(dividindo) //como não dá para dividir strings ele entende que é uma operação matemática

//NAN - not a number
var naoNumero = "Tenho 20"/6 
console.log(naoNumero)

/*A ordem importa na hora de fazer as operações matemáticas
Ordem: multiplicação, divisão, soma e subtração
Usa-se parênteses para priorizar uma expressão*/

var total1 = 20 + 5 * 2 //30
var total2 = (20 + 5) * 2 //50
var total3 = 20 / 2 *5 //50
var total4 = 10 + 10 * 2 + 20 / 2 //40

console.log(total1)
console.log(total2)
console.log(total3)
console.log(total4)

/*Operadores aritméticos unários
No primeiro console.log ele repete o número pq apenas recebeu o incremento, ja no segundo ele mostra com um número a mais */
var incremento = 5
console.log(incremento++) //5
console.log(incremento) //6

var incremento1 = 1
console.log(++incremento1) //2
//usando o ++ na frente da variável o número já modifica no primeiro console.log

var decremento = 5
console.log(decremento--) //5
console.log(decremento) //4

var decremento1 = 3 
console.log(--decremento1) //2
//usando o -- na frente da variável o número já modifica no primeiro console.log

//o + e _ tenta transformar o valor seguinte em número
//Só funciona se for somente números, se tiver letras o resultado é NAN
var anos = "32"
var somaIdade = 10
console.log(+anos + somaIdade) //42 - o sinal de + na frente tranformou a string  em número
console.log(+anos - somaIdade) //22 - fez a subtração

//Exercícios
var total = 10 + 5 * 2 / 2 + 20 //35
console.log(total)

var naoNumeros = "3x"
console.log(+naoNumeros) //resultado NAN

var expressao = "teste" / 6
console.log(expressao) //resultado NAN

var mudarParaNumero = "200"
var numeroReal = 50
console.log(+mudarParaNumero + numeroReal) //250

var incremento3 = 20
console.log(++incremento3) //21

//como dividir peso por 2 e imprimir com o valor da unidade
var dividirPeso = 80 /2
var unidade = "kg"
var peso = dividirPeso + unidade
console.log(peso)








