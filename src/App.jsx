import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import apiCall from "./ApiKey"
import Menu from "./Menu"
import items from "./Items"
import Categories from "./Categories"
import DropdownMenu from "./DropdownMenu"

const Title = () => {
  return (
    <h1 style= {{ textAlign: 'center' }}>
     Grab A Bite!!
    </h1>
  )
}

function App() {
  apiCall() // call the api function

  const [itemsData, setItemsData] = useState([]); //used go store data and update the fetched data from the api
  const [activeCategory, setActiveCategory] = useState(""); // used to store and update the currently active category, buttons
  const [categories, setCategories] = useState([]); //used to store the list of categories such as breakfast, lunch, dinner etc
  const [selectedCuisine, setSelectedCuisine] = useState(''); //it starts out as an empty array, but once i select a cuisine it will update to that value. 

  const allCategories = ["All", ...new Set(items.map((item) => item.category))]; // creates an array with all the categories. ALL is the first element, then it will filter through the array.
  const cuisine_types = ['Italian', 'Mexican', 'Southern', 'American', 'Asian', 'Mediterranean', 'International'];

  //this function is used to map over the differnt types of cuisines in the array and filter it depending on what you select
  //it is to update the selected cuisine state from the items Data. 
  const filterByCuisine = (cuisine) => {
    setSelectedCuisine(cuisine); 
    if (cuisine === '') { //if no cuisine is selected
      setItemsData(items); //reset to all items if no cuisine is selected
    } else {
      const filteredItems = items.filter((item) => item.cuisine === cuisine); // filter through the items array and fiter out the cuisine thats needed?
      setItemsData(filteredItems); // show the selected cuisine after the filter
    }
  };
  
  
  // same as above, this function filters over the different types of categorys i have in my items array,
  // basically is to update the active category state. if category is "All", 
  //it sets itemsData state to the original items array. 
  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setItemsData(items);
      return;
    }
    //  it filters the items array based on the category and sets the itemsData state to the filtered array.
    const newItem = items.filter((item) => item.category === category);
    setItemsData(newItem);
  };


  //this takes two arguements and sets the intial value and starting point?
  useEffect(() => {
    setItemsData(items);
    setCategories(allCategories);
  }, []);


  return (
    <main>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <ul>
          <Link to='/about' style= {{ color: 'white', textDecoration: 'none', display: 'inline-block', padding: '10px 20px', backgroundColor: 'purple', borderRadius: '5px' }}>About</Link>
          <Link to='/contact' style= {{ color: 'white', textDecoration: 'none', display: 'inline-block', padding: '10px 20px', backgroundColor: 'purple', borderRadius: '5px' }}>Contact</Link>
          <Link to='/gallery' style= {{ color: 'white', textDecoration: 'none', display: 'inline-block', padding: '10px 20px', backgroundColor: 'purple', borderRadius: '5px' }}>Gallery</Link>
        </ul>
      </nav>
      <section className="menu section">
        <div className="title">
          <h2 style={{ textAlign: 'center' }}>
            </h2>
        </div>
        <div className="transparent-box">
          <Title />
          <DropdownMenu 
          cuisine_types={cuisine_types}
          onSelect={filterByCuisine} />
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems} />
          <Menu items={itemsData} />
        </div>
      </section>
    </main>
  );
}

export default App
