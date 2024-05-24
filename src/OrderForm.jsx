import { Link } from "react-router-dom"
import { useState } from "react";
import axios from 'axios';

function OrderForm ({ items, onSubmit })  {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        items: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleItemChange = (e, itemName) => {
        const { checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            items: checked
                ? [...prevFormData.items, itemName]
                : prevFormData.items.filter((item) => item !== itemName),
        }));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/OrderItem/', formData)
        .then(response => {
            console.log('Here is your order: ', response.data);
        // onSubmit(formData);
            setFormData({
                name: '',
                phoneNumber: '',
                items: [],
            });
        })
        .catch(error => {
            console.log('ERRORR: ', error)
        });
    };

    return (
        <div className="p-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', color: 'white', padding: '20px'}}>
            <Link to='/' style= {{ color: 'white', textDecoration: 'none', display: 'inline-block', padding: '10px 20px', backgroundColor: 'purple', borderRadius: '5px' }}>{'<- Back'}</Link>
     



        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required />
            </label>
            <label>
                Phone Number:
                <input
                type="telephone"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required />
            </label>
            <fieldset>
            <legend>Items:</legend>
            {items?.map((item) => ( // use optional chaining to map over items if it exists
            <label key={item.id}>
                <input
                type="checkbox"
                name="items"
                value={item.name}
                checked={formData.items.includes(item.name)}
                onChange={(e) => handleItemChange(e, item.name)}
                />
                {item.name}
            </label>
            ))}
        </fieldset>
        <button type="submit">Submit Order</button>

        </form>
        </div>
    )
    }

    



    export default OrderForm


