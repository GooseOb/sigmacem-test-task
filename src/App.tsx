import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import type { Product } from "./types";
import { Search } from "./components/Search";
import { NamedProductList } from "./components/NamedProductList";
import { useDebouncedState } from "./hooks/debounce";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useDebouncedState("", 200);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${searchTerm}&limit=16`)
      .then((res) => res.json())
      .then(({ products }) => {
        setProducts(products);
      });
  }, [searchTerm]);

  return (
    <>
      <Header>
        <Search setValue={setSearchTerm} />
      </Header>
      <main className="py-5 px-4">
        <div className="max-w-[960px] mx-auto px-4">
          <NamedProductList
            products={products.slice(0, 8)}
            title="Featured Products"
          />
          <NamedProductList products={products.slice(8)} title="New Arrivals" />
        </div>
      </main>
    </>
  );
}

export default App;
