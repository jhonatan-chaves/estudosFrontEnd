function areaQuadrado(lado){
  return lado * lado
}

console.log(areaQuadrado(10))

function corFavorita(cor){
  if(cor === 'azul'){
    return "eu gosto do céu"
  }else if(cor === 'verde'){
    return "eu gosto de mato"
  }else{
    return "eu n gosto de nenhuma cor"
  }
}

console.log(corFavorita())


addEventListener('click', () => { console.log("oi") })

// () => é igual a function arae(){} ou function (){}

function terceiraIdade(idade){
  if(typeof idade !== "number"){
    return "infiorme a sua idade";
  } else if(idade >= 60){
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(75));


const profissao = 'desenvolvedor';

function dadosPessoais(nome, idade ){
 function outrosDados(){
   let cidade = 'rio de janeira';
   let pais = 'brasil';
   function femininoOuMasculino(){
    if (cidade.charAt(cidade.length -1) === 'o'){
      return 'no'
    }else {
      return 'na'
    }
   }
   return `olá ${nome} como você vai ? vi que sua idade é ${idade}, e que você mora ${femininoOuMasculino()} ${cidade} - ${pais}`
 }
 return outrosDados();

}

console.log(dadosPessoais('jhonatan', 25))

console.log('================================ EXERCICIOS =========================================');




let valorVa = 25;

function valorValido (value){
  if(value == valorVa){
    return 'valor valido';
  }else{
    return 'valor invalido';
  }
}
console.log(valorValido(25));
console.log('===========================================');


function perimetro(lado){
  return lado * 4
}
console.log(perimetro(26))
console.log('===========================================');

function nomeCompleto(nome, sobreNome){
  return `${nome} ${sobreNome}`
}
console.log(nomeCompleto('jhonatan', 'chaves'));

console.log('===========================================');


function numeroPar(value){
  if(value%2 === 0){
    return `o numero ${value} é par`
  }else{
    return `o numero ${value} é impar`
  }
}

console.log(numeroPar(4));

console.log('===========================================');



function tipoDado(value){
  return typeof value;
}
console.log(tipoDado(20));

console.log('===========================================');

addEventListener('scroll', () => { console.log(nomeCompleto('jhonatan', 'chaves'))})