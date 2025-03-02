import { motion } from "framer-motion";

function Deliver() {
    return (
        <div className="h-[800px] w-full p-10">
            {/* Header Section */}
            <motion.div 
                className="flex justify-between"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="text-[#f8fafc] text-xl font-semibold">What we deliver</div>
                <div className="text-[#f8fafc] text-4xl max-w-3xl mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cupiditate quas cumque quae? Alias recusandae ex ratione corporis nulla dicta!
                </div>
            </motion.div>
            
            {/* Four Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 text-[#f8fafc]">
                {/* Section Animation */}
                {[
                    { title: "See", items: ["Future Design", "Category Analysis", "PESTLE Analysis", "Company Audit", "Brand Audit", "Customer Journey Mapping", "Competitive Analysis", "Target Audience Analysis"] },
                    { title: "Tell", items: ["Business Design", "Category Design", "Strategic Narrative", "Value Proposition", "Opportunity Mapping", "Purpose Mapping", "Innovation Workshop"] },
                    { title: "Create", items: ["Brand Design", "Brand Strategy", "Brand Architecture", "Brand Platform", "Naming", "Visual Identity", "Design System", "Verbal Identity", "Messaging Framework"] },
                    { title: "Build", items: ["Experience Design", "Digital Design", "Art Direction", "UX Design", "UI Design", "Accessibility", "Copywriting", "Photography and Film", "Packaging Design", "Communication Design"] }
                ].map((section, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <h1 className="text-2xl font-bold">{section.title}</h1>
                        <ul className="mt-2 space-y-2">
                            {section.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Deliver;
