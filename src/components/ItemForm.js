import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setItemName] = useState('')
  const [category, setCatigory] = useState('Produce')

  function handleNewItemSubmit(e){
    e.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    })
    setItemName('')
  }
  return (
    <form className="NewItem" onSubmit={handleNewItemSubmit}>
      <label>
        Name:
        <input 
        type="text" 
        name="name" 
        value={name} 
        onChange={(e) => setItemName(e.target.value)} 
        />
      </label>

      <label>
        Category:
        <select 
        name="category"
        value={category}  
        onChange={(e => setCatigory(e.target.value))}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}


export default ItemForm;
