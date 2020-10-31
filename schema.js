const { gql } = require("apollo-server-express")
const { Beverage } = require("./src/models/Beverage")
const BeverageType = require("./src/models/BeverageType")
const { Assortment } = require("./src/models/Assortments")

const typeDefs = gql`
  type Beverage {
    id: ID!
    name: String!
    beverageType: BeverageType!
    assortment: [Assortment]
    origin: String!
    edition: String
    alcoholPercentage: Int
    score: Int
  }
  type Query {
    getBeverages: [Beverage]
    getBeverage(id: ID!): Beverage
  }
  type Mutation {
    addBeverage(
      name: String!
      beverageType: BeverageType!
      assortment: [Assortment]
      origin: String!
      edition: String
      alcoholPercentage: Int
      score: Int
    ): Beverage
    updateBeverage(
      name: String!
      beverageType: BeverageType!
      assortment: [Assortment]
      origin: String!
      edition: String
      alcoholPercentage: Int
      score: Int
    ): Beverage
    deleteBeverage(id: ID!): Beverage
  }
`

const resolvers = {
  Query: {
    getBeverages: (parent, args) => {
      return Beverage.find({})
    },
    getBeverage: (parent, { id }) => {
      return Beverage.findById({ id })
    },
  },
  Mutation: {
    addBeverage: (parent, args) => {
      let Beverage = new Beverage({
        name: args.name,
        beverageType: args.beverageType
        assortment: args.assortment
        origin: args.origin
        edition: args.edition
        alcoholPercentage: args.alcoholPercentage
        score: args.score
      })
      return Beverage.save()
    },
    updateBeverage: (parent, args) => {
      if (!args.id) return
      return Beverage.findOneAndUpdate(
        {
          _id: args.id,
        },
        {
          $set: {
            name: args.name,
            beverageType: args.beverageType
            assortment: args.assortment
            origin: args.origin
            edition: args.edition
            alcoholPercentage: args.alcoholPercentage
            score: args.score
          },
        },
        { new: true },
        (err, Beverage) => {
          if (err) {
            console.log("Something went wrong when you edited the beverage informations.")
          } else {
          }
        },
      )
    },
  },
}
