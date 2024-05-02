import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/user/home";
import Details from "./components/details";
import UserLayout from './layout/UserLayout';
import CategoryLayout from "./layout/CategoryLayout";
import Scroll from "./scroll/scroll";
import Series from "./pages/user/Series";
import Kids from "./pages/user/Kids";
import Comodies from "./pages/user/comodies"
import Action from "./pages/user/Action"
import Documnetary from "./pages/user/Documnetary";

function App() {
  return (
    <BrowserRouter>
      <Scroll />  
      <Routes>
        {/* Main User layout */}
        <Route path="/" element={<UserLayout />}>

          <Route index element={<Home />} />  

          <Route path="details" element={<Details />} />  

        </Route>

        <Route path="/category" element={<CategoryLayout />}>  
          <Route path="series" element={<Series />} />
          <Route path="kids" element={<Kids />} />
          <Route   path="comodies" element={<Comodies/>}/>
          <Route   path="action" element={<Action/>}/>
          <Route   path="Documnetary" element={<Documnetary/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
