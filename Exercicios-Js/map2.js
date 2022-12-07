const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapís", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado) 

// Trazendo só os nomes do obj

const paraObjeto1 = json => JSON.parse(json)
const apenasNome = produto => produto.nome 

const resultado1 = carrinho.map(paraObjeto1).map(apenasNome)
console.log(resultado1) 