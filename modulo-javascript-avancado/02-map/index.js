let pessoas = [
    { nome: 'Edgard', idade: 26 },
    { nome: 'Caique', idade: 26 },
    { nome: 'Flavia', idade: 28 }
]

// let nomeDasPessoas = []
// for (let i = 0; i < pessoas.length; i++) {
//     nomeDasPessoas.push(pessoas[i].nome)
// }

// console.log(nomeDasPessoas)

let nomeDasPessoas = pessoas.map((pessoa) => pessoa.nome + " têm " + pessoa.idade + " anos de idade")

console.log(nomeDasPessoas)