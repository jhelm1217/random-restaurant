// import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

const Menu = ({ items }) => {

    //this file, is used to section off the items on my menu and center them on my page.
    return (
        // <div className="p-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', color: 'white', padding: '20px' }}>
        //     <Link to='/' style={{ color: 'white', textDecoration: 'none', display: 'inline-block', padding: '10px 20px', backgroundColor: 'purple', borderRadius: '5px' }}>{'<- Back'}</Link>

        <div className="container">
            <div className="section-center">
                {items.map((item) => { //used to iterate over each item in my items array
                    const { id, title, description, price, img } = item; //this is everything that will be displayed
                    return (
                        <article key={id} className="menu-item">
                            <img src={img} alt={title} className="photo" />
                            <div className="item-info">
                                <header>
                                    <h4>{title}</h4>
                                    <h5 className="price">${price}</h5>
                                </header>
                                <p className="item-text">{description}</p>
                            </div>
                        </article>
                    );
                })}

            </div>
        </div>

    );
};



export default Menu 