import React from "react";
import taj from "../images/taj.jpg";
import taj2 from "../images/taj2.jpg";
import taj3 from "../images/taj3.jpg";

function Slider() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="false"
    >
      <div class="carousel-indicators">
        <li
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
      </div>
      <div class="carousel-inner ">
        <div class="carousel-item active ">
          <img src={taj3} className="d-block w-100" alt="..." />
          <div class="carousel-caption text-danger  ">
            <h5>The Heaven In Earth</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis maxime eos suscipit tenetur inventore alias itaque. Quos est, expedita beatae,
             cupiditate eius voluptatum dolor officia omnis eligendi porro in?</p>
            <button className="btn btn-success">Explore More</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src={taj} className="d-block w-100" alt="..." />
          <div class="carousel-caption">
            <h5>Nature</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis maxime eos suscipit tenetur inventore alias itaque. Quos est, expedita beatae,
             cupiditate eius voluptatum dolor officia omnis eligendi porro in?</p>
            <button className="btn btn-success">Explore More</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src={taj2} className="d-block w-100" alt="..." />
          <div class="carousel-caption">
            <h5>We make you Travel</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis maxime eos suscipit tenetur inventore alias itaque. Quos est, expedita beatae,
             cupiditate eius voluptatum dolor officia omnis eligendi porro in?</p>
            <button className="btn btn-success">Explore More</button>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
