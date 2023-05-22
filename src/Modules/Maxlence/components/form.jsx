import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";

import { useNavigate } from "react-router-dom";

import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Checkboxes = (props) => (
  <Checkbox sx={{ p: 0 }} {...label} {...props} />
);

// Select DropDown
//CKtexteditor

export const SelectBox = (props) => {
  const navigate = useNavigate();

  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <TextField
      sx={{ width: 1 }}
      autoComplete="off"
      id="outlined-select-currency"
      select
      size="small"
      onChange={handleChange}
      helperText={props.helperText}
      label={props.label}
      value={currency}
    >
      {props.data.map((option) => (
        <MenuItem
          onClick={() => {
            if (option.url) navigate(option.url);
          }}
          key={option.value}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
export const InputBox = (props) => {
  return <TextField sx={{ width: 1 }} size="small" {...props} />;
};
export const TextAreaBox = (props) => {
  return (
    <TextField
      sx={{ width: 1 }}
      size="small"
      id="outlined-textarea"
      // multiline
      {...props}
    />
  );
};
export const InputBoxWithSwitch = (props) => {
  const label = { inputProps: { "aria-label": "Size switch demo" } };

  const SwitchesSize = () => {
    return (
      <div>
        <Switch {...label} defaultChecked size="small" />
      </div>
    );
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        {/* Toggle */}
        <div className="input_box_with_switch_div">
          <TextField id="outlined-required" size="small" {...props} />
          <Box className="input_box_with_switch_div_Switch" component="span">
            <SwitchesSize />
          </Box>
        </div>
      </div>
    </Box>
  );
};
export const SideLabelInput = (props) => {
  return (
    <>
      <div className="Customer_date_div">
        <label>{props.label}</label>
        <InputBox type={props.type} />
      </div>
    </>
  );
};
