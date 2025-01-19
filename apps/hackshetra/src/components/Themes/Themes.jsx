import React, { useEffect, useRef, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Themes (props) {
	const [activeSlide, setActiveSlide] = useState(props.activeSlide);

	const next = ()=>{
		setActiveSlide((prev)=> prev==props.data.length-1 ? 0 : prev+1)
	}
		
	const prev = () => {
		setActiveSlide((prev)=> prev==0 ? props.data.length-1 : prev-1)
	}

	const time = useRef(null)

	const timer = ()=>{
		clearTimeout(time.current)
		time.current = setTimeout(next,3500)
	}

	useEffect(()=>{
		timer()
		return ()=> clearTimeout(time.current)
	},[activeSlide])

	const getStyles = (index) => {
		if (activeSlide === index)
			return {
				opacity: 1,
				transform: "translateX(0px) translateZ(0px) rotate(0deg)",
				zIndex: 10,
			};
		else if (activeSlide - 1 === index)
			return {
				opacity: 1,
				transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
				zIndex: 9,
			};
		else if (activeSlide + 1 === index)
			return {
				opacity: 1,
				transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
				zIndex: 9,
			};
		else if (activeSlide - 2 === index)
			return {
				opacity: 1,
				transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
				zIndex: 8,
			};
		else if (activeSlide + 2 === index)
			return {
				opacity: 1,
				transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
				zIndex: 8,
			};
		else if (activeSlide - 3 == index)
			return {
				transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
				zIndex: 7,
			};
		else if (activeSlide + 3 == index)
			return {
				transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
				zIndex: 7,
			};
		else if (activeSlide - 4 == index)
			return {
				transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
				zIndex: 7,
			};
		else if (activeSlide + 4 == index)
			return {
				transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
				zIndex: 7,
			};
	};

	return (
		<>
			<section
				className="flex flex-col justify-center items-center text-white w-[75%] mt-11 backdrop-blur-sm p-4 font-kode rounded-lg"
				id="theme"
			>
				{/* carousel  */}
				<h3 className="text-center text-4xl mb-6 pb-5">Themes</h3>
				<div className="slideC flex flex-wrap justify-center">
					{props.data.map((item, i) => (
						<React.Fragment key={item.id}>
							<div
								className="slide m-2 p-4 rounded-lg"
								style={{
									background: item.bgColor,
									borderRadius: "10px",
									...getStyles(i),
								}}
							>
								<SliderContent {...item} />
							</div>
							<div
								className="reflection"
								style={{
									background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
									...getStyles(i),
								}}
							/>
						</React.Fragment>
					))}
				</div>
				{/* carousel */}

				<div className="btns flex">
					<FaChevronLeft
						className="btn cursor-pointer"
						onClick={()=>{prev(); timer()}}
						color="#fff"
						size={32}
					/>
					<FaChevronRight
						className="btn cursor-pointer"
						onClick={()=>{next(); timer()}}
						color="#fff"
						size={32}
					/>
				</div>
			</section>
		</>
	);
};

const SliderContent = (props) => {
	return (
		<div className="sliderContent">
			{props.icon}
			<h2>{props.title}</h2>
			<p>{props.desc}</p>
		</div>
	);
};

export default Themes
