/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const OnCard = ({ card }) => {
    const {id, picture, category_name, title, card_bg, category_bg, text_color } = card || {};
  
    const cardStyle = {
      backgroundColor: card_bg || 'white',
      color: text_color || 'black',
    };

    return (
      <Link to={`/cards/${id}`}>
        <div>
          <div className={`card  shadow-xl`} style={cardStyle}>
            <figure><img className="w-full" src={picture} alt="picture" /></figure>
            <div className="p-4 space-y-2">
              <h2 className="text-sm font-medium p-2 rounded-md inline-block" style={{ backgroundColor: category_bg || 'transparent' }}>{category_name}</h2>
              <p className="text-xl font-semibold">{title}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  };
  
  export default OnCard;
  