import { motion, useScroll, useTransform } from "framer-motion";
import { BlurIn } from "./BlurIn";
import NewsItem from "./NewsItem";

function News() {
    // Koristimo niz objekata za naslove i boje
    const newsTitles = [
        { title: "Breaking News: Market Crash", bg: "green" },
        { title: "Tech Update: AI Revolution", bg: "blue" },
        { title: "Sports: Championship Finals", bg: "red" },
        { title: "Weather Alert: Heavy Rain", bg: "purple" },
        { title: "Entertainment: New Movie Release", bg: "orange" },
        { title: "Politics: Election Updates", bg: "yellow" },
        { title: "Health: New Research Findings", bg: "pink" },
        { title: "Travel: Best Destinations 2024", bg: "teal" }
    ];

    return (
        <div className="w-full bg-slate-50 pt-10 min-h-[2200px] max-h-[2500px]">
            <div className="flex justify-between px-8 w-full items center mb-80">
                <h2>What's new?</h2>
                <BlurIn>News Feed</BlurIn>
            </div>

            <div>
                <div className="mt-6 flex justify-center items-center mx-auto w-full mt-30 flex-wrap gap-4 px-8">
                    {/* Mapiramo naslove i pozadine */}
                    {newsTitles.map((item, index) => (
                        <NewsItem 
                            key={index} 
                            title={item.title}  // Naslov vesti
                            bgBackground={item.bg} // Boja pozadine
                            index={index} // Kasnjenje animacije
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default News;

