import React,{useContext} from "react";
import "./modal.css";
import { Menu_Context } from "../Context/MenuContext";


function Modal({ setOpenModal }) {
  const {checkout} = useContext(Menu_Context);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Thanks for Ordering Food</h1>
        </div>
        <div className="body">
          <p>Your Food Is Getting Ready And Payment is Recived</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              // setOpenModal(false);
              // checkout()
              window.location='/'

            }}
            id="cancelBtn"
          >
            Ok
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Modal;