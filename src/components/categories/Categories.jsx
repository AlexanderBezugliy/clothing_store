import React from "react";
import './Categories.css';
import { categories } from "../../data";


const Categories = () => {
    return (
        <div className="categories-container">
            {categories.map((item) => {
                return (
                    <div key={item.id} className="category-container">
                        <img src={item.img} alt="img" />
                        <div className="category-info">
                            <h1>{item.title}</h1>
                            <button>Shop Now</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Categories;