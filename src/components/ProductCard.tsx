import type { Product } from "../types";

export function ProductCard({ title, price, images }: Product) {
  return (
    <div className="w-[176px]">
      <img
        src={images[0]}
        alt=""
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="mt-2">{title}</h2>
      <p className="text-primary text-sm mt-1">${price}</p>
    </div>
  );
}
