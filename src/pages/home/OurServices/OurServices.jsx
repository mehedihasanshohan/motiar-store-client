import React from "react";
import logo from '/assets/service.png'

const services = [
  {
    title: "Express & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours.",
    bg: "bg-white",
  },
  {
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    bg: "bg-lime-200",
  },
  {
    title: "Fulfillment Solution",
    desc: "We offer customized service with inventory management support, online order processing, packaging, and after-sales support.",
    bg: "bg-white",
  },
  {
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    bg: "bg-white",
  },
  {
    title: "Corporate Service / Contract In Logistics",
    desc: "Customized corporate services which includes warehouse and inventory management support.",
    bg: "bg-white",
  },
  {
    title: "Parcel Return",
    desc: "Through our reverse logistics facility we allow end customers to return or exchange their products.",
    bg: "bg-white",
  },
];

const OurServices = () => {
  return (
    <div className="w-full bg-[#03363D] py-20">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <h2 className="text-white text-3xl font-bold">Our Services</h2>
        <p className="text-white mt-3 max-w-2xl mx-auto text-sm">
          Enjoy fast, reliable parcel delivery service with real-time tracking
          and zero hassle. From personal packages to business shipments — we
          deliver on time, every time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 rounded-xl">
          {services.map((item, index) => (
            <div
              key={index}
              className='bg-white hover:bg-primary cursor-pointer rounded-xl shadow-md p-6 transition hover:shadow-lg}'
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full">
                <img src={logo} alt="" />
              </div>

              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>

              <p className=" text-sm font-semibold mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
