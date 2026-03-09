import React from "react";
import logoImg from "../../assets/logo.png";
import { NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const Navbar = () => {
  const {user,logOut} = useAuth();
  // console.log(updateUser);

  
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      toast.success("LogOut successfully.")
    }).catch(error=>{
      if(error){
        toast.error("Something went wrong!")
      }
    })
  }
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-10/12 mx-auto">
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <img className="w-10" src={logoImg} alt="logo" />
            <a className="text-4xl font-bold">SoloSphere</a>
          </div>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <div className="indicator">
                <ul className="flex items-center gap-3">
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-lg text-blue-600 font-medium"
                          : "text-lg font-medium"
                      }
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end z-50">
            {
              user ? <>
              
              <div
              tabIndex={0}
              role="button"
              title={user.displayName}
              className="btn btn-ghost btn-circle avatar ml-2"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User"
                  src={user.photoURL}
                />
              </div>
            </div>

<ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/add-job">Add Job</NavLink>
              </li>
              <li>
                <NavLink to="/my-posted-jobs">My Posted Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/my-bids">My Bids</NavLink>
              </li>
              <li>
                <NavLink to="/bid-request">Bid Requests</NavLink>
              </li>
              <li>
                <button onClick={handleLogOut} className="text-lg font-medium">Logout</button>
              </li>
            </ul>
              </> :  <li>
                    <NavLink
                      to="/login"
                      className="btn btn-primary btn-outline ml-3"
                    >
                      Login
                    </NavLink>
                  </li>
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;