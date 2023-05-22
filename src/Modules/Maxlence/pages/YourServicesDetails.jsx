import { NavLink } from "react-router-dom";
import YourServicesicon from "../../../img/serv.svg";
// mui
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
export const YourServicesDetails = () => {
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
      ServiceDate: "19/02/2023",
      BillingName: "Luno Electrical",
      OrderNumber: "122546659261",
      CardDataInner: [
        {
          title: "Creation - Website",
          icon: YourServicesicon,
          price: "$143",
          typeService: "Premium",
        },
        {
          title: "Creation - Website",
          icon: YourServicesicon,
          price: "$143",
          typeService: "Premium",
        },
        {
          title: "Creation - Website",
          icon: YourServicesicon,
          price: "$143",
          typeService: "Premium",
        },
      ],
      OrderSummary: [
        {
          title: "Sub Total",
          price: "$122",
        },
        {
          title: "GST 12%",
          price: "$19",
        },
        {
          title: "GST 12%",
          price: "$19",
        },
        {
          title: "GST 12%",
          price: "$19",
        },
        {
          title: "GST 12%",
          price: "$19",
        },
        {
          title: "GST 12%",
          price: "$19",
        },
        {
          title: "GST 12%",
          price: "$19",
        },
        {
          title: "GST 12%",
          price: "$19",
        },
        {
          title: "GST 12%",
          price: "$19",
        },
        {
          title: "GST 12%",
          price: "$19",
        },
      ],
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
            </div>
          </div>
          <div className="YourServices_new_img_div">
            {props.CardDataInner.map((val, i) => {
              return (
                <div key={i} className="YourServices_new_inner_new">
                  <ul>
                    <li>
                      <img src={val.icon} alt="icon" />
                    </li>
                    <li>
                      <p className="YourServices_new_img_text">{val.title}</p>
                      <p className="YourServices_new_img_text2">{val.price}</p>
                      <p className="YourServices_new_img_text3">
                        {val.typeService}
                      </p>
                    </li>
                  </ul>
                  <div className="YourServices_new_img_text_btn2_div">
                    <button
                      onClick={handleOpen}
                      className="btn full_btn YourServices_new_img_text_btn2 "
                    >
                      Track Service
                    </button>
                  </div>
                </div>
              );
            })}

            <div className="YourServices_new_address_div">
              <ul>
                <li className="YourServices_new_address_div_inner_li">
                  <h3>Billing Address</h3>
                  <p className="address_div">
                    525, 5th Floor, Tower A, Itech Business Park, Sohna Road,
                    Sector 49, Gurgaon, Haryana 122101 - India
                  </p>
                  <p className="coltact_div">Contact No - 9876543210</p>
                  <p className="coltact_div">
                    Email - info@lunoelectrical.com.au
                  </p>
                </li>
                <li className="YourServices_new_address_inner">
                  <h3>Order Summary</h3>
                  {props.OrderSummary.map((val, i) => {
                    return (
                      <div
                        key={i}
                        className="YourServices_new_address_price_div"
                      >
                        <p>{val.title}</p>
                        <p className="price_inner">{val.price}</p>
                      </div>
                    );
                  })}

                  <div className="YourServices_new_address_price_div">
                    <p>Total</p> <p className="price_inner">$143</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <MyModal />
      </>
    );
  };
  return (
    <>
      <section className="container mb-4 mt-4">
        <p>Serivce Order Details</p>
        <div className="row g-4">
          {CardData.map((val, i) => {
            return <CardApp key={i} {...val} />;
          })}
        </div>
      </section>
    </>
  );
};
