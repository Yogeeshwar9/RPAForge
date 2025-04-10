import React from 'react'

function BodyCard() {
  return (
    <div className='w-full h-[1506px]'>
      <div className='flex flex-col  w-full'>
        {/* Text */}
        <div className='w-full h-[180px] mt-[60px] mb-[40px] text-[#1c4282] text-[32px] font-[700] text-center'>
            <h2>We empower businesses to access the full potential of their employees <br></br>and integrate automation into a business context, to manage the <br></br>processes that are important for them.</h2>
        </div>
        {/* Cards */}
        <div className='flex flex-col flex-wrap w-full gap-7 content-center'>
          <div className='flex flex-row flex-wrap gap-7'>
            {/**1 */}
            <div className='w-[367px] h-[485px] p-[10px] bg-[#0F3CA0] rounded-xl shadow-lg shadow-blue-600'>
            <div className='p-[40px] flex flex-col'>
              <div className='w-[267px] h-[100px] flex justify-center'>
                <img  src='/images/icon1.png' alt='image of icon1' className='w-[90px] h-[76px] object-cover'/>
              </div>
              <div className='w-[266px] h-[61px] text-white text-[23px] font-[700] text-center mb-5'>
                <h4>Robotic Process Automation</h4>
              </div>
              <div className='w-[266px] h-[170px] text-white text-[18px] font-[400] text-center'>
                Achieve greater business impact by automating tasks with the help of our intelligent automation solution.
              </div>
            </div>
            </div>
            {/**2 */}
            <div className='w-[367px] h-[485px] p-[10px] bg-[#0F3CA0] rounded-xl shadow-lg shadow-blue-600'>
            <div className='p-[40px] flex flex-col'>
              <div className='w-[267px] h-[100px] flex justify-center'>
                <img  src='/images/icon2.png' alt='image of icon1' className='w-[90px] h-[76px] object-cover'/>
              </div>
              <div className='w-[266px] h-[61px] text-white text-[23px] font-[700] text-center mb-5'>
                <h4>Robotic Application Monitoring</h4>
              </div>
              <div className='w-[266px] h-[170px] text-white text-[18px] font-[400] text-center'>  
               STEP uses AI & ML on live application to repeatedly test and rectify any bugs before any of our clients customer faces an issue.
              </div>
            </div>
            </div>
            {/**3 */}
            <div className='w-[367px] h-[485px] p-[10px] bg-[#0F3CA0] rounded-xl shadow-lg shadow-blue-600'>
            <div className='p-[40px] flex flex-col'>
              <div className='w-[267px] h-[100px] flex justify-center'>
                <img  src='/images/icon3.png' alt='image of icon3' className='w-[90px] h-[76px] object-cover'/>
              </div>
              <div className='w-[266px] h-[61px] text-white text-[23px] font-[700] text-center mb-5'>
                <h4>Script Less Test Automation</h4>
              </div>
              <div className='w-[266px] h-[170px] text-white text-[18px] font-[400] text-center'>
                Take the testing burden off your developers with STEP's Script Less Test Automation solution. You can perform the fastest checks on the quality of applications before it goes live.
              </div>
            </div>
            </div>
          </div>
          <div className='flex flex-row flex-wrap gap-7'>
            {/**4 */}
            <div className='w-[367px] h-[485px] p-[10px] bg-[#0F3CA0] rounded-xl shadow-lg shadow-blue-600'>
              <div className='p-[40px] flex flex-col'>
                <div className='w-[267px] h-[100px] flex justify-center'>
                  <img  src='/images/icon4.png' alt='image of icon4' className='w-[90px] h-[76px] object-cover'/>
                </div>
                <div className='w-[266px] h-[61px] text-white text-[23px] font-[700] text-center mb-5'>
                  <h4>RPA COE Setup</h4>
                </div>
                <div className='w-[266px] h-[170px] text-white text-[18px] font-[400] text-center'>
                Our RPA experts help in depth with all organizational changes to setup a CoE and its respective cooperation with IT.
                </div>
              </div>
            </div>
            {/**5 */}
            <div className='w-[367px] h-[485px] p-[10px] bg-[#0F3CA0] rounded-xl shadow-lg shadow-blue-600'>
              <div className='p-[40px] flex flex-col'>
                <div className='w-[267px] h-[100px] flex justify-center'>
                  <img  src='/images/icon5.png' alt='image of icon5' className='w-[90px] h-[76px] object-cover'/>
                </div>
                <div className='w-[266px] h-[61px] text-white text-[23px] font-[700] text-center mb-5'>
                  <h4>BOT Audit</h4>
                </div>
                <div className='w-[266px] h-[170px] text-white text-[18px] font-[400] text-center'>
                  We provide our customers with the most appropriate solutions for their needs. We examine existing BOTs and implement required solutions to improve their functioning.
                </div>
              </div>
            </div>
            {/**6 */}
            <div className='w-[367px] h-[485px] p-[10px] bg-[#0F3CA0] rounded-xl shadow-lg shadow-blue-600'>
              <div className='p-[40px] flex flex-col'>
                <div className='w-[267px] h-[100px] flex justify-center'>
                  <img  src='/images/icon6.png' alt='image of icon6' className='w-[90px] h-[76px] object-cover'/>
                </div>
                <div className='w-[266px] h-[61px] text-white text-[23px] font-[700] text-center mb-5'>
                  <h4>BOT Store</h4>
                </div>
                <div className='w-[266px] h-[170px] text-white text-[18px] font-[400] text-center'>
                  We believe, it's time to move beyond the traditional approach of individually tailored programs. Our Intelligent Automation solution store provides ready-to-deploy BOTs which require minor customizations to go live.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyCard
