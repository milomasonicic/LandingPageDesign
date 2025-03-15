import WordsPullUp from "./Naslov1"
import Card1 from "./Card1"
import './horizontalskrol.css'

function Item1()
{
    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
    return <div className="w-[90%]">

            <div className="app1">
            {items.map((item, i) => (
                <Card1 key={i} text={item} index={i} />
            ))}
            </div>
        

    </div>
}

export default Item1