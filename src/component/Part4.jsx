import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  
  faSun,
  faRocket,
  
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('Popular');

  const categories = [
    { test:'Popular', name: 'Launch',   icon: faStar },
    { test:'Lovely' ,name: 'Breakfast', icon: faSun },
    { test:'Special', name: 'Dinner',   icon: faRocket }
  




  ];

  const menuItems = [
    {
      title: 'Chicken Burger',
      price: 115,
      description: 'Ipsum ipsum clita erat amet dolor justo diam',
      isPopular: true,
      image: '/img/10006.jpg' // Update with your actual image paths
    },
    {
      title: 'Cheese Burger',
      price: 125,
      description: 'Dolor sit amet consectetur adipiscing elit',
      isPopular: false,
      image: '/img/10007.jpg'
    },
    {
      title: 'Spicy Burger',
      price: 135,
      description: 'Adipiscing elit sed do eiusmod tempor',
      isPopular: true,
      image: '/img/10008.jpg'
    },
    {
      title: 'Veggie Burger',
      price: 110,
      description: 'Consectetur adipiscing elit sed do',
      isPopular: false,
      image: '/img/10009.jpg'
    },
    {
      title: 'Double Patty Burger',
      price: 145,
      description: 'Eiusmod tempor incididunt ut labore',
      isPopular: true,
      image: '/img/10010.jpg'
    },
    {
      title: 'BBQ Burger',
      price: 130,
      description: 'Labore et dolore magna aliqua',
      isPopular: false,
      image: '/img/10011.jpg'
    },
    {
      title: 'Mushroom Burger',
      price: 120,
      description: 'Ut enim ad minim veniam quis',
      isPopular: true,
      image: '/img/10012.jpg'
    },
    {
      title: 'Fish Burger',
      price: 140,
      description: 'Nostrud exercitation ullamco laboris',
      isPopular: false,
      image: '/img/10013.jpg'
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Header */}
        <header className="text-center mb-5">
          <h2 className="display mb-3">Food Menu</h2>
          <p className="lead display-5">Most Popular Items</p>
        </header>

        {/* Category Navigation */}
        <nav className="d-flex  justify-content-center mb-5">
          {categories.map((category) => (
        <div
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`btn ${
                activeCategory === category.name 
                ? 'btn-primary' 
                : 'btn-outline-secondary'
              } d-flex align-items-center gap-2`}
            >
              <FontAwesomeIcon icon={category.icon} />
              <span>{category.test}</span>
              
              <span>{category.name}</span>
            </div>
          ))}
        </nav>

        {/* Menu Grid */}
        <div className="row g-4">
          {menuItems.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-6">
              <div className="">
                <div className="card-body d-flex gap-3">
                  {/* Image Placeholder */}
                  <div className="flex-shrink-0">
                  <img 
    src={item.image} 
    alt={item.title}
    className="img-fluid rounded"
    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
  />
                  </div>

                  {/* Content */}
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title fw-bold mb-0">{item.title}</h5>
                      <span className="text-primary fw-bold">${item.price}</span>
                    </div>
                    <hr />
                  
                    
                    <p className="card-text text-muted">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;