import React from "react";
import "./Menu.css";

// Import all images from src/assets
import withskinImg from "../assets/withskin.jpg";
import skinlessImg from "../assets/skinless.jpg";
import breastbonelessImg from "../assets/breastboneless.jpg";
import legbonelessImg from "../assets/legboneless.jpg";
import tandooriImg from "../assets/tandoori.jpg";
import wingtipsImg from "../assets/wingtips.jpg";
import drumstickImg from "../assets/drumstick.jpg";
import lollypopImg from "../assets/lollypop.jpg";
import wholelegImg from "../assets/wholeleg.jpg";
import wingletsImg from "../assets/winglets.jpg";
import gizzardImg from "../assets/gizzard.jpg";
import liverImg from "../assets/liver.jpg";
import chickenminceImg from "../assets/chickenmince.jpg";
import janataImg from "../assets/janata.jpg";
import petfeastImg from "../assets/petfeast.jpg";
import eggImg from "../assets/egg.jpg";

function Menu() {
  const chickens = [
    { name: "With Skin", price: "₹230 / 1kg", img: withskinImg },
    { name: "Skinless", price: "₹260 / 1kg", img: skinlessImg },
    { name: "Breast Boneless", price: "₹350 / 1kg", img: breastbonelessImg },
    { name: "Leg Boneless", price: "₹360 / 1kg", img: legbonelessImg },
    { name: "Tandoori", price: "₹250 / 1kg", img: tandooriImg },
    { name: "Wing Tips", price: "₹120 / 1kg", img: wingtipsImg },
    { name: "Drumstick", price: "₹320 / 1kg", img: drumstickImg },
    { name: "Lollypop", price: "₹320/ 1kg", img: lollypopImg },
    { name: "Whole Leg", price: "₹320 / 1kg", img: wholelegImg },
    { name: "Wings", price: "₹260/ 1kg", img: wingletsImg },
    { name: "Gizzard", price: "₹150/ 1kg", img: gizzardImg },
    { name: "Liver", price: "₹100/ 1kg", img: liverImg },
    { name: "Chicken Mince", price: "₹350 / 1kg", img: chickenminceImg },
    { name: "Janata", price: "₹50 / 1kg", img: janataImg },
    { name: "Pet Feast", price: "₹60 / 1kg", img: petfeastImg },
    { name: "Egg", price: "₹6.50/ piece", img: eggImg },
  ];

  const handleBuy = (item) => {
    const confirmPurchase = window.confirm(
      `One click away from crispy happiness—shall we proceed?\n\n${item.name} - ${item.price}`
    );
    if (confirmPurchase) {
      const whatsappNumber = "8867006884"; // replace with your WhatsApp number
      const message = `Hi! I want to order`;
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    }
  };

  return (
    <div className="menu">
      <h2>🍗 Our Fresh Chicken Menu</h2>
      <div className="menu-grid">
        {chickens.map((chicken, index) => (
          <div key={index} className="menu-card">
            <img src={chicken.img} alt={chicken.name} />
            <h3>{chicken.name}</h3>
            <p className="menu-price">{chicken.price}</p>
            <button onClick={() => handleBuy(chicken)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
