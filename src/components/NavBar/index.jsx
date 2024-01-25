import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const linkStyle = `text-white text-lg p-2 pl-6 hover:bg-Myplum hover:text-white/80 rounded-full`;

  return (
    <div className="h-full w-2/12 bg-MypaleBlue p-2 flex flex-col">
      <div className="w-full h-full flex flex-col gap-2 mb-auto">
        <div className="text-white text-4xl text-center font-bold">Q&A</div>
        <Link
          to="/dashboard"
          className={`${linkStyle} mt-auto ${
            location.pathname === "/dashboard" ? "bg-Myplum" : ""
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="/notifications"
          className={`${linkStyle} ${
            location.pathname === "/notifications" ? "bg-Myplum" : ""
          }`}
        >
          Notifications
        </Link>
        <Link to="/favorites" className={`${linkStyle}`}>
          Favorites
        </Link>
        <Link to="/map" className={`${linkStyle} mb-auto`}>
          Map
        </Link>
        <Link
          to={"/"}
          className="text-Mypeach cursor-pointer pl-6 hover:text-MyrosePink"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
