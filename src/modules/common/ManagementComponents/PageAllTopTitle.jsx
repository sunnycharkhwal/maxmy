import { useNavigate } from "react-router-dom";

export const PageAllTopTitle = (props) => {
  const navigate = useNavigate();
  const Title = () => {
    return (
      <div className="page_All_top_title">
        <h3>{props.title}</h3>
      </div>
    );
  };
  const TitleWithIcon = () => {
    return (
      <div className="page_All_top_title">
        <h3>
          <span onClick={() => navigate(props.link)}>{props.icon}</span>{" "}
          {props.title}
        </h3>
      </div>
    );
  };
  return props.icon ? <TitleWithIcon /> : <Title />;
};
