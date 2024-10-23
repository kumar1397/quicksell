import PropTypes from "prop-types";
import "./styles.css";
import DisplayDropdown from "../../atoms/Dropdown";

function Header({ grouping, setGrouping, ordering, setOrdering }) {
  return (
    <header>
      <DisplayDropdown
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
    </header>
  );
}

Header.propTypes = {
  grouping: PropTypes.oneOf(["status", "priority", "user"]).isRequired,
  setGrouping: PropTypes.func.isRequired,
  ordering: PropTypes.oneOf(["priority", "title"]).isRequired,
  setOrdering: PropTypes.func.isRequired,
};

export default Header;
