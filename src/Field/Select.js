import React from "react";
import { changeHandler } from "../utils";

const Select = ({ config, formik, value = "", error }) => {
  const {
    name,
    type,
    attributes,
    options,
    rows,
    fieldClass = "select w-full max-w-xs",
  } = config;
  const { handleChange, handleBlur } = formik;

  return (
    <select
      id={name}
      name={name}
      className={fieldClass + (error ? " is-invalid " : "")}
      value={value}
      onChange={changeHandler.bind(this, handleChange, formik, config)}
      onBlur={handleBlur}
      {...attributes}
    >
      {options?.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default React.memo(Select);
