import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])


    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=> {
            const popularItems = data.filter(item=>item.category === 'popular')
            setMenu(popularItems)
            console.log(popularItems)
        })
    },[])
    return (
        <section>
            <SectionTitle
            heading={'FROM OUR MENU'}
            subHeading={'Check it out'}
            />

            <div className="grid md:grid-cols-2 gap-8">
                {
                    menu.map(item=> <MenuItem
                        key={item._id}
                        item={item}
                        />)
                }
            </div>
            <div className="text-center">
            <button className="button">View Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;