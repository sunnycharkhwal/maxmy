import React, { Component } from "react";
import TextField from "@mui/material/TextField";

export const Getintouch = () => {
  class UploadDocument extends Component {
    handleFileUpload = (event) => {
      console.log(event.target.files[0].name);
    };

    render() {
      return (
        <>
          <input
            ref="fileInput"
            onChange={this.handleFileUpload}
            type="file"
            style={{ display: "none" }}
            // multiple={false}
          />
          <div className="getintouch_upload_div">
            <div
              getintouch_title_top_div
              onClick={() => this.refs.fileInput.click()}
              className="getintouch_upload_btn"
            >
              Attach Your Document
            </div>
            <p>File size not more than 2 MB</p>
          </div>
        </>
      );
    }
  }
  return (
    <>
      <section className=" container mt-5 mb-5 getintouch_title_main_top">
        <div className="getintouch_title_top_div">
          <p>Let’s Talk</p>
          <h3>Project</h3>
          <h1 className="getintouch_title_big_title">
            Lets craft <span></span>
          </h1>
          <h1>brilliance together</h1>
          <h2>Got something in mind? We'd love to help.</h2>
          <h4>
            What are you looking for?
            <br />
            <span>
              Want to be partners in design? Looking for UX/UI research or
              product branding? Post your query now, and we'll get in touch with
              you soon!
            </span>
          </h4>
          <div className="getintouch_TextField_div">
            <TextField
              id="outlined-multiline-flexible"
              label="How can we help?"
              multiline
              minRows={6}
              maxRows={20}
              className="getintouch_TextField_main"
            />
            <small>
              If you have a requirement brief or document, share it with us
              here.
            </small>
            <h4>
              Your Details?
              <br />
              <span>Project related discussions only, please!</span>
            </h4>
            <div>
              <UploadDocument />
            </div>
            <div className="row g-4 mt-1">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <TextField
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                  type="text"
                  size="small"
                />
              </div>
              <div className="col-12">
                <div className="row g-4">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <TextField
                      id="outlined-basic"
                      label="Your Email"
                      variant="outlined"
                      type="email"
                      size="small"
                    />
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <TextField
                      id="outlined-basic"
                      label="Your Phone"
                      variant="outlined"
                      type="number"
                      size="small"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="getintouch_bottom_btn_div">
                  <button className="btn outline_btn">Send Enquiry</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
