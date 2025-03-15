import ContactTitle from "./ContactTitle"
import Kontakt from "./Kontakt"
function ContactUs()
{

    return(
        <div className="w-full h-[720px] bg-slate-50 flex">
            
           <div className="w-[50%] h-full bg-slate-50 flex items-center">
           <ContactTitle></ContactTitle>
            </div> 

            <div className="w-[50%] h-full bg-slate-50 flex justify-center items-center">
            <Kontakt></Kontakt>
            </div> 

        </div>
    )
}

export default ContactUs

/*
 <div className="w-[1/2] bg-red-300">
                <ContactTitle></ContactTitle>
            </div>

            <div className="w-[1/2]  bg-blue-300">
                <Kontakt></Kontakt>
            </div>



*/