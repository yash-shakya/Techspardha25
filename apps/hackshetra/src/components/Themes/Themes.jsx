import React, { useEffect, useRef, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./Themes.css"

function BigTheme(props) {
	const [activeSlide, setActiveSlide] = useState(props.activeSlide);

	const next = () => {
		setActiveSlide((prev) => (prev + 1) % props.data.length);
	};

	const prev = () => {
		setActiveSlide((prev) => (prev - 1 + props.data.length) % props.data.length);
	};

	const time = useRef(null);

	const timer = () => {
		clearTimeout(time.current);
		time.current = setTimeout(next, 3500);
	};

	useEffect(() => {
		timer();
		return () => clearTimeout(time.current);
	}, [activeSlide]);

	const getStyles = (index) => {
		const totalSlides = props.data.length;

		// Calculate positions relative to the active slide
		const relativeIndex = (index - activeSlide + totalSlides) % totalSlides;

		if (relativeIndex === 0) {
			// Active slide
			return {
				styles: {
					opacity: 1,
					transform: "translateX(0px) translateZ(0px) rotate(0deg)",
					zIndex: 10,
				},
			};
		} else if (relativeIndex === 1) {
			// Next slide
			return {
				styles: {
					opacity: 1,
					transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
					zIndex: 9,
				},
			};
		} else if (relativeIndex === totalSlides - 1) {
			// Previous slide
			return {
				styles: {
					opacity: 1,
					transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
					zIndex: 9,
				},
			};
		} else if (relativeIndex === 2) {
			// Second next slide
			return {
				styles: {
					opacity: 0.5,
					transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
					zIndex: 8,
				},
			};
		} else if (relativeIndex === totalSlides - 2) {
			// Second previous slide
			return {
				styles: {
					opacity: 0.5,
					transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
					zIndex: 8,
				},
			};
		} else {
			// All other slides (hidden)
			return {
				styles: {
					opacity: 0,
					transform: "translateX(0px) translateZ(-1000px)",
					zIndex: 1,
				},
			};
		}
	};

	return (
		<>
			<section
				className="max-md:hidden flex flex-col justify-center items-center text-white w-[75%] mt-11 backdrop-blur-sm p-4 font-kode rounded-lg"
				id="theme"
			>
				{/* carousel */}
				<h3 className="text-center font-kode text-4xl mb-6 pb-5">Themes</h3>
				<div className="flex flex-wrap justify-center relative h-64 slideC">
					{props.data.map((item, i) => (
						<React.Fragment key={item.id}>
							<div
								className="slide m-2 p-4 w-80 h-64 transition-all duration-500 absolute t-0 rounded-xl bg-gradient-to-b from-slate-800 to-slate-950 shadow-[0px_0px_10px_0px_#3cb7dd] flex justify-center"
								style={{
									...getStyles(i).styles,
								}}
							>
								<SliderContent {...item} />
							</div>
						</React.Fragment>
					))}
				</div>
				{/* carousel */}

				<div className="btns flex">
					<FaChevronLeft
						className="btn cursor-pointer"
						onClick={() => {
							prev();
							timer();
						}}
						color="#fff"
						size={32}
					/>
					<FaChevronRight
						className="btn cursor-pointer"
						onClick={() => {
							next();
							timer();
						}}
						color="#fff"
						size={32}
					/>
				</div>
			</section>
		</>
	);
}

function SmallTheme(props) {
	const [activeSlide, setActiveSlide] = useState(props.activeSlide);

	const next = () => {
		setActiveSlide((prev) => (prev + 1) % props.data.length);
	};

	const prev = () => {
		setActiveSlide((prev) => (prev - 1 + props.data.length) % props.data.length);
	};

	const time = useRef(null);

	const timer = () => {
		clearTimeout(time.current);
		time.current = setTimeout(next, 3500);
	};

	useEffect(() => {
		timer();
		return () => clearTimeout(time.current);
	}, [activeSlide]);

	const getStyles = (index) => {
		const totalSlides = props.data.length;
		const relativeIndex = (index - activeSlide + totalSlides) % totalSlides;

		// Position slides dynamically relative to the active one
		if (relativeIndex === 0) {
			return {
				styles: {
					opacity: 1,
					transform: "translateX(0%) translateZ(0px) rotate(0deg)",
					zIndex: 10,
				},
			};
		} else if (relativeIndex === 1) {
			return {
				styles: {
					opacity: 0.8,
					transform: "translateX(70%) translateZ(-250px) rotateY(-40deg)",
					zIndex: 9,
				},
			};
		} else if (relativeIndex === totalSlides - 1) {
			return {
				styles: {
					opacity: 0.8,
					transform: "translateX(-70%) translateZ(-250px) rotateY(40deg)",
					zIndex: 9,
				},
			};
		} else {
			return {
				styles: {
					opacity: 0,
					transform: "translateX(0%) translateZ(-1000px)",
					zIndex: 1,
				},
			};
		}
	};

	return (
		<section
			className="md:hidden flex flex-col justify-center items-center text-white w-full mt-8 p-4 font-kode rounded-lg"
			id="theme2"
		>
			{/* Carousel */}
			<h3 className="text-center font-kode text-2xl mb-5">Themes</h3>
			<div className="flex flex-wrap justify-center relative slideC w-full h-32">
				{props.data.map((item, i) => (
					<React.Fragment key={item.id}>
						<div
							className="slide m-2 p-3 w-[50%] h-40 transition-all duration-500 absolute t-0 rounded-lg bg-gradient-to-b from-slate-800 to-slate-950 shadow-[0px_0px_10px_0px_#3cb7dd] flex justify-center items-center"
							style={{
								...getStyles(i).styles,
							}}
						>
							<SliderContent {...item} />
						</div>
					</React.Fragment>
				))}
			</div>
			{/* Navigation Buttons */}
			<div className="btns flex mt-4">
				<FaChevronLeft
					className="btn cursor-pointer"
					onClick={() => {
						prev();
						timer();
					}}
					color="#fff"
					size={24}
				/>
				<FaChevronRight
					className="btn cursor-pointer ml-4"
					onClick={() => {
						next();
						timer();
					}}
					color="#fff"
					size={24}
				/>
			</div>
		</section>
	);
}

function Themes(props) {
	return (
		<>
			<BigTheme data={props.data} activeSlide={props.activeSlide} />
			<SmallTheme data={props.data} activeSlide={props.activeSlide}/>
		</>

	)

}

const SliderContent = (props) => {
	return (
		<div className="sliderContent flex flex-col items-center justify-center">
			<img src={props.icon} alt="icon" className="invert md:w-24 max-md:w-14"/>
			<h2 className="md:text-2xl text-center max-md:text-base">{props.title}</h2>
		</div>
	);
};

export default Themes;
