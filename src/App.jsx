import {
  Tab,
  TabPanel,
  Tabs,
  TabsContent,
  TabsHeader,
} from "./components/tabs/Tabs";

function App() {
  return (
    <div className="app">
      <Tabs>
        <TabsHeader>
          <Tab id="1">
            <button>Tab 1</button>
          </Tab>
          <Tab id="2">
            <button>Tab 2</button>
          </Tab>
          <Tab id="3">
            <button>Tab 3</button>
          </Tab>
        </TabsHeader>
        <TabsContent>
          <TabPanel whenActive="1">
            <div>
              Tab 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Harum corporis, maiores optio voluptates dolore repudiandae eius
              vitae eaque deleniti, iste deserunt modi placeat dolor recusandae,
              molestias pariatur delectus numquam quo.
            </div>
          </TabPanel>
          <TabPanel whenActive="2">
            <div>
              Tab 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Harum corporis, maiores optio voluptates dolore repudiandae eius
              vitae eaque deleniti, iste deserunt modi placeat dolor recusandae,
              molestias pariatur delectus numquam quo.
            </div>
          </TabPanel>
          <TabPanel whenActive="3">
            <div>
              Tab 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Harum corporis, maiores optio voluptates dolore repudiandae eius
              vitae eaque deleniti, iste deserunt modi placeat dolor recusandae,
              molestias pariatur delectus numquam quo.
            </div>
          </TabPanel>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
