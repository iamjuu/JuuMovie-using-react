import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/user/home";
import Details from "./components/details";
import UserLayout from "./layout/UserLayout";
import CategoryLayout from "./layout/CategoryLayout";
import ScrollToTop from "./scroll/scroll";
import Series from "./pages/user/Series";
import Kids from "./pages/user/Kids";
import Comodies from "./pages/user/comodies";
import Action from "./pages/user/Action";
import Documnetary from "./pages/user/Documnetary";
import Login from "./components/login/login";
import Signup from "./components/signup/signup"
import AdminAddMovieForm from "./pages/admin/AddMovies";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<UserLayout />}>
          <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login />} />
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
        </Route>

        <Route path="/category" element={<CategoryLayout />}>
          <Route path="series" element={<Series />} />
          <Route path="kids" element={<Kids />} />
          <Route path="comodies" element={<Comodies />} />
          <Route path="Actions" element={<Action />} />
          <Route path="Documentary" element={<Documnetary />} />
        </Route>

<Route path="/admin/addmovie"  element={<AdminAddMovieForm/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
