import React from "react";
import Slider from "../inc/slider";
import { Link } from "react-router-dom";
import Services from "../inc/Services";

function Home() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx-auto"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                ducimus exercitationem aspernatur quo, distinctio dicta ipsum
                debitis ut nisi officia qui deserunt reprehenderit dolorum neque
                nam pariatur! In, recusandae nam.
              </p>

              <Link to="/About" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Services />
    </div>
  );
}
export default Home;
