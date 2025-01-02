import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "Founder & CEO",
      description: "With over 15 years in the automotive industry, John leads our vision of providing exceptional car rental experiences.",
      image: "https://sarahdovephotography.com/wp-content/uploads/2018/10/will-headshot.jpg"
    },
    {
      name: "Sarah Johnson",
      position: "Fleet Manager",
      description: "Sarah ensures our fleet meets the highest standards of quality and performance for our customers.",
      image: "https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8="
    },
    {
      name: "Michael Chen",
      position: "Customer Relations Head",
      description: "Michael leads our customer service team, ensuring every rental experience exceeds expectations.",
      image: "https://harvardtechnologyreview.com/wp-content/uploads/2023/10/image.jpeg"
    },
    {
      name: "Emma Davis",
      position: "Operations Director",
      description: "Emma oversees daily operations and strategic planning to deliver seamless rental services.",
      image: "https://sacredheartpioneers.com/images/2024/9/10/Emma_Davis_shuswimdive_252.jpg"
    }
  ];

  return (
    <div className="team-container">
      <div className="team-header">
        <h1>Meet Our Team</h1>
        <p>The passionate professionals behind our exceptional service</p>
      </div>
      
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <h4>{member.position}</h4>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;