import React from "react";

export const Home = () => {
    return (

        <section className="section-content">
            <div className="section1">
                <h1>We are changing the way people shop</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus
                    asperiores aut obcaecati perferendis porro nobis.
                </p>
                <button id="btn">OUR PRODUCTS</button>
            </div>

            <div className="pt-24">
                <div className="section2">
                    <h2>Featured Products</h2>
                </div>

                <div className="section3">
                    <div className="section4">
                        <a href="/">
                            <img
                                src="https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt="Avant-grade lamp"
                                width="200px"
                                height="200px"
                            />
                            <div className="image1">
                                <h2>Avant-grade Lamp</h2>
                                <span id="prize1">$179.99</span>
                            </div>
                        </a>
                    </div>

                    <div className="section5">
                        <a href="/">
                            <img
                                src="https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Coffee table"
                                width="200px"
                                height="200px"
                            />
                            <div className="image2">
                                <h2>Coffee Table</h2>
                                <span id="prize2">$179.99</span>
                            </div>
                        </a>
                    </div>

                    <div className="section6">
                        <a href="/">
                            <img
                                src="https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt="Comfy bed"
                                width="200px"
                                height="200px"
                            />
                            <div className="image3">
                                <h2>Comfy Bed</h2>
                                <span id="prize3">$180.00</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
};
