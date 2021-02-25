/* alert ("digite seu nome:")
prompt (nome)
alert ("digite a nota01 do aluno:")
prompt(nota01)
alert ("digite a nota02 do aluno:"")
prompt (nota02)
media := (nota01 + nota02) / 2 

se media >= 5 então 
alert "aprovado", nome )
fimse*/

var nome , nota01,nota02
nome = prompt("digite seu nome:")
nota01 = prompt ("digite a nota01 do aluno:")
nota02 = prompt ("digite a nota02 do aluno:")

media = (parseInt (nota01) + parseInt (nota02)) / 2

if (media >= 5){
    alert("aprovado" + nome)
}
else
      alert("reprovado" + nome)

