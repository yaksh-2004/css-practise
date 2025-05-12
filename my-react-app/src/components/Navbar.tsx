import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-white bg-blue-900 ">
    <div className="ml-10 m-4">Logo</div>
 
      <ul className="flex gap-5">
        <li>Home</li>
        <li>Agenda</li>
        <li>Host</li>
        <li>Review</li>
        <li>Benefits</li>
      </ul>
      <div>
        <button className="bg-pink-800 mr-40 border-2 rounded px-2 py-2">Register</button>
      </div>
  
  </div>
  )
}

export default Navbar