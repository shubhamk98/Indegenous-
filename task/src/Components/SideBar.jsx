import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Card from "./Card";
import { useContext } from "react";
import { SidebarContext } from "../Context/SidebarContext";
import { ApiContext } from "../Context/ContentContext";

const SideBar = () => {
  const { setSidebarOpen } = useContext(SidebarContext);
  const { keyword, setKeyword, handleSearch } = useContext(ApiContext);


  const handleBtn = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="w-[50%] shadow border-2 ">
      <div className="flex flex-row justify-between px-6 mt-4">
        <button className="px-2 py-2 bg-yellow-400 rounded" onClick={handleBtn}>
          <IoClose size={20} />
        </button>
        <div className=" flex gap-1 items-center font-semibold">
          <p>Academic</p>
          <input type="checkbox" size={10} />
        </div>
      </div>
      <div className="flex flex-row mt-6 items-center justify-center gap-4">
        <input
          type="text"
          className=" w-[76%] h-10 rounded border-2 border-yellow-400 px-2 outline-none"
          placeholder="Type to search..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          className="px-4 py-3 bg-yellow-400 rounded"
          onClick={handleSearch}
        >
          <IoSearch />
        </button>
      </div>
      <Card />
    </div>
  );
};

export default SideBar;
