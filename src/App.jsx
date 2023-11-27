import Cart from "./Components/Card/Cart";
import Drawer from "./Components/Drawwer/Drawer";
import Header from "./Components/Header/Header";

const arr = [
            {
              name: "Мужские Кроссовки Nike Blazer Mid Suede",
              price: 12999,
              imagUrl: "/public/img/sneakers/1.jpg",
            },
            {
              name: "Мужские Кроссовки Nike Air Max 270",
              price: 12999,
              imagUrl: "/public/img/sneakers/2.jpg",
            },
            {
              name: "Мужские Кроссовки Nike Blazer Mid Suede",
              price: 8499,
              imagUrl: "/public/img/sneakers/3.jpg",
            },
            {
              name: "Кроссовки Puma X Aka Boku Future Rider",
              price: 8499,
              imagUrl: "/public/img/sneakers/4.jpg",
            },
            {
              name: "Мужские Кроссовки Under Armour Curry 8",
              price: 15199,
              imagUrl: "/public/img/sneakers/5.jpg",
            },
];

function App() {
  return (
    <>
      <div className="wrapper clear">
        <Drawer />
        <Header />

        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>Всё кроссовки</h1>
            <div className="search-block d-flex">
              <img src="/public/img/search.svg" alt="Search" />
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>

          <div className="d-flex">
            {arr.map((item) => (
              <Cart 
                  title={item.name}
                  price={item.price}
                  imagUrl={item.imagUrl}  
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
