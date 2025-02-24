import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../data";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './SingleProduct.css';



const SingleProduct = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const colors = ["red", "purple", "teal", "green", "black"];
    const sizes = ["xs", "s", "m", "l", "xl"];

    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    const { id } = useParams();
    const product = allProducts.find((item) => item.id === parseInt(id));

    const handleCircleClick = (color) => {
        setSelectedColor(color)
    }

    const handleSizeClick = (size) => {
        setSelectedSize(size)
    }

    return (
        <div className="singleProduct-container">
            <Navbar />
            <div className="singleProduct-wrapper">
                <div className="singleProduct-imageSection">
                    <img src={product.img} alt="img" className="singleProduct-image" />
                </div>

                <div className="singleProduct-infoSection">
                    <h2 className="singleProduct-title">{product.title}</h2>
                    <p className="singleProduct-number">{product.price}</p>
                    <h4 className="description-title">Desription</h4>
                    <p className="singleProduct-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Cupiditate aspernatur quo qui minima repellendus voluptatem natus? 
                        Libero reiciendis odio, culpa, expedita obcaecati excepturi distinctio ad tempora possimus, 
                        nihil exercitationem voluptate.
                    </p>

                    <div className="singleProduct-options">
                        <div className="colors-section">
                            <h4>Colors</h4>
                            <div className="colors">
                                {colors.map((color) => {
                                    return (
                                        <div 
                                            key={color} 
                                            className="color-circle" 
                                            style={{backgroundColor: color, outline: selectedColor === color ? `3px solid ${color}` : ""}}
                                            onClick={() => handleCircleClick(color)}
                                        ></div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="sizes-section">
                            <h4>Size</h4>
                            <div className="sizes">
                                {sizes.map((size) => {
                                    return (
                                        <span 
                                            key={size}
                                            style={{border: selectedSize === size ? `1px solid #ccc` : ""}}
                                            onClick={() => handleSizeClick(size)} 
                                        >{size}</span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="addToCart">
                        <button onClick={() => handleAddToCart(product)}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default SingleProduct;