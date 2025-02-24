import React from "react";
import { allProducts } from "../../data";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";


const AllProducts = () => {
    return (
        <div>
            <Navbar />
                <Products heading="Products" items={allProducts} />
            <Footer />
        </div>
    );
}

export default AllProducts;