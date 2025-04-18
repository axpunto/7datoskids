import './App.css';
import { useState } from "react";
import backgroundImage from './media/7DK_web_bg2.png';
import srcBee1 from './media/7dk_abeja.png';
import srcCatarina2 from './media/abeja_7DK2.png';
import srcLogo from './media/Logo7DatosLids100x100.png';
import butterFly from './media/Mariposa7DK_1.png';
import { motion } from 'framer-motion';

export default function App() {
	const [hoveredItem, setHoveredItem] = useState(null);
	const elements = [
		{
			id: "bee",
			name: "Bee",
			src: srcBee1,
			style: "bottom-20 right-20 animate-floatRandomTwo",
			width: "w-20 sm:w-32"
		},
		{
			id: "catarina",
			name: "Catarina",
			src: srcCatarina2,
			style: "top-20 right-10 animate-floatSlow",
			width: "w-20 sm:w-40"
		},
		// {
		// 	id: "butterfly",
		// 	name: "ButterFly",
		// 	src: butterFly,
		// 	style: "bottom-30 left-20 animate-floatWiggle",
		// 	width: "w-20 sm:w-40"
		// },
	];

	return (
		<div 
			className="w-full h-screen bg-cover bg-center relative overflow-hidden" 
			style={{ backgroundImage: `url(${backgroundImage})` }}>
				<div className="flex items-center justify-center w-100">
					<img src={srcLogo} alt="Logo 7 Datos Kids" className="absolute top-10 animate-floatWiggle w-40 sm:w-50" />
				</div>

			{elements.map((el) => (
				<motion.div
					drag
					key={el.id}
					className={`absolute ${el.style} cursor-grab z-50`}
					onMouseEnter={() => setHoveredItem(el.id)}
					onMouseLeave={() => setHoveredItem(null)}
				>
					<img src={el.src} alt={el.name} className={el.width} />
					{hoveredItem === el.id && (
					<div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-yellow-200 text-black text-xs px-2 py-1 rounded shadow-lg z-10">
						{el.name}
					</div>
					)}
				</motion.div>
			))}
		</div>
	);
}
