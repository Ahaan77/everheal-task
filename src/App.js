import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const navHover = "hover:text-gray-400 hover:transition duration-200 cursor-pointer"
  const [menuActive, setMenuActive] = useState(false)

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
        <div className='font-bold text-black mx-6 md:mx-20 my-6 md:my-10 text-2xl md:text-4xl hover:scale-[1.1] hover:transition duration-200 hover:duration-200 cursor-pointer'>
          Medi<span className='text-[#6F7BFB]'>care</span>
        </div>
        {windowSize?.innerWidth > 640 ?
          <div className='flex gap-10 items-center mr-20 text-sm text-black font-semibold '>
            <div className={navHover}>About Us</div>
            <div className={navHover}>Book an Appointment</div>
            <div className={navHover}>For Patient</div>
            <div className={navHover}>For Doctors</div>
            <div className={navHover}>Lab Tests</div>
            <div className='px-5 py-[6px] border border-[#6F7BFB] cursor-pointer hover:bg-[#6F7BFB] hover:text-white hover:transition duration-200 text-[#6F7BFB] rounded-xl'>
              Login
            </div>
          </div> :
          <div className='mr-6'>
            <img onClick={() => setMenuActive(!menuActive)} className='h-6 w-6' src={!menuActive ? "/assets/menu-open.svg" : "/assets/menu-close.svg"} alt="menu" />
          </div>
        }
      </div>

      {/* Hero */}

      <div className='w-full reveal fade-bottom'>
        <div className='md:mx-20'>
          <div className='md:grid grid-cols-6 h-[80vh]'>
            <div className='col-span-3 w-full relative '>
              <div className='mt-8 md:mt-[16vh]'>
                <p className="font-bold text-2xl md:text-4xl font-['Montserrat'] text-center md:text-left ">Get High Quality</p>
                <p className="font-bold text-4xl md:text-6xl mt-2 font-['Montserrat'] text-center md:text-left ">Medical Services</p>
                <p className="font-semibold text-xs md:text-base text-gray-600 mt-5 w-[100%] md:w-[80%] font-['Montserrat'] text-center md:text-left">Access top-tier medical care from licensed professionals anytime, anywhere through our online application.</p>
              </div>
              {windowSize?.innerWidth > 640 ?
                <div className='md:absolute md:bottom-[1vh] md:right-[4vw] w-40 mt-10 md:mt-0 md:w-40 h-24 rounded-[20px] bg-[#EEF8FF] flex items-center justify-center'>
                  <div className='flex flex-col gap-0'>
                    <p className="font-bold text-2xl text-center md:text-left font-['Montserrat']">10k+</p>
                    <p className="font-bold text-sm text-center md:text-left font-['Montserrat']">Happy Patients</p>
                  </div>
                </div> :
                <div className='w-full flex justify-center'>
                  <div className='w-[60%] mt-10 h-24 rounded-[20px] bg-[#EEF8FF] flex items-center justify-center '>
                    <div className='flex flex-col gap-0'>
                      <p className="font-bold text-2xl text-center md:text-left font-['Montserrat']">10k+</p>
                      <p className="font-bold text-sm text-center md:text-left font-['Montserrat']">Happy Patients</p>
                    </div>
                  </div>
                </div>}
            </div>
            <div className='col-span-2 w-full md:-ml-10 relative'>
              <div className='h-[50vh] md:h-[68vh] rounded-full shadow-xl md:mt-[10vh] mt-4 mx-10 md:mx-0'>
                <img className="p-2 object-cover h-[50vh] md:h-[68vh]  w-full rounded-full" src="/assets/doctor-appointment.jpg" alt="doctors-image" />

              </div>

              <div className={windowSize.innerWidth > 640 ? 'h-24 bg-white shadow-xl absolute  w-[36vw] bottom-[20vh] rounded-[35px] -left-[32vw] flex items-center' : 'h-16 relative bg-white shadow-xl rounded-[35px] -mt-24 z-90 w-full flex items-center '}>
                <input className="w-full pl-10 focus:outline-none text-gray-700 text-xs md:text-sm font-semibold font-['Montserrat']" placeholder='Search Symptoms/ Doctors/ Clinics' />
                <button className="mr-3 md:mr-5 bg-[#6F7BFB] text-white md:px-6 px-4 font-['Montserrat'] py-4 rounded-2xl font-bold hover:bg-opacity-80 hover:transition duration-200">Search</button>
              </div>

              {windowSize.innerWidth > 640 ?
                <div className='h-32 w-40 bg-white shadow-xl rounded-2xl md:absolute md:top-[30vh] md:-right-[9.5vw]'>
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
                </div> : null}
              {windowSize?.innerWidth > 640 ?
                <div className='h-16 w-16 bg-black rounded-full shadow-xl absolute bottom-[18vh] -right-[1.5vw] shadow-xl flex justify-center items-center'>
                  <img src="/assets/arrow.svg" alt="arrow" />
                </div> : null}
            </div>
            <div className='col-span-1 w-full relative'>
              {windowSize?.innerWidth > 640 ?
                <div>
                  <div className='flex gap-3 items-center justify-end mt-[10vh]'>
                    <div className='flex flex-col gap-1 '>
                      <img src="/assets/stars.svg" alt="stars" />
                      <p className="font-bold text-xs ml-3 font-['Montserrat']">Jane Cooper</p>
                    </div>
                    <img src="/assets/jane.jpg" className='h-10 w-10 object-cover rounded-full' alt="jane" />
                  </div>
                  <p className="text-gray-600 text-sm mt-3 ml-0 w-[90%] absolute right-0 text-right font-['Montserrat']">The virtual experience was seemless, and the medical advice was thorough and precise.</p>
                </div> : null}

              {windowSize?.innerWidth > 640 ?
                <div className='bg-[#FFF9ED] h-28 w-48 md:absolute md:bottom-[10vh] md:right-0 rounded-xl'>
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

                </div> : null}

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
