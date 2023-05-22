import { FaStar } from "react-icons/fa";
import QuoteIcon from "../../../img/quote.svg";
import { FooterContact } from "../components/FooterContact";

export const Testimonial = () => {
  const SliderData = [
    {
      name: "sunny charkhwal",
      img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/navicons/testiprofile.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cum itaque ipsa magni dolor vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cum itaque ipsa magni dolor vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cum itaque ipsa magni dolor vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cum itaque ipsa magni dolor vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cum itaque ipsa magni dolor vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cum itaque ipsa magni dolor vero.",
    },
    {
      name: "sunny charkhwal",
      img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/navicons/testiprofile.jpg",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cum itaque ipsa magni dolor vero.",
    },
    {
      name: "sunny charkhwal",
      img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/navicons/testiprofile.jpg",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cum itaque ipsa magni dolor vero.",
    },
    {
      name: "sunny charkhwal",
      img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/navicons/testiprofile.jpg",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cum itaque ipsa magni dolor vero.",
    },
  ];
  const SliderApp = (props) => {
    return (
      <>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div>
            <div className="seo_service_rating_div">
              <img className="QuoteIcon_img" src={QuoteIcon} alt="icon" />
              <div className="seo_service_rating_inner_div">
                <img src={props.img} alt="img" />
                <p>{props.name}</p>
              </div>
              <h6>{props.text}</h6>
              <div className="seo_service_rating_star_div">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="last_star_my" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="testimonial_top_div">
        <div className="testimonial_top_inner_div">
          <h3>
            Hear it traight from <br /> our esteemed client
          </h3>
          <p>
            Andrew, founder of Luno Electrical, on how we <br /> took his idea
            to launch and scale.
          </p>
          <div>
            <iframe
              className="video"
              src="https://www.youtube.com/embed/-NO-AYiNsG0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <section className=" container mt-5">
        <div class="text-center">
          <h1>
            Read What Our <span>Customers Say</span>
          </h1>
        </div>
        <div className="testimonial_riv_div">
          <div className="row g-5 ">
            {SliderData.map((val, i) => {
              return <SliderApp key={i} {...val} />;
            })}
          </div>
        </div>
      </section>
      <FooterContact />
    </>
  );
};
