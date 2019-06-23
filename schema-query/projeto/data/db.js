const perfis = [
    { id: 1, nome: 'Comum' },
    { id: 2, nome: 'Administrador' }
]

const usuarios = [
    { id: 1, nome: 'Leandro Dias', idade: 18, perfil_id: 2, status: 'ATIVO' },
    { id: 2, nome: 'Thaísa Castro', idade: 20, perfil_id: 2, status: 'INATIVO' },
    { id: 3, nome: 'Rhaira Silva', idade: 19, perfil_id: 1, status: 'BLOQUEADO' }
]

module.exports = { perfis, usuarios }
