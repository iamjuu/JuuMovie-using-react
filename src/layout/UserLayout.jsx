  import  {Outlet} from "react-router-dom"
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Background from '../components/Background';
function UserLayout() {
  return (
    <div>
      <Navbar/>
      <Background/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default UserLayout;
