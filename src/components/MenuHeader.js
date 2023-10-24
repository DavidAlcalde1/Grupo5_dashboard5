import React from 'react';
import './styles/MenuHeaderStyles.css';



function MenuHeader() {
    return (
        <div>
        <div className="main-header-top-bar">
            <div>
                <img
                    className="logo"
                    src="/images/logo-trend-boutique.svg"
                    alt="Logo Trend Boutique"
                    style={{ width: '150px', height: '100px' }}
                />
            </div>
            <div className="search-bar">
                <button className="search-button" type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <input
                    className="search-products"
                    type="text"
                    placeholder="Encontrar Productos"
                />
            </div>
        </div>
        
        <nav className="navigation-bar">
            <ul className="left-navbar">
                <li className="home"><a href="/">Home</a></li>
                <li className="car"><a href="/detalle">Detalle</a></li>
                <li className="login"><a href="/login">Login</a></li>
                <li className="register"><a href="/registro">Regístrate</a></li>
                <li className="car">
                    <a href="/carrito"><i href="../../public/images/carritodecompras.png" className="fas fa-cart-shopping"></i></a>
                </li>
            </ul>
        </nav>
        </div>
    );
}

export default MenuHeader;



        // <div>
        //     <div>
        //         <div>
        //             <img
        //                 src="/images/logo-trend-boutique.svg"
        //                 alt="Logo Trend Boutique"
        //             />
        //         </div>
        //         <div>
        //             <button>
        //                 <i></i>
        //             </button>
        //             <input
        //                 class="search-products"
        //                 type="text"
        //                 placeholder="Encontrar Productos"
        //             />
        //         </div>
        //     </div>

        //     <nav>
        //         <ul>
        //             <li class="home"><a href="/">Home</a></li>
        //             <li class="car"><a href="/detalle">Detalle</a></li>
        //             <li class="login"><a href="/login">Login</a></li>
        //             <li class="register"><a href="/registro">Regístrate</a></li>
        //             <li class="car">
        //                 <a href="/carrito"><i class="fas fa-cart-shopping"></i></a>
        //             </li>
        //         </ul>
        //     </nav>
        // </div>