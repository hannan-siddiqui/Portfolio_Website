import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import "./App.css"


const FourthPage = () => {

  
  
  return (
    <div className="py-20  bg-[#1e1d1d]">
      <div className=" ">
    

        <div>
          <h1 className="text-neutral-400  md:text-5xl text-3xl font-bold ml-4 md:ml-[10%]">
            Contact Me
          </h1>
        </div>

        <div className="h-[2px] w-[50%] md:w-[67%] ml-[35%] md:ml-[25%] mt-2 "></div>
      </div>

      {/* contact page design */}

      <div className="mt-14  md:mt-36  flex flex-col justify-center items-center py-40 pt-0 gap-8">



        <div className="text-5xl  text-red-700 font-bold">Have Any Queries ?</div>
        <div className="text-3xl  font-bold text-red-700 mt-6  mb-24 underline underline-offset-4">Feel Free To Contact</div>
      
        

        <div className="md:flex justify-center items-center  gap-6 ">

          <div className="border  border-yellow-600 contact  w-[300px] md:w-[650px] h-16 md:h-28  flex justify-center items-center rounded-3xl">
            <div className=" text-xl md:text-6xl text-white   flex justify-center items-center  ">
              <MdOutlineMailOutline />
              <div className="text-lg md:text-4xl ml-3  text-yellow-700">
                siddiquihannan824@gmail.com
              </div>
            </div>
          </div>

          <div className="border  border-yellow-600 contact mt-6 md:mt-0  w-[300px] md:w-[550px] h-16 md:h-28  flex justify-center items-center rounded-3xl">
            <div className=" text-4xl md:text-6xl text-white  flex justify-center items-center  ">
              <IoCallOutline />
              <div className="text-2xl md:text-4xl ml-3 text-yellow-700">
                +91- XXXXXXXXXX
              </div>
            </div>
          </div>

        </div>

        <div className="">

          <div className="mt-0 md:mt-6 border  border-yellow-600 contact  w-[300px] md:w-[550px] h-16 md:h-28  flex justify-center items-center rounded-3xl">
            <div className=" text-4xl md:text-6xl text-white   flex justify-center items-center  ">
              <CiLocationOn />
              <div className="text-2xl md:text-4xl ml-3 text-yellow-700">
                Planet - C53
              </div>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default FourthPage;
