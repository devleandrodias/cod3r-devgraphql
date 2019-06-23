const {usuarios, perfis} = require('../data/db')

module.exports = {
    ola() {
        return 'Basta retornar uma string!'
    },
    horaAtual() {
        return `${new Date}`
    },
    dataAtual() {
        return new Date
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Leandro Dias',
            email: 'meuemail@gmail.com',
            idade: 18,
            salario_real: 2042.35,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'MacBook Pro 15.5 Polegadas',
            preco: 10000,
            desconto: 0.5
        }
    },
    numerosMegaSena() {
        const crescente = (a, b) => a - b
        return Array(6).fill(0).map(() => parseInt(Math.random() * 60 + 1)).sort(crescente)
    },
    usuarios() {
        return usuarios
    },
    usuario(_, { id }) {
        const sels = usuarios.filter(u => u.id == id)
        return sels ? sels[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const sels = perfis.filter(p => p.id === id)
        return sels ? sels[0] : null
    }
}
