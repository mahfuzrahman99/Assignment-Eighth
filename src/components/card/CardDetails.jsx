import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonatedCard from "../donatedCard/DonatedCard";


const CardDetails = () => {

    const [cardBody, setCardBody] = useState([]);

    const {id} = useParams();

    const cards = useLoaderData();

    useEffect(()=>{
      const donatedCard = cards?.find((card) => card.id === parseInt(id));
      setCardBody(donatedCard)
    },[id, cards])

    return (
        <div>
            <DonatedCard cardBody={cardBody}></DonatedCard>
        </div>
    );
};

export default CardDetails;