import { NavLink, useNavigate } from "react-router-dom";

export const BlueBtn = (props) => {
  const navigate = useNavigate();
  const Fillbtn = () => {
    return (
      <>
        <button className="BlueBtn" onClick={() => navigate(props.link)}>
          {props.title}
        </button>
      </>
    );
  };
  const Fillbtnicon = () => {
    return (
      <>
        <button className="BlueBtn" onClick={() => navigate(props.link)}>
          {props.title}
          <span>{props.icon}</span>
        </button>
      </>
    );
  };
  return props.icon ? <Fillbtnicon /> : <Fillbtn />;
};
export const BlueLinkBtn = (props) => {
  const FillLinkbtn = () => {
    return (
      <>
        <NavLink className="BlueBtn" to={props.link}>
          {props.title}
        </NavLink>
      </>
    );
  };
  const FillLinkbtnicon = () => {
    return (
      <>
        <NavLink className="BlueBtn" to={props.link}>
          <span>{props.icon}</span>
          {props.title}
        </NavLink>
      </>
    );
  };
  return props.icon ? <FillLinkbtnicon /> : <FillLinkbtn />;
};

export const OutlineBtn = (props) => {
  const OutlineBtnNormal = () => {
    return (
      <>
        <button onClick={props.onClick} className="out_line_btn">
          {props.title}
        </button>
      </>
    );
  };
  const OutlineBtnIcon = () => {
    return (
      <button onClick={props.onClick} className="out_line_btn">
        {props.title}
        &nbsp;<span>{props.icon}</span>
      </button>
    );
  };
  return props.icon ? <OutlineBtnIcon /> : <OutlineBtnNormal />;
};
export const OutlineLinkBtn = (props) => {
  const OutlineBtnNormal = () => {
    return (
      <>
        <NavLink to={props.link} className="out_line_btn">
          {props.title}
        </NavLink>
      </>
    );
  };
  const OutlineBtnIcon = () => {
    return (
      <NavLink to={props.link} className="out_line_btn">
        {props.title} <span>{props.icon}</span>
      </NavLink>
    );
  };
  return props.icon ? <OutlineBtnIcon /> : <OutlineBtnNormal />;
};
