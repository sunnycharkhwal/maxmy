import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import AvatarGroup from "@mui/material/AvatarGroup";
import { AiFillCaretDown } from "react-icons/ai";
export const UserParticipants = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const UserParticipantsApp = (props) => {
    return <Avatar alt={props.name} src={props.img} />;
  };
  const ParticipantsModal = (props) => {
    const ParticipantsApp = (props) => {
      return (
        <div className="col-12">
          <div className="user_card_div_inner">
            <Avatar
              alt={props.name}
              src={props.img}
              sx={{ width: 15, height: 15 }}
            />
            <p>{props.name}</p>
            <h6>{props.Designation}</h6>
          </div>
        </div>
      );
    };
    return (
      <>
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
                bgcolor: "#ddc8c8",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className="user_card_div_title">
            <h3>Participants</h3>
          </div>
          <div className="user_card_div">
            <div className="row g-2 ">
              {props.data.map((val, i) => {
                return <ParticipantsApp key={i} {...val} />;
              })}
            </div>
          </div>
        </Menu>
      </>
    );
  };
  return (
    <>
      <ParticipantsModal data={props.data} />
      <div className="Participants_icon_div">
        <AvatarGroup onClick={handleClick} max={5}>
          {props.data.map((val, i) => {
            return <UserParticipantsApp key={i} {...val} />;
          })}
        </AvatarGroup>
        <AiFillCaretDown onClick={handleClick} className="Participants_icon" />
      </div>
    </>
  );
};
