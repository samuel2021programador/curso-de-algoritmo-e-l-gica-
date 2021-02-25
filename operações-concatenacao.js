
/*Var
// Seção de Declarações das variáveis 
   nome : caracter
   numero : real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
 escreval("digite o nome:")
 leia(nome)
 escreval("digite o numero:")
 leia(numero)
 
 escreval (nome, " : " , numero )

Fimalgoritmo
*/
var nome,numero

nome = prompt("digite seu nome: ")
numero = prompt ("digite seu numero: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero