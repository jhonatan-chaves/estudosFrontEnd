


//exercicio 6
console.log("================== exercicios 6 ================")
// crie um objeto com seus dados pessoais



class DadosPessoais {
  constructor(nome, idade, email){
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }
  get getNome(){
    return this.nome
  }
  set setNome(setNome){
    this.nome = setNome;
  }
}

let pessoa = new DadosPessoais(" ", 25, "jhonatan@gmail.com");
pessoa.setNome = "jhonatan chaves";

console.log(typeof DadosPessoais);