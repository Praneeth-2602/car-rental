import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import johnDoe from "../images/johndoe.png";
import janesmith from "../images/janesmith.png";
import alexjohnson from "../images/alexjohnson.png";
import emilydavis from "../images/emilydavis.png";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: johnDoe,
    car: "Toyota Camry",
    rating: "⭐⭐⭐⭐⭐",
    review: "Fantastic service! The car was in excellent condition, and the process was seamless.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: janesmith,
    car: "Honda Accord",
    rating: "⭐⭐⭐⭐",
    review: "Great experience overall! Would definitely rent from here again.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    image: alexjohnson,
    car: "BMW 5 Series",
    rating: "⭐⭐⭐⭐⭐",
    review: "The team was very professional, and the car exceeded my expectations!",
  },
  {
    id: 4,
    name: "Emily Davis",
    image: emilydavis,
    car: "Tesla Model 3",
    rating: "⭐⭐⭐⭐⭐",
    review: "Loved the electric car option! Smooth ride and easy process.",
  },
];

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundColor: "#fc7703",
        color: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "40px",
        height: "40px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundColor: "#fc7703",
        color: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "40px",
        height: "40px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <div>
      <h1>What Our Customers Say</h1>
      <div className="carousel-container">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="carousel-card">
              <div className="card">
                <div className="card-front">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <h3>{testimonial.name}</h3>
                  <p>Car: {testimonial.car}</p>
                  <p className="rating">{testimonial.rating}</p>
                </div>
                <div className="card-back">
                  <p>{testimonial.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
