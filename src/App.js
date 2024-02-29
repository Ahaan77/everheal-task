import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const navHover = "hover:text-gray-400 hover:transition duration-200 cursor-pointer"

  return (
    <div >

      {/* Topbar */}
      <div className='flex justify-between items-center'>
        <div className='font-bold text-black mx-20 my-10 text-4xl hover:scale-[1.1] hover:transition duration-200 hover:duration-200 cursor-pointer'>
          Medi<span className='text-[#6F7BFB]'>care</span>
        </div>
        <div className='flex gap-10 items-center mr-20 text-sm text-black font-semibold'>
          <div className={navHover}>About Us</div>
          <div className={navHover}>Book an Appointment</div>
          <div className={navHover}>For Patient</div>
          <div className={navHover}>For Doctors</div>
          <div className={navHover}>Lab Tests</div>
          <div className='px-5 py-[6px] border border-[#6F7BFB] cursor-pointer hover:bg-[#6F7BFB] hover:text-white hover:transition duration-200 text-[#6F7BFB] rounded-xl'>
            Login
          </div>
        </div>
      </div>

      {/* Hero */}

      <div className='w-full'>
        <div className='mx-20'>
          <div className='grid grid-cols-6 h-[80vh]'>
            <div className='col-span-3 w-full relative '>
              <div className='mt-[16vh]'>
                <p className='font-bold text-4xl'>Get High Quality</p>
                <p className='font-bold text-6xl mt-2'>Medical Services</p>
                <p className='font-bold text-gray-600 mt-5 w-[80%]'>Access top-tier medical care from licensed professionals anytime, anywhere through our online application.</p>
              </div>
              <div className='absolute bottom-[1vh] right-[4vw] w-40 h-24 rounded-[20px] bg-[#EEF8FF] flex items-center justify-center'>
                <div className='flex flex-col gap-0'>
                  <p className='font-bold text-2xl'>10k+</p>
                  <p className='font-bold text-sm'>Happy Patients</p>
                </div>

              </div>
            </div>
            <div className='col-span-2 w-full -ml-10 relative'>
              <div className='h-[68vh] rounded-full shadow-xl mt-[10vh]'>
                <img className="p-2 object-cover h-[68vh] w-full rounded-full" src="/assets/doctor-appointment.jpg" alt="doctors-image" />

              </div>
              <div className='h-24 bg-white shadow-xl absolute  w-[36vw] bottom-[20vh] rounded-[35px] -left-[32vw] flex items-center '>
                <input className='w-full pl-10 focus:outline-none text-gray-700 text-sm font-semibold' placeholder='Search Symptoms/ Doctors/ Clinics' />
                <button className='mr-5 bg-[#6F7BFB] text-white px-6 py-4 rounded-2xl font-bold hover:bg-opacity-80 hover:transition duration-200'>Search</button>
              </div>

            </div>
            <div className='col-span-1 w-full relative'>
              <div className='flex gap-3 items-center justify-end mt-[10vh]'>
                <div className='flex flex-col gap-1 '>
                  <img src="/assets/stars.svg" alt="stars" />
                  <p className='font-bold text-xs ml-3'>Jane Cooper</p>

                </div>
                <img src="/assets/jane.jpg" className='h-10 w-10 object-cover rounded-full' alt="jane" />

              </div>
              <p className='text-gray-600 text-sm mt-3 ml-0 w-[90%] absolute right-0 text-right'>The virtual experience was seemless, and the medical advice was thorough and precise.</p>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
