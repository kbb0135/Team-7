import React, { useState } from 'react'
import { db } from '../firebase.js'
import { doc, setDoc } from "firebase/firestore"



export default function AdminAddMenu() {
    const [category, setCategory] = useState('');
    const handleCategoryChange = (event) => {
        setCategory(event.target.value); // Update selected category
    }
    const Submit = async (event) => {
        event.preventDefault()
        const itemName = event.target[0].value;
        const categories = event.target[1].value;
        const price = event.target[2].value;
        console.log(event.target[0].value);
        console.log(event.target[1].value);
        console.log(event.target[2].value);

        // const menu = doc(db, categories , itemName)
        // setDoc(menu, 
        //     {Name: itemName}, 
        //     {Price: price},
        //     {merge: true})

        await setDoc(doc(db, categories, itemName), {
            Name: itemName,
            Price: price
        });
        console.log("Updated")

    }
    return (
        <div>
            <form onSubmit={Submit}>
                <label htmlFor="itemName">Item Name:</label>
                <input type="text" id="itemName" className="itemName" />

                <label htmlFor="itemName" className="name">Categories:</label>
                <div className="categories">
                    <select id="category" value={category} onChange={handleCategoryChange} className="select" required>
                        <option value="" className="categoryVal">Select a category</option>
                        <option value="Entrees" className="option">Entrees</option>
                        <option value="Side" className="option">Side</option>
                        <option value="Drink" className="option">Drink</option>
                        <option value="Chips" className="option">Chips</option>
                        <option value="Desert" className="option">Desert</option>
                    </select>
                </div>
                <label htmlFor="price">Price:</label>
                <input type="text" id="price" className="price" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
