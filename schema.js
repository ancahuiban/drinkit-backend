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
      id: ID!
      name: String!
      beverageType: BeverageType!
      assortment: [Assortment]
      origin: String!
      edition: String
      alcoholPercentage: Int
      score: Int
    ): Beverage
    updateBeverage(
      id: ID!
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
