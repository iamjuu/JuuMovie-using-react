import { Outlet } from 'react-router-dom';
import Navbar from "../components/navbar"
import Footer from "../components/Footer"
import Card from '../components/card';

function CategoryLayout() {
  return (
    <div>
    <Navbar/>
    <Card/>
    <Outlet/>
    <Footer/>
    </div>
  );
}

export default CategoryLayout;
