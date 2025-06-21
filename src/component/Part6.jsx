import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Part6 = () => {
  const teamMembers = [
    { 
      name: "Full Name 1",
      designation: "Designation 1",
      image: "/img/10014.jpg"
    },
    { 
      name: "Full Name 2",
      designation: "Designation 2",
      image: "/img/10015.jpg"
    },
    { 
      name: "Full Name 3",
      designation: "Designation 3",
      image: "/img/10016.jpg"
    },
    { 
      name: "Full Name 4",
      designation: "Designation 4",
      image: "/img/10017.jpg"
    }
  ];

  return (
    <div className="container py-5">
      {/* Heading Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 mb-3">Team Members</h1>
        <h2 className="h3 text-muted">Our Master Chefs</h2>
        <div className="mx-auto" style={{ width: '50px', borderBottom: '3px solid #000', marginTop: '1rem' }}></div>
      </div>

      {/* Team Cards */}
      <div className="row g-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-3 col-sm-6">
            <div className="card border-0 h-100 shadow-sm hover-shadow-lg transition-all">
              <img 
                src={member.image} 
                alt={member.name}
                className="card-img-top img-fluid"
                style={{ height: '300px', objectFit: 'cover', 
                    borderRadius:'50%'    
                }}  
              />
              <div className="card-body text-center">
                <h3 className="card-title h5 mb-1">{member.name}</h3>
                <p className="card-text text-muted">{member.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Part6;