const mongoose = require("mongoose")
const Schema = mongoose.Schema
// const BeverageType = require("./BeverageType")

const assortmentsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // assortment: {
    //   type: String,
    //   required: true,
    // },
    // beverageType: {
    //   type: String,
    //   enum: ["CIDER", "JUICE", "BEER", "SPIRITS"],
    //   required: true,
    // },
  },
  {
    timestamps: true,
  },
)
var Assortment = mongoose.model("Assortment", assortmentsSchema)
module.exports = { Assortment, assortmentsSchema }
