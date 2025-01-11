import './App.css'
import Background from './Background/Background'
import Countdown from './Countdown/Countdown'
import Navbar from './navbar/Navbar'
import Event from './Event/Event'
import TimeLine from './Timeline/Timeline'
import Themes from './Themes/Themes'
// import Sponsors from './Sponsors/Sponsors'
import Footer from './Footer/Footer'
import Rules from './Rules/Rules'
import ContactUs from './ContactUs/ContactUs'

function App() {
  return (
    <div className="w-[90%] h-screen flex flex-col items-center mx-auto overflow-x-hidden overflow-y-scroll scroll-smooth snap-y snap-mandatory">

      <section className="min-h-[100svh] w-full flex flex-col justify-start items-center scroll-snap-align-start">
        <Navbar />
        <h1 className="ml-8 inline p-0 text-center text-[#67326C] text-[13.25rem] font-pirata tracking-[2.0625rem]  transition-all duration-500 text-shadow-pink">EXCALIBUR</h1>
        <div className="font-starlord text-[2.5rem] text-[rgba(255,255,255,0.797)] mt-[-1.5rem] mb-[1.5rem] tracking-[1.5px]
        xs:text-[1rem]  xs:mt-[1.5rem] xs:tracking-[1.5px] xs:mb-[1.5rem] sm:text-[1.3rem] sm:mt-[0.5rem] sm:mb-[0.5rem] sm:tracking-[0.8px]
        md:text-[2rem] md:mt-[-1rem] md:mb-[1rem] md:tracking-[1.5px]">DESIGN | DEVELOP | DOMINATE</div>
        <Countdown />
        {/* <Sponsors /> */}
      </section>

      <section className="min-h-[100svh] flex flex-col justify-center items-center scroll-snap-align-center">
        <Event />
        <Themes />
      </section>

      <section className="min-h-fit flex flex-col justify-center items-center scroll-snap-align-start">
        <TimeLine />
      </section>
      <section className="min-h-[100svh] flex flex-col justify-around items-center gap-6 p-6 scroll-snap-align-center">
        <Rules />
        <ContactUs />
        <Footer />
      </section>

      <Background />
    </div>
  )
}

export default App
