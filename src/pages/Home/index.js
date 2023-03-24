import React from "react";
import Footer from "../../components/Footer";
import MovieCard from "../../components/MovieCard";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
    <div className="relative bg-white w-full h-[720px] text-left text-base text-white font-montserrat-bold"> 
      <Navbar/>
      <header
        className="absolute top-[0px] left-[0px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(26,_163,_175,_0.9),_rgba(3,_59,_60,_0.9))] w-[1920px] h-[711px] text-left text-base text-white font-montserrat-bold"
        id="header_main"
      >
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(26,_163,_175,_0.95),_rgba(11,_106,_119,_0.95))]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/bitmap13@2x.png"
          />
        </div>
        <img
          className="absolute bottom-[1px] left-[calc(50%_-_6px)] w-[600px] h-[426px] object-cover"
          alt=""
          src="/Movie-Night-removebg-preview.png"
        />
        <div className="absolute top-[calc(50%_-_110.5px)] left-[calc(50%_-_582px)] text-27xl uppercase inline-block w-[539px] h-[114px]">{`Trendy Interior & Exterior design  `}</div>
        <div className="absolute top-[calc(50%_+_25.5px)] left-[calc(50%_-_582px)] uppercase font-montserrat-semibold inline-block w-[238px] h-6">
          Simple. Smooth. Elegant
        </div>
        <div className="absolute top-[calc(50%_-_145.5px)] left-[calc(50%_-_625px)] box-border w-[609px] h-[324px] border-[6px] border-solid border-white" />
        <div className="absolute top-[calc(50%_+_75.5px)] left-[calc(50%_-_582px)] w-[346px] h-[50px] text-darkslategray">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_77px)] uppercase text-black">
              Call Us: 000-00-0000
            </div>
            <img
              className="absolute h-[34%] w-[4.91%] top-[36%] right-[78.03%] bottom-[30%] left-[17.05%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/plus-icon.svg"
            />
          </div>
        </div>
      </header>
      {/* <Footer/> */}
    
    </div>
    <MovieCard/>
    <Footer/>
    </>
    // <div className="relative bg-white w-full h-[6042px] text-left text-base text-white font-montserrat-bold">
    // <Navbar/>
    // </div>
  );
};

export default Home;
