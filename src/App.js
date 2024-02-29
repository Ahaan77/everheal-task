import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const navHover = "hover:text-gray-400 hover:transition duration-200 cursor-pointer"

  function reveal() {
    var reveals = document.querySelector(".reveal");
    console.log(reveals)
    setTimeout(() => {
      reveals?.classList?.add("active");
    }, 50)
  }

  useEffect(() => {
    reveal()
  }, [])

  return (
    <div className='scrollbar-hide' >

      {/* Topbar */}
      <div className="flex justify-between items-center font-['Montserrat'] ">
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

      <div className='w-full reveal fade-bottom'>
        <div className='mx-20'>
          <div className='grid grid-cols-6 h-[80vh]'>
            <div className='col-span-3 w-full relative '>
              <div className='mt-[16vh]'>
                <p className="font-bold text-4xl font-['Montserrat']">Get High Quality</p>
                <p className="font-bold text-6xl mt-2 font-['Montserrat'] ">Medical Services</p>
                <p className="font-semibold text-gray-600 mt-5 w-[80%] font-['Montserrat']">Access top-tier medical care from licensed professionals anytime, anywhere through our online application.</p>
              </div>
              <div className='absolute bottom-[1vh] right-[4vw] w-40 h-24 rounded-[20px] bg-[#EEF8FF] flex items-center justify-center'>
                <div className='flex flex-col gap-0'>
                  <p className="font-bold text-2xl font-['Montserrat']">10k+</p>
                  <p className="font-bold text-sm font-['Montserrat']">Happy Patients</p>
                </div>

              </div>
            </div>
            <div className='col-span-2 w-full -ml-10 relative'>
              <div className='h-[68vh] rounded-full shadow-xl mt-[10vh]'>
                <img className="p-2 object-cover h-[68vh] w-full rounded-full" src="/assets/doctor-appointment.jpg" alt="doctors-image" />

              </div>
              <div className='h-24 bg-white shadow-xl absolute  w-[36vw] bottom-[20vh] rounded-[35px] -left-[32vw] flex items-center '>
                <input className="w-full pl-10 focus:outline-none text-gray-700 text-sm font-semibold font-['Montserrat']" placeholder='Search Symptoms/ Doctors/ Clinics' />
                <button className="mr-5 bg-[#6F7BFB] text-white px-6 font-['Montserrat'] py-4 rounded-2xl font-bold hover:bg-opacity-80 hover:transition duration-200">Search</button>
              </div>
              <div className='h-32 w-40 bg-white shadow-xl rounded-2xl absolute top-[30vh] -right-[9.5vw]'>
                <div className='w-full flex justify-center -mt-5'>
                  <img className='h-12 w-12 object-cover rounded-full' src="/assets/doc-4.jpg" alt="doctor" />
                </div>
                <div className='w-full flex justify-center mt-3'>
                  <p className="font-bold text-xs font-['Montserrat']">Dr. John reichman</p>
                </div>
                <div className='w-full flex justify-center mt-0'>
                  <p className="font-bold text-xs text-gray-600 font-['Montserrat']">Neurologist</p>
                </div>
                <div className='w-full flex justify-center mt-2'>
                  <div className="z-90 px-6 py-[6px] bg-[#FFB714] rounded-lg text-white text-xs flex justify-center items-center font-['Montserrat'] hover:bg-opacity-80 hover:transition duration-200 cursor-pointer">Appointment</div>
                </div>
              </div>
              <div className='h-16 w-16 bg-black rounded-full shadow-xl absolute bottom-[18vh] -right-[1.5vw] shadow-xl flex justify-center items-center'>
                <img src="/assets/arrow.svg" alt="arrow" />
              </div>
            </div>
            <div className='col-span-1 w-full relative'>
              <div className='flex gap-3 items-center justify-end mt-[10vh]'>
                <div className='flex flex-col gap-1 '>
                  <img src="/assets/stars.svg" alt="stars" />
                  <p className="font-bold text-xs ml-3 font-['Montserrat']">Jane Cooper</p>

                </div>
                <img src="/assets/jane.jpg" className='h-10 w-10 object-cover rounded-full' alt="jane" />

              </div>
              <p className="text-gray-600 text-sm mt-3 ml-0 w-[90%] absolute right-0 text-right font-['Montserrat']">The virtual experience was seemless, and the medical advice was thorough and precise.</p>

              <div className='bg-[#FFF9ED] h-28 w-48 absolute bottom-[10vh] right-0 rounded-xl'>
                <div className='mt-4 flex justify-center items-center'>
                  <div className='flex items-center'>
                    <div className='h-9 w-9 bg-white rounded-full flex justify-center items-center'>
                      <img className='h-8 w-8 object-cover rounded-full' src="/assets/jane.jpg" />
                    </div>
                    <div className='h-9 w-9 -ml-2 bg-white rounded-full flex justify-center items-center'>
                      <img className='h-8 w-8 object-cover rounded-full' src="/assets/doc-1.jpg" />
                    </div>
                    <div className='h-9 w-9 -ml-2 bg-white rounded-full flex justify-center items-center'>
                      <img className='h-8 w-8 object-cover rounded-full' src="/assets/doc-2.jpg" />
                    </div>
                    <div className='h-9 w-9 -ml-2 bg-white rounded-full flex justify-center items-center'>
                      <img className='h-8 w-8 object-cover rounded-full' src="/assets/doc-3.avif" />
                    </div>
                    <div className='h-9 w-9 -ml-2 bg-white rounded-full flex justify-center items-center'>
                      <img className='h-8 w-8 object-cover rounded-full' src="/assets/doc-4.jpg" />
                    </div>

                  </div>

                </div>
                <div className='mt-1 ml-4'>
                  <p className="font-bold text-xl font-['Montserrat']">150+</p>
                  <p className="font-['Montserrat'] font-bold text-xs">Highly Specialised Doctors</p>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
