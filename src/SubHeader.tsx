import { motion, useScroll, useTransform } from "framer-motion";

function SubHeader(){
    const { scrollY } = useScroll(); // Praćenje skrola
    const translateY = useTransform(scrollY, [0, 600], [0, 500]);

    return(
        <div className="max-w-[1440px] md:h-[450px]  mx-auto flex  flex-col md:flex-row justify-content space-between">

            <div className='flex flex-col w-1/3 md:p-0 p-8'>
                        
                        <div>
                                  <ul>
                                    <li className="text-2xl mt-24 font-mono text-slate-50">
                                      Web Design
                                    </li>

                                    <li className="text-2xl font-mono text-slate-50">
                                      UI/UX
                                    </li>

                                    <li className="text-2xl  font-mono text-slate-50">
                                      DEVELOPMENT 
                                    </li>
                                  </ul> 
                        </div>
            
                    </div>
                
                <div className="md:w-1/3 w-full mt-32 flex justify-center">
                <motion.div
                        className="w-[150px] h-[150px] rounded-full bg-customwebp bg-cover bg-center mx-auto bg-no-repeat hidden md:block"
                        style={{ y: translateY }} 
                        />
                  <div className="w-[280px] h-[280px] rounded-full bg-customwebp bg-cover bg-center mx-auto bg-no-repeat mx-auto md:hidden block"></div>      
                </div>

                <div className="w-1/3 hidden md:block">
                    <h1 className="text-slate-50 font-mono  text-xl text-right">Great story</h1>    
                </div>   

                <div className="w-full md:hidden block">
                    <h1 className="text-slate-50 font-mono  text-xl p-8 text-center">Great story</h1>    
                </div>   
        </div>
    )
}

export default SubHeader