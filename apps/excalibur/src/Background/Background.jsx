
export default function Background(){
    return(
        <>
        <div className="overflow-hidden fixed w-[100svw] bottom-0 z-[-9]">
    <img 
        src="/images/excalibur_background_svg.svg" 
        alt="" 
        className="
            w-full h-auto
            object-cover 
            max-xs:scale-[4] max-xs:translate-y-[-30%] 
            max-sm:scale-[2] max-sm:translate-y-[10%] 
            max-md:scale-[1.5] 
        "
    />
</div>
<div className="overflow-hidden fixed w-[100svw] z-[-11]">
    <img 
        src="/images/Home_Page.jpg" 
        alt="" 
        className="w-full h-[100svh] object-cover object-center"
    />
</div>

        </>
    )
}