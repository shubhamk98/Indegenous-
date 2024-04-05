/* eslint-disable react/prop-types */
import  { createContext,  useState } from "react";

export const SidebarContext = createContext(null);


export const SidebarProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const value = {
    selectedTab,
    setSelectedTab,
    sidebarOpen,
    setSidebarOpen,
  };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};
