import React from "react";


function Contactus() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <h6 style={{ fontSize: "30px" }}>Contact us</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card shadow mt-4">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Contact form</h6>
                  <hr />
                  <div className="form-group">
                    <label className="mb-2">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Name"
                    />

                    <label className="mb-2">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />

                    <label className="mb-2">Contact Number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter your Phone Number"
                    />

                    <label className="mb-2">Message</label>
                    <textarea
                      rows="3"
                      className="form-control"
                      placeholder="Enter your Message"
                    ></textarea>

                    <div className="form-group">
                      <button
                        className="btn btn-warning shadow mt-3 w-100"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="con col-md-6 border-start ">
                    <div className="card shadow mt-4 p-3">
                    <h3 className="text-center ">Contact Address</h3>
                    <div className="underline w-100"> </div>
                    <h6 className="m-3">Name: Aarya Tours and Travels</h6>
                    <h6 className="m-3">Address: kathmandu</h6>
                    <h6 className="m-3">Contact: 9878989898</h6>
                    <a href="mailto:abc@gmail.com">Email: abc@gmail.com</a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contactus;
