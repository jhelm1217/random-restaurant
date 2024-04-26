import chocMartini from './assets/chocolate-Martini.jpeg'
import smoothie from './assets/fruit-smoothie.jpeg'
import shrimp from './assets/shrimp-and-grits.jpeg'
import avocado from './assets/avocado-toast.jpeg'
import bagel from './assets/bagel-lox.jpeg'
import fruit from './assets/fruit-salad.jpeg'
import wings from './assets/chicken-wings.jpeg'
import fajita from './assets/fajita-salad.jpeg'
import ceasar from './assets/chicken-ceaser-salad.jpeg'
import stir from './assets/stir-fry.jpeg'
import pesto from './assets/chicken-pesto-panini.jpeg'
import garlic from './assets/garlic-shrimp.jpeg'
import lasagna from './assets/vegetable-lasagna.jpeg'
import salmon from './assets/salmon-burger.jpeg'
import spinach from './assets/spinach-stuffed-chicken.jpeg'


const Items = [
   //this is an array of all of my items that will be on my menu. including images, descr, price, title and category.
   {
      id: 38,
      cuisine: 'American',
      title: 'Chocolate Martini',
      category: 'Drink',
      price: '9.99',
      description: 'A decadent cocktail made with chocolate liqueur, chocolate and cream',
      img: {chocMartini},
   },
   {
      id: 13,
      cuisine: 'American',
      title: 'Fruit Smoothie',
      category: 'Drink',
      price: '6.99',
      description: 'A refreshing blend of fresh fruit, yogurt, and honey',
      img: {smoothie},
   },
   {
      id: 9,
      cuisine: 'Southern',
      title: "Shrimp and Grits",
      category: 'Breakfast',
      price: '12.99',
      description: 'Buttery grits topped with shrimp, bacon and a spicy Cajun cream sauce',
      img: {shrimp},
   },
   {
      id: 15,
      cuisine: 'American',
      title: 'Avocado Toast',
      category: 'Breakfast',
      price: '10.99',
      description: 'Toasted bread topped with mashed avocado, sliced tomatoes, and a poached egg',
      img: {avocado},
   },
   {
      id: 21,
      cuisine: 'American',
      title: 'Bagel and Lox',
      category: 'Breakfast',
      price: '11.99',
      description: 'A toasted bagel topped with smoked salmon, cream cheese, capers and red onion',
      img: {bagel},
   },
   {
      id: 50,
      cuisine: 'International',
      title: 'Fruit Salad',
      category: 'Breakfast',
      price: '7.99',
      description: 'Assorted fresh fruits, such as melon, pineapple, berries, and grapes',
      img: {fruit},
   },
   {
      id: 19,
      cuisine: 'American',
      title: 'Chicken Wings',
      category: 'Appetizer',
      price: '9.99',
      description: 'Crispy fried chicken wings tossed in your choice of buffalo, barbecue or honey mustard',
      img: {wings},
   },
   {
      id: 35,
      cuisine: 'Mexican',
      title: 'Fajita Salad',
      category: 'Lunch',
      price: '9.99',
      description: 'A salad topped with grilled chicken, peppers, onions, and avocado with tortilla chips',
      img: {fajita},
   },
   {
      id: 3,
      cuisine: 'Italian',
      title: 'Chicken Ceasar Salad',
      category: 'Lunch',
      price: '8.99',
      description: 'A classic salad of romaine lettuce, grilled chicken, croutons, and Caesar dressing',
      img: {ceasar},
   },
   {
      id: 48,
      cuisine: 'Asian',
      title: 'Vegetable Stir-Fry',
      category: 'Lunch',
      price: '11.99',
      description: 'Stir-fried vegetables with tofu and a soy sauce-based sauce, served over rice',
      img: {stir},
   },
   {
      id: 54,
      cuisine: 'Italian',
      title: 'Pesto Chicken Panini',
      category: 'Lunch',
      price: '10.99',
      description: 'Grilled chicken, mozzarella cheese, pesto, and sun-dried tomatoes on a pressed panini bread',
      img: {pesto},
   },
   {
      id: 49,
      cuisine: 'Italian',
      title: 'Garlic Shrimp',
      category: 'Dinner',
      price: '17.99',
      description: 'Sautéed shrimp in a garlic and butter sauce, served with bread',
      img: {garlic},
   },
   {
      id: 57,
      cuisine: 'Italian',
      title: 'Vegetable Lasagna',
      category: 'Dinner',
      price: '16.99',
      description: 'Layers of pasta, tomato sauce, and assorted vegetables, baked with mozzarella cheese',
      img: {lasagna},
   },
   {
      id: 27,
      cuisine: 'American',
      title: 'Salmon Burger',
      category: 'Dinner',
      price: '13.99',
      description: 'A juicy salmon patty topped with avocado and a spicy mayo sauce, served on a brioche bun',
      img: {salmon},
   },
   {
      id: 44,
      cuisine: 'Mediterranean',
      title: 'Spinach and Feta Stuffed Chicken',
      category: 'Dinner',
      price: '19.99',
      description: 'Chicken breasts stuffed with spinach and feta cheese, served with roasted potatoes and vegetables',
      img: {spinach},
   },

];

export default Items

