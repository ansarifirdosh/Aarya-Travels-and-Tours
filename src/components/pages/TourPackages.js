import React from "react";
import Records from "../pages/Records.json";

const TourPackages = () => {
  return (
    <div className="container">
    <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading"> Best Tour package For You</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                ducimus exercitationem aspernatur quo, distinctio dicta ipsum
                debitis ut nisi officia qui deserunt reprehenderit dolorum neque
                nam pariatur! In, recusandae nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                ducimus exercitationem aspernatur quo, distinctio dicta ipsum
                debitis ut nisi officia qui deserunt reprehenderit dolorum neque
                nam pariatur! In, recusandae nam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                ducimus exercitationem aspernatur quo, distinctio dicta ipsum.
                
              </p>
            </div>
          </div>
        <div className="contain mt-4">
        <div className="row p-2">
      {Records &&
        Records.map((record) => {
          return (
              
                <div className="col-lg-4 col-sm-12 p-3 ">
                  <div className="card" key={record.id}>
                    <img className="card-img-top " alt="" src={record.icon} />
                    <div className="card-body">
                      <h5 className="card-title"> {record.caption}</h5>
                      <p className="card-text"> {record.content}</p>
                      <a href="/" className="btn btn-primary d-block">
                        Explore
                      </a>
                      <div class="card-footer text-muted">
    2 days ago
  </div>
                    </div>
                  </div>
                </div>
              
          );
        })}
    </div>
    </div>
    </div>
  );
};

export default TourPackages;
