import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function Avatar({ name, available }) {
  const text = React.useMemo(() => {
    return name
      .split(" ")
      .map((item) => item[0])
      .join("");
  }, [name]);

  return (
    <div className="avatar-container">
      <div className="avatar-text">{text}</div>
      <div className={`status-indicator ${available ? "available" : ""}`}></div>
    </div>
  );
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
};

export default Avatar;
