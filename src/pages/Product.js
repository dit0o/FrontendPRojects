import React from "react";
import { useNavigate } from "react-router-dom";

export const Product = () => {
    const navigate = useNavigate();

    const handleReset = (event) => {
        event.preventDefault();
        navigate("/products");
    };

    return (
        <section className="form-container">
            <form method="get" className="form-grid">

                <div className="form-item">
                    <label htmlFor="search">Search Product</label>
                    <input type="text" name="search" id="search" placeholder="Search product" />
                </div>


                <div className="form-item">
                    <label htmlFor="category">Select Category</label>
                    <select name="category" id="category">
                        <option value="all">All</option>
                        <option value="Table">Table</option>
                        <option value="Chairs">Chairs</option>
                        <option value="Kids">Kids</option>
                        <option value="Sofas">Sofas</option>
                        <option value="Beds">Beds</option>
                    </select>
                </div>


                <div className="form-item">
                    <label htmlFor="company">Company</label>
                    <select name="company" id="company">
                        <option value="all">All</option>
                        <option value="Modenza">Modenza</option>
                        <option value="Luxora">Luxora</option>
                        <option value="Artifix">Artifix</option>
                        <option value="Comfora">Comfora</option>
                        <option value="Homested">Homested</option>
                    </select>
                </div>


                <div className="form-item">
                    <label htmlFor="order">Sort By</label>
                    <select name="order" id="order">
                        <option value="a-z">a-z</option>
                        <option value="z-a">z-a</option>
                        <option value="high">High</option>
                        <option value="low">Low</option>
                    </select>
                </div>


                <div className="form-item form-price">
                    <label htmlFor="price">
                        <span>Select Price</span>
                        <span>$1,000.00</span>
                    </label>
                    <input type="range" name="price" min="0" max="1000" step="100" />
                    <span>0</span>
                    <span>Max: $1,000</span>
                </div>


                <div className="form-item form-shipping">
                    <label htmlFor="shipping">Free Shipping</label>
                    <input type="checkbox" name="shipping" id="shipping" />
                </div>


                <div className="form-buttons">
                    <button type="submit" className="search-btn">
                        Search
                    </button>
                    <button onClick={handleReset} className="reset-btn">
                        Reset
                    </button>
                </div>
            </form>
        </section>
    );
};
