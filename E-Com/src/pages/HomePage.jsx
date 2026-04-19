import axios from 'axios'
import { useEffect, useState } from 'react'
import './header.css'
import './HomePage.css'
import { Product } from './product'



export function HomePage({cart,loadcart}) {



    const [products, setProducts] = useState([])
    

    useEffect(() => {
        const  getHomeData= async ()=>{
                const response=await axios.get('http://localhost:3000/api/products');
                setProducts(response.data);
        }
        getHomeData();
    }, []);
    let totalQuantity = 0;
    cart.forEach((cartItem) => {
        totalQuantity = cartItem.quantity + totalQuantity;
    })


    return (
        <>
            <title>HomePage</title>
            <div className="header">
                <div className="left-section">
                    <a href="/" className="header-link">
                        <img className="logo"
                            src="images/logo-white.png" />
                        <img className="mobile-logo"
                            src="images/mobile-logo-white.png" />
                    </a>
                </div>

                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search" />

                    <button className="search-button">
                        <img className="search-icon" src="images/icons/search-icon.png" />
                    </button>
                </div>

                <div className="right-section">
                    <a className="orders-link header-link" href="/orders">

                        <span className="orders-text">Orders</span>
                    </a>

                    <a className="cart-link header-link" href="/checkout">
                        <img className="cart-icon" src="images/icons/cart-icon.png" />
                        <div className="cart-quantity">{totalQuantity}</div>
                        <div className="cart-text">Cart</div>
                    </a>
                </div>
            </div>

            <div className="home-page">
                <div className="products-grid">
                    {products.map((product) => {
                        return (
                            <Product key={product.id} product={product} loadcart={loadcart} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}