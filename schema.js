const { gql } = require("apollo-server-express")
const { Beverage } = require("./src/models/Beverage")
const { Assortment } = require("./src/models/Assortments")
const { BeverageType } = require("./src/models/BeverageType")

const typeDefs = gql`
  type BeverageType {
    id: ID!
    name: String!
    assortments: [Assortment]
  }

  type Assortment {
    id: ID!
    name: String!
  }

  type Beverage {
    id: ID!
    name: String!
    beverageTypeID: ID!
    assortmentID: ID
    origin: String!
    edition: String
    alcoholPercentage: Int
    score: Int
  }

  type Query {
    getBeverages: [Beverage]
    getBeverage(id: ID!): Beverage
    getBeverageTypes: [BeverageType]
    getBeverageType(id: ID!): BeverageType
    getAssortments: [Assortment]
    getAssortment(id: ID!): Assortment
  }
  type Mutation {
    addBeverage(
      name: String!
      beverageTypeID: ID!
      assortmentID: ID
      origin: String!
      edition: String
      alcoholPercentage: Int
      score: Int
    ): Beverage
    updateBeverage(
      name: String!
      beverageTypeID: ID!
      assortmentID: ID
      origin: String!
      edition: String
      alcoholPercentage: Int
      score: Int
    ): Beverage
    deleteBeverage(id: ID!): Beverage
    addBeverageType(name: String!, assortments: [ID]): BeverageType
    updateBeverageType(id: ID!, name: String!, assortments: [ID]): BeverageType
    deleteBeverageType(id: ID!): BeverageType
    addAssortment(name: String!): Assortment
    updateAssortment(id: ID!, name: String!): Assortment
    deleteAssortment(id: ID!): Assortment
  }
`

const resolvers = {
  Query: {
    getBeverages: (parent) => {
      return Beverage.find({})
    },
    getBeverage: (parent, { id }) => {
      return Beverage.findById({ id })
    },
    getBeverageTypes: (parent) => {
      return BeverageType.find({}).populate("assortments")
    },
    getBeverageType: (parent, { id }) => {
      return BeverageType.findById({ id })
    },
    getAssortments: (parent) => {
      return Assortment.find({})
    },
    getAssortment: (parent, { id }) => {
      return Assortment.findById({ id })
    },
  },
  Mutation: {
    addBeverage: (parent, args) => {
      let beverage = new Beverage({
        name: args.name,
        beverageType: args.beverageType,
        assortment: args.assortment,
        origin: args.origin,
        edition: args.edition,
        alcoholPercentage: args.alcoholPercentage,
        score: args.score,
      })
      return beverage.save()
    },
    addBeverageType: (parent, args) => {
      let beverageType = new BeverageType({
        name: args.name,
        assortments: args.assortments,
      })
      return beverageType.save()
    },
    addAssortment: (parent, { name }) => {
      let assortment = new Assortment({
        name,
      })
      return assortment.save()
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
            beverageType: args.beverageType,
            assortment: args.assortment,
            origin: args.origin,
            edition: args.edition,
            alcoholPercentage: args.alcoholPercentage,
            score: args.score,
          },
        },
        { new: true },
        (err, Beverage) => {
          if (err) {
            console.log(
              "Something went wrong when you edited the beverage informations.",
            )
          } else {
          }
        },
      )
    },
    updateBeverageType: (parent, args) => {
      if (!args.id) return
      return BeverageType.findOneAndUpdate(
        {
          _id: args.id,
        },
        {
          $set: {
            name: args.name,
            assortments: args.assortments,
          },
        },
        { new: true },
        (err, BeverageType) => {
          if (err) {
            console.log(
              "Something went wrong when you edited the beverage type informations.",
            )
          } else {
          }
        },
      )
    },
    updateAssortment: (parent, { id, name }) => {
      if (!id) return
      return Assortment.findOneAndUpdate(
        {
          _id: id,
        },
        {
          $set: {
            name,
          },
        },
        { new: true },
        (err, Assortment) => {
          if (err) {
            console.log("Something went wrong when you edited the assortment.")
          } else {
          }
        },
      )
    },
  },
}

module.exports = { typeDefs, resolvers }
