import "./App.css";
import Background from "./Background/Background";
import Countdown from "./Countdown/Countdown";
import Navbar from "./navbar/Navbar";
import Event from "./Event/Event";
import TimeLine from "./Timeline/Timeline";
import Themes from "./Themes/Themes";
// import Sponsors from './Sponsors/Sponsors'
import Footer from "./Footer/Footer";
import Rules from "./Rules/Rules";
import ContactUs from "./ContactUs/ContactUs";

function App() {
  return (
    <div className="w-[90%] h-screen flex flex-col items-center mx-auto overflow-x-hidden overflow-y-scroll scroll-smooth snap-y snap-mandatory">

      {/* First Section */}
      <section className="min-h-fit flex flex-col justify-start items-center scroll-snap-align-start relative">
        <Navbar />
        <h1
  className="ml-8 inline p-0 text-center text-[#67326C] font-pirata tracking-[0.5rem]  transition-all duration-500 text-[4rem] 
   sm:text-[6rem]
   sm:tracking-[0.8rem]
    md:text-[8rem] md:tracking-[1rem] 
    lg:text-[10rem] lg:tracking-[1.5rem] 
    xl:text-[13.25rem] xl:tracking-[2.0625rem]  "
    
>
  EXCALIBUR
        </h1>
        <div className="font-starlord text-[2.5rem] text-[rgba(255,255,255,0.797)] mt-[-1.5rem] mb-[1.5rem] tracking-[1.5px] max-xs:text-[1rem] max-xs:mt-[1rem] max-xs:mb-[1rem] max-xs:tracking-[1px] max-sm:text-[1.3rem] max-sm:mt-[0.5rem] max-sm:mb-[0.5rem] max-sm:tracking-[0.8px] max-md:text-[2rem] max-md:mt-[0rem] max-md:mb-[1rem] max-md:tracking-[1.2px]">
          DESIGN | DEVELOP | DOMINATE
        </div>
        <Countdown />
        {/* <Sponsors /> */}
      </section>

      {/* Second Section */}
      <section className="min-h-fit flex flex-col justify-center items-center scroll-snap-align-start
      mt-8" id="about">
        <Event />
        <section id="themes">
          <Themes />
        </section>
      </section>

      {/* Third Section */}
      <section className="min-h-fit flex flex-col justify-center items-center mt-8 scroll-snap-align-start
     " id="schedule">
        <TimeLine />
      </section>

      {/* Fourth Section */}
      <section className="min-h-fit flex flex-col justify-around items-center gap-6 p-6 mt-8 scroll-snap-align-start" id="rules">
        <Rules />
        <ContactUs />
        <Footer />
      </section>

			<Background />
		</div>
	);
}

export default App;
