import { NavLink } from "react-router-dom";


const Navbar = () => {

  

  return (
    <div className="mx-6 md:mx-8 z-10   px-8  pt-6  rounded-lg">
      <nav className="md:flex justify-between items-center space-y-3">
        <div>
            <img src="/Resources/Logo.png" alt="" />
        </div>
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline font-bold" : "font-bold"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline font-bold" : "font-bold"
              }
            >
              Donation
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/statistic"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline font-bold" : "font-bold"
              }
            >
              Statistic
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
