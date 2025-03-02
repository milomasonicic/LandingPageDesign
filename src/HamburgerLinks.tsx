import { motion } from "framer-motion";
import { h1 } from "framer-motion/client";

function Link({ title } : { title: string }) {

    return (

        <h1 className="text-4xl font-bold text-left">
                {title}
        </h1>
      
    );
}

export default Link;
