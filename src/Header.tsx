//"use client"; 
import { useState } from "react";


//NASTAVITI SA MOBILNOM RESPONSIV NAVIGACIJOM

export const navItems= [

	{
	 name: "Features",
         href: "features"		
	},

	{
	 name: "Pricing",
         href: "pricing"		
	},
	
	{
	 name: "Testemonials",
         href: "testemonialas"		
	}
]

export const loginItems= [

	{
	
     name: "Login",
	 href:"login"		
	}
	/*
	{
	 buttonVariant: "primary",
     name: "Sign Up",
	 href:"login"		
	},
	*/
	
] satisfies {
	name: string;
	href: string;
	
}[]

export const Header = () => {

	const [isActive, setIsActive] = useState(false);
	//kosinus za logo
	const angle = 45; // Primer sa 45 stepeni
	const cosAngle = Math.cos((angle * Math.PI) / 180); // Izračunajte kosinus
	const rotateDegree = cosAngle * 45; 

	return  <> 
	<header className="border-b border-gray-200 bg-slate-900 ">
	<div className="max-w-[1200px] mx-auto">
	  <div className="h-18 flex items-center">
		  {/* logo */}
		<div className="flex items-center gap-4 w-1/2 lg:w-1/4">
		  <div className="w-5 h-5 rounded-full"
		   style={{
			background: `linear-gradient(${rotateDegree}deg, red, yellow, blue)`, // Rotacija pozadine
		  }}
		  ></div>
		  <div className="
		  text-gray-50	 
		  font-extrabold text-xl">health.ai</div>
		</div>

		  {/* nav */}
		 <div className="hidden lg:block w-1/2 mx-auto">
		 <nav className="h-full  mx-auto flex justify-center">
			{navItems.map(({ name, href }) => (
				<a
				href={href}
				key={href}
				className="text-gray-50 hover:text-blue-500 
				px-10 relative font-bold text-xs tracking-widest 
				text-gray-400 uppercase h-full inline-flex items-center 
				after:content-[''] after:absolute after:h-2 
				after:w-px after:bg-gray-200/20 after:left-0 
				after:hidden last:after:block" 
				>
				{name}
				</a>
			))}
		 </nav>
		 </div>

		{/*dugmad*/}
		<div className="hidden 
		
		lg:flex lg:w-1/4 flex justify-end">

		{loginItems.map(({  name, href }) => (
				<a
				href={href}
				key={href}			
				>
			kk
				</a>
			))}
			
			
		
		</div> 

		{/*hamburger meni*/}
		<div className="lg:hidden ml-auto flex items-center">
			<button className="lg:hidden size-20 relative rounded-lg border-2 px-4 py-2"
              style={{
                background: `linear-gradient(${rotateDegree}deg, red, yellow, blue)`,
              }}
			  onClick={() => setIsActive((prev) => !prev)}
			  >

			<div className="absolute inset-0 
			flex flex-col justify-center items-center">
                <div className={`w-8 h-0.5 bg-gray-700 mb-1 transform transition-transform duration-300 ${
                    isActive ? "rotate-45 translate-y-1" : ""
                  }`}></div> 
                <div className={`w-8 h-0.5 bg-gray-700 mb-1 transform transition-transform duration-300 ${
                    isActive ? "-rotate-45 translate-y-1" : ""
                  }`}></div>         
              </div>

			</button>
		 
		</div>
	  </div>
	</div>
  </header>

  {isActive && (
	<div>
		<div className="container">
			<nav className="flex flex-col items-center gap-4 py-8">
			{navItems.map(({ name, href }) => (
				<a
				href={href}
				key={href}
				className="text-gray-700 hover:text-blue-500 
				px-10 relative font-bold text-xs tracking-widest 
				text-gray-400 uppercase h-full inline-flex items-center 
				after:content-[''] after:absolute after:h-2 
				after:w-px after:bg-gray-200/20 after:left-0 
				after:hidden last:after:block" 
				>
				{name}
				</a>
			))}

			{loginItems.map(({ name, href }) => (
				<a
				href={href}
				key={href}			
				>
				{name}
				</a>
			))}

			</nav>

		</div>
	</div>
  )}
  </>
}

export default Header
/*

 <button className="size-20 rounded-lg border-2 relative 
		  		`linear-gradient(${rotateDegree}deg, red, yellow, blue)`">
		  		<div className="absolute
					top-1/2 left-1/2 -translate-x-1/2
					">
					<div className="top-0 
					bg-gray-700
						 left-0 w-4 h-4 bg-gray-100 -translate-y-1">

					</div>
				</div>

				<div className="absolute top-1/2 left-1/2 -translate-x-1/2">
					<div className="top-0 left-0 w-4 h-4 
					bg-gray-700
					-translate-y-1
					bg-gray-100">
						
					</div>
				</div>
		  		hm
		  </button>

*/


/*


notest kosinus gradinet ne radi vidjeti kako i zasto
<div className="w-10 h-10 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"></div>

//// U GRADINETU SE MOZE DODATI I MASK IMAGE, SVG URL IZ IMAGE ASSET FOLDERA UKOLIKO JE POTREBAN

https://dribbble.com/shots/24830146-Medical-Landing-Page

*/

/*






*/