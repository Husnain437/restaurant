import React, { createContext,useState } from 'react';
import {productData} from '../Product/productData';
export const Menu_Context = createContext(null);


const getDefualtCart=()=>{
    let cart={}
    for(let i=1; i < productData.length + 1 ; i++ ){
        cart[i]=0;
    }
    return cart;
}
export const MenuContextProvider = (props) => {
    const [cartItems, setCartItem] = useState(getDefualtCart());

     const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo= productData.find((product)=>product.id === Number(item));
                totalAmount+= cartItems[item]* iteminfo.price
            }

        }
        return totalAmount;
     }
    const addToCart=(itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]: prev[itemId]+1}))
        
    }
    
    const removefromCart=(itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]: prev[itemId]-1}))
        
    }

    const checkout = () => {
        setCartItem(getDefualtCart());
        
      };
    
    const contextValue = {cartItems,addToCart,removefromCart, checkout, getTotalCartAmount};
    console.log(cartItems)
  return (

   <Menu_Context.Provider value={contextValue}>{props.children}</Menu_Context.Provider>         
  )
}

export default MenuContextProvider;