import React from 'react'
import event1 from '/public/CIVIL CAREER WEBINAR.jpg'

const names = [
  { id: 1, guest: "Alpna Kataria" },
  { id: 2, guest: "Swetha Anand" },
  { id: 3, guest: "Mazharuddin" },
  { id: 4, guest: "Neily Naidu" }
]

const EventsPage = () => {
  return (
    <div>
      {/* Heading */}
      <div className='text-black dark:text-white dark:bg-black mt-[100px] text-left mb-2 text-5xl font-primary'>
        <h1 className='ml-3'>Our Events</h1>
        <div className="w-24 h-1 ml-10 mt-3 bg-primary"></div>
      </div>

      {/* Grid wrapper */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-4'>
        <div className="min-h-screen p-2 mb-6 flex items-center justify-center dark:bg-black">
          <div className="max-w-3xl group border border-black/20 dark:border-white/30 rounded-3xl dark:bg-black duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.6)] hover:dark:shadow-[0_18px_45px_rgba(255,255,255,0.25)] transition-transform hover:-translate-y-1">

            <div className='relative overflow-hidden rounded-t-3xl'>
              <img
                className='h-[400px] object-cover rounded-t-3xl w-full group-hover:shadow-2xl group-hover:scale-105 transition-transform duration-300'
                src={event1}
                alt="Civil Career Webinar"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Header */}
            <div className="text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary text-center cursor-pointer p-2 mt-3 text-[40px] font-primary">
              Civil Career Webinar
            </div>
            <div className="mt-4 mx-auto h-px bg-primary dark:bg-white/10 w-[250px]" />

            {/* Content */}
            <div className="mt-6 p-4 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 text-sm md:text-base">
              {/* Left column */}
              <div className="space-y-8">
                <div>
                  <p className="text-primary font-primary font-medium">Guest Speakers</p>
                  <div>
                    <ul>
                      {names.map((data) => (
                        <li className='font-secondary font-semibold' key={data.id}>
                          {data.guest}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <p className="text-primary font-primary font-medium">Date</p>
                  <p className="mt-2 dark:text-white text-lg font-semibold">
                    2nd Nov, 2025
                  </p>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-8">
                <div>
                  <p className="text-primary font-teritiary font-medium">Event Mode</p>
                  <p className="mt-2 dark:text-white text-lg font-semibold">Online</p>
                </div>

                <div>
                  <p className="text-primary font-teritiary font-medium">Time</p>
                  <p className="mt-2 dark:text-white text-lg font-semibold">1:30 PM IST</p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-6 mb-5 flex justify-center">
              <button className="px-12 py-3 font-primary rounded-md bg-primary hover:bg-red-500 group-hover:-translate-y-2 duration-300 transition-transform text-white text-2xl font-medium tracking-wide shadow-[0_12px_30px_rgba(0,0,0,0.45)] ">
                View Event <span className="ml-2 group-hover:translate-x-1 transform">→</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsPage
