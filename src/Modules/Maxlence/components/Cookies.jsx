import AcceptCookies from "../../../img/acceptCookies.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React from "react";
import { NavLink } from "react-router-dom";
export const Cookies = () => {
  const [openCookies, setOpenCookies] = React.useState(false);
  // const handleOpen = () => setOpenCookies(true);
  const handleClose = () => setOpenCookies(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "background.paper",
    border: "0px solid transparent",
    boxShadow: 24,
    p: 0,
    borderRadius: "25px",
  };
  return (
    <Modal
      open={openCookies}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="accept_cookies_main_div">
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="accept_cookies_img_div">
            <img className="accept_cookies_img" src={AcceptCookies} alt="img" />
            <p>we use cookies to make your experience better</p>
          </div>
          <div className="row m-0">
            <div className="col-6 p-0">
              <NavLink
                className="accept_cookies_btn1"
                to="/privacy_policy"
                onClick={handleClose}
              >
                Privacy policy
              </NavLink>
            </div>
            <div className="col-6 p-0">
              <button className="accept_cookies_btn2" onClick={handleClose}>
                It’s okay
              </button>
            </div>
          </div>
        </Typography>
      </Box>
    </Modal>
  );
};
