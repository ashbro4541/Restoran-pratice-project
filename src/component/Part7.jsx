import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCarousel = () => {
    const testimonials = [
        {
            id: 1,
            text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
            name: "John Doe",
            profession: "Food Critic",
            image: "/img/10018.jpg"
        },
        {
            id: 2,
            text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
            name: "Jane Smith",
            profession: "Restaurant Owner",
            image: "/img/10019.jpg"
        },
        // Add 4 more testimonials following the same structure
        ...Array(4).fill().map((_, i) => ({
            id: i + 3,
            text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
            name: "Client Name",
            profession: "Profession",
            image: "/img/10020.jpg"
        }))
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        appendDots: dots => (
            <div style={{ position: 'relative', bottom: '30px' }}>
                <ul style={{ margin: '0', padding: '0' }}>{dots}</ul>
            </div>
        ),
        customPaging: i => (
            <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#ddd',
                margin: '0 5px'
            }}></div>
        )
    };

    return (
        <div style={{ padding: '50px 0', backgroundColor: '#f8f9fa' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#333' }}>Textinomial</h1>
                    <h2 style={{ fontSize: '1.5rem', color: '#666' }}>Our Clients Say!!!</h2>
                </div>

                <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} style={{ padding: '0 20px' }}>
                            <div style={{
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                padding: '40px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                textAlign: 'center'
                            }}>

                                <p style={{
                                    fontSize: '1.1rem',
                                    color: '#666',
                                    lineHeight: '1.6',
                                    marginBottom: '25px',
                                    maxWidth: '800px',
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                }}>
                                    {testimonial.text}
                                </p>
                                <div className="d-flex justify-content-center align-items-center">  
                                    <div  >
                                        <div style={{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '50%',
                                            overflow: 'hidden',
                                            margin: '0 auto 20px',
                                            backgroundColor: '#eee'
                                        }}>
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>
                                        <div className="">
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            marginBottom: '5px',
                                            color: '#333'
                                        }}>
                                            {testimonial.name}
                                        </h3>
                                        <p style={{
                                            color: '#888',
                                            fontSize: '0.9rem'
                                        }}>
                                            {testimonial.profession}
                                        </p>
                                    </div></div></div>
                            </div></div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialCarousel;