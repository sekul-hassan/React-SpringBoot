import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./Pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddPage from "./Pages/AddPage";
import EditPage from "./Pages/EditPage";
import ViewPage from "./Pages/ViewPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/add" element={<AddPage />}/>
              <Route path="/view/:id" element={<ViewPage />}/>
              <Route path="/edit/:id" element={<EditPage />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
