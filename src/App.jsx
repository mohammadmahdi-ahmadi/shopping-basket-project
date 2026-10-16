import ProductList from "./ProductList";
import Basket from "./Basket";
import { useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);
  function handleAdd(product) {
    setBasket([...basket, product]);
  }

  function handleDelete(id) {
    setBasket(
      basket.filter((item) => {
        return item.id !== id;
      }),
    );
  }

  const totalItem = basket.reduce((total, item) => {
    return total += item.price
  },0)

  return (
    <div className="app">
      <header>
        <h1>Shopping Basket</h1>
        <p>Simple React Shopping Application</p>
      </header>

      <main className="shop-container">
        <ProductList handleAdd={handleAdd} />
        <Basket basket={basket} handleDelete={handleDelete} total={totalItem} />
      </main>
    </div>
  );
}

export default App;
