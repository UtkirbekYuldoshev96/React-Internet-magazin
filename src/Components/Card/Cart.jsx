import React, { useEffect, useState } from "react";
import "./Cart.moduls.scss";

function Cart({ imagUrl, title, price, onFeverit, onPlus }) {
  const [isAaded, setIsAdaded] = useState(false);

  const onClickPlus = () => {
    onPlus({ imagUrl, title, price });
    setIsAdaded(!isAaded);
  };

  // useEffect
  // useEffect(() => {
  //   console.log('useEffect ishladi!');
  // }, [isAaded]);

  return (
    <>
      <div className="card">
        <div className="foverite" onClick={onFeverit}>
          <img src="/public/img/unliked.svg" alt="Likes" />
        </div>
        <img width={133} height={112} src={imagUrl} alt="1" />
        <p>{title}</p>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>цена:</span>
            <b>{price} руб</b>
          </div>
          <img
            className="plus"
            onClick={onClickPlus}
            src={
              isAaded
                ? "/public/img/btn-checked.svg"
                : "/public/img/btn-plus.svg"
            }
            alt="Plus"
          />

          {/* <button className="button" onClick={props.Click}>
            <img width={11} height={11} src="/public/img/plus.svg" alt="Plus" />
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Cart;
