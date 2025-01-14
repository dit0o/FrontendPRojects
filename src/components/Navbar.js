import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <>
            <header className="Home-content">

                <div className="container-box">
                    <button className="color" onClick={() => navigate('/login')}>Sign in / Guest</button>
                    <button className="color" onClick={() => navigate('/signup')}>Create Account</button>
                </div>

            </header>
            <nav className="nav-bar">
                <div className="box-one">
                    <div className="box-two">
                        <a className="box-three" href="/">C</a>
                    </div>
                    <div className="box-four">
                        <ul className="unorder-list">
                            <Link to={"/"}><li>Home</li></Link>
                            <Link to={"/about"}><li>About</li></Link>
                            <Link to={"/products"}><li>Product</li></Link>
                            <Link to={"/cart"}><li>Cart</li></Link>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <label className="swap swap-rotate">
                            <input type="checkbox" aria-label="Toggle theme" />
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 16 16"
                                className="swap-on h-4 w-4"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                            </svg>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 16 16"
                                className="swap-off h-4 w-4"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                            </svg>
                        </label>
                        <a className="btn btn-ghost btn-circle btn-md ml-4" href="/cart">
                            <div className="indicator">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 16 16"
                                    className="h-6 w-6"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                <span className="badge badge-sm badge-primary indicator-item">0</span>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};
