import {
  Tab,
  TabPanel,
  Tabs,
  TabsContent,
  TabsHeader,
} from "../components/tabs";

function TabsPage() {
  return (
    <div className="flex justify-center items-center mt-32">
      <Tabs>
        <TabsHeader>
          <Tab id="1">
            <button>Tab 1</button>
          </Tab>
          <Tab id="2">
            <button>Tab 1</button>
          </Tab>
          <Tab id="3">
            <button>Tab 1</button>
          </Tab>
        </TabsHeader>

        <TabsContent>
          <TabPanel whenActive="1">
            Tab 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Nesciunt eius tempore cupiditate debitis nemo voluptatum at? Libero,
            sint impedit? Delectus commodi, ex illo cumque explicabo voluptates
            veritatis aspernatur ipsam doloremque.
          </TabPanel>

          <TabPanel whenActive="2">
            Tab 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Nesciunt eius tempore cupiditate debitis nemo voluptatum at? Libero,
            sint impedit? Delectus commodi, ex illo cumque explicabo voluptates
            veritatis aspernatur ipsam doloremque.
          </TabPanel>

          <TabPanel whenActive="3">
            Tab 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Nesciunt eius tempore cupiditate debitis nemo voluptatum at? Libero,
            sint impedit? Delectus commodi, ex illo cumque explicabo voluptates
            veritatis aspernatur ipsam doloremque.
          </TabPanel>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default TabsPage;
