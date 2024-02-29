"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import SidebarModal from "./SidebarModal";
import { HiMiniShoppingCart } from "react-icons/hi2";
import useCartStore from "@/store/cartsStore";
import Cart from "./Cart";

export default function Navbar() {
  const allCarts = useCartStore((state) => state.allCarts);

  return (
    <div className="bg-gray-800 h-12 p-2 px-4 flex items-center justify-between gap-5">
      {/* Sidebar Menu */}
      <SidebarModal
        buttonText={<GiHamburgerMenu className="text-xl" />}
        buttonClass={
          "bg-blue-500 border-blue-400 hover:bg-blue-600 text-white font-semibold p-1.5 border rounded shadow"
        }
        modalTitle={"Go Billing"}
      >
        <div className="">Hi</div>
      </SidebarModal>

      {/* Sidebar Cart  */}
      <SidebarModal
        buttonText={
          <div className="lg:hidden block border-2 p-1.5 rounded-full mr-5 relative cursor-pointer">
            <HiMiniShoppingCart className="text-yellow-400 text-xl" />
            <div className="absolute -top-1 -right-2.5 text-white bg-red-600 rounded-full flex justify-center items-center">
              <p className="px-1.5 text-xs text-center">
                {allCarts.length !== 0 && allCarts.length}
              </p>
            </div>
          </div>
        }
        modalTitle={"Your Cart"}
        position={"justify-end"}
      >
        <Cart className={"justify-between bg-white p-3 rounded space-y-3 h-full"}/>
      </SidebarModal>
    </div>
  );
}
