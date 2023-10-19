let dadosPessoais = {
  nome: 'jhonatan',
  sobreNome: 'chaves',
  idade: 25,
  nomeCompleto() {
    return `${this.nome} ${this.sobreNome}`
  },

}


let carro = {
  preco: 1000,
  portas: 4,
  marca: 'audi'
}

carro.preco = 3000;



let cachorro = {
  raca: 'labrador',
  pelagem: 'preta',
  idade: 10,
  late(value) {
    if (value === 1) {
      return 'late'
    } else {
      return 'fica queto'
    }
  }
}


let nome = 'jhonatan';


