import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    datetime: '',
    people: '1',
    request: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Booking submitted successfully!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mt-5">
      <div className="row min-vh-100">
        
        {/* Left Side - Image */}
        <div className="col-lg-6 d-none d-lg-block ">
          <div 
            className="h-75"
            style={{ 
              backgroundImage: "url('/img/10022.jpg')", // Replace with your image
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        {/* Right Side - Form */}
        <div className="col-lg-6 d-flex  bg-light">
          <div className="w-100 p-1">
            <h2 className="text-center text-uppercase mb-5 display-5 fw-bold">
              Book A Table Online
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <input
                    type="datetime-local"
                    className="form-control form-control-lg"
                    name="datetime"
                    value={formData.datetime}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <select
                    className="form-select form-select-lg"
                    name="people"
                    value={formData.people}
                    onChange={handleChange}
                    required
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Person' : 'People'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Special Request"
                  name="request"
                  value={formData.request}
                  onChange={handleChange}
                  rows="3"
                />
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="btn btn-danger btn-lg px-5 py-3 text-uppercase fw-bold shadow"
                >
                  Book Now
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
