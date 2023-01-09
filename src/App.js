import { Routes, Route } from "react-router-dom"
import AuthRoutes from "./pages/AuthRoutes/AuthRoutes";
import LayoutRoutes from "./pages/LayoutRoutes/LayoutRoutes";

import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<LayoutRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
