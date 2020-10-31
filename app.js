const express = require("express")
const mongoose = require("mongoose")
const schema = require("./schema")
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()
const { ApolloServer } = require("apollo-server-express")

// const url = "mongodb://localhost:27017/beveragesdb"

const connect = mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
connect.then(
  (db) => {
    console.log("Connected correctly to server!")
  },
  (err) => {
    console.log(err)
  },
)

console.log(schema.typeDefs, schema.resolvers)
const server = new ApolloServer({
  typeDefs: schema.typeDefs,
  resolvers: schema.resolvers,
})

const app = express()
app.use(bodyParser.json())
app.use("*", cors())
server.applyMiddleware({ app })

app.listen({ port: 8000 }, () =>
  console.log(`🚀 Server ready at http://localhost:8000${server.graphqlPath}`),
)
