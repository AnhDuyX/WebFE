import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {

    let [state, setState] = useState({
        email: '',
        password: ""
    })

    let [message, setMessage] = useState('')


    const navigate = useNavigate()
    const handleOnchange = (e, id) => {
        let copyData = { ...state }

        copyData[id] = e.target.value;
        setState(copyData)
    }


    const handleLogin = (e) => {
        e.preventDefault()
        if (state.email === "" || null) {
            setMessage("Chưa nhập email!!!")
        } else if (state.password === "" || null) {
            setMessage("Chưa nhập password!!!")
        } else if (state.email !== "admin@gmail.com" || state.password !== "12345") {
            setMessage("Sai email hoặc mật khẩu!!!")

        } else {
            console.log("checkkkk")
            navigate("/user")
        }
    }

    console.log("check state", message)

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    ĐĂNG NHẬP
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Tài Khoản
                        </label>
                        <input
                            onChange={(e) => handleOnchange(e, "email")}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Mật Khẩu
                        </label>
                        <input
                            onChange={(e) => handleOnchange(e, "password")}

                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    {message && message !== "" && <p className="text-red-700 pr-5 font-bold">{message}</p>}
                    <div className="mt-6">
                        <button onClick={(e) => handleLogin(e)} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            ĐĂNG NHẬP
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Index;
