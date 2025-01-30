import Navbar from './components/Navbar/Navbar.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Register from './components/Resgister/Register.jsx'
import Themes from './components/Themes/Themes.jsx'
import Timeline from './components/Timeline/Timeline.jsx'
import Rules from './components/Rules/Rules.jsx'
import { aboutData, hackshetra, tagline, what } from './constants/text.js'
import {ThemeData} from './constants/themeData.js'
import {TimelineData} from "./constants/timelineData.js"
import { rulesData } from './constants/rulesData.js'

function App() {

  return (
    <>
      <div className={`min-h-screen flex flex-col items-center h-min w-full absolute bg-map bg-no-repeat bg-fixed bg-55% bg-center md:bg-bottom scroll-smooth`}>
        <Navbar />
        <div className='w-fit items-center flex flex-col'>
          <h1 className={`text-[#8FFFFF] text-center text-[1.5rem] md:text-8xl font-porter-sans-block tracking-[0.25rem] [text-shadow:5px_4px_3px_#00cccc] transition-all duration-500
          sm:text-[2.5rem]
          md:text-[3rem] 
          lg:text-[4rem] 
          xl:text-[4rem] xl:[text-shadow:6px_6px_3px_#00cccc]`}>{hackshetra}</h1>

          <div className='text-white lg:text-[2rem] font-kode uppercase mt-14  backdrop-blur-sm rounded-3xl w-fit align-middle text-center  p-2 px-5 mb-10
          sm:text-xl
          md:text-2xl
          text-md'>
            {tagline}
          </div>

          <div className=' w-fit h-min rounded-lg p-5 bg-cyan-400/5 backdrop-blur-xl
          text-gray-300 text-2xl mx-2 text-center font-pirata shadow-[0px_0px_10px_0px_#3cb7dd]
            max-md:scale-[1] max-sm:scale-[0.8] max-xs:scale-[0.7]'>

            <Register />

          </div>
        </div>
        <AboutUs data={aboutData} que={what}/>
        <Themes data={ThemeData} activeSlide={2}/>
        <Timeline data={TimelineData}/>
        <Rules data={rulesData}/>
      </div>
    </>
  )
}

export default App
