import NavBar from '../components/NavBar';
import '../styles/globals.css';
import {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const addToCart  = (item, qty, price) => {
    const newCart = cart
    for (let index = 0; index < qty; index++) {
      newCart.push([item, price])
    }
    setCart(newCart);
    setReloadKey(Math.random())
  }
  const removeFromCart  = (item) => {
    let newCart = cart;
    let index = newCart.indexOf(cart);
    newCart.splice(index);
    setCart(newCart);
    setSubtotal(0);
  }
  const clearCart  = (item) => {
    setCart([]);
  }
  const [reloadKey, setReloadKey] = useState(1);
  return( 
    <>
    {loading && 
    <Spinner />}
    <NavBar key={reloadKey} cart={cart}/>
     <Component setLoading={setLoading} setCart={setCart} cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart} {...pageProps} />
     <Footer />
    </>
  )
}

export default MyApp
