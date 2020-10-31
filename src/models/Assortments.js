const mongoose = require("mongoose")
const Schema = mongoose.Schema
const BeverageType = require("./BeverageType")

const assortmentsSchema = new Schema(
  {
    assortment: {
      type: String,
      required: true,
    },
    beverageType: {
      type: BeverageType,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)
var Assortment = mongoose.model("Assortments", assortmentsSchema)
module.exports = { Assortments, assortmentsSchema }
