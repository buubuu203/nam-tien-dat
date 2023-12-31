import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky z-10 top-0 bg-black opacity-80 shadow-lg md:h-14 h-10">
      <div className="flex  justify-between items-center max-w-[1240px] mx-auto px-4 text-white">
        <div className="flex gap-4">
          <img
            src={logo}
            alt="logo"
            className="md:w-10 md:h-8 w-8 h-6 self-center"
          />
          <h1 className=" md:text-3xl text-2xl py-1 md:p-0  font-bold text-[#4BA0F0]">
            Nam Tiến Đạt
          </h1>
        </div>
        <ul className="hidden md:flex">
          <li className="p-4">
            {/* <a href="#">Trang chủ</a> */}
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/home"
            ></NavLink>
          </li>
          <li className="p-4">
            <Link to="/" className="hover:text-slate-500">
              Giới thiệu
            </Link>
          </li>
          <li className="p-4">
            <Link to="/" className="hover:text-slate-500">
              Sản phẩm
            </Link>
          </li>
          <li className="p-4">
            <Link to="/" className="hover:text-slate-500">
              Cung cấp than đá
            </Link>
          </li>
          <li className="p-4">
            <Link to="/" className="hover:text-slate-500">
              Liên hệ
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full  text-3xl font-bold text-[#4BA0F0] m-4">
            Nam Tiến Đạt
          </h1>
          <li className="p-4 border-b border-gray-600">
            <Link to="/">Giới thiệu</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/">Sản phẩm</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/">Cung cấp than đá</Link>{" "}
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/">Liên hệ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
