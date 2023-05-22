import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

export const LoginInput = (props) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <>
      <div className="login_input_com">
        <label>{props.label}</label>
        <div className="login_input_com_icon">
          <span onClick={() => setShowPass(!showPass)}>
            {props.EyeIcon &&
              (showPass ? (
                <AiFillEye className=" text-black" />
              ) : (
                <AiFillEyeInvisible />
              ))}
          </span>
          <input
            type={props.EyeIcon ? (showPass ? "text" : props.type) : props.type}
            className={props.className}
            placeholder={props.placeholder}
          />
          <small className="error_message">{props.errorMessage}</small>
        </div>
      </div>
    </>
  );
};
