import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ENDPOINT from "../config/ENDPOINT";
import "../../../styles/style.scss";
import { useDispatch } from "react-redux";
import { setShowLoginModal } from "../redux/modalStateSlice";

export default function Quest() {
  const [questionare, setQuestionare] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const dispatch = useDispatch();

  let { id } = useParams();
  const navigate = useNavigate();

  const fetchQuestionare = async () => {
    let res = await fetch(ENDPOINT + `questionare/${id}`);
    let data = await res.json();
    setQuestionare(data);
  };

  useEffect(() => {
    fetchQuestionare();
  }, []);

  const updateAnswersState = (ans, idx) => {
    setQuestionare((old) => {
      let new_state = old.slice();
      new_state[idx]["answer"] = ans;
      return new_state;
    });
  };

  const updateMultiAnswersState = (ans, idx) => {
    let new_state = questionare.slice();
    let answers = new_state[idx]["answer"];
    let isAnswerArray = Array.isArray(answers);

    if (isAnswerArray) {
      let index = answers.findIndex((a) => a === ans);
      if (index === -1) answers.push(ans);
      else answers.splice(index, 1);
    } else new_state[idx]["answer"] = [ans];

    setQuestionare(new_state);
    // setQuestionare((old) => {
    //   let new_state = old.slice();
    //   let answers = new_state[idx]["answer"];
    //   let isAnswerArray = Array.isArray(answers);

    //   if (isAnswerArray) {
    //     let index = answers.findIndex((a) => a === ans);
    //     if (index === -1) answers.push(ans);
    //     else answers.splice(index, 1);
    //   } else new_state[idx]["answer"] = [ans];
    //   return new_state;
    // });
  };

  const submitData = () => {
    let token = localStorage.getItem("token");
    if (!token) dispatch(setShowLoginModal());
    else {
      try {
        axios
          .post(
            ENDPOINT + "quest",
            { questionare },
            { headers: { "x-access-token": token } }
          )
          .then((res) => {
            if (res.status === 200) {
              navigate(`/package/${id}`);
            } else console.log("Error while posting");
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const QuestionOptions = ({ ques, idx }) => {
    let answer_options = JSON.parse(ques.answer_options);

    const CheckboxAnswers = () => {
      return (
        <div className="col-md-12">
          {answer_options.map((answer, key) => {
            return (
              <div key={key}>
                <input
                  multiple
                  name="checkbox"
                  type="checkbox"
                  value={answer}
                  checked={questionare[idx]?.answer?.includes(answer)}
                  onChange={(e) => {
                    updateMultiAnswersState(e.target.value, idx);
                  }}
                />
                <label htmlhtmlhtmlFor="question">{answer}</label>
              </div>
            );
          })}
        </div>
      );
    };
    const RadioAnswers = () => {
      return answer_options.map((ans, key) => {
        return (
          <div className="radiobox" key={key}>
            <input
              name="radio"
              value={ans}
              checked={ans === questionare[idx].answer}
              type="radio"
              onChange={(e) => updateAnswersState(e.target.value, idx)}
            />
            <label htmlhtmlhtmlFor="question">
              <h6>{ans}</h6>
            </label>
          </div>
        );
      });
    };

    const TextboxAnswers = () => {
      return (
        <input
          type="text"
          name="textbox"
          defaultValue={questionare[idx].answer}
          onBlur={(e) => updateAnswersState(e.target.value, idx)}
        />
      );
    };
    const TextareaAnswers = () => {
      return (
        <textarea
          name="textarea"
          rows="4"
          cols="50"
          defaultValue={questionare[idx].answer}
          onBlur={(e) => updateAnswersState(e.target.value, idx)}
        />
      );
    };

    const DropdownAnswers = () => {
      return (
        <select
          name="dropdown"
          id="dropdown"
          value={questionare[idx].answer}
          onChange={(e) => updateAnswersState(e.target.value, idx)}
        >
          <option value="">Select</option>
          {answer_options.map((ans, key) => (
            <option key={key}>{ans}</option>
          ))}
        </select>
      );
    };

    switch (ques.que_type) {
      case "Checkbox":
        return <CheckboxAnswers />;
      case "Radiobox":
        return <RadioAnswers />;
      case "Textbox":
        return <TextboxAnswers />;
      case "Textarea":
        return <TextareaAnswers />;
      case "Dropdown":
        return <DropdownAnswers />;
      default:
        return null;
    }
  };

  return (
    <div>
      {questionare.map((ques, idx) => {
        return selectedIdx === idx ? (
          <div key={idx}>
            <h2>
              {idx + 1}. {ques.que}
            </h2>
            <br />
            <QuestionOptions ques={ques} idx={idx} />
          </div>
        ) : null;
      })}

      {selectedIdx === 0 ? null : (
        <button className="Btn" onClick={() => setSelectedIdx(selectedIdx - 1)}>
          Previous
        </button>
      )}
      <button
        className="Btn mt-5"
        onClick={() => {
          if (selectedIdx < questionare.length - 1)
            setSelectedIdx(selectedIdx + 1);
          else submitData();
        }}
      >
        Submit
      </button>
    </div>
  );
}
