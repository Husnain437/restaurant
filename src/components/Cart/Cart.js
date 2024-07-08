import React,{useContext, useState} from 'react'
import './Cart.css';
import { productData } from '../Product/productData';
import { Menu_Context } from '../Context/MenuContext';
import CartItem from './CartItem';
import  {useNavigate} from "react-router-dom";
import Modal from '../Modal/modal';



const Cart = () => {
    const{cartItems, getTotalCartAmount } =useContext(Menu_Context);
    const totalprice = getTotalCartAmount()
    const navigate= useNavigate()
    const [modalOpen, setModalOpen] = useState(false);
   
  return (

    <div className='cart'>
        
        <div>
            <h1 className='cart-heading'>Your Cart Items</h1>
        </div>
        <div className='cart-heading'>
            <h3>Go back and add some items</h3>
        </div>
        <div className='cart-heading'>
            <h2>Feeling Hungery?</h2>
        </div>
        <div className='cart-heading' >
            <h3>We have Alot to eat</h3>
        </div>
        <div className='cartItems'>
                {productData.map((product)=>{
                    if(cartItems[product.id] != 0){
                        return <CartItem data={product} />
                    }
                })}
        </div>
        <div className='checkout'>
            {totalprice > 0 ?(
                <div>
                    <div>
                    <p className='total'> Sub Total: {totalprice} </p>
                </div>
                <div className='btn'>
                    <button className='cart-btn' onClick={()=> navigate('/')}><h3>Continue Shopping</h3></button>
                    {/* <button className='cart-btn'   onClick={() =>{setModalOpen(true);}}> */}
                    <button className='cart-btn'   onClick={() => navigate('/cardvalid') }>
                    <h3>Checkout</h3></button>
                    {modalOpen && <Modal setOpenModal={setModalOpen} />}
                </div>
                </div>
            ):(
                <h1>Your Cart is Empty</h1>
            ) }
                
                
        </div>
                
    </div>
  )
}

export default Cart