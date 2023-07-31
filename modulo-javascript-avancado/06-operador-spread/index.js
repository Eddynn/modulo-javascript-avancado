const pessoas = ['Edgard', 'Caique', 'Flavia']
console.log(...pessoas)

/* CONCATENAR DOIS ARRAYS */

// let pessoas1 = ['Edgard', 'Caique', 'Flavia']
// let pessoas2 = ['Nikão', 'Brunin', 'Denis']

// pessoas1 = pessoas1.concat(pessoas2)

// pessoas1 = [ ...pessoas1, ...pessoas2]
// console.log(pessoas1)


/* CLONAR OBJETO */

const pessoa1 = { nome: 'Edgard', idade: 26 }

const objetoClonado = { ...pessoa1}
console.log(objetoClonado)
console.log(pessoa1)