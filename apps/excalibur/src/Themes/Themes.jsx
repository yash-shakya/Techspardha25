
export default function Themes() {
    let themes = ["AI/ML", "Education", "Health", "Web-3", "Open Innovation", "AR-VR"];
    return (
        <div className="w-full bg-[rgba(0,0,0,0.212)] backdrop-blur-[2px] rounded-[20px] shadow-[0_0_10px_inherit] m-8">
            <h2 className="text-[aliceblue] text-[2.5rem] text-center font-kode font-extrabold m-8">Themes</h2>
            <div className="flex flex-wrap justify-evenly m-6">
                {themes.map((theme,index) => (
                    <div key={index} className="theme-tile w-[150px] h-[150px] m-[1rem] p-[2rem] text-lg font-mono bg-[#010a01] rounded-[10px] flex justify-center items-center text-center shadow-[0_0_0.2rem_#fff,_0_0_0.2rem_#fff,_0_0_0.5rem_#bc13fe,_0_0_0.1rem_#bc13fe,_0_0_0.4rem_#bc13fe,_inset_0_0_0.8rem_#bc13fe]">
                        <img src="" alt="" />
                        <p className="text-white scale-[1.2] text-theme">{theme}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}