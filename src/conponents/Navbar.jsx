import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-white text-2xl">
         
          <span className='text-green-500'> &lt;</span>

          Pass
          <span className='text-green-500'>OP/ &gt;</span>
          
          </div>
        {/* <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href="#">Home</a>
                <a className='hover:font-bold' href="#">About</a>
                <a className='hover:font-bold' href="#">Contact</a>

            </li>
        </ul> */}

        <button className='text-white bg-green-800 my-5 rounded-full flex justify-between items-center ring-white ring-1'>
          <img className="invert py-1 w-10" src="icons/github.svg" alt="github" />
          <span className="font-bold px-2">Github</span>
         
        </button>
        </div>
    </nav>
  )
}

export default Navbar
