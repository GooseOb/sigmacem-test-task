import type { Product } from "../types";
import { ProductCard } from "./ProductCard";

export function NamedProductList({
  products,
  title,
}: {
  products: Product[];
  title: string;
}) {
  return (
    <>
      <h2 className="text-[1.375rem] font-bold mt-5 mb-3">{title}</h2>
      <div className="flex gap-3 flex-wrap">
        {products.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </div>
    </>
  );
}
