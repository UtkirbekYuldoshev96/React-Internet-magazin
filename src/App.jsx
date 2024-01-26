import { useEffect, useState } from "react";
import Cart from "./Components/Card/Cart";
import Drawer from "./Components/Drawwer/Drawer";
import Header from "./Components/Header/Header";

function App() {
  const [arrItems, setArrItems] = useState([]);
  const [cardItems, setCardItems] = useState([]);
  const [cartOpen, setCartOpene] = useState(false);

  useEffect(() => {
    fetch("https://628f1fb10e69410599d594c8.mockapi.io/items")
      .then((res) => {
        return res.json();
      })

      .then((json) => {
        setArrItems(json);
      });
  }, []);


  const onAddToCard = (obj) => {
    setCardItems(prev => [...cardItems, obj]);
  }

  return (
    <>
      <div className="wrapper clear">
        {cartOpen && <Drawer arrItems={cardItems} onClosCart={() => setCartOpene(false)} />}
        <Header onClickCart={() => setCartOpene(true)} />

        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>Всё кроссовки</h1>
            <div className="search-block d-flex">
              <img src="/public/img/search.svg" alt="Search" />
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>

          <div className="d-flex flex-wrap">
            {arrItems.map((item) => (
              <Cart
                title={item.name}
                price={item.price}
                imagUrl={item.imagUrl}
                onPlus={(obj) => onAddToCard(item)}
                onFeverit={() => console.log(`zo'r`)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
