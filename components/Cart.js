"use client";

import React from "react";
import SidebarModal from "./SidebarModal";
import { IoCloseSharp } from "react-icons/io5";
import CartProducts from "./product/CartProducts";
import useCartStore from "@/store/cartsStore";

const Cart = ({ className }) => {
  const allCarts = useCartStore((state) => state.allCarts);
  const totalAmount = allCarts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className={className}>
      <div className="flex flex-row items-center justify-between gap-3 h-10">
        <button className="xl:w-1/2 bg-blue-100 border-gray-400 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border rounded shadow">
          Customer
        </button>
        <SidebarModal
          buttonText={"+ New Customer"}
          buttonClass={
            "bg-blue-500 border-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 border rounded shadow"
          }
          modalTitle={"Add New Customer"}
          position={"justify-end"}
          footer={true}
        />
      </div>
      <div className="relative flex-auto h-[calc(100vh-260px)] overflow-y-auto">
        <CartProducts />
      </div>
      <div className="flex flex-row items-center justify-between gap-3 h-10 bg-slate-600 rounded">
        <p className="text-white  py-2 px-4">
          <span className="font-semibold">Total</span>{" "}
          <span className="text-xs">({allCarts.length} Products)</span>
        </p>
        <p className="text-white font-semibold py-2 px-4">
          $ {totalAmount.toFixed(2)}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between gap-3 h-10">
        <button
          className="w-full uppercase bg-blue-500 border-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 border rounded shadow"
          type="button"
        >
          Place Order
        </button>
        {/* <button
          className="uppercase bg-red-500 border-red-400 hover:bg-red-600 text-white font-semibold py-2 px-4 border rounded shadow"
          type="button"
        >
          <IoCloseSharp className="text-2xl cursor-pointer" />
        </button> */}
      </div>
    </div>
  );
};

export default Cart;
