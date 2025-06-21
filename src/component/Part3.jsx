import React from 'react';

const Restoran = () => {
  return (
    <div style={{
      fontFamily: "'Arial', sans-serif",
      margin: 0,
      padding: 0,
      color: '#333'
    }}>
      <div style={{
        display: 'flex',
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        {/* Image Gallery - Left Side */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '15px',
          paddingRight: '30px'
        }}>
          <img 
            src="/img/10002.jpg" 
            alt="Restaurant dish 1" 
            style={{
              width: '100%',
              height: 'auto',
              
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s'
            }}
          />
          <img 
            src="/img/10003.jpg" 
            alt="Restaurant dish 2" 
            style={{
              width: '80%',
              height: 'auto',
              
              marginTop: '50px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s'
            }}
          />
          <img 
            src="/img/10004.jpg" 
            alt="Restaurant chef" 
            style={{
              width: '80%',
              height: 'auto',
              marginLeft: '50px',
             
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s'
            }}
          />
          <img 
            src="/img/10005.jpg" 
            alt="Restaurant interior" 
            style={{
              width: '100%',
              height: 'auto',
              
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s'
            }}
          />
        </div>
        
        {/* Content - Right Side */}
        <div style={{
          flex: 1,
          paddingLeft: '30px',
          marginTop: '50px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            color: '#222'
          }}>
            Welcome to <span style={{ color: '#c49b63' }}>Restoran</span>
          </h1>
          
          <p style={{
            lineHeight: 1.6,
            marginBottom: '20px',
            color: '#666'
          }}>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
          </p>
          
          <p style={{
            lineHeight: 1.6,
            marginBottom: '20px',
            color: '#666'
          }}>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Cilta erat ipsum et lorem et sit, sed stet lorem sit cilta duo justo magna dolore erat amet
          </p>
          
          <hr style={{
            border: 0,
            height: '1px',
            background: '#ddd',
            margin: '30px 0'
          }}/>
          
          <div style={{
            display: 'flex',
            gap: '30px',
            marginBottom: '30px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#c49b63',
                marginBottom: '5px'
              }}>15</div>
              <div style={{
                fontSize: '0.9rem',
                color: '#666',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Years of EXPERIENCE</div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#c49b63',
                marginBottom: '5px'
              }}>50</div>
              <div style={{
                fontSize: '0.9rem',
                color: '#666',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Popular MASTER CHEFS</div>
            </div>
          </div>
          
          <a href="#" style={{
            display: 'inline-block',
            background: '#c49b63',
            color: 'white',
            padding: '12px 30px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'background 0.3s'
          }}>READ MORE</a>
          
         
        </div>
      </div>
    </div>
  );
};

export default Restoran;