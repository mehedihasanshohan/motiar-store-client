import React from "react";
import logo from "/assets/bookingIcon.png";

const Works = () => {
  const items = [
    {
      title: "Booking Pick & Drop",
      desc: "From personal packages to business shipments - we deliver on time every time",
    },
    {
      title: "Fast Delivery",
      desc: "City-wide express delivery within hours—safe, fast, reliable",
    },
    {
      title: "Live Tracking",
      desc: "Track your parcel in real time with accurate location updates",
    },
    {
      title: "Secure Packaging",
      desc: "We ensure maximum care and safety for all types of packages",
    },
  ];

  return (
    <>
    <h2 className="text-2xl font-bold text-center mt-8 text-secondary">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className=" p-5 rounded-xl shadow hover:shadow-xl transition-all duration-300"
        >
          <img src={logo} alt="icon" className="w-20 mx-auto mb-4" />

          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className=" mt-2">{item.desc}</p>
        </div>
      ))}
    </div>
  </>
  );
};

export default Works;
