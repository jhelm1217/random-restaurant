import React from 'react'

 //this file, filters out my categories into buttons, so i can switch between all of them. it pulls info from my api
const Categories = ({categories, filterItems, activeCategory}) => {
    return (
        <div className="btn-container" style= {{ display: 'flex', justifyContent: 'center' }}>
            {categories.map((category, index) => {
                return (
                    <button
                        type="button"
                        className={`${activeCategory === category ?"filter-btn active" : "filter-btn"}`}
                        key ={index}
                        onClick= {() => filterItems(category)}
                        style= {{ backgroundColor: activeCategory === category ? 'black' : 'gray', color: 'white' }}>
                        {category}
                    </button>
                )
            })}

        </div>
    )                                            
}

export default Categories