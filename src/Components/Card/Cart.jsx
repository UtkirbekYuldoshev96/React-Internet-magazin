import React from "react";

function Cart() {
  return (
    <>
      <div className="card">
        <div className="foverite">
          <img src="/public/img/unliked.svg" alt="Likes" />
        </div>
        <img
          width={133}
          height={112}
          src="/public/img/sneakers/1.jpg"
          alt="1"
        />
        <p>Lorem, ipsum dolor sit amet consectetur.</p>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>цена:</span>
            <b>12 999 руб</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/public/img/plus.svg" alt="Plus" />
          </button>
        </div>
      </div>

      <div className="card">
        <img
          width={133}
          height={112}
          src="/public/img/sneakers/2.jpg"
          alt="1"
        />
        <p>Lorem, ipsum dolor sit amet consectetur.</p>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>цена:</span>
            <b>12 999 руб</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/public/img/plus.svg" alt="Plus" />
          </button>
        </div>
      </div>
      {/* card end */}
      <div className="card">
        <img
          width={133}
          height={112}
          src="/public/img/sneakers/3.jpg"
          alt="1"
        />
        <p>Lorem, ipsum dolor sit amet consectetur.</p>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>цена:</span>
            <b>12 999 руб</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/public/img/plus.svg" alt="Plus" />
          </button>
        </div>
      </div>
      {/* card end */}
      <div className="card">
        <img
          width={133}
          height={112}
          src="/public/img/sneakers/4.jpg"
          alt="1"
        />
        <p>Lorem, ipsum dolor sit amet consectetur.</p>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>цена:</span>
            <b>12 999 руб</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/public/img/plus.svg" alt="Plus" />
          </button>
        </div>
      </div>
      {/* card end */}
    </>
  );
}

export default Cart;
