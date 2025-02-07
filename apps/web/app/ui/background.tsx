import Image from "next/image";

export default function Background() {
	// Contains a fixed Background
	return (
		<>
			<div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
				<Image
					src="/bg.svg"
					alt="Techspardha Background"
					fill
					style={{objectFit: "cover"}}
					priority // Ensures the image loads quickly
				/>
			</div>
		</>
	);
}
