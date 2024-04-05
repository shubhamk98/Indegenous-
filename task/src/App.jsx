import PageTabs from "./Components/PageTabs";
import SideTabs from "./Components/SideTabs";
import SideBar from "./Components/SideBar";
import TextArea from "./Components/TextArea";
import { useContext } from "react";
import { SidebarContext } from "./Context/SidebarContext";

const App = () => {
  const {sidebarOpen} = useContext(SidebarContext);

  return (
    <div>
      <div className="text-xl font-bold w-full h-14 flex justify-start items-center pl-6 shadow-md  bg-yellow-400 text-gray-800">
        Indegenous
      </div>
      <div className="flex h-fit">
        <TextArea />
        <PageTabs />
        
        {sidebarOpen && <SideBar />}
        {!sidebarOpen && <SideTabs />}
      </div>
    </div>
  );
};

export default App;
