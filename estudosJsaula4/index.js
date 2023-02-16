
//exercicio 4
console.log("================== exercicios 4 ================")
//verifique se sua idade é maior ou menor do que de um parente
let minhaIdade = 25;
let idadePai = 52;

if(minhaIdade === idadePai){
  console.log("é igual");
}else if (minhaIdade < idadePai){
  console.log("é menor");
}else{
  console.log("é maior");
}

//qual  valor é retornado na seguinte expresão?
let expresao = (5 - 2) && (5 - '') && (5 - 2);
console.log(expresao); 

//verifique se as seguintes variáveis são truthy ou falsy
let nome = "jhonatan";
let idade = 28;
let possuiDoutorado = false;
let empregoFuturo;
let dinheiroNaConta = 0;

if(nome){
  console.log("verdadeiro");
}else{
  console.log("falso")
}

if(idade){
  console.log("verdadeiro");
}else{
  console.log("falso");
}

if(possuiDoutorado){
  console.log("verdadeiro");
}else{
  console.log("falso");
}

if(empregoFuturo){
  console.log("verdadeiro");
}else{
  console.log("falso");
}

if(dinheiroNaConta){
  console.log("verdadeiro");
}else{
  console.log("falso");
}

//