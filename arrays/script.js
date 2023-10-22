let videoGame = ['swit', 'ps4', 'xbox'];


for(let item = 0; item < videoGame.length; item++ ){
  console.log(videoGame[item]);
}

console.log(videoGame[2])


let titulosBrasilMundo = ['1959', '1962', '1970', '1994', '2002'];
for(let i = 0; i < titulosBrasilMundo.length; i++){
  console.log(`O Brasil ganhou a copa de ${titulosBrasilMundo[i]}`);
}

let frutas = ['banana', 'maçã', 'pera', 'uva', 'melancia'];
for(let i = 0; i < frutas.length; i++){
  if(frutas[i] === 'maçã'){
    console.log(`encontrou a ${frutas[i]}`);
    break
  }
}
frutas.forEach((item) => {
  if(item === 'pera'){
    console.log(item);
  }
})