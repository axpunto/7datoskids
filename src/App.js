import './App.css';
import { motion } from "motion/react";

// day and nighth backgrounds
import dayShiftBg1 from './media/7DK_web_bg2.png';
import dayShiftBg2 from './media/7dkDia.png';
import nightShiftBg from './media/7dkNoche.png';

// daylight elements
import beeDayShift from './media/7dk_abeja.png';
import butterFly from './media/Mariposa7DK_1.png';
import catarinaDayShift from './media/abeja_7DK2.png';

// night elements
import starNightShift from './media/7dk_star.png';
import moonNightShift from './media/7dk_Moon.png';
import starMinecraft from './media/7dk_star_1.png'
import starMuppets from './media/7dk_star_2.png'

// logo
import srcLogo from './media/Logo7DatosLids100x100.png';


export default function App() {
	const isDayLight = () => {
		const hour = new Date().getHours();
		const dayShift = hour >= 6 && hour < 18 ? true : false;
		return dayShift
	}

	const getNightElements = () => {
		return ([
			{
				src: starNightShift,
				animation: "animate-floatRandomTwo"
			},
			{
				src: starMinecraft,
				animation: "animate-bounceSlow"
			},
			{
				src: starMuppets,
				animation: "animate-floatRandom"
			}
		])
	}

	const getDaylightElements  = () => {
		return ([
			{
				src: beeDayShift,
				animation: "animate-floatSlow"
			},
			{
				src: srcLogo,
				animation: "animate-bounceSlow"
			},
			{
				src: catarinaDayShift,
				animation: "animate-floatRandom"
			}
		])
	}

	return (
		<div 
			className="w-full h-screen bg-cover bg-center relative overflow-hidden" 
			style={{ backgroundImage: `url(${isDayLight() ? dayShiftBg2 : nightShiftBg})` }}>
			<div className={`flex justify-around mt-9`}>
				{(isDayLight() ? getDaylightElements() : getNightElements()).map((el, i) => (
				<motion.div
					key={i}
					drag
					dragMomentum={false}
					dragElastic={0}
					style={{ x: 0, y: 0 }}>
					<div
						style= {{
							height: '120px', 
							width: '120px', 
							backgroundImage: `url(${el.src})`, 
							backgroundRepeat: 'no-repeat', 
							backgroundSize: 'contain'
						}} 
						className={`${el.animation}`}>
					</div>
				</motion.div>
				))}
			</div>
		</div>
	);
}
