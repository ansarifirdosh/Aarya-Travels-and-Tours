import React from "react";
import esewa from "../images/esewa.jpg"; 
import buddha from "../images/buddha.jpg"; 
import so from "../images/so.jpeg"; 
import kh from "../images/kh.png"; 
import download from "../images/download.jpg"; 
import { BiHappy } from 'react-icons/bi';
import { SiYourtraveldottv } from 'react-icons/si';
import { FaPlaceOfWorship } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';








function Aboutus() {
    return (
        <section className="section">
       <div className="bg-secondary">
       <div className="container mt-3">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading"> Who We Are?</h3>
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
        </div>
       </div>

        <div className="container mt-3">
          <div className="row">
            <div className="col-md-8 text-center">
              <h3 className="main-heading">What We Offer?</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae culpa
               quia maxime libero eius perferendis voluptatem provident aliquid fugiat
                mollitia dolor corporis pariatur itaque, dignissimos adipisci! Eveniet
                 excepturi dolorem ratione! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae culpa
               quia maxime libero eius perferendis voluptatem provident aliquid fugiat
                mollitia dolor corporis pariatur itaque, dignissimos adipisci! Eveniet
                 excepturi dolorem ratione! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae culpa
               quia maxime libero eius perferendis voluptatem provident aliquid fugiat
                mollitia dolor corporis pariatur itaque, dignissimos adipisci! Eveniet
                 excepturi dolorem ratione! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae culpa
               quia maxime libero eius perferendis voluptatem provident aliquid fugiat
                mollitia dolor corporis pariatur itaque, dignissimos adipisci! Eveniet
                 excepturi dolorem ratione!</p>
            </div>
            <div className="col-md-4 my-lg-4">
            <img src={download} className=" imgmanage border-button" alt="services" />
            </div>
          </div>
        </div>



        <div className="section bg-primary">
        <div className="container mt-5">
        <h3 className="main-heading text-center p-4"> We are so Popular.....</h3>
          
        <div className="row">
            <div className="jpt">
            <div className="row">
           
            <div className="col-lg-3 col-md-12 ">
            <BiHappy size={55}/>
            <h3>12000+</h3>
            <p>HAPPY TRAVELLER</p>
            </div>

            <div className=" col-lg-3 col-md-12">
            <SiYourtraveldottv size={55}/>
            <h3>9300+</h3>
            <p>Flight Booked</p>
            </div>

            <div className="col-lg-3 col-md-12">
            <FaPlaceOfWorship size={55}/>
            <h3>300+</h3>
            <p>Destinations</p>
            </div>

            <div className="col-lg-3 col-md-12">
            <IoIosPeople size={55}/>
            <h3>120000+</h3>
            <p>Customers</p>
            </div>
            </div>
            </div>
          </div>
        </div>
            </div>
          




        <div className="container mt-5">
          <div className="row">
          <h3 className="main-heading text-center mt-3"> Our Partner</h3>
            <div className="col-md-3 text-center">
            <img src={esewa} className=" imgmanage border-button" alt="services" />
            </div>

            <div className="col-md-3 col-lg-3">
            <img src={buddha} className=" imgmanage border-button" alt="services" />
            </div>

            <div className="col-md-3 col-lg-3 ">
            <img src={kh} className=" imgmanage border-button" alt="services" />
            </div>

            <div className="col-md-3 col-lg-3">
            <img src={so} className=" imgmanage border-button" alt="services" />
            </div>
          </div>
        </div>




      </section>

    );
}
export default Aboutus;