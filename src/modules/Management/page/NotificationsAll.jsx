import { useState } from "react";
import NotificationImg from "../../common/components/img/Img";
import { RiDeleteBinLine } from "react-icons/ri";
import { PageAllTopTitle } from "../../common/ManagementComponents/PageAllTopTitle";
import NoNotifications from "../../../pics/Management/bellOff.png";
// photo api
let Photo = "https://source.unsplash.com/random/500x500/?beautiful,girl";
// photo api end

export const NotificationsAll = () => {
  const NotificationsAllData = [
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
  const NotificationsAllCard = (props) => {
    const [visible, setVisible] = useState(true);
    const removeElement = () => {
      setVisible((prev) => !prev);
    };
    return (
      <>
        {visible && (
          <div className="col-12">
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
              <li className="notification_outer_delete">
                <RiDeleteBinLine onClick={removeElement} />
              </li>
            </ul>
          </div>
        )}
      </>
    );
  };
  return (
    <>
      <div className="custom_container">
        <PageAllTopTitle title="Notifications" />
        {/* no notification yat ui */}
        <div className="notifications_all_div">
          <div className="no_notifications_div">
            <div className="no_notifications_inner">
              <NotificationImg
                className="no_notifications"
                backgroundImage={NoNotifications}
              />
              <h3>no notification yat</h3>
            </div>
          </div>
          {/* no notification yat ui end */}
          <div className="row g-3">
            {NotificationsAllData.map((val, i) => {
              return <NotificationsAllCard key={i} {...val} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
