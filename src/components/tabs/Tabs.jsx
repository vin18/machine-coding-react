/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  cloneElement,
} from "react";
import "./tabs.css";

const TabsContext = createContext();

function Tabs({ defaultActive = "1", children }) {
  const [activeTab, setActiveTab] = useState(defaultActive);
  const value = { activeTab, setActiveTab };

  useEffect(() => setActiveTab(defaultActive), [defaultActive]);

  return (
    <TabsContext.Provider value={value}>
      <div className="tabs__container">{children}</div>
    </TabsContext.Provider>
  );
}

function TabsHeader({ children }) {
  return <div className="tabs__header">{children}</div>;
}

function Tab({ children, id }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab == id;

  return (
    <div onClick={() => setActiveTab(id)}>
      {cloneElement(children, { className: isActive ? "button-primary" : "" })}
    </div>
  );
}

function TabsContent({ children }) {
  return children;
}

function TabPanel({ children, whenActive }) {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== whenActive) return null;
  return <p className="tabs__tab-content">{children}</p>;
}

export { Tabs, TabsHeader, TabsContent, Tab, TabPanel };
