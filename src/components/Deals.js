import React from "react";
import wingsDealImg from "../assets/wings-deal.jpg";
import crispyDealImg from "../assets/crispy-deal.jpg";
import comboDealImg from "../assets/combo-deal.jpg";
import "./Deals.css";

function Deals() {
  const offers = [
    {
      title: "Buy 1kg Chicken, Get 1kg Onion Free 🧅🍗",
      desc: "Kick off our inaugural offer – Grab 1kg chicken and take home 1kg onions at no extra cost!",
      img: wingsDealImg,
    },
    {
      title: "Buy 1.5kg Chicken, Get 6 Eggs Free 🥚🍗",
      desc: "Special launch offer – order 1.5kg chicken and enjoy 6 eggs absolutely free.",
      img: crispyDealImg,
    },
    {
      title: "Buy 2kg Chicken, Get 1/2kg Chicken Free 🎉",
      desc: "Celebrate with us – purchase 2kg chicken and receive an extra 1/2kg chicken for free.",
      img: comboDealImg,
    },
  ];

  const handleOrder = (dealTitle) => {
    const whatsappNumber = "8867006884"; // replace with your WhatsApp number
    const message = `Hi! I want to order: ${dealTitle}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="deals">
      <h2 className="deals-heading"> Exclusive Inaugural offers just for you!!!🚀</h2>
      <div className="deals-grid">
        {offers.map((deal, index) => (
          <div key={index} className="deal-card">
            <img src={deal.img} alt={deal.title} className="deal-img" />
            <div className="deal-content">
              <h3>{deal.title}</h3>
              <p>{deal.desc}</p>
              <button
                className="order-btn"
                onClick={() => handleOrder(deal.title)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deals;
