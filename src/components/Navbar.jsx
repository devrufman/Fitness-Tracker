import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" text-secondary py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-kristen hover:text-highlight transition duration-300">Ertugrul Fitness Tracker</h1>
      <div className="space-x-4">
        <NavLink
          to="/"
          className="hover:text-highlight transition duration-300"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="hover:text-highlight transition duration-300"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:text-highlight transition duration-300"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;