// import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { images } from "../data/skin";

const Header = () => {
    const [findItem, setFindItem] = useState("");
    const [state, setState] = useState({});

    const handleFindItem = (e) => {
        setFindItem(e.target.value);
    };
    // const handleFind = () => {
    //     axios.get("http://localhost:6969/api/findItem").then((res) => {
    //         console.log("????: ", res);
    //         // let data = res.data.data;
    //         // setState(data);
    //     });
    // };
    // console.log("check find tem?: ", findItem);
    return (
        <div>
            <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button
                                id="toggleSidebarMobile"
                                aria-expanded="true"
                                aria-controls="sidebar"
                                className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                            >
                                <svg
                                    id="toggleSidebarMobileHamburger"
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                                </svg>
                                <svg
                                    id="toggleSidebarMobileClose"
                                    className="w-6 h-6 hidden"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                                </svg>
                            </button>
                            <Link
                                to="/dashboard"
                                className="text-xl font-bold flex items-center lg:ml-2.5"
                            >
                                {/* <img src={images.logo} className="h-10 w-14 " alt="Logo" /> */}
                                <span className="self-center whitespace-nowrap uppercase">
                                    FOOD D&Y
                                </span>
                            </Link>
                            {/* <form
                action="#"
                method="GET"
                className="hidden lg:block lg:pl-32"
              >
                <label className="sr-only">Search</label>
                <div className="mt-1 relative lg:w-64 lg:flex">
                  <input
                    type="text"
                    onChange={(e) => handleFindItem(e)}
                    name="email"
                    id="topbar-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                    placeholder="Search"
                  />

                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                    </svg>
                  </div>
                </div>
              </form> */}
                        </div>


                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
