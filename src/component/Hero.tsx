import {FaTelegram} from 'react-icons/fa'

const Hero = () => {
  return (
    
    <div className=" flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 block sm:flex relative py-16">
            <div className=" mb-5 sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span className="w-20 h-2 bg-gray-800 mb-12">
                </span>
                <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
                    Digital skills
                    <span className="text-5xl dark:text-gray-800 sm:text-7xl">
                        Training
                    </span>
                </h1>
                <p className="text-sm sm:text-base dark:text-gray-800">
                    Welcome to Zanzan Academy! We are dedicated to equipping learners with
                    the digital skills needed to thrive in today's ever-evolving world.
                    Join us to transform your future and unlock endless possibilities
                </p>
                <div className="flex mt-8">
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-[#00BFFF] border-2 border-transparent text-white text-md mr-4 hover:bg-[#0084ff]">
                        Explore Courses
                    </a>
                    <a href="#" className=" flex gap-3 items-center uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-[#00BFFF] text-[#00BFFF] dark:text-black hover:bg-[#00bfff] hover:text-white text-md">
                    <FaTelegram/> <span>Join Us</span>
                    </a>
                </div>
            </div>
            <div className=" sm:block sm:w-1/3 lg:w-3/5 relative">
            <iframe
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/mr15Xzb1Ook?autoplay=0&amp;mute=0&amp;controls=0&"
              id="widget2"
              title="YouTube Video"
            ></iframe>
              
              </div>
        </div>
    </div>
    
    
  )
}

export default Hero