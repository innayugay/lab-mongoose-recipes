const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('./data.js')

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const RecipeSchema = new Schema({
  title: {type: String, required: true, unique: true},
  levle: {type: String, enum:['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']},
  ingredients: {type: Array},
  cousine: {type: String, required: true},
  dishType: {type: String, enum:['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other']},
  image: {type: String, default: "https://images.media-allrecipes.com/images/75131.jpg"},
  duration: {type: Number, min: 0},
  creator: {type: String},
  created: {type: Date, default: Date.now}

})

const Recipe = mongoose.model('Recipe', RecipeSchema);


// console.log(data[0]);

// Recipe.insertMany([data[1], data[2], data[3], data[4]])
// .then((response)=>{
//     console.log(response)
// })
// .catch((err)=>{
//   console.log(err)
// })

// Recipe.updateOne({title: "Rigatoni alla Genovese"}, {duration: 100})
// .then((response)=>{
//   console.log(response)
// })
// .catch((err)=>{
//   console.log(err)
// })

Recipe.remove({title:"Carrot Cake"})
.then((response)=>{
  console.log(response)
})
.catch((err)=>{
  console.log(err)
})