import React, { useState } from 'react';

function DropdownMenu({ cuisine_types, onSelect }) {
  const [selectedCuisine, setSelectedCuisine] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCuisine(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div>
      <label htmlFor="dropdown">Choose a cuisine:</label>
      <select id="dropdown" value={selectedCuisine} onChange={handleSelectChange}>
        <option value="">Select...</option>
        {cuisine_types.map((cuisine) => (
          <option key={cuisine} value={cuisine}>{cuisine}</option>
        ))}
      </select>
      <p>Selected Cuisine: {selectedCuisine}</p>
    </div>
  );
}

export default DropdownMenu;

//cuisine types

