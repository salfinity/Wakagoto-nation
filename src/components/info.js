"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "/src/components/ui/currency";

import { Button } from "/src/components/ui/button";
import useCart from "/hooks/use-cart";

const Info = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {data.name}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-green-500 dark:text-green-300">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4 text-neutral-400 dark:text-white/40" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black dark:text-white">Size:</h3>
          <div className="text-black dark:text-white/40">
            {data?.size?.value}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black dark:text-white">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="flex items-center mt-4 gap-x-4">
        <h3 className="font-semibold text-black dark:text-white">Phone:</h3>
        <div className="text-black dark:text-white/40">
          {data?.phone?.value}
        </div>
      </div>
      <div className="mt-10 flex items-center  gap-x-3 px-3 ">
        <Button
          onClick={onAddToCart}
          className="flex bg-slate-200 dark:bg-black/25 items-center gap-x-2 border-2 rounded-full border-black dark:border-white text-black dark:text-white/40"
        >
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
