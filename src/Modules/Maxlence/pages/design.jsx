import * as React from "react";
import Tab from "@mui/material/Tab";
import Slider from "react-slick";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from "@mui/material/Tabs";
import { Container } from "react-bootstrap";
import cuslogo1 from "../assests/cuslogo1.jpg";
import calendly from "../assests/calendly.png";
import { InlineWidget } from "react-calendly";
import ENDPOINT from "../config/ENDPOINT.jsx";

export const Design = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    // autoplay: true,
    // speed: 4000,
    // autoplaySpeed: 4000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const DesignTemplates = ({ catId }) => {
    const [design, setDesign] = React.useState([]);
    const [subCat, setSubCat] = React.useState(0);
    const [category, setCategory] = React.useState([]);

    async function getDesignByCatId() {
      let res = await fetch(
        ENDPOINT + `design?cat_id=${catId}&sub_cat_id=${subCat}`
      );
      const data = await res.json();
      setDesign(data);
    }

    React.useEffect(() => {
      getDesignByCatId();
    }, [subCat]);

    const fetchCategory = async () => {
      let res = await fetch(ENDPOINT + `designCat/${catId}`);
      let data = await res.json();
      setCategory(data);
    };
    React.useEffect(() => {
      fetchCategory();
    }, []);

    return (
      <>
        <div className="row my-3">
          <div className="col-sm-12 d-flex justify-content-start subfilters">
            {category.map((cat) => {
              return (
                <div className="filter" key={cat.id}>
                  <input
                    type="checkbox"
                    id={"checkbox" + cat.id}
                    name="radios"
                    className="case"
                    value={cat.id}
                    checked={subCat === cat.id}
                    onChange={(e) => {
                      if (e.target.checked) setSubCat(cat.id);
                    }}
                  />
                  <label htmlFor={"checkbox" + cat.id}>{cat.name}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="productSlidersItems my-5">
          <Slider className="slidebluearrows" {...settings}>
            {design.map((des) => {
              return (
                <img
                  key={des.id}
                  src={ENDPOINT + "uploads/" + des.img}
                  alt="f"
                />
              );
            })}
          </Slider>
        </div>
      </>
    );
  };

  const CustomlogoFeatures = (props) => {
    return (
      <Container>
        <h1>{props.customlogoTitle}</h1>
        <div className="row row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4 my-4 justify-content-between align-items-center">
          <div className="col-sm-5">
            <img className="w-100" src={props.src} alt="f" />
          </div>
          <div className="col-sm-6">
            <div className="customisepoints ml-0">
              <ul
                style={
                  ({ listStyleType: "disc" },
                  { paddingInlineStart: ".6rem !important" })
                }
              >
                {props.children}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    );
  };

  return (
    <Container fluid="md" className="designTabs my-5 px-0">
      <TabContext value={value}>
        <Container className="designPillsContainer greengradient py-md-4 py-3 px-0">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            allowScrollButtonsMobile
            TabIndicatorProps={{
              style: {
                backgroundColor: "#00C99C",
              },
            }}
            aria-label="scrollable force tabs"
            className=""
          >
            <Tab
              label={
                <>
                  <div className="roundbg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="60"
                      viewBox="0 0 38 60"
                      fill="none"
                    >
                      <path
                        d="M18.6618 0.00810321C1.62348 -0.434469 -1.15392 17.3742 0.356669 23.4164C1.88217 29.5181 7.72235 31.9439 9.00077 38.6707C9.74227 42.5723 9.00077 48.8402 9.00077 48.8402C10.1734 52.3581 13.1501 57.837 18.9641 57.0076C24.2047 56.975 27.1933 52.2285 28.3228 48.8402C28.3228 48.8402 27.5813 42.5723 28.3228 38.6707C29.6012 31.9439 35.4414 29.5181 36.9669 23.4164C38.4775 17.3742 35.7001 -0.434469 18.6618 0.00810321Z"
                        fill="#00C99C"
                      />
                      <mask
                        id="mask0_1568_468"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="44"
                        width="37"
                        height="16"
                      >
                        <rect
                          y="44.7451"
                          width="36.6102"
                          height="15.2542"
                          fill="#C4C4C4"
                        />
                      </mask>
                      <g mask="url(#mask0_1568_468)">
                        <path
                          d="M18.6618 0.00712664C1.62348 -0.435446 -1.15392 17.3733 0.356669 23.4154C1.88217 29.5172 7.72235 31.943 9.00077 38.6697C9.74227 42.5713 9.00077 48.8392 9.00077 48.8392C10.1734 52.3572 13.1501 57.8361 18.9641 57.0066C24.2047 56.974 27.1933 52.2275 28.3228 48.8392C28.3228 48.8392 27.5813 42.5713 28.3228 38.6697C29.6012 31.943 35.4414 29.5172 36.9669 23.4154C38.4775 17.3733 35.7001 -0.435446 18.6618 0.00712664Z"
                          fill="#212529"
                        />
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.0438 35.6033C15.5455 33.0125 13.9684 29.8332 13.4321 27.0899C13.11 25.4426 13.1182 23.7323 13.9921 22.4073C14.9058 21.0219 16.5551 20.3564 18.8104 20.3564C21.105 20.3564 22.7531 21.1051 23.652 22.5685C24.5035 23.9547 24.5178 25.7333 24.1953 27.4411C23.6698 30.2234 22.1501 33.3414 20.6557 35.687L22.7766 38.1361H18.9227L18.7327 38.3919L18.5752 38.1361H14.8503L17.0438 35.6033ZM19.2851 34.1045C20.573 31.985 21.7999 29.3476 22.23 27.07C22.5189 25.5402 22.4109 24.3692 21.9478 23.6153C21.5322 22.9386 20.6735 22.3564 18.8104 22.3564C16.9151 22.3564 16.0612 22.9026 15.6617 23.5084C15.2223 24.1745 15.1073 25.2351 15.3949 26.7062C15.832 28.9423 17.0959 31.6198 18.4323 33.9999L18.8135 33.5598L19.2851 34.1045Z"
                        fill="white"
                      />
                      <g filter="url(#filter0_f_1568_468)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.0438 35.6033C15.5455 33.0125 13.9684 29.8332 13.4321 27.0899C13.11 25.4426 13.1182 23.7323 13.9921 22.4073C14.9058 21.0219 16.5551 20.3564 18.8104 20.3564C21.105 20.3564 22.7531 21.1051 23.652 22.5685C24.5035 23.9547 24.5178 25.7333 24.1953 27.4411C23.6698 30.2234 22.1501 33.3414 20.6557 35.687L22.7766 38.1361H18.9227L18.7327 38.3919L18.5752 38.1361H14.8503L17.0438 35.6033ZM19.2851 34.1045C20.573 31.985 21.7999 29.3476 22.23 27.07C22.5189 25.5402 22.4109 24.3692 21.9478 23.6153C21.5322 22.9386 20.6735 22.3564 18.8104 22.3564C16.9151 22.3564 16.0612 22.9026 15.6617 23.5084C15.2223 24.1745 15.1073 25.2351 15.3949 26.7062C15.832 28.9423 17.0959 31.6198 18.4323 33.9999L18.8135 33.5598L19.2851 34.1045Z"
                          fill="white"
                        />
                      </g>
                      <path
                        d="M28.4744 37.627H9.15234C9.55912 38.5031 9.32184 42.7378 9.15234 44.7456H27.9659C27.9659 42.9933 28.3049 39.2697 28.4744 37.627Z"
                        fill="#7C7C7C"
                        stroke="#7C7C7C"
                      />
                      <g opacity="0.8" filter="url(#filter1_f_1568_468)">
                        <path
                          d="M24.915 5.59277C26.61 6.10125 30.1015 7.93176 30.5083 11.186"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </g>
                      <g filter="url(#filter2_f_1568_468)">
                        <path
                          d="M17.2881 40.6953C16.7358 40.6953 16.2881 41.143 16.2881 41.6953C16.2881 42.2476 16.7358 42.6953 17.2881 42.6953V40.6953ZM27.4576 42.6953H28.4576V40.6953H27.4576V42.6953ZM17.2881 42.6953H27.4576V40.6953H17.2881V42.6953Z"
                          fill="#B3B3B3"
                        />
                      </g>
                      <g filter="url(#filter3_f_1568_468)">
                        <path
                          d="M22.3729 51.3562C22.3729 51.8236 22.2677 52.2865 22.0633 52.7183C21.8588 53.1501 21.5592 53.5425 21.1815 53.873C20.8037 54.2035 20.3553 54.4657 19.8618 54.6446C19.3683 54.8235 18.8393 54.9155 18.3051 54.9155C17.7709 54.9155 17.242 54.8235 16.7484 54.6446C16.2549 54.4657 15.8065 54.2035 15.4287 53.873C15.051 53.5425 14.7514 53.1501 14.5469 52.7183C14.3425 52.2865 14.2373 51.8236 14.2373 51.3562L18.3051 51.3562H22.3729Z"
                          fill="#9E9E9E"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_1568_468"
                          x="9.2373"
                          y="16.3564"
                          width="19.1523"
                          height="26.0352"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="2"
                            result="effect1_foregroundBlur_1568_468"
                          />
                        </filter>
                        <filter
                          id="filter1_f_1568_468"
                          x="22.4146"
                          y="3.09277"
                          width="10.5938"
                          height="10.5938"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="0.5"
                            result="effect1_foregroundBlur_1568_468"
                          />
                        </filter>
                        <filter
                          id="filter2_f_1568_468"
                          x="15.2881"
                          y="39.6953"
                          width="14.1694"
                          height="4"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="0.5"
                            result="effect1_foregroundBlur_1568_468"
                          />
                        </filter>
                        <filter
                          id="filter3_f_1568_468"
                          x="13.2373"
                          y="50.3564"
                          width="10.1357"
                          height="5.55859"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="0.5"
                            result="effect1_foregroundBlur_1568_468"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <small className="text-white m-auto">Logo</small>
                  </div>
                </>
              }
              value="1"
            />
            <Tab
              label={
                <>
                  <div className="roundbg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="44"
                      viewBox="0 0 52 44"
                      fill="none"
                    >
                      <path
                        d="M15.7335 32.0331C15.7335 31.7997 15.7335 31.5664 15.7335 31.3331C15.7335 30.6331 15.5002 30.1664 15.5002 29.4664C15.5002 21.0664 24.1335 14.0664 34.8668 14.0664C35.5668 14.0664 36.2668 14.0664 36.9668 14.0664C37.2002 14.0664 37.4335 14.0664 37.6668 14.0664C38.1335 14.0664 38.6002 14.0664 39.0668 14.2997C39.3002 14.2997 39.7668 14.5331 40.0002 14.5331C40.4668 14.5331 40.7002 14.7664 41.1668 14.7664C41.4002 14.7664 41.8668 14.9997 42.1002 14.9997C42.3335 14.9997 42.5668 15.2331 43.0335 15.2331C43.2668 15.2331 43.5002 15.4664 43.7335 15.4664C42.8002 6.83307 33.4668 0.0664062 22.0335 0.0664062C10.1335 0.533073 0.333496 7.99974 0.333496 17.3331C0.333496 21.9997 2.90016 26.6664 7.56683 29.6997C8.0335 29.9331 8.26683 30.6331 8.0335 31.0997L5.70016 35.5331L11.7668 32.4997C12.0002 32.2664 12.4668 32.2664 12.7002 32.4997C13.8668 32.9664 15.0335 33.1997 16.2002 33.4331C16.2002 33.1997 16.2002 33.1997 16.2002 32.9664C15.9668 32.7331 15.7335 32.2664 15.7335 32.0331ZM29.7335 8.93307C30.9002 8.93307 31.6002 9.8664 31.6002 10.7997C31.6002 11.7331 30.6668 12.8997 29.7335 12.8997C28.5668 12.8997 27.8668 11.9664 27.8668 11.0331C27.8668 10.0997 28.5668 8.93307 29.7335 8.93307ZM12.4668 11.0331C12.4668 9.86641 13.4002 9.16641 14.3335 9.16641C15.5002 9.16641 16.2002 10.0997 16.2002 11.0331C16.2002 11.9664 15.5002 12.8997 14.3335 12.8997C13.4002 12.8997 12.4668 11.9664 12.4668 11.0331Z"
                        fill="#00C99C"
                      />
                      <path
                        d="M51.6668 29.466C51.6668 25.0327 48.6335 21.066 44.2002 18.7327C43.5002 18.4994 43.0335 18.0327 42.3335 17.7993C42.1002 17.7993 41.8668 17.566 41.8668 17.566C41.1668 17.3327 40.4668 17.0993 39.7668 16.866C39.0668 16.6327 38.3668 16.6327 37.6668 16.3993C37.4335 16.3993 37.2002 16.3993 37.2002 16.3993C36.5002 16.3993 35.8002 16.166 34.8668 16.166C25.5335 16.166 17.8335 21.9994 17.8335 29.2327C17.8335 29.6994 17.8335 30.166 17.8335 30.6327C17.8335 30.866 17.8335 30.866 17.8335 31.0993C17.8335 31.3327 17.8335 31.7993 18.0668 32.0327C18.0668 32.266 18.0668 32.266 18.3002 32.4993C18.3002 32.7327 18.5335 32.966 18.5335 33.1993C18.5335 33.4327 18.7668 33.666 18.7668 33.8994C21.1002 39.0327 27.4002 42.5327 34.6335 42.5327C37.2002 42.5327 39.7668 42.066 42.1002 41.1327C42.3335 41.1327 42.3335 41.1327 42.5668 41.1327C42.8002 41.1327 43.0335 41.1327 43.0335 41.366L47.2335 43.466L45.8335 40.666C45.6002 40.1994 45.8335 39.4993 46.3002 39.266C49.5668 36.6994 51.6668 33.1994 51.6668 29.466ZM28.8002 28.9993C27.6335 28.9993 26.9335 28.066 26.9335 27.1327C26.9335 25.966 27.8668 25.266 28.8002 25.266C29.9668 25.266 30.6668 26.1993 30.6668 27.1327C30.6668 28.066 29.9668 28.9993 28.8002 28.9993ZM40.7002 28.9993C39.5335 28.9993 38.8335 28.066 38.8335 27.1327C38.8335 25.966 39.7668 25.266 40.7002 25.266C41.8668 25.266 42.5668 26.1993 42.5668 27.1327C42.8002 28.066 41.8668 28.9993 40.7002 28.9993Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <small className="text-white m-auto">Social Media</small>
                  </div>
                </>
              }
              value="2"
            />
            <Tab
              label={
                <>
                  <div className="roundbg">
                    <svg
                      width="54"
                      height="46"
                      viewBox="0 0 54 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.73584 19.6407V21.5447C0.73584 26.2487 4.37584 30.1127 9.07984 30.4487V43.8327C9.07984 44.7847 9.80784 45.5127 10.7598 45.5127H16.6958C17.6478 45.5127 18.3758 44.7847 18.3758 43.8327V30.5047H19.3278V10.6807H9.69584C4.76784 10.6807 0.73584 14.7127 0.73584 19.6407Z"
                        fill="white"
                      />
                      <path
                        d="M52.5357 0.76822C52.0877 0.43222 51.4717 0.37622 50.9677 0.60022L23.3037 12.3602V28.7682L50.9677 40.5282C51.8077 40.8642 52.8157 40.4722 53.1517 39.6322C53.2637 39.4082 53.2637 39.1842 53.2637 38.9602V2.16822C53.2637 1.60822 52.9837 1.10422 52.5357 0.76822Z"
                        fill="#00C99C"
                      />
                    </svg>
                  </div>
                  <div>
                    <small className="text-white m-auto">Marketing</small>
                  </div>
                </>
              }
              value="3"
            />
            <Tab
              label={
                <>
                  <div className="roundbg">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="50" height="50" fill="#00C99C" />
                      <rect
                        x="6.66602"
                        y="10"
                        width="37.5"
                        height="12.5"
                        fill="white"
                      />
                      <rect
                        x="31.666"
                        y="28.333"
                        width="12.5"
                        height="12.5"
                        fill="white"
                      />
                      <rect width="37.5" height="5" fill="white" />
                      <line
                        x1="6.66602"
                        y1="29.833"
                        x2="24.9993"
                        y2="29.833"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <line
                        x1="6.66602"
                        y1="34.833"
                        x2="24.9993"
                        y2="34.833"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <line
                        x1="6.66602"
                        y1="39.833"
                        x2="24.9993"
                        y2="39.833"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <small className="text-white m-auto">Landing Page</small>
                  </div>
                </>
              }
              value="4"
            />
            <Tab
              label={
                <>
                  <div className="roundbg">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.381 4.57129L18.1144 15.9846H5.71436V58.6513H59.0477V15.9846H46.6477L32.381 4.57129ZM26.6477 15.9846L32.381 11.398L38.1144 15.9846H26.6477Z"
                        fill="#00C99C"
                      />
                      <path
                        d="M38.3671 38.8565C38.3671 39.1218 38.2701 39.3514 38.0763 39.5452L29.7497 47.8718C29.5559 48.0657 29.3263 48.1626 29.061 48.1626C28.7956 48.1626 28.5661 48.0657 28.3722 47.8718C28.1783 47.6779 28.0814 47.4483 28.0814 47.183V42.7748H21.2242C20.9589 42.7748 20.7293 42.6779 20.5354 42.484C20.3416 42.2901 20.2446 42.0605 20.2446 41.7952V35.9177C20.2446 35.6524 20.3416 35.4228 20.5354 35.2289C20.7293 35.035 20.9589 34.9381 21.2242 34.9381H28.0814V30.5299C28.0814 30.2646 28.1783 30.035 28.3722 29.8412C28.5661 29.6473 28.7956 29.5503 29.061 29.5503C29.3263 29.5503 29.5559 29.6473 29.7497 29.8412L38.0763 38.1677C38.2701 38.3616 38.3671 38.5912 38.3671 38.8565ZM43.7548 33.4687V44.2442C43.7548 45.4585 43.3237 46.4968 42.4615 47.359C41.5992 48.2213 40.561 48.6524 39.3467 48.6524H34.4487C34.3161 48.6524 34.2013 48.6039 34.1043 48.507C34.0074 48.41 33.9589 48.2952 33.9589 48.1626C33.9589 48.1218 33.9538 48.0197 33.9436 47.8565C33.9334 47.6932 33.9309 47.558 33.936 47.4509C33.9411 47.3437 33.9564 47.2238 33.9819 47.0912C34.0074 46.9585 34.0584 46.859 34.1349 46.7927C34.2115 46.7264 34.3161 46.6932 34.4487 46.6932H39.3467C40.0201 46.6932 40.5967 46.4534 41.0763 45.9738C41.5558 45.4942 41.7956 44.9177 41.7956 44.2442V33.4687C41.7956 32.7952 41.5558 32.2187 41.0763 31.7391C40.5967 31.2595 40.0201 31.0197 39.3467 31.0197H34.5712L34.3951 31.0044L34.2191 30.9585L34.0967 30.8743L33.9895 30.7366L33.9589 30.5299C33.9589 30.4891 33.9538 30.3871 33.9436 30.2238C33.9334 30.0605 33.9309 29.9253 33.936 29.8182C33.9411 29.7111 33.9564 29.5912 33.9819 29.4585C34.0074 29.3259 34.0584 29.2264 34.1349 29.16C34.2115 29.0937 34.3161 29.0605 34.4487 29.0605H39.3467C40.561 29.0605 41.5992 29.4917 42.4615 30.3539C43.3237 31.2162 43.7548 32.2544 43.7548 33.4687Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <small className="text-white m-auto">Signage</small>
                  </div>
                </>
              }
              value="5"
            />
          </Tabs>
        </Container>
        <TabPanel value="1">
          <h2>Select Templates</h2>
          <DesignTemplates catId={1} />
        </TabPanel>
        <TabPanel value="2">
          <h2>Select Templates</h2>
          <DesignTemplates catId={2} />
        </TabPanel>
        <TabPanel value="3">
          <h2>Select Templates</h2>
          <DesignTemplates catId={3} />
        </TabPanel>
        <TabPanel value="4">
          <h2>Select Templates</h2>
          <DesignTemplates catId={4} />
        </TabPanel>
        <TabPanel value="5">
          <h2>Select Templates</h2>
          <DesignTemplates catId={5} />
        </TabPanel>
      </TabContext>

      <CustomlogoFeatures customlogoTitle="Customise Logo" src={cuslogo1}>
        <li>Unlimited Revisions</li>
        <li>Free Mockups</li>
        <li>Final Formats (PNG, JPEG, SVG)</li>
        <li>Logo Copyright</li>
        <li>24/7 Service Support</li>
      </CustomlogoFeatures>

      {/* <div className="row my-5 justify-content-center">
        <div className="col-md-8 col-12">
          <img className="w-100" src={calendly} alt="f" />
        </div>
      </div> */}

      <InlineWidget url="https://calendly.com/maxlence/appointment" />
    </Container>
  );
};
