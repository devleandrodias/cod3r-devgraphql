const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    # Pontos de entrada da sua API!

    # String! (Tem que retornar obrigatoriamente uma string)

    type Query {
        ola: String
    }

` //Tagged template ES6

const resolvers = {
    Query: {
        ola() {
            return 'Olá, Mundo! Estou aprendendo GraphQL'
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})