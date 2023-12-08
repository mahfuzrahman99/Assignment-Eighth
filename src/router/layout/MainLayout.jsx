import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  
  const isHome = location.pathname === "/";

  return (
    <div>
      <div className={isHome ? 'hidden' : ''}>
        <Navbar />
      </div>
      <div className=" ">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
