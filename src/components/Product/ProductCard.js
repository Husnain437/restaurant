import React,{useContext} from "react";
import { Menu_Context } from "../Context/MenuContext";

const ProductCard = (props) => {
 
  const{addToCart, cartItems} = useContext(Menu_Context)
  const cartItemNumber = cartItems[props.id]
  console.log(props.id);
  const user = localStorage.getItem('token')
  const handleClick=()=>{
    if(user){
      addToCart(props.id)
    
    }
    else{
      window.location='/login'
    }
  }
  return (
    <div className="product-card">
      <div className="product-image">
        <img className="product-self" src={props.imge} alt="FoodImage" />
      </div>
      <div className="product-info">
        <h4>{props.title}</h4>
        <h4>$ {props.price}</h4>
        {/* <button onClick={()=>addToCart(props.id)} > */}
        <button onClick={()=>handleClick(props.id)} >
          Order Now{cartItemNumber > 0 && <>({cartItemNumber})</>}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

