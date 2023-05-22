import { NavLink } from "react-router-dom";
import YourServicesicon from "../../../img/serv.svg";
// mui
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export const YourServices = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const CardData = [
    {
      pageLink: "/your_services_details",
      ServiceDate: "19/02/2023",
      BillingName: "Luno Electrical",
      OrderNumber: "122546659261",
      title: "Creation - Website",
      icon: YourServicesicon,
      price: "$143",
      typeService: "Premium",
    },
    {
      pageLink: "/your_services_details",
      ServiceDate: "19/02/2023",
      BillingName: "Luno Electrical",
      OrderNumber: "122546659261",
      title: "Creation - Website",
      icon: YourServicesicon,
      price: "$143",
      typeService: "Premium",
    },
    {
      pageLink: "/your_services_details",
      ServiceDate: "19/02/2023",
      BillingName: "Luno Electrical",
      OrderNumber: "122546659261",
      title: "Creation - Website",
      icon: YourServicesicon,
      price: "$143",
      typeService: "Premium",
    },
    {
      pageLink: "/your_services_details",
      ServiceDate: "19/02/2023",
      BillingName: "Luno Electrical",
      OrderNumber: "122546659261",
      title: "Creation - Website",
      icon: YourServicesicon,
      price: "$143",
      typeService: "Premium",
    },
  ];
  const CardApp = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const MyModal = () => {
      return (
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Text in a modal
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </div>
      );
    };
    return (
      <>
        <div className="col-12">
          <div className="YourServices_new_top">
            <div className="YourServices_new_inner">
              <p>Service Purchased</p>
              <p className="YourServices_new_inner_inner">
                {props.ServiceDate}
              </p>
            </div>
            <div className="YourServices_new_inner YourServices_new_inner2">
              <p>Billing name</p>
              <p className="YourServices_new_inner_inner">
                {props.BillingName}
              </p>
            </div>
            <div className="YourServices_new_inner YourServices_new_inner3">
              <p>Order # {props.OrderNumber}</p>
              <p className="YourServices_new_inner_inner">
                <NavLink to={props.pageLink}>View Details</NavLink>
              </p>
            </div>
          </div>
          <div className="YourServices_new_img_div">
            <ul>
              <li>
                <img src={props.icon} alt="icon" />
              </li>
              <li>
                <p className="YourServices_new_img_text">
                  <NavLink to={props.pageLink}>{props.title}</NavLink>
                </p>
                <p className="YourServices_new_img_text2">{props.price}</p>
                <p className="YourServices_new_img_text3">
                  {props.typeService}
                </p>
              </li>
            </ul>
            <button
              onClick={handleOpen}
              className="btn full_btn YourServices_new_img_text_btn"
            >
              Track Service
            </button>
          </div>
        </div>
        <MyModal />
      </>
    );
  };
  return (
    <>
      <section className="container mb-4 mt-4">
        <p>Your Service Orders</p>
        <div className="row g-4">
          {CardData.map((val, i) => {
            return <CardApp key={i} {...val} />;
          })}
        </div>
      </section>
    </>
  );
};
