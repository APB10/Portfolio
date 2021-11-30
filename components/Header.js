import React from 'react'

function Header() {
    return (
        <div className="grid place-content-center h-screen position: relative">
            <h1 className=" text-3xl text-white text-center">Hello, I'm  <span className="text-yellow-600"> Ali P. Bouraki. </span> 
            <h1> I'm a Web Developer </h1> </h1>
            <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-4 
            hover:shadow-xl active:scale-90 transition duration-150">View my protfolio</button>
        </div>
    )
}

export default Header
