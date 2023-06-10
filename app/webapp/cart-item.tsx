import { storeProduct } from "@/types/products";

export default function CartItem(item: storeProduct) {
  return (
    <div
      key={item.id}
      className=" h-10 rounded-md border flex items-center p-2 justify-between"
    >
      <div className="flex space-x-2">
        <p>{item.quantity}x</p>
        <p>{item.name}</p>
      </div>
      <p>${item.price}</p>
    </div>
  );
}
