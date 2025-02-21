import React from "react";
import Products from "./Products";
import { newArrivals } from "../../data";


const NewArrivals = () => {
    return (
        <Products items={newArrivals} heading="New Arrivals" />
    );
}

export default NewArrivals;