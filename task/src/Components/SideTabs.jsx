import { LuTextQuote } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { MdOutlineChat } from "react-icons/md";
import { RiMenuSearchLine } from "react-icons/ri";
import { useContext } from "react";
import { SidebarContext } from "../Context/SidebarContext";

const SideTabs = () => {
  const { setSidebarOpen, sidebarOpen } = useContext(SidebarContext);

  const buttons = [
    { icon: <LuTextQuote size={20} />, label: "Summrise" },
    { icon: <CgNotes size={20} />, label: "Elaborate" },
    { icon: <RiMenuSearchLine size={20} />, label: "Research" },
    { icon: <MdOutlineChat size={20} />, label: "Chat with PDF" },
  ];

  const handleBtns = (label) => {
    if (label === "Research") {
      setSidebarOpen(!sidebarOpen);
    }
  };

  return (
    <div className="w-24 bg-yellow-400 h-[50%] fixed top-1/2 right-0 transform -translate-y-1/2 z-10 flex flex-col justify-between py-4  rounded px-3 items-center text-center">
      {buttons.map((button) => (
        <div
          key={button.label}
          className="flex flex-col gap-1 items-center justify-center font-semibold text-gray-800 hover:scale-105 cursor-pointer"
          onClick={() => handleBtns(button.label)}
        >
          {button.icon}
          <p>{button.label}</p>
        </div>
      ))}
    </div>
  );
};

export default SideTabs;
