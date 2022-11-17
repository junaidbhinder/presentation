const mongoose = require("mongoose");
const stockSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String
    },
  
  },
 
);


module.exports = mongoose.model("Stock", stockSchema);