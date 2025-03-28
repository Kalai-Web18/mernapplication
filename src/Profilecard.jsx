import React from "react";
import "./ProfileCard.css"; // Import CSS

const ProfileCard = ({ name, department, age, phone, email, image }) => {
  return (
    <div className="profile-card">
      <img src={image} alt="Profile" className="profile-image" />
      <div className="profile-details">
        <h2>{name}</h2>
        <p className="department">{department}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
