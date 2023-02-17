
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
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

//compare o tota de habitantes do Brasil com a China (valor em milhas)




let brasil = 20755e6;
let china = 1340e6;

if(brasil > china){
  console.log("O Brasil tem mais habitantes que a China " + brasil.toLocaleString("pt-BR", {style:"decimal"}) + "de habitantes");
}else{
  console.log("A China tem o maior numero de habitantes se compardo com o Brasil  totalizando: " + china.toLocaleString("pt-BR",{style:"decimal"}) + " de habitantes");
}
// verifique oque irá aparecer no console?
if("Gato" === "gato" && (5 >2)){
  console.log("vardadeiro");
}else{
  console.log("falso");
}
//verifique oque ira aparecer no comsole?
if("Gato" === "gato" || (5 > 2)){
  console.log("Gato" && "Cão");
}else{
  console.log("falso");
}

 