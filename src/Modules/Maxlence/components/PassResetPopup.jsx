import React from "react";
import { useDispatch } from "react-redux";
import { setNewPasswordModalTrue, setToken } from "../redux/modalStateSlice";
import { useParams } from "react-router-dom";

export default function PassResetPopup() {
  let token = useParams();
  console.log(token)
  const dispatch = useDispatch();
  dispatch(setNewPasswordModalTrue(true));
  dispatch(setToken(token));
  return <></>;
}
