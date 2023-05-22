import { NavLink } from "react-router-dom";
import Glass from "../../../img/glass.png";
import CartImg from "../../../img/cart.png";
export const ActiveNav = () => {
  return (
    <>
      <div id="breadcrumbscontent">
        <div
          className="container-fluid p-2"
          style={{ backgroundColor: "#E2F0FF" }}
        >
          <div className="container pr-0">
            <div className="row justify-content-between align-items-center">
              <div className="breadcrumbs text-center col-5 d-sm-flex d-none">
                <small className="breadcrumbroot">
                  <NavLink to="/">Home</NavLink>
                </small>
                <small className="breadcrumbsec breadactive">
                  <NavLink to="/">Active Page</NavLink>
                </small>
              </div>
              <div className="icons col-sm-5 col-12 d-flex justify-content-sm-end justify-content-center align-items-center">
                <div>
                  <div className="input-group justify-content-around align-items-center">
                    <input
                      type="search"
                      placeholder="Search Here"
                      aria-describedby="button-addon1"
                      className="form-control navsearch rounded-pill  fontrale border-0 bg-light "
                    />
                    <br />
                    <div className="input-form-append">
                      <button type="submit" className="active_nav_my">
                        <img className="searchnavicon" src={Glass} alt="f" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="carticon mx-2">
                  <NavLink to="/cart">
                    <img src={CartImg} alt="Glass" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
