"use client";
import { MdSearch } from "react-icons/md";
import ProductCard from "../../components/product/ProductCard";
import Categories from "../../components/product/Categories";
import { IoCloseSharp } from "react-icons/io5";
import SidebarModal from "../../components/SidebarModal";
import Cart from "../../components/product/Cart";
import useCartStore from "@/store/cartsStore";

export default function Home() {
  const allCarts = useCartStore((state) => state.allCarts);
  const totalAmount = allCarts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <main className="sm:grid grid-cols-12 mx-4 gap-4 sm:h-[calc(100vh-48px)]">
      {/* Products Div */}
      <div className="flex flex-col my-4 bg-white lg:col-span-8 col-span-12 rounded p-3 space-y-3">
        <div className="flex flex-row items-center shadow-md rounded px-3">
          <MdSearch className="text-3xl" />
          <input
            className="p-2 w-full focus:outline-none"
            type="text"
            placeholder="Search Product"
          />
        </div>
        <Categories />
        <div className="border rounded p-3 xl:h-[calc(100vh-210px)] h-[calc(100vh-264px)] overflow-auto">
          <ProductCard />
        </div>
      </div>

      {/* Cart Div */}
      <div className="lg:flex flex-col justify-between hidden bg-white lg:col-span-4 col-span-5 my-4 rounded p-3 space-y-3">
        <div className="flex flex-row items-center justify-between gap-3 h-10">
          <button className="w-1/2 bg-blue-100 border-gray-400 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border rounded shadow">
            Customer
          </button>
          <SidebarModal
            buttonText={"+ New Customer"}
            modalTitle={"Add New Customer"}
            position={"justify-end"}
            footer={true}
          />
        </div>
        <div className="relative flex-auto h-[calc(100vh-260px)] overflow-y-auto">
          <Cart />
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
            className="w-1/2 uppercase bg-blue-500 border-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 border rounded shadow"
            type="button"
          >
            Place Order
          </button>
          <button
            className="uppercase bg-red-500 border-red-400 hover:bg-red-600 text-white font-semibold py-2 px-4 border rounded shadow"
            type="button"
          >
            <IoCloseSharp className="text-2xl cursor-pointer" />
          </button>
        </div>
      </div>
    </main>
  );
}
