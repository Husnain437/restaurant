import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contacts/Contact";
import Products from "./components/Product/Products";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout";
import MenuContextProvider from "./components/Context/MenuContext";
import Authentication from "./components/Authentication/Authentication";
import SignInAuth from "./components/Authentication/SignInAuth/SignInAuth";
import SignUpAuth from "./components/Authentication/SignupAuth/SignUpAuth";
import CreditCardForm from "./components/CardValidation/CreditCardForm";
import Modal from "./components/Modal/modal";


function App() {
  return (
    <MenuContextProvider>
    <BrowserRouter>
      <Layout>
        
        <Routes>
          <Route path="/" exact index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart/>} />
          <Route path="auth" element={<Authentication/>}/>
          <Route  path="login" element={<SignInAuth/>}/>
          <Route path="signup" element={<SignUpAuth/>}/>
          <Route path="cardvalid" element={<CreditCardForm/>} />
          <Route path="modal" element={<Modal/>} />
        </Routes>
       
      </Layout>
    </BrowserRouter>
     </MenuContextProvider>
  );
}

export default App;

