let pessoas = [
    { nome: 'Edgard', idade: 26  },
    { nome: 'Caique', idade: 26 },
    { nome: 'Flavia', idade: 28 }
]

// let pessoasComIdadeDe26Anos = []
// for(let i = 0; i < pessoas.length; i++){
//     if(pessoas[i].idade === 26){
//         pessoasComIdadeDe26Anos.push(pessoas[i])
//     }
// }

// console.log(pessoasComIdadeDe26Anos)

let pessoasComIdadeDe26Anos = pessoas.filter((pessoa) => pessoa.idade === 26)

console.log(pessoasComIdadeDe26Anos)