import React from "react";
import { Link } from "react-router-dom";
// import { AiOutlineCopyrightCircle } from "react-icons/Ai";

function Footer() {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Company Information</h6>
            <hr />
            <p className="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              corrupti voluptatum. Alias, cumque! Optio nesciunt molestiae
              adipisci ipsum, perspiciatis ab autem architecto quaerat rem
              cupiditate dicta, vero at vel quas.
            </p>
          </div>
          
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr />
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/About">About</Link>
            </div>
            <div>
              <Link to="/TourPackages">Tour Packages</Link>
            </div>
            <div>
              <Link to="/ExtraActivities">Extra Activities</Link>
            </div>
            <div>
              <Link to="/Contact">Contact Us</Link>
            </div>
          </div>
         
          <div className="col-md-4">
            <h6>Contact Information</h6>
            <hr />
            <div> <p className="text-white mb-1">Putalisadak, kathmandu Nepal</p></div>
            <div> <p className="text-white mb-1"> 9800000000</p></div>
            <div> <p className="text-white mb-1" IoCallOutline>9848989898</p></div>
            <div> <p className="text-white mb-1"> abc@gmail.com</p></div>
          </div>
        </div>
        <div  className="row col-md-12 text-center mt-3">
         <h7> © 2021 Copyright: AaryaTravelsAndTours </h7>
        </div>
      </div>
    </section>
  );
}

export default Footer;
