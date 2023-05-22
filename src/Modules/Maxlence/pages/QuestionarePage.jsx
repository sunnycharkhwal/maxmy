import Fbbox from "../assests/fbbox.png";
import Instabox from "../assests/instabox.png";
import Googleadwordbox from "../assests/googleadwordbox.png";
import Googleseobox from "../assests/googleseobox.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";
import StartedIcon from "../../../img/start.svg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
export const QuestionarePage = () => {
  const [showStartPage, setShowStartPage] = useState(true);
  const QuestionarePageStart = () => {
    return (
      <>
        <div className="questionare_page_start">
          <div className="questionare_page_start_inner">
            <p>
              Okay thanks for considering Maxlence a good fit for helping you
              grow your business
            </p>
            <p>
              We’ve got few questions . It won’t take much time. Pinky promise
              <img src={StartedIcon} alt="icon" />
            </p>
            <button
              onClick={() => setShowStartPage(false)}
              className="previous  action-button"
            >
              Start Now <HiOutlineArrowNarrowRight />
            </button>
          </div>
        </div>
      </>
    );
  };
  return <>{showStartPage ? <QuestionarePageStart /> : <Questionare />}</>;
};

const Questionare = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const navigate = useNavigate();

  return (
    <div>
      <div className="step_inner_main_top_div">
        <div className="stepper_inner_div">
          <div className="stepper_inner_title_div">
            <h3>Great! You are almost there</h3>
          </div>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((step, index) => {
              const labelProps = {};
              const stepProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ display: "block" }}
                  ></Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step {...stepProps} key={index}>
                  <StepLabel {...labelProps}></StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
      </div>

      <div>{getStepContent(activeStep)}</div>
      <div className=" step_btn_div">
        <button
          className="previous  action-button"
          disabled={activeStep === 0}
          hidden={activeStep === 0}
          onClick={handleBack}
        >
          Previous
        </button>
        {/* <button className="next  action-button" onClick={handleNext}>
          {activeStep === steps.length - 1 ? (
            <NavLink to="/buy_plans" className="Finish_btn">
              Finish
            </NavLink>
          ) : (
            "Submit ➙"
          )}
        </button> */}
        <button
          className="next  action-button"
          onClick={() => {
            setActiveStep((old) => old + 1);
            if (steps.length === activeStep + 1) navigate("/buy_plans");
          }}
        >
          {steps.length === activeStep + 1 ? "Finish" : "Submit ➙"}
        </button>
      </div>
    </div>
  );
};
const getSteps = () => {
  return ["1", "2", "3", "4", "5", "5", "7", "8", "9", "10", "11"];
};
const getStepContent = (step) => {
  switch (step) {
    case 0:
      return (
        <>
          <Step1 />
        </>
      );

    case 1:
      return (
        <>
          <Step2 />
        </>
      );
    case 2:
      return (
        <>
          <Step3 />
        </>
      );
    case 3:
      return (
        <>
          <Step4 />
        </>
      );
    case 4:
      return (
        <>
          <Step5 />
        </>
      );
    case 5:
      return (
        <>
          <Step6 />
        </>
      );
    case 6:
      return (
        <>
          <Step7 />
        </>
      );
    case 7:
      return (
        <>
          <Step8 />
        </>
      );
    case 8:
      return (
        <>
          <Step9 />
        </>
      );
    case 9:
      return (
        <>
          <Step10 />
        </>
      );
    case 10:
      return (
        <>
          <Step11 />
        </>
      );
    default:
      return "unknown step";
  }
};
const Step1 = () => {
  const ListData = [
    {
      title: "Less than 3 months",
      id: "1",
    },
    {
      title: "6 - 9 months",
      id: "2",
    },
  ];
  const ListApp = (props) => {
    return (
      <>
        <div className=" col-md-4 m-2">
          <div className="defultbox">
            <input type="radio" name="longbox" id={props.id} />
            <label className="radiobox_title" htmlFor={props.id}>
              <h6>{props.title}</h6>
            </label>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className=" container">
        <div className="step_title_div">
          <div className="step_title_div_inner">
            <h3 className="fs-title">What do you sell?</h3>
          </div>
        </div>
        <div className="row justify-content-center">
          {ListData.map((val, i) => {
            return <ListApp key={i} {...val} />;
          })}
        </div>
      </div>
    </>
  );
};
const Step2 = () => {
  const OptionData = [
    {
      label: "Industry Type",
      value: "1",
    },
    {
      label: "Industry Type2",
      value: "2",
    },
    {
      label: "Industry Type3",
      value: "3",
    },
    {
      label: "Industry Type4",
      value: "4",
    },
  ];
  const Option = (props) => {
    return <option value={props.value}>{props.label}</option>;
  };
  return (
    <>
      <div className=" container">
        <div className="step_title_div">
          <div className="step_title_div_inner">
            <h3 className="fs-title">Select Your Industry</h3>
          </div>
        </div>
        <div className="row  justify-content-center">
          <div id="selector" className="col-md-4 text-center">
            <select className="form-select" aria-label="Default select example">
              {OptionData.map((val, i) => {
                return <Option key={i} {...val} />;
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
const Step3 = () => {
  const CardData = [
    {
      title: "facebook",
      icon: Fbbox,
      id: "1",
    },

    {
      title: "Instagram",
      icon: Instabox,
      id: "2",
    },
    {
      title: "Google Adwords",
      icon: Googleadwordbox,
      id: "2",
    },
    {
      title: "SEO",
      icon: Googleseobox,
      id: "2",
    },
  ];
  const CardApp = (props) => {
    return (
      <>
        <div className="col-md-3 col-6 my-2">
          <div className="checkboxbox">
            <input type="checkbox" name="checkbased" id={props.id} />
            <label className="checkbox_title text-center" htmlFor={props.id}>
              <img src={props.icon} alt="d" />
              <br />
              <br />
              <h6>{props.title}</h6>
            </label>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className=" container">
        <div className="step_title_div">
          <div className="step_title_div_inner">
            <h3 className="fs-title">
              What type of marketing services are you using?
            </h3>
            <p>( Select more than one if applicable )</p>
          </div>
        </div>

        <div className="row  justify-content-center">
          {CardData.map((val, i) => {
            return <CardApp key={i} {...val} />;
          })}
        </div>
      </div>
    </>
  );
};
const Step4 = () => {
  const ListData = [
    {
      title: "Less than 3 months",
      id: "1",
    },
    {
      title: "6 - 9 months",
      id: "2",
    },
  ];
  const ListApp = (props) => {
    return (
      <>
        <div className=" col-md-4 m-2">
          <div className="defultbox">
            <input type="radio" name="longbox" id={props.id} />
            <label className="radiobox_title" htmlFor={props.id}>
              <h6>{props.title}</h6>
            </label>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className=" container">
        <div className="step_title_div">
          <div className="step_title_div_inner">
            <h3>How long you have been using marketing services?</h3>
          </div>
        </div>
        <div className="row justify-content-center">
          {ListData.map((val, i) => {
            return <ListApp key={i} {...val} />;
          })}
        </div>
      </div>
    </>
  );
};
const Step5 = () => {
  const ListData = [
    {
      title: "Website Traffic",
      id: "1",
    },
    {
      title: "6 - 9 months",
      id: "2",
    },
  ];
  const ListApp = (props) => {
    return (
      <>
        <div className=" col-md-4 mx-auto my-2">
          <div className="defultbox">
            <input type="checkbox" name="longbox" id={props.id} />
            <label className="checkbox_title" htmlFor={props.id}>
              <h6>{props.title}</h6>
            </label>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className=" container">
        <div className="step_title_div">
          <div className="step_title_div_inner">
            <h3>How long you have been using marketing services?</h3>
            <p className="fs-subtitle text-secondary">
              ( Select more than one if applicable )
            </p>
          </div>
        </div>
        <div className="row  justify-content-center flex-column justify-content-center">
          {ListData.map((val, i) => {
            return <ListApp key={i} {...val} />;
          })}
        </div>
      </div>
    </>
  );
};
const Step6 = () => {
  return (
    <>
      <div className=" container">
        <div className="step_title_div">
          <div className="step_title_div_inner">
            <h3 className="fs-title">Please enter your website URL</h3>
            <p className="fs-subtitle text-secondary">
              ( Enter NA if you don’t have one )
            </p>
          </div>
        </div>
        <div className="Step6_inner_div">
          <textarea
            placeholder="Website URL "
            className="form-control "
            rows="3"
          ></textarea>
        </div>
      </div>
    </>
  );
};
const Step7 = () => {
  return (
    <>
      <div className=" container">
        <div className="step_title_div">
          <div className="step_title_div_inner">
            <h3 className="fs-title">
              Briefly describe about your business, what do you sell, who is
              your target audience & what is your pricing?
            </h3>
          </div>
        </div>
        <div className="Step6_inner_div">
          <textarea
            placeholder="Website URL "
            className="form-control"
            rows="3"
          ></textarea>
        </div>
      </div>
    </>
  );
};
const Step8 = () => {
  const OptionData = [
    {
      label: "Country",
      value: "1",
    },
    {
      label: "India",
      value: "2",
    },
    {
      label: "United Kingdom",
      value: "3",
    },
  ];
  const Option = (props) => {
    return <option value={props.value}>{props.label}</option>;
  };
  return (
    <>
      <div className=" container">
        <div className="step_title_div">
          <div className="step_title_div_inner">
            <h3 className="fs-title">Select Your Industry</h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div id="selector" className="col-md-4 text-center">
            <select className="form-select" aria-label="Default select example">
              {OptionData.map((val, i) => {
                return <Option key={i} {...val} />;
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
const Step9 = () => {
  const ListData = [
    {
      title: "Below $3k",
      id: "1",
    },
    {
      title: "$10k - $20k",
      id: "2",
    },
  ];
  const ListApp = (props) => {
    return (
      <>
        <div className=" col-md-4 m-2">
          <div className="defultbox">
            <input type="radio" name="longbox" id={props.id} />
            <label className="radiobox_title" htmlFor={props.id}>
              <h6>{props.title}</h6>
            </label>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className=" container">
        <div className="step_title_div">
          <div className="step_title_div_inner">
            <h3>What is your monthly budget?</h3>
          </div>
        </div>
        <div className="row justify-content-center">
          {ListData.map((val, i) => {
            return <ListApp key={i} {...val} />;
          })}
        </div>
      </div>
    </>
  );
};
const Step10 = () => {
  const BoxData = [
    {
      number: "1",
      placeholder: "Website URL ",
      rows: "3",
    },
    {
      number: "2",
      placeholder: "Website URL ",
      rows: "3",
    },
  ];
  const BoxApp = (props) => {
    return (
      <>
        <div className="col-12 ">
          <div className="row justify-content-center align-items-center">
            <div className="col-1 ">
              <span>
                <b>{props.number}.</b>
              </span>
            </div>
            <div className="col-lg-5">
              <textarea
                className="form-control"
                rows={props.rows}
                placeholder={props.placeholder}
              ></textarea>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className=" container">
        <div className="step_title_div">
          <div className="step_title_div_inner">
            <h3>Who do you consider your biggest competitors?</h3>
            <p>( Enter website URL )</p>
          </div>
        </div>
        <div className="row g-3">
          {BoxData.map((val, i) => {
            return <BoxApp key={i} {...val} />;
          })}
        </div>
      </div>
    </>
  );
};
const Step11 = () => {
  const ListData = [
    {
      title: "Immediately",
      id: "1",
    },
    {
      title: "In the next 2 weeks",
      id: "2",
    },
    {
      title: "2 - 4 weeks",
      id: "2",
    },
    {
      title: "In the next 2 weeks",
      id: "2",
    },
  ];
  const ListApp = (props) => {
    return (
      <>
        <div className=" col-md-4 m-2">
          <div className="defultbox">
            <input type="radio" name="longbox" id={props.id} />
            <label className="radiobox_title" htmlFor={props.id}>
              <h6>{props.title}</h6>
            </label>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className=" container">
        <div className="step_title_div">
          <div className="step_title_div_inner">
            <h3>When are you looking to get started?</h3>
          </div>
        </div>
        <div className="row  justify-content-center">
          {ListData.map((val, i) => {
            return <ListApp key={i} {...val} />;
          })}
        </div>
      </div>
    </>
  );
};
