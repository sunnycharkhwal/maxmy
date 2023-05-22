import { NavLink } from "react-router-dom";

// export const FullBtn = (props) => {
//   return (
//     <>
//       <NavLink className="management_btn_full" to={props.link}>
//         {props.name}
//       </NavLink>
//     </>
//   );
// };
export const FullBtn = (props) => {
  const LinkPage = () => {
    return (
      <NavLink to={props.link} className="management_btn_full">
        {props.name}
      </NavLink>
    );
  };
  const LinkText = () => {
    return (
      <button onClick={props.onClick} className="management_btn_full2">
        {props.name}
      </button>
    );
  };
  return props.link ? <LinkPage /> : <LinkText />;
};
export const FullBtnWithIcon = (props) => {
  const LinkPage = () => {
    return (
      <NavLink to={props.link} className="management_btn_full">
        {props.icon}
        {props.name}
      </NavLink>
    );
  };
  const LinkText = () => {
    return (
      <button onClick={props.onClick} className="management_btn_full2">
        {props.icon}
        {props.name}
      </button>
    );
  };
  return props.link ? <LinkPage /> : <LinkText />;
};
export const OutlineBtn = (props) => {
  const LinkPage = () => {
    return (
      <NavLink to={props.link} className="management_btn_outline">
        {props.name}
      </NavLink>
    );
  };
  const LinkText = () => {
    return (
      <button onClick={props.onClick} className="management_btn_outline">
        {props.name}
      </button>
    );
  };
  return props.link ? <LinkPage /> : <LinkText />;
};
export const OutlineBtnWithIcon = (props) => {
  const LinkPage = () => {
    return (
      <NavLink to={props.link} className="management_btn_outline_with_icon">
        <span> {props.name}</span> {props.icon}
      </NavLink>
    );
  };
  const LinkText = () => {
    return (
      <button
        onClick={props.onClick}
        className="management_btn_outline_with_icon"
      >
        <span>{props.name}</span> {props.icon}
      </button>
    );
  };
  return props.link ? <LinkPage /> : <LinkText />;
};
