import Card from "../../components/card"


const  Home=()=> {

  return (
    
    <div>
      <div className='main z-10  bg-black  opacity-45'>
        <div className='firstPage z-20'>
          <div className="flex h-screen flex-col items-center justify-center font-['Lucida_Sans_Unicode','Lucida_Grande',Verdana,Arial,Helvetica,sans-serif] text-[62.5%] leading-none opacity-100">
            <div className="  text-center font-bold text-10xl text-yellow-400 p-12 text-4xl ">
              <div className="flex justify-center mb-4 z-10">
                <span className="inline-block scale-100 transition-transform duration-2000 ease-in-out hover:scale-130  hover:cursor-crosshair active:text-shadow-none mr-1 text-2xl relative top-[0.15rem] delay-200">&#9733;</span>
                <span className="inline-block scale-100 transition-transform duration-2000 ease-in-out hover:scale-130 hover:cursor-crosshair active:text-shadow-none mr-1 text-3xl relative top-[0.1rem] delay-100">&#9733;</span>
                <span className="inline-block scale-100 transition-transform duration-2000 ease-in-out hover:scale-130 hover:cursor-crosshair active:text-shadow-none mr-1 text-5xl delay-0">&#9733;</span>
                <span className="inline-block scale-100 transition-transform duration-2000 ease-in-out hover:scale-130 hover:cursor-crosshair active:text-shadow-none mr-1 text-3xl relative top-[0.1rem] delay-100">&#9733;</span>
                <span className="inline-block scale-100 transition-transform duration-2000 ease-in-out hover:scale-130 hover:cursor-crosshair active:text-shadow-none text-2xl relative top-[0.15rem] delay-200">&#9733;</span>
              </div>
              <br />
              <p className="text-shadow-[-0.06em_0_red,0.06em_0_cyan] leading-6 tracking-wider z-20 ">
                <span className="text-white inline-block transition-[font-size] duration-2000 ease-in-out hover:text-6xl hover:leading-4 active:text-5xl active:text-shadow-none z-10 ">J</span>
                <span className="text-white inline-block transition-[font-size] duration-2000 ease-in-out hover:text-6xl hover:leading-4 active:text-5xl active:text-shadow-none">U</span>
                <span className="text-white inline-block transition-[font-size] duration-2000 ease-in-out hover:text-6xl hover:leading-4 active:text-5xl active:text-shadow-none">U</span>
                <span className="text-white inline-block transition-[font-size] duration-2000 ease-in-out hover:text-6xl hover:leading-4 active:text-5xl active:text-shadow-none z-10">-</span>
                <span className="text-white inline-block transition-[font-size] duration-2000 ease-in-out hover:text-6xl hover:leading-4 active:text-5xl active:text-shadow-none z-10">V</span>
                <span className="text-white inline-block transition-[font-size] duration-2000 ease-in-out hover:text-6xl hover:leading-4 active:text-5xl active:text-shadow-none z-10">U</span>
                <span className="text-white inline-block transition-[font-size] duration-2000 ease-in-out hover:text-6xl hover:leading-4 active:text-5xl active:text-shadow-none z-10">E</span>

               
              </p>
              <br />
              <br />
              <p className="text-base text-white">
                <span>Elevate your entertainment with </span> JuuVue - <span> where cinematic brilliance meets seamless streaming in one unparalleled experience.</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    <Card/>

    </div>
  );
}

export default Home;