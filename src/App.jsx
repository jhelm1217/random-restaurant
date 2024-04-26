import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import apiCall from "./ApiKey"
import Menu from "./Menu"
import items from "./Items"
import Categories from "./Categories"
import DropdownMenu from "./DropdownMenu"
// import SearchMenu from "./searchMenu"
// import logo from "./src/assets/logo.jpeg"


const Title = () => {
  return (
    <h1 style= {{ textAlign: 'center' }}>
     Grab A Bite!!!
    </h1>
  )
}


function App() {
  apiCall() // call the api function

  const [itemsData, setItemsData] = useState([]); //used go store data and update the fetched data from the api
  const [activeCategory, setActiveCategory] = useState(""); // used to store and update the currently active category, buttons
  const [categories, setCategories] = useState([]); //used to store the list of categories such as breakfast, lunch, dinner etc

  // const drink = items.filter((item) => item.category === 'Drink');
  // const breakfast = items.filter((item) => item.category === 'Breakfast');

  const allCategories = ["All", ...new Set(items.map((item) => item.category))]; // This is all the categories that are in my menu.
  const cuisine_types = ['Italian', 'Mexican', 'Southern', 'American', 'Asian', 'Mediterranean', 'International'];
  const [selectedCuisine, setSelectedCuisine] = useState('');

  const filterByCuisine = (cuisine) => {
    setSelectedCuisine(cuisine);
    if (cuisine === '') {
      setItemsData(items); //reset to all items if no cuisine is selected
    } else {
      const filteredItems = items.filter((item) => item.cuisine === cuisine);
      setItemsData(filteredItems);
    }
  };
  
  

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setItemsData(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setItemsData(newItem);
  };




  useEffect(() => {
    setItemsData(items);
    setCategories(allCategories);
  }, []);
  //this function  above, takes two arguements and sets the intial value and starting point?


  return (
    <main>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <ul>
          <Link to='/about' style= {{ color: 'white', textDecoration: 'none', display: 'inline-block', padding: '10px 20px', backgroundColor: 'purple', borderRadius: '5px' }}>About</Link>
          <Link to='/contact' style= {{ color: 'white', textDecoration: 'none', display: 'inline-block', padding: '10px 20px', backgroundColor: 'purple', borderRadius: '5px' }}>Contact</Link>

        </ul>
      </nav>
      <section className="menu section">
        <div className="title">
          <h2 style={{ textAlign: 'center' }}>
            </h2>
          {/* <div className="underline"></div> */}
        </div>
        <div className="transparent-box">
          <Title />
          <DropdownMenu 
          cuisine_types={cuisine_types}
          onSelect={filterByCuisine} />
          {/* <SearchMenu menuItems={items} /> i've added my searcg box above my menu items here */}
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems} />
            {/* <div className="menu-section">
              <h2>Drinks</h2>
              <Menu items={drink} />
            </div>
            <div className="menu-section">
              <h2>Breakfast</h2>
              <Menu items={breakfast} />
            </div> */}
          <Menu items={itemsData} />
        </div>
      </section>
    </main>
  );
}

export default App
