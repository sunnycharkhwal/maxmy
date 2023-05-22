import * as React from "react";
import Wifi from "../../../img/wifi.png";
import Sim from "../../../img/sim.png";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import ENDPOINT from "../config/ENDPOINT";
import axios from "axios";
import Master from "../../../img/master.png";
import {
  formatCVV,
  formatCreditCardNumber,
  formatExpirationDate,
} from "./utils";
import Swal from "sweetalert2";

export const Payment = () => {
  const [card, setCard] = React.useState([]);
  const user = useSelector((state) => state.state.user);
  const [open, setOpen] = React.useState(false);
  const [editId, setEditId] = React.useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editModalOpen, setEditModalOpen] = React.useState(false);

  const fetchCards = async () => {
    const { data } = await axios.get(ENDPOINT + "payment-card");
    setCard(data);
  };

  React.useEffect(() => {
    fetchCards();
  }, []);

  const handleDelete = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          let isCardDlted = await axios.delete(ENDPOINT + `payment-card/${id}`);
          if (isCardDlted) {
            Swal.fire("Deleted!", "Card has been deleted.", "success");
          }
          setCard(card.filter((c) => c.id !== id));
        }
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Server error!",
      });
      console.log(err);
    }
  };

  const handleUpdate = (id) => {
    setEditId(id);
    setEditModalOpen(true);
  };

  const CardApp = (props) => {
    const savedCard = props.number
      .toString()
      .match(/.{1,4}/g)
      .join(" ");
    return (
      <>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="saved_cards_div">
            <div className="saved_cards_wifi">
              <img src={Wifi} alt="wifi" />
              <p>{props.type}</p>
            </div>
            <h1>Visa</h1>
            <div className="saved_cards_number">
              <p>
                <span>{savedCard.split(" ")[0]}</span>
                <span>{savedCard.split(" ")[1]}</span>
                <span>{savedCard.split(" ")[2]}</span>
                <span>{savedCard.split(" ")[3]}</span>
              </p>
              <img src={Sim} alt="sim" />
            </div>
            <p className="saved_cards_name">{props.name}</p>
            <p className="saved_cards_date">{props.expiry}</p>
            <div className="saved_cards_div_over_div">
              <div className="saved_cards_div_over">
                <span className="saved_cards_div_over_edit">
                  <MdOutlineModeEdit onClick={() => handleUpdate(props.id)} />
                </span>
                <span className="saved_cards_div_over_delete">
                  <RiDeleteBin6Line onClick={() => handleDelete(props.id)} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const CardForm = () => {
    const [state, setState] = React.useState({
      number: "",
      name: "",
      expiry: "",
      cvv: "",
      type: "",
    });
    const { number, name, expiry, cvv, type } = state;
    const num = number.replaceAll(" ", "");

    const handleInputChange = ({ target }) => {
      if (target.name === "number") {
        target.value = formatCreditCardNumber(target.value);
      } else if (target.name === "expiry") {
        target.value = formatExpirationDate(target.value);
      } else if (target.name === "cvv") {
        target.value = formatCVV(target.value);
      }

      setState({ ...state, [target.name]: target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const values = { number: num, name, expiry, cvv, type };

      try {
        axios
          .post(ENDPOINT + "payment-card", values)
          .then((res) => {
            if (res.status === 200) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "success",
                text: "New Card Added",
                showConfirmButton: false,
                timer: 1500,
              });
              setOpen(false);
            }
          })
          .catch((err) => {
            if (err.response.status === 401) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Card already exists!",
              });
            } else if (err.response.status === 400) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No new card added!",
              });
            }
          });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Server error!",
        });
      }

      setState({
        number: "",
        name: "",
        expiry: "",
        cvv: "",
        type: "",
      });
    };

    return (
      <div key="Payment">
        <div className="App-payment">
          <form onSubmit={handleSubmit} method="post">
            <div className="row g-3">
              <div className="col-12">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="type"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Card Type</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                </select>
              </div>
              <div className="col-12">
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-group card_input_div">
                      <small>Card Number</small>
                      <div className="card_input_div_input">
                        <img src={Master} alt="img" />
                        <input
                          type="tel"
                          name="number"
                          className="form-control"
                          placeholder="Card Number"
                          pattern="[\d| ]{16,22}"
                          maxLength="19"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group card_input_div">
                      <small>Name on card</small>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        pattern="[a-z A-Z-]+"
                        required
                        value={state.name}
                        autoComplete="off"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="form-group card_input_div">
                      <small>Expiration Date</small>
                      <input
                        type="tel"
                        name="expiry"
                        className="form-control"
                        placeholder="Valid Thru"
                        pattern="\d\d/\d\d"
                        required
                        value={state.expiry}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group card_input_div">
                      <small>CVV</small>
                      <input
                        type="tel"
                        name="cvv"
                        className="form-control"
                        placeholder="CVV"
                        pattern="\d{3}"
                        required
                        value={state.cvv}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="row">
                  <div className="col-12 checkout_btn justify-content-center mt-2">
                    <div>
                      <div className="form-actions">
                        <button
                          type="submit"
                          className=" brn full_btn checkout_btn"
                        >
                          Save Card
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const TransitionsModal = () => {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div className="col-12">
                <div className="payment_main_title text-center">
                  <h3>Add New Card</h3>
                </div>
                <div>
                  <CardForm />
                </div>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  };

  const CardEditForm = () => {
    const [state, setState] = React.useState({
      number: "",
      name: "",
      expiry: "",
      cvv: "",
      type: "",
    });
    const { number, name, expiry, cvv, type } = state;
    // const num = number.replaceAll(" ", "");

    const handleInputChange = ({ target }) => {
      setState({ ...state, [target.name]: target.value });
    };

    const fetchSingleCard = async () => {
      const { data } = await axios.get(ENDPOINT + `payment-card/${editId}`);
      setState(data);
    };

    React.useEffect(() => {
      fetchSingleCard();
    }, []);

    const handleUpdate = (e) => {
      e.preventDefault();
      const values = { number, name, expiry, cvv, type };

      try {
        axios
          .put(ENDPOINT + `payment-card/${editId}`, values)
          .then((res) => {
            if (res.status === 200) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "success",
                text: "Card Updated",
                showConfirmButton: false,
                timer: 1500,
              });
              setEditModalOpen(false);
            }
          })
          .catch((err) => {
            if (err.response.status === 400) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Card already exists!",
              });
            } else if (err.response.status === 401) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No card updated!",
              });
            }
          });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Server error!",
        });
      }
    };

    return (
      <div key="Payment">
        <div className="App-payment">
          <form onSubmit={handleUpdate} method="put">
            <div className="row g-3">
              <div className="col-12">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="type"
                  onChange={handleInputChange}
                  required
                >
                  <option value={state.type}>{state.type}</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                </select>
              </div>
              <div className="col-12">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="form-group card_input_div">
                      <small>Card Number</small>
                      <div className="card_input_div_input">
                        <img src={Master} alt="img" />
                        <input
                          type="tel"
                          name="number"
                          className="form-control"
                          placeholder="Card Number"
                          pattern="[\d| ]{16,22}"
                          maxLength="19"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group card_input_div">
                      <small>Name on card</small>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        pattern="[a-z A-Z-]+"
                        value={state.name}
                        autoComplete="off"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="form-group card_input_div">
                      <small>Expiration Date</small>
                      <input
                        type="tel"
                        name="expiry"
                        className="form-control"
                        placeholder="Valid Thru"
                        pattern="\d\d/\d\d"
                        value={state.expiry}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group card_input_div">
                      <small>CVV</small>
                      <input
                        type="tel"
                        name="cvv"
                        className="form-control"
                        placeholder="CVV"
                        pattern="\d{3}"
                        value={state.cvv}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="row">
                  <div className="col-12 checkout_btn justify-content-center mt-2">
                    <div>
                      <div className="form-actions">
                        <button
                          type="submit"
                          className=" brn full_btn checkout_btn"
                        >
                          Update Card
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const TransitionsEditModal = () => {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={editModalOpen}>
            <Box sx={style}>
              <div className="col-12">
                <div className="payment_main_title text-center">
                  <h3>Edit Card</h3>
                </div>
                <div>
                  <CardEditForm />
                </div>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  };

  return (
    <>
      <section className=" container mt-5 mb-5">
        <div className="row">
          <div className="col-12">
            <div>
              <div className="payment_main_title">
                <h3>Billing Address</h3>
              </div>
              <div className="payment_card">
                <Link to="/your_account">
                  <MdOutlineModeEdit />
                </Link>
                <h3>{user.companyName ? user.companyName : user.fullname}</h3>
                <p>
                  {user.workingAddress ? user.workingAddress : user.homeAddress}
                </p>
                <p>Contact No - {user.phoneNumber}</p>
                <p>
                  Email - {user.companyEmail ? user.companyEmail : user.email}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="payment_main_title mt-5">
              <h3>Saved Cards</h3>
            </div>
            <div className="row g-3">
              {card.map((val, i) => {
                return <CardApp key={i} {...val} />;
              })}
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card_add_new">
                  <AiOutlinePlus onClick={handleOpen} />
                  <TransitionsModal />
                  <TransitionsEditModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
