import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function ImgCarousel() {
  return (
    <div>
      <Carousel showArrows={true} autoPlay={true} showStatus={false} showThumbs={false} infiniteLoop={true} dynamicHeight={true}>
        <div>
          <div className='w-full h-[450px] relative'>
            <img src="/images/img9.jpg"
            alt="image 1 of carousel" className='object-cover w-auto h-[100%] object-[35%_65%]'/>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
          {/* <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-[63px] text-white'>
            <h1>Robotic Process Automation Services</h1>
          </div> */}
        </div>
        <div >
            <div className='w-full h-[450px] relative'>
            <img src="/images/img2.webp"
            alt="image 2 of carousel" className='object-cover w-auto h-[100%] '/>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
          {/* <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[72px] text-white'>
            <h1>Robotic Process Automation Services</h1>
          </div> */}
        </div>
        <div >
        <div className='w-full h-[450px] relative'>
            <img src="/images/img6.jpg"
            alt="image 4 of carousel" className='object-cover w-auto h-[100%] '/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        </div>
        <div>
          <div className='w-full h-[450px] relative'>
            <img src="/images/img10.webp"
            alt="image 5 of carousel" className='object-cover w-auto h-[100%] '/>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        </div>
      </Carousel>
    </div>
  )
}

export default ImgCarousel
