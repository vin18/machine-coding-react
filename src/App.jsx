import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NestedComments from "./pages/CommentsPage";
import Tabs from "./pages/TabsPage";
import Modal from "./pages/ModalPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="nested-comments" />} />
          <Route path="nested-comments" element={<NestedComments />} />
          <Route path="tabs" element={<Tabs />} />
          <Route path="nested" element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
