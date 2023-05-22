import Faq from "react-faq-component";
import { IoIosArrowDown } from "react-icons/io";
import ENDPOINT from "../config/ENDPOINT";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

const config = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: <IoIosArrowDown />,
  collapseIcon: <IoIosArrowDown />,
};

const styles = {
  bgColor: "white",
  titleTextColor: "black",
  // titleTextSize: '48px',
  rowTitleColor: "black",
  rowTitleFontWeight: "700",
  rowTitleTextSize: "1rem",
  rowContentColor: "grey",
  rowContentTextSize: "1rem",
  // rowContentPaddingTop: '10px',
  rowContentPaddingBottom: "10px",
  // rowContentPaddingLeft: "50px",
  // rowContentPaddingRight: '150px',
  // arrowColor: "red",
  //transitionDuration: "1s",
  // timingFunc: "ease"
};

export const Faqs = ({ catId }) => {
  const [faq, setFaq] = useState({
    title: "FAQ",
    rows: [],
  });

  async function getFaqs() {
    let res = await fetch(ENDPOINT + `faq?cat_id=${catId}`);
    const data = await res.json();
    setFaq((old) => {
      return {
        ...old,
        rows: data,
      };
    });
  }

  useEffect(() => {
    getFaqs();
  }, []);

  return (
    <>
      {/* <div className="container">
        <div>
          <div className="d-flex align-items-center wow animate__animated animate__fadeInUp">
            <div className="faqhomevhead text-left">
              <h1>FAQ</h1>
            </div>
            <div className="content">
              <div className="search">
                <input
                  type="text"
                  className="search__input"
                  aria-label="search"
                  placeholder="enter your search"
                />
                <button className="search__submit" aria-label="submit search">
                  <BiSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="faqContainer">
        <section className="title-centerc container border-0">
          <Faq data={faq} config={config} styles={styles} />
        </section>
      </div>
    </>
  );
};
