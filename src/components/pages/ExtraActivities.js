import React from "react";
import Extra from "../pages/Extra.json";

const ExtraActivities = () => {
  return (
    <div>
    <div className="activ text-bg-dark p-3 m-3 text-center">
    <h3>Our Extra Activities</h3>
    </div>
    
      <div className="container p-4 text-bg-light">
        {Extra &&
          Extra.map((extra) => {
            return (
              <div className="card text-white m-3 text-center">
                <img src={extra.icon} className="cardd-img rounded" alt="" />
                <div className="card-img-overlay">
                  <h5 className="card-title">{extra.caption}</h5>
                  <p className="card-text">{extra.content}</p>
                  <p className="card-text">{extra.update}</p>
                  <button className="btn btn-success">Know More</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ExtraActivities;
