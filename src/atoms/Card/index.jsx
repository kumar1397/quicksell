import PropTypes from "prop-types";
import "./styles.css";
import Avatar from "../Avatar";
import menudots from "../../assets/icons/menudots.svg";
import getStatusIcon from "../../utils/helpers/statusIcon";

function Card({ ticket, userData, hideStatusIcon, hideProfileIcon }) {
  return (
    <div className="new-card">
      <div className="new-top-container">
        <div className="new-ticket-id">{ticket.id}</div>{" "}
        {!hideProfileIcon && (
          <Avatar name={userData.name} available={userData.available} />
        )}
      </div>
      <div className="new-middle-container">
        {!hideStatusIcon && getStatusIcon(ticket.status)}
        <div className="new-title">{ticket.title}</div>{" "}
      </div>
      <div className="new-bottom-container">
        <div className="new-more-icon-container">
          <img src={menudots} alt="Menu Dots" width="16" height="16" />
        </div>
        {ticket.tag.map((text) => (
          <div key={text} className="new-tag-container">
            <div className="new-tag-icon"></div>
            <div className="new-tag-text">{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Card.propTypes = {
  ticket: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    tag: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired,
  }).isRequired,
  hideStatusIcon: PropTypes.bool,
  hideProfileIcon: PropTypes.bool,
};

Card.defaultProps = {
  hideStatusIcon: false,
  hideProfileIcon: false,
};

export default Card;
