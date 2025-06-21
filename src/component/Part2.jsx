import React from "react";
import { FaUserTie, FaUtensils, FaShoppingCart, FaHeadset } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const FeatureCards = () => {
  const features = [
    {
      title: "Master Chefs",
      description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      icon: <FaUserTie className="text-primary fs-1 mb-3" />
    },
    {
      title: "Quality Food",
      description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      icon: <FaUtensils className="text-primary fs-1 mb-3" />
    },
    {
      title: "Online Order",
      description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      icon: <FaShoppingCart className="text-primary fs-1 mb-3" />
    },
    {
      title: "24/7 Service",
      description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      icon: <FaHeadset className="text-primary fs-1 mb-3" />
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center p-4 hover-effect">
                <div className="card-body">
                  <div className="icon-wrapper mb-3">
                    {feature.icon}
                  </div>
                  <h5 className="card-title fw-bold mb-3">{feature.title}</h5>
                  <p className="card-text text-muted">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .hover-effect {
          transition: all 0.3s ease;
        }
        .hover-effect:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .icon-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(13, 110, 253, 0.1);
          border-radius: 50%;
        }
      `}</style>
    </section>
  );
};

export default FeatureCards;