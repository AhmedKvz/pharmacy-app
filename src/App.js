import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import ViewProductPage from "./pages/ViewProductPage";
import AboutPage from "./pages/AboutPage";
import StatisticsPage from "./pages/StatisticsPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar />

        <Routes>
          <Route exact path="/" element={<ViewProductPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/editProduct/:id" element={<EditProductPage />} />
          <Route exact path="/statistics" element={<StatisticsPage />} />
          <Route exact path="/create" element={<CreateProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
