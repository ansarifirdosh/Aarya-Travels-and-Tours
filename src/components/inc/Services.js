import React from "react";
import aero from "../images/aero.jpg";
import beach from "../images/beach.jpg";
import bmw from "../images/bmw.jpg";
import { Link } from "react-router-dom";


function Services(){
    return(
        <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading"> Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img src={bmw} className=" border-button img-fluid " alt="services" />
                <div className="card-body">
                  <h6> Vehicle Service</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi voluptatibus ab veniam delectus beatae iure illo,
                  </p>
                  <Link to='/services' className="btn btn-link">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img src={aero} className="w-100 border-button" alt="services" />
                <div className="card-body">
                  <h6> Fligt Booking</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi voluptatibus ab veniam delectus beatae iure illo,
                  </p>
                  <Link to='/services' className="btn btn-link">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img src={beach} className="w-100 border-button" alt="services" />
                <div className="card-body">
                  <h6> Hotel Booking</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi voluptatibus ab veniam delectus beatae iure illo,
                  </p>
                  <Link to='/services' className="btn btn-link">Read More</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    
    );
}

export default Services;