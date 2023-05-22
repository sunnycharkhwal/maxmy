import React from "react";
import { Container } from "react-bootstrap";

export const Cta = (props) => {
  return (
    <Container fluid className={`py-md-3 py-3  ${props.bgcolor}`}>
      {/* String Literal */}
      <row className="py-md-5 py-3 g-5 d-flex flex-column justify-content-center align-items-center">
        <div className=" col-12 text-center wow animate__animated animate__fadeInDown">
          <div>
            <div
              className={
                props.bgcolor === "greengradient" ? "text-white" : "text-dark"
              }
            >
              <p className="all_p_title">{props.ctasubheading}</p>
              <h2 className="all_h1_title">{props.ctaheading}</h2>
            </div>
          </div>
        </div>
        <div className={props.className}>{props.children}</div>
      </row>
    </Container>
  );
};
