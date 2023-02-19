
//exercicio 5
console.log("================== exercicios 5 ================")
 //crie uma funçao que retorne o seu nome completo
 function nomeCompleto (nome, sobreNome){
  return `${nome} ${sobreNome}`;
 }
 console.log(nomeCompleto("jhonatan", "chaves silva"));

 //crie uma função que verifica se um numero é par

 function retornaParOuImpar(numero){
  if(numero %2 == 0){
    return `${numero} é par`;
  }else{
    return`${numero} é impar`;
  }

 }
console.log(retornaParOuImpar(2154148745915));


//cria uma funçao que retorne o tipo de dados passado no argumento da funçao
function retornaTipo(digite){
  return typeof digite;
}
console.log(retornaTipo(25));

//addEventListener é uma função nativa do javaScript
//o primeiro parametro é o evento que ocorre e o segundo o callback
//utile essa função para mostra o seu nome completo
//quando o evento scroll ocorrer
addEventListener('scroll', function() {
  console.log('jhonatan')});

// corrija o erro da funçao abaixo
let totalPaises = 193;
function precisoVisitar(paisesVisitados){
  //vou tornar a variavel global 
  // let totalPaises = 193;
  return `ainda faltam ${totalPaises - paisesVisitados} paises para visitar!`;
}
function jaVisitei(paisesVisitados){
  return `ja visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}

//minha resposta é tirar o total paises de dentro da funçao precisoVisitar para que ela seja global!!!!
//vou comentar a linha dela para fica mais claro para quem for ver como estava e como eu fiz funcionar!!

console.log(precisoVisitar(23));
console.log(jaVisitei(23));