/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				floatSlow: {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0)' }
				},
				bounceSlow: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				flyAcross: {
					'0%': { right: '-100px' },
					'50%': { right: '50%' },
					'100%': { right: '-100px' }
				},
				floatWiggle: {
					'0%': { transform: 'translateY(0) rotate(0deg)' },
					'25%': { transform: 'translateY(-5px) rotate(-2deg)' },
					'50%': { transform: 'translateY(3px) rotate(2deg)' },
					'75%': { transform: 'translateY(-2px) rotate(-1deg)' },
					'100%': { transform: 'translateY(0) rotate(0deg)' },
				  },
				  
				floatRandom: {
					'0%':   { transform: 'translate(0, 0)' },
					'20%':  { transform: 'translate(3px, -8px)' },
					'40%':  { transform: 'translate(-15px, 5px)' },
					'60%':  { transform: 'translate(4px, -6px)' },
					'80%':  { transform: 'translate(-12px, 4px)' },
					'100%': { transform: 'translate(0, 0)' },
				},

				floatRandomTwo: {
					'0%':   { transform: 'translate(0, 0)' },
					'20%':  { transform: 'translate(13px, -8px)' },
					'40%':  { transform: 'translate(-15px, 15px)' },
					'60%':  { transform: 'translate(4px, -6px)' },
					'80%':  { transform: 'translate(-12px, 4px)' },
					'100%': { transform: 'translate(0, 0)' },
				},
				
				flyZigzag: {
					'0%':   { transform: 'translateX(0) translateY(0)' },
					'25%':  { transform: 'translateX(25%) translateY(-10px)' },
					'50%':  { transform: 'translateX(50%) translateY(10px)' },
					'75%':  { transform: 'translateX(25%) translateY(-10px)' },
					'100%': { transform: 'translateX(100%) translateY(0)' },
				}
			},
			animation: {
				floatSlow: 'floatSlow 4s ease-in-out infinite',
				bounceSlow: 'bounceSlow 3s ease-in-out infinite',
				flyAcross: 'flyAcross 10s linear infinite',
				floatWiggle: 'floatWiggle 5s ease-in-out infinite',
				floatRandom: 'floatRandom 6s ease-in-out infinite',
				floatRandomTwo: 'floatRandomTwo 9s ease-in-out infinite',
				flyZigzag: 'flyZigzag 8s linear infinite'
			}
		}
	},
	plugins: []
}

