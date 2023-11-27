import React from "react";

function Drawer(props) {
  return (
    <>
      <div style={{ display: "none" }} className="overlay ">
        <div className="drawer">
          <h3 className="d-flex justify-between mb-3">
            Корзина
            <img
              className="removeBtn cu-p"
              src="/public/img/btn-remove.svg"
              alt="Remove"
            />
          </h3>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div className="cartItemImg"></div>
              <div className="mr-20">
                <p className="mb-5">Lorem ipsum dolor sit amet lorem.</p>
                <b>12 999 руб</b>
              </div>
              <img
                className="removeBtn"
                src="/public/img/btn-remove.svg"
                alt="Remove"
              />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div className="cartItemImg"></div>
              <div className="mr-20">
                <p className="mb-5">Lorem ipsum dolor sit amet lorem.</p>
                <b>12 999 руб</b>
              </div>
              <img
                className="removeBtn"
                src="/public/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex">
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li className="d-flex">
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформать заказ
              <img src="/public/img/arrow.svg" alt="" />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
