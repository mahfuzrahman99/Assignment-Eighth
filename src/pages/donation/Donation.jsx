import { useEffect, useState } from "react";
import swal from "sweetalert";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);

  const [noFound, setNoFound] = useState("");

  const [isShow, setIsShow] = useState(false);

  const [totalCurrency, setTotalCurrency] = useState(0);

  useEffect(() => {
      const donatedItem = JSON.parse(localStorage.getItem("donations"));

      const total = donatedItem.reduce((acc, c) => acc + c.price, 0);

      setTotalCurrency(total)
      
    if (donatedItem) {
      setDonations(donatedItem);
    } else {
      swal("Error!", "No Data Found!", "error");
      setNoFound("No Data Found");
    }
  }, []);

  const handleRemove = () => {
    localStorage.clear();
    setDonations([]);
    setNoFound("No Data Found");
  };

  return (
    <div>
      {noFound ? (
        <p className="text-3xl font-medium  flex justify-center items-center h-[70vh]">
          {noFound}
        </p>
      ) : (
        <div>
          <div className="md:flex justify-between items-center space-y-2 mx-10 md:mx-20 ">
            <div>
            {donations.length > 0 && (
            <button
            onClick={handleRemove}
            className="md:btn btn-sm rounded-lg  text-base font-medium  md:w-auto w-full   bg-gray-300"
            >
            Delete All Donation
            </button>
                )}
            </div>
            <div>
                <p className="p-2  md:w-auto w-full text-base font-medium rounded-lg bg-[#f1e2e7]">Total Donation Price: <span className="text-[#b1564e] text-lg font-semibold">${totalCurrency}</span></p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-2 mt-2 mx-4 md:mx-16 justify-center">
            {isShow
              ? donations.map((donation) => (
                  <DonationCard
                    key={donation.id}
                    donation={donation}
                  ></DonationCard>
                ))
              : donations
                  .slice(0, 4)
                  .map((donation) => (
                    <DonationCard
                      key={donation.id}
                      donation={donation}
                    ></DonationCard>
                  ))}
          </div>
          {donations.length > 4 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className={
                isShow
                  ? `btn btn-sm px-4 mb-6 p-2 mx-auto block bg-gray-300 `
                  : `btn p-2 mb-6 mx-auto block bg-gray-300`
              }
            >
              {!isShow ? "See Details" : "See Less"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
