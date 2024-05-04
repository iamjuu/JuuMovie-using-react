import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import Store from './redux/store'; // Import Redux store

import Home from './pages/user/home';
import Details from './components/details';
import UserLayout from './layout/UserLayout';
import CategoryLayout from './layout/CategoryLayout';
import ScrollToTop from './scroll/scroll';
import Series from './pages/user/Series';
import Kids from './pages/user/Kids';
import Comodies from "./pages/user/comodies"
import Action from './pages/user/Action';
import Documnetary from './pages/user/Documnetary';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Dispaly from "./redux/display"
import AdminAddMovieForm from './pages/admin/AddMovies';

function App() {
  return (
    <Provider store={Store}> 
      <BrowserRouter>
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="details" element={<Details />} />
          </Route>

          <Route path="/category" element={<CategoryLayout />}>
            <Route path="series" element={<Series />} />
            <Route path="kids" element={<Kids />} />
            <Route path="comodies" element={<Comodies />} />
            <Route path="Actions" element={<Action />} />
            <Route path="Documentary" element={<Documnetary />} />
          </Route>
            <Route  path='/display' element={<Dispaly/>}/>
          <Route path="/admin/addmovie" element={<AdminAddMovieForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
