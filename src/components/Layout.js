import React from "react";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import './Layout.css'


const Layout = ({ children }) => {
  return (
    <>
      <header>
        <section class="cont">
          <Nav />
        </section>
      </header>

      <main className="container">{children}</main>
      <div className="footer-main">
      <Footer />
      </div>
      
    </>
  );
};

export default Layout;

