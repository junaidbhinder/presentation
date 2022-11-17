const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
   
    city: {
      type: String,
      default: "",
    },

    country: {
      type: String,
      default: "",
    },
  },
 
);
;

module.exports = mongoose.model("User", userSchema);