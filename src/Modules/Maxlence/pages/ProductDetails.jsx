import Youtubecamp from "../assests/youtubecamp.jpg";
import Planscheckicon from "../assests/planscheckicon.png";
import Pageseo from "../assests/pageseo.jpg";
import socialmediamarketing from "../assests/socialmediamarketing.jpg";
import Emailmarketing from "../assests/emailmarketing.jpg";
import Videocamptool1 from "../assests/videocamptool1.png";
import Videocamptool2 from "../assests/videocamptool2.png";
import Videocamptool3 from "../assests/videocamptool3.png";
import Videocamptool4 from "../assests/videocamptool4.png";
import Videocamptool5 from "../assests/videocamptool5.png";
import Videocamptool6 from "../assests/videocamptool6.png";
import Downloadicon from "../assests/downloadicon.png";
import Spreadcamp from "../assests/spreadcamp.jpg";
import { Faqs } from "../components/Faqs";
import { NavLink } from "react-router-dom";
import Select from "react-select";

export const ProductDetails = () => {
  return (
    <>
      <YoutubecampApp />
      <Flexible />
      <Questions />
      <VestibulumPretium />
      <RecentPurchase />
      <CampaignWork />
      <Brochure />
      <SpreadingCampaign />
      <Faqs />
    </>
  );
};
const YoutubecampApp = () => {
  return (
    <>
      <div className="container  my-sm-4 py-sm-5 py-0 my-0  videocamphero">
        <div className="row justify-content-around align-items-start">
          <div className="col-sm-4 my-3">
            <img className="w-100" src={Youtubecamp} alt="Youtubecamp" />
          </div>
          <div className="col-sm-6 my-3">
            <h1>Video Campaign</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem quam modi repudiandae neque, quo rem? Suscipit
              beatae eius dolore quae commodi dicta nam dolorem nulla aliquam.
              Nam soluta, ullam quasi obcaecati facilis tempore accusantium
              repellat?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit in
              consequatur possimus ratione necessitatibus consequuntur, voluptas
              nisi vitae sequi ipsum!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              reiciendis quas obcaecati pariatur neque consequuntur qui non
              omnis molestias? Vero soluta architecto obcaecati nisi! Quibusdam
              error in maiores dolor, explicabo illum illo ad aliquam. Ducimus
              mollitia dolores corrupti expedita nesciunt nostrum totam
              doloribus eius ipsum, tempora, recusandae suscipit quis. Sed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const Flexible = () => {
  return (
    <>
      <div
        className="container-fluid py-4 py-sm-1"
        style={{ background: "#f5f5f5" }}
      >
        <h1 className="text-center pt-sm-5 p-3">
          <span>Flexible</span> Plans
        </h1>
        <div className="container">
          <div className="row py-4 d-flex justify-content-around">
            <div className="shadow-lg col-sm-3 my-3 py-3 bg-white">
              <div className="d-flex justify-content-around align-items-center text-center">
                <h3>Monthly</h3>
                <h1>
                  <span>$40</span>
                </h1>
              </div>
              <div className="logosubcard py-4 bg-white text-dark text-center">
                <ul className="list-unstyled" style={{ textAlign: "left" }}>
                  <li className="lead">
                    <img src={Planscheckicon} alt="f" className="mx-3" />
                    10 Marketing Posts
                  </li>
                  <li className="lead">
                    <img src={Planscheckicon} alt="f" className="mx-3" />
                    Free Mockups
                  </li>
                  <li className="lead">
                    <img src={Planscheckicon} alt="f" className="mx-3" />
                    Final Formats (PNG, JPEG)
                  </li>
                  <li className="lead">
                    <img src={Planscheckicon} alt="f" className="mx-3" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="lead">
                    <img src={Planscheckicon} alt="f" className="mx-3" />
                    Lorem, ipsum dolor.
                  </li>
                </ul>
                <div className="getstarted mt-5 wow animate__animated animate__fadeInUp">
                  <a
                    className="whitebgbtn fontrale wow animate__animated animate__delay-1s animate__slow animate__bounceIn"
                    href="#"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>

            <div className="shadow-lg col-sm-3 my-3 py-3 bg-white">
              <div className="d-flex justify-content-around align-items-center text-center">
                <h3>Monthly</h3>
                <h1>
                  <span>$40</span>
                </h1>
              </div>
              <div className="logosubcard py-4 bg-white text-dark text-center">
                <ul className="list-unstyled " style={{ textAlign: "left" }}>
                  <li className="lead">
                    <img src={Planscheckicon} alt="f" className="mx-3" />
                    10 Marketing Posts
                  </li>
                  <li className="lead">
                    <img src={Planscheckicon} alt="f" className="mx-3" />
                    Free Mockups
                  </li>
                  <li className="lead">
                    <img src={Planscheckicon} alt="f" className="mx-3" />
                    Final Formats (PNG, JPEG)
                  </li>
                  <li className="lead">
                    <img src={Planscheckicon} alt="f" className="mx-3" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="lead">
                    <img src={Planscheckicon} alt="f" className="mx-3" />
                    Lorem, ipsum dolor.
                  </li>
                </ul>
                <div className="getstarted mt-5 wow animate__animated animate__fadeInUp">
                  <a
                    className="whitebgbtn fontrale wow animate__animated animate__delay-1s animate__slow animate__bounceIn"
                    href="#"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>

            <div className="shadow-lg col-sm-3 my-3 py-3 bg-white">
              <div className="d-flex justify-content-around align-items-center text-center">
                <h3>Monthly</h3>
                <h1>
                  <span>$40</span>
                </h1>
              </div>
              <div className="logosubcard py-4 bg-white text-dark text-center">
                <ul className="list-unstyled " style={{ textAlign: "left" }}>
                  <li className="lead">
                    <img src={Planscheckicon} alt="f" className="mx-3" />
                    10 Marketing Posts
                  </li>
                  <li className="lead">
                    <img src={Planscheckicon} alt="f" className="mx-3" />
                    Free Mockups
                  </li>
                  <li className="lead">
                    <img src={Planscheckicon} alt="f" className="mx-3" />
                    Final Formats (PNG, JPEG)
                  </li>
                  <li className="lead">
                    <img src={Planscheckicon} alt="f" className="mx-3" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="lead">
                    <img src={Planscheckicon} alt="f" className="mx-3" />
                    Lorem, ipsum dolor.
                  </li>
                </ul>
                <div className="getstarted mt-5 wow animate__animated animate__fadeInUp">
                  <a
                    className="whitebgbtn fontrale wow animate__animated animate__delay-1s animate__slow animate__bounceIn"
                    href="#"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Questions = () => {
  const City = [
    { value: "delhi", label: "delhi" },
    { value: "gurgaon", label: "gurgaon" },
  ];
  const Area = [
    { value: "Delhi/NCR", label: "Delhi/NCR" },
    { value: "gurgaon", label: "gurgaon" },
  ];
  const Age = [
    { value: "18-24", label: "18-24" },
    { value: "25-35", label: "25-35" },
  ];
  const Occupation = [
    { value: "Designer", label: "Designer" },
    { value: "Designer2", label: "Designer2" },
  ];
  const Income = [
    { value: "1Lakh", label: "1Lakh" },
    { value: "2Lakh", label: "2Lakh" },
  ];
  const Others = [
    { value: "Delhi/NCR", label: "Delhi/NCR" },
    { value: "Gurugram", label: "Gurugram" },
  ];
  return (
    <>
      <div
        className="container-fluid py-4 questionform"
        style={{ background: "#e7f3ff" }}
      >
        <form>
          <div className="container py-4">
            <div className="row justify-content-around">
              <div className="col-2">
                <div className="numbullets">
                  <small>1</small>
                </div>
              </div>
              <div className="col-9 px-0">
                <div className="questtitle">
                  <h3>INDUSTRY</h3>
                </div>
                <div className="row my-4 flex-sm-row flex-column justify-content-around align-items-center">
                  <div className="col-sm-6 col-12 my-2">
                    <input type="checkbox" name="foodindus" />
                    <label htmlhtmlFor="foodindus" className=" ms-1">
                      Food
                    </label>
                  </div>
                  <div className="col-sm-6 col-12 my-2">
                    <input type="checkbox" name="entindus" />
                    <label htmlhtmlFor="entindus" className=" ms-1">
                      Entertainment
                    </label>
                  </div>
                  <div className="col-sm-6 col-12 my-2">
                    <input type="checkbox" name="realsindus" />
                    <label htmlhtmlFor="realsindus" className=" ms-1">
                      Real Estate
                    </label>
                  </div>
                  <div className="col-sm-6 col-12 my-2">
                    <input type="checkbox" name="eventindus" />
                    <label htmlhtmlFor="eventindus" className=" ms-1">
                      Events
                    </label>
                  </div>
                  <div className="col-sm-6 col-12 my-2">
                    <input type="checkbox" name="fitindus" />
                    <label htmlhtmlFor="fitindus" className=" ms-1">
                      Fitness & Health
                    </label>
                  </div>
                  <div className="col-sm-6 col-12 my-2">
                    <input type="checkbox" name="elecindus" />
                    <label htmlhtmlFor="elecindus" className=" ms-1">
                      Electronics
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-around">
              <div className="col-2">
                <div className="numbullets">
                  <small>2</small>
                </div>
              </div>
              <div className="col-9 px-0">
                <div className="questtitle">
                  <h3>LOCATION</h3>
                </div>
                <div className="row my-4 justify-content-around align-items-center">
                  <div className="col-sm-6 col-12 my-2">
                    <div className="location_dropdown">
                      <Select
                        // menuIsOpen={true}
                        options={City}
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12 my-2">
                    <div className="location_dropdown">
                      <Select
                        // menuIsOpen={true}
                        options={Area}
                        placeholder="Area"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-around">
              <div className="col-2">
                <div className="numbullets">
                  <small>3</small>
                </div>
              </div>
              <div className="col-9 px-0">
                <div className="questtitle">
                  <h3>Target Audience</h3>
                </div>
                <div className="row my-4 justify-content-around align-items-center">
                  <div className="col-sm-6 col-12 my-2">
                    <div className="location_dropdown">
                      <Select
                        // menuIsOpen={true}
                        options={Age}
                        placeholder="Age"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12 my-2">
                    <div className="location_dropdown">
                      <Select
                        // menuIsOpen={true}
                        options={Occupation}
                        placeholder="Occupation"
                      />
                    </div>
                  </div>

                  <div className="col-sm-6 col-12 my-2">
                    <div className="location_dropdown">
                      <Select
                        // menuIsOpen={true}
                        options={Income}
                        placeholder="Income"
                      />
                    </div>
                  </div>

                  <div className="col-sm-6 col-12 my-2">
                    <div className="location_dropdown">
                      <Select
                        // menuIsOpen={true}
                        options={Others}
                        placeholder="Others"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-around">
              <div className="col-2">
                <div className="numbullets">
                  <small>4</small>
                </div>
              </div>
              <div className="col-9 px-0">
                <div className="questtitle">
                  <h3>PROJECT DETAILS</h3>
                </div>
                <div className="row my-4 justify-content-around align-items-center">
                  <div className="col-sm-12 col-12 my-2">
                    <div className="form-group">
                      <div className="t-dropdown-block">
                        <div className="t-dropdown-select">
                          <input
                            type="text"
                            className="t-dropdown-input"
                            placeholder="Project Name (This name will be referenced in your invoice.)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="questtitle">
                  <h3>PROJECT BRIEF</h3>
                </div>
                <div className="row my-4 justify-content-around align-items-center">
                  <div className="col-sm-12 col-12 my-2">
                    <div className="form-group">
                      <textarea
                        name="comment"
                        id="text-area"
                        style={{ padding: "2rem" }}
                        className="t-dropdown-input"
                        placeholder="Kindly share detailed information regarding standards of this Logo attach files in pDF/PNG/JPEG/ZIP format."
                        rows="5"
                        form="usrform"
                      ></textarea>

                      <div className="my-3">
                        <input type="checkbox" id="cbox" />
                        <label htmlhtmlFor="cbox">
                          I don’t want to submit any file.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="getstarteds text-center wow animate__animated animate__fadeInUp">
              <NavLink className="whitebgbtn fontrale" to="/">
                Submit
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const VestibulumPretium = () => {
  return (
    <>
      <div className="container my-5 py-3">
        <h3>Vestibulum pretium id mattis</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          culpa vero cupiditate, mollitia illo ratione neque eligendi? Labore
          distinctio molestiae soluta, enim culpa necessitatibus obcaecati
          ratione delectus, ea consequatur sint.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quidem
          itaque non atque, illo cumque, corrupti eum esse quo impedit suscipit
          quod sunt nam omnis tempore eligendi aut eveniet quam id explicabo
          aliquam! Dolorem, error.
        </p>
      </div>
    </>
  );
};
const RecentPurchase = () => {
  return (
    <>
      <div
        className="container-fluid py-sm-4 py-3"
        style={{ background: "#f5f5f5" }}
      >
        <div className="container homeshops my-sm-4 py-sm-3 py-3 my-3 videocampintro">
          <h3
            className="font-weight-bold mb-4 wow animate__ animate__fadeInDown animated"
            style={{ visibility: "visible", animationName: "fadeInDown" }}
          >
            Frequently Purchased
          </h3>

          <div className="row py-3">
            <div className="div featcamp col-sm-3 col-6">
              <div className="seoshop shopfeat wow animate__animated animate__fadeIn animate__slow">
                <img className="w-100" src={Pageseo} alt="f" />
              </div>
              <p className="mt-2 mt-sm-3 mb-1">
                <b>On Page SEO</b>
              </p>
              <p>
                <span>
                  <b>$123</b>
                </span>
              </p>
            </div>

            <div className="div featcamp col-sm-3 col-6">
              <div className="seoshop shopfeat wow animate__animated animate__fadeIn animate__slow">
                <img className="w-100" src={Youtubecamp} alt="f" />
              </div>
              <p className="mt-2 mt-sm-3 mb-1">
                <b>Video Campaign</b>
              </p>
              <p>
                <span>
                  <b>$123</b>
                </span>
              </p>
            </div>

            <div className="div featcamp col-sm-3 col-6">
              <div className="seoshop shopfeat wow animate__animated animate__fadeIn animate__slow">
                <img className="w-100" src={socialmediamarketing} alt="f" />
              </div>
              <p className="mt-2 mt-sm-3 mb-1">
                <b>Organic Instagram Marketing</b>
              </p>
              <p>
                <span>
                  <b>$123</b>
                </span>
              </p>
            </div>

            <div className="div featcamp col-sm-3 col-6">
              <div className="seoshop shopfeat wow animate__animated animate__fadeIn animate__slow">
                <img className="w-100" src={Emailmarketing} alt="f" />
              </div>
              <p className="mt-2 mt-sm-3 mb-1">
                <b>Email Marketing</b>
              </p>
              <p>
                <span>
                  <b>$123</b>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const CampaignWork = () => {
  return (
    <>
      <div className="container my-sm-4 py-sm-3 py-3 my-3">
        <div className="campworkhead py-3 my-3 text-center">
          <h3>Why Our Campaigns Work</h3>
          <p>We use the best tools</p>
        </div>

        <div className="row justify-content-around">
          <div className="col-sm-3 m-3 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool1} alt="Videocamptool1" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Seo</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool2} alt="videocamptool2" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Competitive Research</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool3} alt="f" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Site Audit</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool4} alt="videocamptool4" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Keywords</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool5} alt="videocamptool5" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Ads</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool6} alt="videocamptool6" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Analysis</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Brochure = () => {
  return (
    <>
      <div className="container-fluid mystyle py-4 mt-4">
        <div className="container text-center py-4 text-white">
          <div className="mt-0">
            <h1>
              <b> Google Ads</b>
            </h1>
          </div>
          <div className="row mt-sm-3 justify-content-center align-items-center py-3">
            <div className="col-md-3 my-2 px-0 vendorbenifits">
              <p className="text-white border-right border-xs-right-none">
                Search Campaign
              </p>
            </div>

            <div className="col-md-3 my-2 px-0 vendorbenifits">
              <p className="text-white border-right border-xs-right-none">
                Display Campaign
              </p>
            </div>

            <div className="col-md-3 my-2 px-0 vendorbenifits">
              <p className="text-white border-right border-xs-right-none">
                Video Campaign
              </p>
            </div>

            <div className="col-md-3 my-2 px-0 vendorbenifits">
              <p className="text-white">Shopping</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-4">
          <a
            className="whitebgbtn fontrale text-white border-white"
            href="assests/pdfdemo.pdf"
            download="Google Ads Brochure"
          >
            Download &nbsp; <img src={Downloadicon} alt="downloadicon" />
          </a>
        </div>
      </div>
    </>
  );
};
const SpreadingCampaign = () => {
  return (
    <>
      <div
        className="container-fluid p-3"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-sm-5 my-3 text-sm-right text-center wow animate__animated animate__fadeInUp animate__slow">
              <h1 className="font-weight-bold my-3">
                <b>
                  A <span>campaign</span> worth spreading
                </b>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                aliquet rutrum lorem non et tortor commodo. Sagittis vulputate
                lectus mollis faucibus sit. Lacus tempus hendrerit nunc magna
                eleifend. Porta mauris ipsum, metus diam pulvinar non. Aliquet
                vitae ultrices mattis egestas. eleifend. Porta mauris ipsum,
                metus diam pulvinar non. Aliquet vitae ultrices mattis egestas.
                eleifend. Porta mauris ipsum, metus diam pulvinar non. Aliquet
                vitae ultrices mattis egestas.
              </p>
              <div className="mt-5">
                <a className="ctabtn viewjectbtn fontpop" href="#">
                  <small>
                    <b>View Project</b>
                  </small>
                </a>
              </div>
            </div>

            <div className="col-sm-6 py-3 rounded my-2 text-center wow animate__animated animate__fadeInUp animate__slow">
              <img className="w-100" src={Spreadcamp} alt="Spreadcamp" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid p-3"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="container">
          <div className="row justify-content-around align-items-center">
            <div className="col-sm-5 rounded text-center order-md-2 order-sm-1 order-1 wow animate__animated animate__fadeInUp animate__slow">
              <div className="p-5 my-3 bg-white">
                <p>
                  Banners <b>Starts at $50</b>
                </p>
                <p>
                  Landing Pages <b>Starts at $50</b>
                </p>
              </div>
            </div>

            <div className="col-sm-6 my-2 text-center text-sm-left wow animate__animated animate__fadeInUp animate__slow">
              <h1 className="font-weight-bold my-sm-4 wow animate__animated animate__fadeInUp animate__slow">
                Marketing
                <span>Catalysts</span>
              </h1>
              <p className="my-sm-4 wow animate__animated animate__fadeInUp animate__slow">
                To add further value to our digital marketing clients, our email
                marketing agency also offers production services for landing
                pages and banners. An email campaign is incomplete without these
                digital assets. Our expert team can build high-converting
                banners as well as landing pages according to your preferences
                and in line with the trends.
              </p>
              <div className="getstarteds mt-5 wow animate__animated animate__fadeInUp">
                <a className="whitebgbtn fontrale" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
