const mongoose = require("mongoose")
const Schema = mongoose.Schema

const beverageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    beverageType: {
      type: Enumerator,
      required: true,
    },
    assortment: {
      type: Enumerator,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    edition: {
      type: String,
      required: false,
    },
    alcoholPercentage: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    // notes: {
    //   type: Enumerator,
    //   required: false,
    // },
  },
  {
    timestamps: true,
  },
)
var Beverage = mongoose.model("Beverage", beverageSchema)
module.exports = { Beverages, beverageSchema }
