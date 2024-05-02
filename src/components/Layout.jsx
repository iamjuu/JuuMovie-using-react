import { Outlet } from "react-router-dom";
import Navbar from './navbar';
import Footer from "./Footer";
function Layout() {
  return (
    <div>
        <div className=" bg-blue-300"></div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Layout;
