var nome , nota01,nota02 , passou;

passou = false;

nome = prompt("digite seu nome:")
nota01 = prompt ("digite a nota01 do aluno:")
nota02 = prompt ("digite a nota02 do aluno:")

media = (parseInt (nota01) + parseInt (nota02)) / 2

if (media >= 5)
    passou = true; 

if(passou )
    alert("aprovado" + nome)

else
      alert("reprovado" + nome)
 