import React from "react";

import { Checkbox as MUICheckbox } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomCheckbox = styled(MUICheckbox)({
  color: "var(--text-color)",
  "&.Mui-checked": {
    color: "var(--text-color)",
  },
});

const Checkbox = (props) => {
  return (
    <CustomCheckbox {...props} />
  );
};

export default Checkbox;