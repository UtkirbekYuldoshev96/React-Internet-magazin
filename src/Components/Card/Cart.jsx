import React from "react";
import "./Cart.moduls.scss";

function Cart(props) {
  
  return (
    <>
      <div className="card">
        <div className="foverite">
          <img src="/public/img/unliked.svg" alt="Likes" />
        </div>
        <img
          width={133}
          height={112}
          src={props.imagUrl}
          alt="1"
        />
        <p>{props.title}</p>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>цена:</span>
            <b>{props.price} руб</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/public/img/plus.svg" alt="Plus" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
