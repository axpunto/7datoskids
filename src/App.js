import './App.css';
import { useState } from "react";
import dayShiftBg1 from './media/7DK_web_bg2.png';
import beeDayShift from './media/7dk_abeja.png';
import catarinaDayShift from './media/abeja_7DK2.png';
import nightShiftBg from './media/7dkNoche.png';
import starNightShift from './media/7dk_star.png';
import moonNightShift from './media/7dk_Moon.png';
import srcLogo from './media/Logo7DatosLids100x100.png';
import butterFly from './media/Mariposa7DK_1.png';
import dayShiftBg2 from './media/7dkDia.png';
import { motion } from 'framer-motion';

export default function App() {
	const isDayLight = () => {
		const hour = new Date().getHours();
		const dayShift = hour >= 6 && hour < 18 ? true : false;
		return dayShift
	}
	
	const [hoveredItem, setHoveredItem] = useState(null);
	const elements = [
		{
			id: "bee",
			name: "Bee",
			src: isDayLight() ? beeDayShift : starNightShift,
			style: "top-20 left-5 animate-floatRandomTwo",
			width: "w-20 sm:w-32"
		},
		{
			id: "catarina",
			name: "Catarina",
			src: isDayLight() ? catarinaDayShift : moonNightShift,
			style: "top-20 right-7 animate-floatSlow",
			width: "w-20 sm:w-40"
		}
	];

	return (
		<div 
			className="w-full h-screen bg-cover bg-center relative overflow-hidden" 
			style={{ backgroundImage: `url(${isDayLight() ? dayShiftBg1 : nightShiftBg})` }}>
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
