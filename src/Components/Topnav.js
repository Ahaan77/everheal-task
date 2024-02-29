import { useState } from "react"

const navHover = "hover:text-gray-400 hover:transition duration-200 cursor-pointer"

const Topnav = ({ windowSize }) => {

    const [menuActive, setMenuActive] = useState(false)

    const menu = [{ "heading": "About Us" }, { "heading": "Book an Appointment" }, { "heading": "For Patient" }, { "heading": "For Doctors" }, { "heading": "Lab Tests" }]

    return (
        <div className="flex justify-between items-center font-['Montserrat'] ">
            <div className='font-bold text-black mx-6 md:mx-20 my-6 md:my-10 text-2xl md:text-4xl hover:scale-[1.1] hover:transition duration-200 hover:duration-200 cursor-pointer'>
                Medi<span className='text-[#6F7BFB]'>care</span>
            </div>
            {windowSize?.innerWidth > 640 ?
                <div className='flex gap-12 items-center mr-20 text-sm text-black font-semibold '>
                    {
                        menu?.map((item) => {
                            return (
                                <div key={item.heading} className={navHover}>{item.heading}</div>
                            )
                        })
                    }
                    <div className='px-5 py-[6px] border border-[#6F7BFB] cursor-pointer hover:bg-[#6F7BFB] hover:text-white hover:transition duration-200 text-[#6F7BFB] rounded-xl'>
                        Login
                    </div>
                </div> :
                <div>
                    <div className='mr-6'>
                        <img onClick={() => setMenuActive(!menuActive)} className='h-6 w-6' src={!menuActive ? "/assets/menu-open.svg" : "/assets/menu-close.svg"} alt="menu" />
                    </div>
                    {menuActive ?
                        <div style={{ opacity: 1, zIndex: 9999 }} className='text-black bg-[#EEF8FF] shadow-lg absolute w-full left-0 top-20 '>
                            <div className='p-4 px-5 font-medium text-sm leading-7'>
                                {menu?.map((item) => {
                                    return (
                                        <a className='flex justify-between mb-10'>
                                            <span>{item?.heading}</span>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </span>
                                        </a>
                                    )
                                })}
                            </div>
                        </div> : null}
                </div>
            }
        </div>

    )
}

export default Topnav