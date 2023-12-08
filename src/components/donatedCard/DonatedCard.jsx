/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

const DonatedCard = ({ cardBody }) => {

  const {id, picture, price, title, text_color, description } = cardBody || {};

  const handleAddToFavorites = () => {

    const addedDonatedsArray = [];

    const donatedItem = JSON.parse(localStorage.getItem('donations'))

    if(!donatedItem){
        addedDonatedsArray.push(cardBody)
        localStorage.setItem('donations', JSON.stringify(addedDonatedsArray))
        swal("Good job!", "This Donation Already Added!", "success");
    }
    else{

        const cardIsDonated = donatedItem?.find((card) => card.id === parseInt(id));

        if(!cardIsDonated){
            addedDonatedsArray.push(...donatedItem,cardBody)
            localStorage.setItem('donations', JSON.stringify(addedDonatedsArray))
            swal("Good job!", "This Donation Already Added!", "success");
        }
        else{
            swal("Error!", "This Donation Already Added!", "error");
        }
    }
}

  return (
    <div className="md:mx-24 p-4 md:mb-16 space-y-3 rounded-xl">
      <div className="relative rounded-xl">
        <div>
          <img className="w-full h-[50vh] md:h-[80vh] rounded-xl" src={picture} alt="" />
        </div>
        <div
          className="p-3 md:p-6 absolute bottom-0 w-full rounded-br-xl rounded-bl-xl"
          style={{ backgroundColor: `rgba(0, 0, 0, 0.5)` }}
        >
          <Link onClick={handleAddToFavorites}>
          <button
            className=" md:btn btn-sm rounded-md font-medium"
            style={{ backgroundColor: text_color || "transparent" }}
          >
            Donate: ${price}
          </button>
          </Link>
        </div>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="font-normal text-gray-500">{description}</p>
    </div>
  );
};

export default DonatedCard;
