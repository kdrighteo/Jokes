import React from "react";

const Button = (props) => {
    return <div className=" border h-60 w-60 bg-indigo-500 rounded-xl"> 
    <p className="text-white animate-pulse">Laughing is just a therapy for stress</p>
        <div className="flex justify-center items-end py-40">
        <button onClick={props.callApi} className=" border rounded bg-gray-200 hover:scale-110 duration-300">
            Joker!!
        </button>
        </div>
    </div>
     ;
}
export default Button;
