import Cart from "./Components/Card/Cart";
import Drawer from "./Components/Drawwer/Drawer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <div className="wrapper clear">
        <Drawer/>
        {/* header start */}
          <Header/>
        {/* header end */}

        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>Всё кроссовки</h1>
            <div className="search-block d-flex">
              <img src="/public/img/search.svg" alt="Search" />
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>

          <div className="d-flex">
               <Cart/>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
