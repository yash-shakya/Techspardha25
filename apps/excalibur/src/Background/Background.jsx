
export default function Background(){
    return(
        <>
            <div className="overflow-clip fixed w-[100svw] mt-auto bottom-0 mb-[-10px] z-[-9]">
                <img src="/images/excalibur_background_svg.svg" alt="" 
                className='w-full max-xs:scale-[3] max-sm:scale-[2] max-md:scale-[1.5]'/>
            </div>
            <div className="overflow-clip fixed w-[100svw] z-[-11]">
                <img src="/images/Home_Page.jpg" alt="" 
                className='h-[100svh] min-w-[100svw]'/>
            </div>
        </>
    )
}