import React from "react";
import logoImg from "../../assets/logo.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-sm">
     <div className="navbar w-10/12 mx-auto">
         <div className="flex-1">
        <div className="flex items-center gap-1">
          <img className="w-10" src={logoImg} alt="" />
          <a className="text-4xl font-bold">SoloSphere</a>
        </div>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <div className="indicator">
              <ul className="flex items-center gap-3">
                <li>
                  <NavLink className={({isActive})=>isActive? "text-lg text-blue-600 font-medium" : "text-lg font-medium"} to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/login" className={"btn btn-primary btn-outline"} >Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
                  <NavLink className={({isActive})=>isActive? "text-lg text-blue-600 font-medium" : "text-lg font-medium"} to="/add-job">Add Job</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive})=>isActive? "text-lg text-blue-600 font-medium" : "text-lg font-medium"} to="/my-posted-jobs">My Posted Jobs</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive})=>isActive? "text-lg text-blue-600 font-medium" : "text-lg font-medium"} to="/my-bids">My Bids</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive})=>isActive? "text-lg text-blue-600 font-medium" : "text-lg font-medium"} to="bid-request">Bid Requests</NavLink>
                </li>
            <li>
              <a className="text-lg font-medium">Logout</a>
            </li>
          </ul>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Navbar;
