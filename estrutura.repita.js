/*
Var
// Seção de Declarações das variáveis 
  sairloop:caractere
  valor01,valor02 : real
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    repita
     escreva (" digite o primeiro valor ")
     leia (valor01)
      escreva (" digite o segundo valor ")
     leia (valor02)
      escreval ("resultado",  valor01 + valor02)
      escreval ("deseja sair ?  s/n ")
      leia (sairloop)
    ate sairloop  <> "n"
    */
function acaobotao() {
    var sairloop, valor01,valor02
  
    do{
        valor01 = prompt (" digite o primeiro valor ")
        valor02 = prompt (" digite o segundo valor ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt (valor01) + parseInt (valor02) )
        sairloop = prompt("deseja sair ?  s/n ")
    }while(sairloop == "n") 
}   