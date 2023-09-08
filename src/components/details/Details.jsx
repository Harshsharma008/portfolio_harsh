import React from "react";
import './details.css';



const Details = () => {
  return (
    <div name="home" className="container">
      {/* Container  */}
      <div className="nameContainer">
        <div className="box">
        <h1 className="name">
        Hi, My name is <span>Harsh Sharma</span>
        </h1>
        <h2 className="ability">
          Learner|Developer
        </h2>
        </div>
       
        <p className="about">
          Hi, I'm a web dev enthusiast who enjoys creating beautiful websites
          with HTML, CSS, JS and React. I also have some experience with Java
          and data structures. I'm a final year BTech student, looking for
          opportunities to learn and grow.
        </p>
        </div>
    </div>
  );
};

export default Details;