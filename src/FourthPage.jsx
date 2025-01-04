import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub} from "react-icons/fa";
import "./App.css"


const FourthPage = () => {

  
  
  return (
    <div className="py-20  bg-[#1e1d1d]">
      <div className=" ">
    

        <div>
          <h1 className="text-red-700  md:text-5xl text-3xl font-bold ml-4 md:ml-[10%]">
            Contact Me
          </h1>
        </div>

        <div className="h-[2px] w-[50%] md:w-[67%] ml-[35%] md:ml-[25%] mt-2 "></div>
      </div>

      {/* contact page design */}

      <div className="mt-14  md:mt-36  flex flex-col justify-center items-center py-40 pt-0 gap-8">



        <div className="md:text-5xl text-3xl text-red-700 font-bold">Have Any Queries ?</div>
        <div className="md:text-3xl  text-xl font-bold text-red-700 mt-6  mb-24 underline underline-offset-4">Feel Free To Contact</div>
      
        

        <div className="md:flex justify-center items-center  gap-6 ">

          <div className="border  border-zinc-500 contact  w-[300px] md:w-[650px] h-16 md:h-28  flex justify-center items-center rounded-3xl">
            <div className=" text-4xl md:text-6xl text-red-500   flex justify-center items-center  ">
              <MdOutlineMailOutline />
              <div className="text-base md:text-4xl ml-3 font-bold text-zinc-300">
                siddiquihannan824@gmail.com
              </div>
            </div>
          </div>

          <div className="border  border-zinc-500 contact mt-6 md:mt-0  w-[300px] md:w-[550px] h-16 md:h-28  flex justify-center items-center rounded-3xl">
           <a target="__blank" href="https://www.linkedin.com/in/hannan-siddiqui-990961258/">
           <div className=" text-4xl md:text-6xl text-blue-400  flex justify-center items-center  ">
              <FaLinkedin />
              <div className="text-2xl md:text-4xl ml-3 text-zinc-300">
                linkedin 
              </div>
            </div>
           </a>
          </div>
        
        </div>

        <div className="">

          <div className="mt-0 md:mt-6 border  border-zinc-500 contact  w-[300px] md:w-[550px] h-16 md:h-28  flex justify-center items-center rounded-3xl">
            <a target="__blank" href="https://github.com/hannan-siddiqui">
            <div className=" text-4xl md:text-6xl text-black   flex justify-center items-center  ">
              <FaGithub />
              <div className="text-2xl md:text-4xl ml-3 text-zinc-300">
              github
              </div>
            </div>
            </a>
          </div>

        </div>


      </div>

    </div>
  );
};

export default FourthPage;

