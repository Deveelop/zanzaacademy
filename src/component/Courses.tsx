

const Courses = () => {
  
  return (
    <>
    <div className=" w-[100%] bg-[#F9F9FB]  flex flex-col font-OpenSans">
    

   
     <div className=" w-[75%]  m-auto">
          <div className=" mt-10">
        
          </div>
          <div className=" flex gap-2 md:gap-10 py-1 ">
            <span className=" flex text-nowrap gap-1 md:gap-3">
              <label className=" text-xs md:text-lg font-semibold text-[#9B9B9B]">BY</label><p className=" text-[#000000] text-xs  md:text-lg">Peter Abah</p>
            </span>
            <span className="flex text-nowrap gap-1 md:gap-3">
              <label className=" text-xs md:text-lg font-semibold text-[#9B9B9B]"> IN</label><p className=" text-[#000000] text-xs md:text-lg">Graphics</p>
            </span>
          </div>
          <div>
            <h1 className=" font-bold md:text-2xl">Basic Graphics Design</h1>
          </div>
        </div>
      
     <div className=" mt-20">
       <button className="  m-auto w-[200px] h-[70px] border-[2px] border-[#FF5480] flex justify-center items-center rounded-[35px] text-[#FF5480] font-semibold text-2xl ">Load More</button>
     </div>

    
     
    
    </div>
    </>
  )
}

export default Courses