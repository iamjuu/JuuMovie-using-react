// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
// import Login from "./pages/main/login";
import Details from "./components/details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path='/Details' element={<Details/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;