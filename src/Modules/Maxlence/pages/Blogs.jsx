import { NavLink } from "react-router-dom";
import Blog1 from "../assests/blog1.jpg";
import Blog2 from "../assests/blog2.jpg";

import Blogger1 from "../assests/blogger1.png";
export const Blogs = () => {
  return (
    <>
      <div className="container ">
        <div className="row my-4 justify-content-center align-items-center text-sm-start text-center">
          <div className="col-lg-6 ">
            <img className="w-100" src={Blog1} alt="img" />
          </div>
          <div className="col-lg-6 col-12 my-3 ">
            <h1 className="font-weight-bold my-sm-4">
              Lorem, <span>ipsum dolor</span> sit amet consectetur
              <span>adipisicing</span> elit.
            </h1>

            <div className="blogdetails">
              <div className="row blogsubinfo col-md-8 my-4 px-0 justify-content-between mx-2">
                <div>
                  <small>Maxlence </small> &nbsp;
                  <small className="blogdate">Oct 19, 2021</small>
                </div>
                <div>
                  <small>5 min read</small>
                </div>
              </div>

              <div className="bloggername d-flex justify-content-start align-items-center">
                <div>
                  <img src={Blogger1} alt="icon" />
                </div>
                <div>
                  <p className="mb-0 mx-2">By Paul Mucho Gracia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogsList />
    </>
  );
};
const BlogsList = () => {
  const BlogCardData = [
    {
      img: Blog2,
      title: "Lorem ipsum dolor sit amet.",
      category: "Maxlence",
      date: "Oct 19, 2021",
      time: "5 min",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi consequuntur porro deleniti. Commodi aut animi in doloribus vel sapiente ipsa, ipsam saepe? Ut, esse provident adipisci iure illo enim!",
      link: "/",
    },
    {
      img: Blog2,
      title: "Lorem ipsum dolor sit amet.",
      category: "Maxlence",
      date: "Oct 19, 2021",
      time: "5 min",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi consequuntur porro deleniti. Commodi aut animi in doloribus vel sapiente ipsa, ipsam saepe? Ut, esse provident adipisci iure illo enim!",
      link: "/",
    },
    {
      img: Blog2,
      title: "Lorem ipsum dolor sit amet.",
      category: "Maxlence",
      date: "Oct 19, 2021",
      time: "5 min",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi consequuntur porro deleniti. Commodi aut animi in doloribus vel sapiente ipsa, ipsam saepe? Ut, esse provident adipisci iure illo enim!",
      link: "/",
    },
    {
      img: Blog2,
      title: "Lorem ipsum dolor sit amet.",
      category: "Maxlence",
      date: "Oct 19, 2021",
      time: "5 min",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi consequuntur porro deleniti. Commodi aut animi in doloribus vel sapiente ipsa, ipsam saepe? Ut, esse provident adipisci iure illo enim!",
      link: "/",
    },
    {
      img: Blog2,
      title: "Lorem ipsum dolor sit amet.",
      category: "Maxlence",
      date: "Oct 19, 2021",
      time: "5 min",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi consequuntur porro deleniti. Commodi aut animi in doloribus vel sapiente ipsa, ipsam saepe? Ut, esse provident adipisci iure illo enim!",
      link: "/",
    },
  ];
  const BlogCard = (props) => {
    return (
      <>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="blogcard pb-2">
            <div className="blogimg">
              <div className="img-gradientgray">
                <img
                  className="w-100"
                  style={{ height: "13rem" }}
                  src={props.img}
                  alt="img"
                />
              </div>

              <div className="bloginfo">
                <div className="blogtitle">
                  <h5 className="text-white">{props.title}</h5>
                </div>
                <div className="row blogsubinfo col-12 my-2 justify-content-between ">
                  <div>
                    <small className="text-white">{props.category}</small>
                    &nbsp;
                    <small className="blogdate text-white">{props.date}</small>
                    &nbsp; &nbsp;
                    <small className="text-white">{props.time} read</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="blogmincontent">
              <p className="p-3">{props.text}</p>
              <div className="col-12 d-flex justify-content-end ">
                <NavLink className="cta me-3" to={props.link}>
                  <span className="hover-underline-animation fontpop">
                    Read More
                  </span>
                  <svg
                    id="arrow-horizontal"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="10"
                    viewBox="0 0 46 16"
                  >
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      transform="translate(30)"
                    ></path>
                  </svg>
                </NavLink>
              </div>
            </div>
            .
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container mb-4 ">
        <div className="row g-3">
          {BlogCardData.map((val, i) => {
            return <BlogCard key={i} {...val} />;
          })}
        </div>
      </div>
    </>
  );
};
