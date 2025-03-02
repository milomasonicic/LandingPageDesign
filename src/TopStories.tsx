/*import { div } from "framer-motion/client"
import LineDrawing from "./Line"


function Top()
{
    return(
        <div className="bg-slate-50 ">
        <div className="max-w-[1440px] mx-auto flex h-[600px]">
            <div>
                <LineDrawing></LineDrawing>
            </div>

            <div>
                <h1>Our best stories</h1>
                <div> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, voluptate.</div>
            </div>
        </div>

        </div>
    )
}

export default Top
*/

import LineDrawing from "./Line";

function Top() {
  return (
    <div className="bg-slate-50">
      <div className="max-w-[1440px] mx-auto flex h-[600px] items-center justify-between">
        {/* Leva strana sa linijom */}
        <div className="w-[222px] h-[400px] relative">
          <LineDrawing />
          {/* Dodatni elementi na liniji */}
          <div className="absolute top-0 -left-4 text-sm text-gray-700">
            <div className="bg-blue-500 h-4 w-4 rounded-full"></div>
            <p className="mt-2">Idea</p>
          </div>
          <div className="absolute top-[40%] -left-4 text-sm text-gray-700">
            <div className="bg-green-500 h-4 w-4 rounded-full"></div>
            <p className="mt-2">Development</p>
          </div>
          <div className="absolute bottom-0 -left-4 text-sm text-gray-700">
            <div className="bg-purple-500 h-4 w-4 rounded-full"></div>
            <p className="mt-2">Innovation</p>
          </div>
        </div>

        {/* Desna strana sa tekstom */}
        <div className="flex-1 pl-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Connecting the Dots
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            From initial ideas to groundbreaking innovation, we bridge every step with precision and passion.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Top;


