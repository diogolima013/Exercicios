//  operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = { ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ["João", "Pedro", "Glória"]
const grupoFinal = ["Maria", ...grupoA, "Rafa"]
console.log(grupoFinal)