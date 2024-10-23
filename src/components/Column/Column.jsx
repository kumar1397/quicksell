import { useMemo } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import add from "../../assets/icons/add.svg";
import menudots from "../../assets/icons/menudots.svg";
import Avatar from "../../atoms/Avatar";
import Card from "../../atoms/Card";
import getStatusIcon from "../../utils/helpers/statusIcon";
import getPriorityIcon from "../../utils/helpers/priorityIcon";

function Column({ tickets, grouping, groupBy, userIdToData }) {
  const title = useMemo(() => {
    if (grouping === "status") return groupBy;
    if (grouping === "priority") return groupBy;
    if (grouping === "user") return userIdToData[groupBy].name;
  }, [grouping, groupBy, userIdToData]);

  const icon = useMemo(() => {
    if (grouping === "status") return getStatusIcon(groupBy);
    if (grouping === "priority") return getPriorityIcon(groupBy);
    if (grouping === "user")
      return (
        <Avatar
          name={userIdToData[groupBy].name}
          available={userIdToData[groupBy].available}
        />
      );
  }, [grouping, groupBy, userIdToData]);

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-header-left-container">
          {icon}
          <div className="column-title">
            {title}
            <span className="count">{tickets.length}</span>
          </div>
        </div>
        <div className="column-header-right-container">
          <img src={add} alt="add" width={12} height={12} />
          <img src={menudots} alt="Menu Dots" width="14" height="14" />
        </div>
      </div>
      <div className="cards-container">
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            userData={userIdToData[ticket.userId]}
            hideStatusIcon={grouping === "status"}
            hideProfileIcon={grouping === "user"}
          />
        ))}
      </div>
    </div>
  );
}

Column.propTypes = {
  tickets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      tag: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  grouping: PropTypes.oneOf(["status", "priority", "user"]).isRequired,
  groupBy: PropTypes.string.isRequired,
  userIdToData: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      available: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Column;
