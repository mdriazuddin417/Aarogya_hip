import React from "react";

const CustomInput2 = ({ placeholder, name, type, value, ...rest }) => {
  return (
    <input
      name={name}
      type={type ? `${type}` : "text"}
      className="w-full py-2 px-2 border rounded-lg outline-none focus:border-primary focus:border-2 hover:border-gray-800 duration-200"
      placeholder={placeholder}
      value={value}
      {...rest}
    />
  );
};

export default CustomInput2;
