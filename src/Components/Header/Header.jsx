

function Header() {
  return (
    <>
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
    </>
  );
}

export default Header;
