import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Swal from "sweetalert2";
import A1 from "../../../img/a1.png";
import A2 from "../../../img/a2.png";
import A3 from "../../../img/a3.png";
import A4 from "../../../img/a4.png";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { resetUser } from "../redux/modalStateSlice";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const user = useSelector((state) => state.state.user);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const MenuIcon = (props) => {
    return <img className="login_menu_icon" src={props.img} alt="icon" />;
  };

  return (
    <React.Fragment>
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {user ? (
              <Avatar sx={{ width: 32, height: 32 }} src={user.pic}></Avatar>
            ) : (
              <Avatar sx={{ width: 32, height: 32 }}></Avatar>
            )}
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
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <NavLink className="login_menu" to={"/your_account"}>
          <MenuItem>
            <MenuIcon img={A1} />
            My Account
          </MenuItem>
        </NavLink>
        <NavLink className="login_menu" to={"/your_services"}>
          <MenuItem>
            <MenuIcon img={A2} />
            My Service
          </MenuItem>
        </NavLink>
        <NavLink className="login_menu" to={"/payment"}>
          <MenuItem>
            <MenuIcon img={A3} />
            Payment
          </MenuItem>
        </NavLink>
        <NavLink className="login_menu" to={"/forgot_password"}>
          <MenuItem>
            <span className="menu_desbord_btn">
              Dashboard <BsArrowRight />
            </span>
          </MenuItem>
        </NavLink>
        <MenuItem
          onClick={() => {
            let token = localStorage.removeItem("token");
            let user = localStorage.removeItem("user");
            if (!user && !token) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "success",
                text: "Logout Successfull",
                showConfirmButton: false,
                timer: 1500,
              });
              dispatch(resetUser());
            }
          }}
        >
          <NavLink className="login_menu" to={"/"}>
            <MenuIcon img={A4} />
            Sign Out
          </NavLink>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
