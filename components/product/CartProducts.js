"use client";

import React, { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import useCartStore from "@/store/cartsStore";

const CartProducts = () => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore();
  const allCarts = useCartStore((state) => state.allCarts);
  console.log("🚀 ~ Cart ~ allCarts:", allCarts);

  return (
    <div className="space-y-2">
      {allCarts.map((item) => (
        <div
          key={item.id}
          className="border w-full flex flex-wrap p-2 rounded gap-2"
        >
          <div className="flex justify-between gap-1 w-full">
            <div className="w-9/12">
              <p className="text-[14px] overflow-hidden overflow-ellipsis">
                {item.title}
              </p>
            </div>
            <div className="border w-3/12 h-8 rounded flex items-center justify-between font-medium">
              <button
                className={`${
                  item.quantity === 1 && "text-gray-400"
                } text-lg px-2 cursor-pointer`}
                onClick={() => item.quantity !== 1 && decreaseQuantity(item.id)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <span
                className="text-lg px-2 cursor-pointer"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div>
              ${item.price} x {item.quantity}
            </div>
            <div className="flex items-center gap-5">
              <span>$ {(item.price * item.quantity).toFixed(2)}</span>
              <AiTwotoneDelete
                className="text-xl cursor-pointer"
                onClick={() => removeFromCart(item.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
