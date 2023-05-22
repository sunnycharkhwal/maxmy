import Supporticon1 from "../assests/supporticon1.png";
import Supporticon2 from "../assests/supporticon2.png";
import Supporticon3 from "../assests/supporticon3.png";
import Supporticon4 from "../assests/supporticon4.png";
import Supporticon5 from "../assests/supporticon5.png";
import Supporticon6 from "../assests/supporticon6.png";
import { Faqs } from "../components/Faqs";

export const Support = () => {
  const CardData = [
    {
      title: "Account Setting",
      img: Supporticon1,
      text: "Change your email or password update login info",
    },
    {
      title: "Payment Settings",
      img: Supporticon2,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Services & Support",
      img: Supporticon3,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Return & Refund",
      img: Supporticon4,
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Manage Address",
      img: Supporticon5,
      text: "Change your email or password update login info",
    },
    {
      title: "Maxlence & Covid-19",
      img: Supporticon6,
      text: "Change your email or password update login info",
    },
  ];
  const CardApp = (props) => {
    return (
      <>
        <div className="col-md-6 col-lg-4 col-12 ">
          <div className="card border-0 p-3">
            <div className="row">
              <div className="col-2">
                <img src={props.img} alt="vc" />
              </div>
              <div className="col-10 mt-2">
                <div>
                  <p>
                    <b>{props.title}</b>
                  </p>
                  <p>{props.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container support_title text-start py-3 mt-5 mb-2">
        <h1>Hello, How Can We Help You?</h1>
      </div>
      <div className="container support_feats">
        <div className="row g-4">
          {CardData.map((val, i) => {
            return <CardApp key={i} {...val} />;
          })}
        </div>
      </div>
      <Faqs />
    </>
  );
};
