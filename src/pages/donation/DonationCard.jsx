/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const DonationCard = ({donation}) => {

    const {id, picture, category_name, title, price, text_color, category_bg, card_bg} = donation || {}
    
    const cardStyle = {
        backgroundColor: card_bg || 'white',
        color: text_color || 'black',
      };

    return (
        <div className="flex rounded-xl lg:mx-6 gap-1 my-1 items-center" style={cardStyle}>
            <div className="flex-1 md:flex-none h-full md:h-auto">
                <img className="aspect-square h-full md:h-auto w-40 object-cover rounded-bl-xl rounded-tl-xl" src={picture} alt="" />
            </div>
            <div className="flex-1 md:flex-none p-2 ">
                <h2 className="text-sm font-medium p-2 rounded-md inline-block" style={{ backgroundColor: category_bg || 'transparent' }}>{category_name}</h2>
                <h2 className="text-base md:text-2xl font-semibold">{title}</h2>
                <h2 className="md:text-base text-sm font-semibold">Price: ${price}</h2>
                <Link to={`/cards/${id}`} >
                <button className="md:btn btn-sm text-black rounded-md text-xs md:text-base" style={{ backgroundColor: text_color || "transparent" }}>View Details</button>
                </Link>
            </div>
        </div>
    );
};

// w2/3 md:w-2/5   w-1/3 md:w-3/5 

export default DonationCard;