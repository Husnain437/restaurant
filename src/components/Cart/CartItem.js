import React,{useContext} from 'react'
import './cartitem.css'
import { Menu_Context } from '../Context/MenuContext';
const CartItem = (props) => {
    const {id, title, price, imge}= props.data
    const {cartItems, addToCart, removefromCart } = useContext(Menu_Context);
  return (

    <div className='main-cart'>
    <div className='cart-item' >
        <div className='prod-img'>
            <img className='cart-item-img' src={imge} alt='product image' />

        </div>
        <div className='description'>
            <p>{title}</p>
        </div>
        <div className='price'>
            <p>$ {price}</p>
        </div>
        
        <div className='number-handler'>
            <button onClick={()=>removefromCart(id)}>-</button>
            <input className='in-text' value={cartItems[id]} />
            <button onClick={()=>addToCart(id)}>+</button>

        </div>
        <div>
            $ {cartItems[id]*price}
        </div>
        
        
    </div>
    </div>
  )
}

export default CartItem