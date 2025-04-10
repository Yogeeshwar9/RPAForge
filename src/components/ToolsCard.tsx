import React from 'react'

function ToolsCard() {
  return (
    <div className="w-[207px] h-[225px] bg-white rounded-lg shadow p-4 ">
      {/* <div className=' space-y-2 text-gray-700 font-medium'><button onClick={()=>{console.log("button clicked");
      }}>Basics: Power Apps</button></div>
      <div className='cursor-pointer'>Including SharePoint</div>
      <div className='cursor-pointer'>Power Automate</div> */}
      <div className='px-3'>
      <ul className="cursor-pointer space-y-4  text-gray-700 font-medium ">
        <li className='hover:text-blue-700 hover:underline decoration-orange-600 decoration-2 underline-offset-4'>About us</li>
        <li className='hover:text-blue-700 hover:underline decoration-orange-600 decoration-2 underline-offset-4'>Our Team</li>
        <li className='hover:text-blue-700 hover:underline decoration-orange-600 decoration-2 underline-offset-4'>Life @ STEP</li>
        <li className='hover:text-blue-700 hover:underline decoration-orange-600 decoration-2 underline-offset-4'>Career</li>
        <li className='hover:text-blue-700 hover:underline decoration-orange-600 decoration-2 underline-offset-4'>Contact Us</li>
      </ul>
      </div>
    </div>
  )
}

export default ToolsCard
