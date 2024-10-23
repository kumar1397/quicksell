import { useMemo } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import Column from "../Column/Column";

function Grid({ gridData, grouping, userIdToData }) {
  const keys = useMemo(() => Object.keys(gridData), [gridData]);

  return (
    <div className="grid">
      {keys.map((k) => (
        <Column
          key={k}
          tickets={gridData[k]}
          grouping={grouping}
          groupBy={k}
          userIdToData={userIdToData}
        />
      ))}
    </div>
  );
}

Grid.propTypes = {
  gridData: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        tag: PropTypes.arrayOf(PropTypes.string).isRequired,
        userId: PropTypes.string.isRequired,
      }).isRequired
    )
  ).isRequired,
  grouping: PropTypes.oneOf(["status", "priority", "user"]).isRequired,
  userIdToData: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      available: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

export default Grid;
