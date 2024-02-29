import { GiHamburgerMenu } from "react-icons/gi";
import SidebarModal from "./SidebarModal";

export default function Navbar() {
  return (
    <div className="bg-gray-800 h-12 p-2 px-4 flex items-center gap-5">
      <SidebarModal
        buttonText={<GiHamburgerMenu className="text-xl" />}
        modalTitle={"Go Billing"}
      >
        <div className="">Hi</div>
      </SidebarModal>
      <p className="text-white">REPLIQ</p>
    </div>
  );
}
