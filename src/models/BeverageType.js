const mongoose = require("mongoose")
const Schema = mongoose.Schema

const beverageTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    assortments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Assortment",
      },
    ],
  },
  {
    timestamps: true,
  },
)
var BeverageType = mongoose.model("BeverageType", beverageTypeSchema)
module.exports = { BeverageType, beverageTypeSchema }
