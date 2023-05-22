import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationImg from "./img/Img";
import { NavLink } from "react-router-dom";
// photo api
let Photo = "https://source.unsplash.com/random/500x500/?beautiful,girl";
// photo api end

// Notifications card data
const NotificationsData = [
  {
    img: Photo,
    title: "Sam has commented on a request titled",
    titleWithBold: "Trip to Dubai",
    date: "29-10-2022",
    time: "10:00 am",
  },
  {
    img: Photo,
    title: "Sam has commented on a request titled",
    titleWithBold: "Trip to Dubai",
    date: "29-10-2022",
    time: "10:01 am",
  },
  {
    img: Photo,
    title: "Sam has commented on a request titled",
    titleWithBold: "Trip to Dubai",
    date: "29-10-2022",
    time: "10:02 am",
  },
  {
    img: Photo,
    title: "Sam has commented on a request titled",
    titleWithBold: "Trip to Dubai",
    date: "29-10-2022",
    time: "10:03 am",
  },
];
// Notifications card data end

// Notifications card
const NotificationsNavCard = (props) => {
  return (
    <>
      <NavLink to="/Management/all_notifications">
        <ul className="notification_outer">
          <li>
            <div className="notification_img_div">
              <NotificationImg
                className="notification_img"
                backgroundImage={props.img}
              />
            </div>
          </li>
          <li className="notification_outer_text">
            <div>
              <p>
                {props.title}
                <b> {props.titleWithBold}</b>.
              </p>
              <small>
                {props.date} {props.time}
              </small>
            </div>
          </li>
        </ul>
      </NavLink>
    </>
  );
};
// Notifications card end
// Notifications card app
export const NotificationOuter = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="notification_outer_div">
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Notifications">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Box sx={{ color: "action.active" }}>
                <Badge
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#FF0000",
                    },
                  }}
                  variant="dot"
                >
                  <NotificationsIcon />
                </Badge>
              </Box>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 15,
                height: 15,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className="notification_outer_title">notifications</div>
          {NotificationsData.map((val, i) => {
            return <NotificationsNavCard key={i} {...val} />;
          })}
          <div className="notification_outer_link_page">
            <NavLink to="/Management/all_notifications">View all</NavLink>
          </div>
        </Menu>
      </div>
    </>
  );
};
// Notifications card app end
