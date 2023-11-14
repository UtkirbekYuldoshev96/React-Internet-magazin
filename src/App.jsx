function App() {

  return (
    <>
      <div className="wrapper clear">
       
        <div className="overlay">
          <div className="drawer">
            <h3>Корзина</h3>

            <div className="items">
                <div className="cartItem d-flex align-center mb-20">
                  <div className="cartItemImg"></div>
                  <div className="mr-20">
                    <p className="mb-5">Lorem ipsum dolor sit amet lorem.</p>
                    <b>12 999 руб</b>
                  </div>
                  <img className="removeBtn" src="/public/img/btn-remove.svg" alt="Remove"/>
                </div>

                <div className="cartItem d-flex align-center mb-20">
                  <div className="cartItemImg"></div>
                  <div className="mr-20">
                    <p className="mb-5">Lorem ipsum dolor sit amet lorem.</p>
                    <b>12 999 руб</b>
                  </div>
                  <img className="removeBtn" src="/public/img/btn-remove.svg" alt="Remove"/>
                </div>
            </div>


            <ul className="cartTotalBlock">
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
          </div>
        </div>


        <header className="d-flex justify-between align-center p-40">
          <div className="d-flex align-center">
           <img src="/img/logo.png" alt="Logo" width={40} height={40} />
              <div className="headerInfo">
                  <h3 className="text-uppercase">React Sneakers</h3>
                  <p className="opacity-5">Магазин лучших кроссовоки</p>
              </div>
          </div>
          <ul className="d-flex">
            <li className="mr-30">
              <img src="/img/cart.svg" alt="" width={18} height={18} />
              <span>1025 руб</span>
            </li>
            <li>
                <img src="/img/user.svg" alt="User" width={18} height={18} />
            </li>
          </ul>
        </header>

        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>Всё кроссовки</h1>
            <div className="search-block d-flex">
                <img src="/public/img/search.svg" alt="Search" />
                <input type="text" placeholder="Поиск..." />
              </div> 
          </div>

            <div className="d-flex">
            <div className="card">
              <div className="foverite">
                <img src="/public/img/unliked.svg" alt="Likes" />
              </div>
              <img width={133} height={112} src="/public/img/sneakers/1.jpg" alt="1" />
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
              <img width={133} height={112} src="/public/img/sneakers/2.jpg" alt="1" />
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
              <img width={133} height={112} src="/public/img/sneakers/3.jpg" alt="1" />
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
              <img width={133} height={112} src="/public/img/sneakers/4.jpg" alt="1" />
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
            </div>
        </div>
      </div>
    </>
  )
}

export default App