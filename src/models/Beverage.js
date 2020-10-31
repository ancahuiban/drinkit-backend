const mongoose = require("mongoose")
const Schema = mongoose.Schema

const beverageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    beverageType: {
      type: String,
      enum: ["CIDER", "JUICE", "BEER", "SPIRITS"],
      required: true,
    },
    assortment: {
      type: Schema.Types.ObjectId,
      ref: "Assortments",
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
module.exports = { Beverage, beverageSchema }
