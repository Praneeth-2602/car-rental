import React from "react";
import "./about.css";
import Content from "../components/Card/Content";
import Card from "../components/Card/Card";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-text">
        Welcome to the Car Rental project! This application allows users to rent
        cars easily and efficiently. It provides a user-friendly interface for
        both customers and administrators to manage car rentals.
      </p>

      <section className="about-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-text">
          Our mission is to simplify car rentals for everyone. Whether you're a
          customer looking for a reliable car or an administrator managing
          rental operations, our platform is designed to make the process
          seamless and stress-free.
        </p>
      </section>

      <section className="about-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <ul className="about-list">
          <li>User-friendly interface for quick and easy bookings</li>
          <li>Wide range of cars to suit every need</li>
          <li>Secure payment options and transparent pricing</li>
          <li>Efficient tools for administrators to manage rentals</li>
        </ul>
      </section>

      <section className="about-section">
        <h2 className="section-title">Key Features</h2>
        <p className="section-text">
          Our application is packed with features to ensure a smooth car rental
          experience:
        </p>
        <div className="card-container">
          {Content.map((card) => (
            <Card key={card.id} title={card.title} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
