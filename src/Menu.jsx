// import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from 'axios';

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

//MenuItem Tab

const MenuList = () => {
        const [items, setItems] = useState([]);
    
        const getMenu = () => {
            axios.get('http://127.0.0.1:8000/MenuItem/')
                .then(response => {
                    console.log ('Hereeee', response);
                    setItems(response.data);
                })
                .catch(error => console.log('ERROR: ', error));
        };
    
        useEffect(() => {
            getMenu(); //built in function that takes two things to complete, 
        }, []);
    

    
// For my customer tab now.

const NewCustomer = ({ getCustomer}) => {
    const [name, setName] = useState('');
   

    const createCustomer  = () => {
        axios.post('http://127.0.0.1:8000/customer/', {
            name: name
        })
            .then(response => {
                console.log('Customer response: ', response)
                if (response.status === 200) {
                    getCustomer()
                    setName('');
                }
            })
            .catch(error => console.log('ERROC: ', error))
         }
         return (
            <div style ={{ marginTop: 20 }} >
                <h2> New Customer </h2>
                <input
                onChange={e => setName (e.target.value)}
                placeholder="Enter Name"
                value={name}
                />

                <button onClick={createCustomer}>
                    New Customer
                </button>
            </div>
         )

 
}


        return (
            <div className="p-5">
                <MenuList items={items} />
                <NewCustomer getCustomer= {NewCustomer}/>
            </div>
        );
    };




export default Menu 