import ENDPOINT from "../config/ENDPOINT";
import { useEffect, useState } from "react";

export const PartnersList = () => {
  const [partners, setPartners] = useState([]);

  async function getPartners() {
    let res = await fetch(ENDPOINT + `logo-partners?limit=12`);
    const data = await res.json();
    setPartners(data);
  }

  useEffect(() => {
    getPartners();
  }, []);

  const PartnerContainer = (props) => {
    return (
      <div className=" text-center col-sm-4 col-6">
        <div className="partnerName">
          <img width="100%" src={ENDPOINT + "uploads/" + props.img} alt="f" />
        </div>
      </div>
    );
  };

  return (
    <>
      {partners.map((val, i) => {
        return <PartnerContainer key={i} {...val} />;
      })}
    </>
  );
};
