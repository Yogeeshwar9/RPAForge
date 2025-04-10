import React, { useState } from 'react'
import TrainingCard from './TrainingCard';
import ProjectSupportCard from './ProjectSupportCard';
import ToolsCard from './ToolsCard';
import ServiceCard from './ServiceCard';
function Navbar() {
    const [hovered, setHovered] = useState('');
  return (
    <div>
      <div className='w-full  bg-[#0d2753] text-white h-20 flex flex-row items-center justify-between px-10'>
        <div className='basis-1/2 items-center'><h1>Raju</h1></div>
        <div className='basis-1/2 flex flex-row justify-around items-center gap-4'>
          {/* Tools Section */}
          <div className='cursor-pointer font-bold relative w-[80px] h-[50px] flex items-center justify-center hover:underline decoration-orange-600 decoration-2 underline-offset-4' 
            onMouseEnter={()=>{setHovered('Tools')}}
            onMouseLeave={()=>{setHovered('')}}>
              Tools
              {hovered==='Tools'&&(
                <div className='absolute top-full -left-12 z-50'>
                  <ToolsCard/>
                </div>
              )}
          </div>
          {/*Service */}
          <div className='cursor-pointer font-bold relative w-[145px] h-[50px] flex items-center justify-center hover:underline decoration-orange-600 decoration-2 underline-offset-4' 
            onMouseEnter={()=>{setHovered('Service')}}
            onMouseLeave={()=>{setHovered('')}}>
              Services
              {hovered==='Service'&&(
                <div className='absolute top-full -left-5 z-50'>
                  <ServiceCard/>
                </div>
              )}
          </div>
          {/* Project Support */}
          <div className='cursor-pointer font-bold relative w-[145px] h-[50px] flex items-center justify-center hover:underline decoration-orange-600 decoration-2 underline-offset-4' 
            onMouseEnter={()=>{setHovered('ProjectSupport')}}
            onMouseLeave={()=>{setHovered('')}}>
              Project Support
              {hovered==='ProjectSupport'&&(
                <div className='absolute top-full -left-7 z-50'>
                  <ProjectSupportCard/>
                </div>
              )}
          </div>
          {/* Training Section */}
          <div className="cursor-pointer font-bold relative w-[80px] h-[50px] flex items-center justify-center hover:underline decoration-orange-600 decoration-2 underline-offset-4"
            onMouseEnter={() => setHovered('Training')}
            onMouseLeave={() => setHovered('')}>
            Training
            {hovered === 'Training' && (
              <div
              className="absolute top-full -left-16 z-50"
              onMouseEnter={() => setHovered('Training')} // Prevent disappearance
              onMouseLeave={() => setHovered('')} // Allow disappearance when leaving
            >
              <TrainingCard />
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
