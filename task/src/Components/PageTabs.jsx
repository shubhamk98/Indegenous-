import { useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { FaParagraph } from "react-icons/fa";
import { LuTextQuote } from "react-icons/lu";
import { HiTranslate } from "react-icons/hi";
import { useContext } from "react";
import { SidebarContext } from "../Context/SidebarContext";
import DropDown from "./DropDown";
import { ApiContext } from "../Context/ContentContext";

const PageTabs = () => {
  const { sidebarOpen } = useContext(SidebarContext);
  const { apiData } = useContext(ApiContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    if (apiData) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const tabs = [
    { label: "Paraphrase", icon: <FaParagraph />, id: 1 },
    { label: "Summarize", icon: <LuTextQuote />, id: 2 },
    { label: "Translate", icon: <HiTranslate />, id: 3 },
    { label: "Cite", icon: <FaBookOpen />, id: 4 },
  ];

  return (
    <div
      className={`w-[50%] bg-yellow-400 h-14 rounded-full flex flex-row gap-6 justify-center items-center fixed bottom-8 left-1/2 transform -translate-x-1/2 font-semibold shadow text-gray-800 ${
        sidebarOpen ? "left-[28rem]" : ""
      }`}
    >
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="flex flex-row items-center gap-2 hover:scale-105 cursor-pointer"
          onClick={tab.label === "Cite" ? toggleDropdown : undefined}
        >
          <div>{tab.icon}</div>
          <p>{tab.label}</p>
        </div>
      ))}
      {isDropdownOpen && (
        <div>
          <DropDown />
        </div>
      )}
    </div>
  );
};

export default PageTabs;
