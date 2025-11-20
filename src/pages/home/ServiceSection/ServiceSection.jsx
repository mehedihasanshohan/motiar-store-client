import React from "react";

const features = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    img: "/assets/live-tracking.png",
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    img: "/assets/safe-delivery.png",
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    img: "/assets/safe-delivery.png",
  },
];

const ServiceSection = () => {
  return (
    <div className="w-full py-16 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Top Border */}
        <div className="border-t border-dashed border-gray-300 mb-10"></div>

        {/* Cards */}
        <div className="space-y-6">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white rounded-xl shadow-sm p-6"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-28 h-28 object-contain"
              />

              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Border */}
        <div className="border-b border-dashed border-gray-300 mt-10"></div>
      </div>
    </div>
  );
};

export default ServiceSection;
