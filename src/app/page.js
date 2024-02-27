import { MdSearch } from "react-icons/md";
import ProductCard from "../../components/product/ProductCard";

export default function Home() {
  return (
    <main className="sm:grid grid-cols-12 mx-4 gap-4 h-[calc(100vh-48px)]">
      {/* Products Div */}
      <div className="flex flex-col bg-white lg:col-span-8 col-span-7 my-4 rounded p-3 space-y-3">
        <div className="flex flex-row items-center shadow-md rounded px-3">
          <MdSearch className="text-3xl" />
          <input
            className="p-2 w-full focus:outline-none"
            type="text"
            placeholder="Search Product"
          />
        </div>
        <div className="border rounded p-3 h-[calc(100vh-215px)] sm:h-[calc(100vh-156px)] overflow-auto">
          <ProductCard />
        </div>
      </div>

      {/* Cart Div */}
      <div className="sm:block hidden bg-white lg:col-span-4 col-span-5 my-4 rounded">
        Hello
      </div>
    </main>
  );
}
