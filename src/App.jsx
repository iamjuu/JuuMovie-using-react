// App.js
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import ProductCard from './components/card'

function App() {
  return (
    <BrowserRouter>
  <Navbar/>
  <Home/>
  <ProductCard/>
      <Routes>
     npm 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
