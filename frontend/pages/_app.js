import NavBar from '../components/NavBar';
import '../styles/globals.css';
import {useState, useEffect} from 'react';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {}, [])
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
  }
  const clearCart  = (item) => {
    setCart([]);
  }
  const [reloadKey, setReloadKey] = useState(1);
  return( 
    <>
    <NavBar key={reloadKey} cart={cart}/>
     <Component removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart} {...pageProps} />
     <Footer />
    </>
  )
}

export default MyApp
