import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { allProducts } from "../../data";
import './Navbar.css';



const Navbar = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const cartItems = useSelector((state) => state.cartReducer.cartItems);
    const totalItems = cartItems.length;

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchText(value);

        const filtered = allProducts.filter((product) => product.title.toLowerCase().includes(value.toLowerCase()));
        setFilteredProducts(filtered);
    };

    return (
        <nav className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-left">
                    <span className="navbar-language">EN</span>
                    <div className="navbar-searchContainer">
                        <input
                            type="text"
                            placeholder="Search"
                            className="navbar-input"
                            value={searchText}
                            onChange={handleSearchChange}
                        />
                        <IoSearch className='icon' />

                        {searchText && filteredProducts.length > 0 && (
                            <div className="search-dropdown">
                                {filteredProducts.map((product) => (
                                    <Link key={product.id} to={`/product/${product.id}`} className="search-item">
                                        <img src={product.img} alt={product.title} className="search-item-img" />
                                        <div>
                                            <p>{product.title}</p>
                                            <p>${product.price}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <Link to="/">
                    <div className="navbar-center">
                        <h1 className="navbar-logo">Unnamed Shop<span>.</span></h1>
                    </div>
                </Link>

                <div className="navbar-right">
                    <Link to="/register">
                        <div className="navbar-menuItem">Register</div>
                    </Link>
                    <Link to="/login">
                        <div className="navbar-menuItem">Login</div>
                    </Link>
                    <Link to="/cart">
                        <div className="navbar-menuItem">
                            <MdOutlineShoppingCart className='icon' />
                            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                        </div>
                    </Link>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;