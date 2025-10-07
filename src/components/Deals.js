import React from "react";
import wingsDealImg from "../assets/wings-deal.jpg";
import crispyDealImg from "../assets/crispy-deal.jpg";
import comboDealImg from "../assets/combo-deal.jpg";
import paneerDealImg from "../assets/paneer-deal.jpg"; // add an image for paneer deal
import "./Deals.css";

function Deals() {
  const offers = [
    {
      title: "Buy 1kg Chicken, Get 1kg Onion Free 🧅🍗",
      desc: "Order 1kg chicken and take home 1kg onions at no extra cost!",
      img: wingsDealImg,
    },
    {
      title: "Buy 2kg Chicken, Get 6 Eggs Free 🥚🍗",
      desc: "Special offer – order 2kg chicken and enjoy 6 eggs absolutely free.",
      img: crispyDealImg,
    },
    {
      title: "Buy 3kg Chicken, Get 1/2kg Chicken Free 🎉",
      desc: "Celebrate with us – purchase 3kg chicken and receive an extra 1/2kg chicken for free.",
      img: comboDealImg,
    },
    {
      title: "₹75 Off on 500gm Paneer 🧀",
      desc: "Get fresh 500gm paneer with ₹75 discount. Don’t miss out!",
      img: paneerDealImg,
    },
  ];

  const handleOrder = (dealTitle) => {
    const whatsappNumber = "8867006884"; // replace with your WhatsApp number
    const message = `Hi! I want to order`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="deals">
      <h2 className="deals-heading">Exclusive Inaugural Great Deals 👀📢</h2>
      <p className="deals-validity">📅 Valid from Oct 5th to Nov 5th, 2025</p>

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
