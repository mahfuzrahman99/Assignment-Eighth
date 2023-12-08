/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import OnCard from "../onCard/OnCard";

const Cards = ({saveValue}) => {
  
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch('blog.json')
    .then(res => res.json())
    .then(data => setData(data))
  },[])

  let display = data.filter(item => item.category_name);

  if(saveValue === "Health" || saveValue === "health" || saveValue === "HEALTH"){
    display = data.filter(item => item.category_name === "Health");
  }
  else if(saveValue === "Education" || saveValue === "education" || saveValue === "EDUCATION"){
    display = data.filter(item => item.category_name === "Education");
  }
  else if(saveValue === "Clothing" || saveValue === "clothing" || saveValue === "CLOTHING"){
    display = data.filter(item => item.category_name === "Clothing");
  }
  else if(saveValue === "Food" || saveValue === "food" || saveValue === "FOOD"){
    display = data.filter(item => item.category_name === "Food");
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 md:mx-16 lg:mx-24 my-5 md:my-16">

        {
          display && display.length > 0 ? display.map((card, i) => <OnCard key={i} card={card}></OnCard>) : ("")
        }

      </div>
    </div>
  );
};

export default Cards;
