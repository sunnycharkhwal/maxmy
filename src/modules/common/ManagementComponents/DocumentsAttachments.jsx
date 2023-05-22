import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Img from "../components/img/Img";
import { FcDownload } from "react-icons/fc";
import { GrFormClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FullBtn, OutlineBtn } from "./Btn/Btn";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const DocumentsAttachments = (props) => {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const removeElement = () => {
    setVisible((prev) => !prev);
  };
  const TransitionsModal = () => {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div className="delete_modal">
                <ul>
                  <li>
                    <BsFillInfoCircleFill />
                  </li>
                  <li>
                    <h3>Delete {props.name}?</h3>
                    <p>
                      {props.name} will be deleted permanently and cannot be
                      recovered.
                    </p>
                  </li>
                </ul>
                <div className="delete_modal_btn_div">
                  <ul>
                    <li className="btn_one">
                      <OutlineBtn onClick={handleClose} name="Cancel" />
                    </li>
                    <li className="btn_two">
                      <FullBtn onClick={removeElement} name="Delete" />
                    </li>
                  </ul>
                </div>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  };
  return (
    <>
      {visible && (
        <div className={props.cols}>
          <TransitionsModal />
          <div className="Attachments_top_div">
            <div>
              <Img className="doc_img" backgroundImage={props.DocumentImg} />
              <div>
                <p>{props.name}</p>
              </div>
            </div>
            <div className="Attachments_top_div_inner_top">
              <div className="Attachments_top_div_inner">
                <span className="Attachments_top_div_cut">
                  <GrFormClose onClick={handleOpen} />
                </span>
                <NavLink to="/files/myfile.pdf" target="_blank" download>
                  <FcDownload />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
