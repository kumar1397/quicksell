import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import Display from "../../assets/icons/Display.svg";
import down from "../../assets/icons/down.svg";

function DisplayDropdown({ grouping, setGrouping, ordering, setOrdering }) {
  const [visible, setVisible] = useState(false);
  const componentRef = useRef(null);

  const openDropdownMenu = useCallback(() => {
    setVisible((prevVisible) => !prevVisible);
  }, []);

  const handleOutsideClick = useCallback((event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setVisible(false);
    }
  }, []);

  const handleGroupingChange = useCallback(
    (e) => setGrouping(e.target.value),
    [setGrouping]
  );
  const handleOrderingChange = useCallback(
    (e) => setOrdering(e.target.value),
    [setOrdering]
  );

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div className="display-dropdown" ref={componentRef}>
      <div className="dropdown-label-container" onClick={openDropdownMenu}>
        <img src={Display} alt="display icon" height={14} width={14} />
        <div className="dropdown-label">Display</div>
        <img src={down} alt="down" height={14} width={14} />
      </div>
      <div className={`dropdown-content-container ${visible ? "visible" : ""}`}>
        <div className="dropdown-content-row">
          <div className="dropdown-content-label">Grouping</div>
          <select
            name="grouping"
            id="grouping"
            value={grouping}
            onChange={handleGroupingChange}
          >
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="dropdown-content-row">
          <div className="dropdown-content-label">Ordering</div>
          <select
            name="ordering"
            id="ordering"
            value={ordering}
            onChange={handleOrderingChange}
          >
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}

DisplayDropdown.propTypes = {
  grouping: PropTypes.oneOf(["status", "user", "priority"]).isRequired,
  setGrouping: PropTypes.func.isRequired,
  ordering: PropTypes.oneOf(["priority", "title"]).isRequired,
  setOrdering: PropTypes.func.isRequired,
};

export default DisplayDropdown;
