import PropTypes from "prop-types";
import "./styles.css";

function Loader() {
  return (
    <div className={`loader-wrapper`}>
      <span className="loader"></span>
    </div>
  );
}

Loader.propTypes = {
  fullscreen: PropTypes.bool,
};

Loader.defaultProps = {
  fullscreen: true,
};

export default Loader;
