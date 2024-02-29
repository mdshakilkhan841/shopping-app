import { MdSearch } from "react-icons/md";
import ProductCard from "../../components/product/ProductCard";
import Categories from "../../components/product/Categories";
import Cart from "../../components/Cart";

export default function Home() {
  return (
    <main className="sm:grid grid-cols-12 mx-4 gap-4 sm:h-[calc(100vh-48px)]">
      {/* Products Div */}
      <div className="flex flex-col my-4 bg-white lg:col-span-8 col-span-12 rounded p-3 space-y-3">
        <div className="flex flex-row items-center shadow-[rgba(14,30,37,0.12)0px_2px_4px_0px,rgba(14,_30,_37,_0.32)0px_2px_16px_0px] rounded px-3" >
        {/* box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px; */}
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
      <Cart
        className={
          "lg:flex flex-col justify-between hidden bg-white lg:col-span-4 col-span-5 my-4 rounded p-3 space-y-3"
        }
      />
    </main>
  );
}
