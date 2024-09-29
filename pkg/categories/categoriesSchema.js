const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "The field is required."],
  },
  image: {
    type: String,
  },
  iconsecond: {
    type: String,
  },
  iconthhird: {
    type: String,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Items",
    },
  ],
  unit: {
    type: String,
  },
  price: {
    type: String,
  },
  time: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  icon: {
    type: String,
  },
});

const Categories = mongoose.model("Categories", categoriesSchema);
module.exports = Categories;