import Nopriority from "../../assets/icons/No-priority.svg";
import Lowpriority from "../../assets/icons/LowPriority.svg";
import Mediumpriority from "../../assets/icons/MediumPriority.svg";
import Highpriority from "../../assets/icons/HighPriority.svg";
import UrgentPrioritycolor from "../../assets/icons/UrgentPrioritycolour.svg";

const getPriorityIcon = (priority) => {
  switch (priority) {
    case "No priority":
      return <img src={Nopriority} alt="" height={14} width={14} />;
    case "Low":
      return <img src={Lowpriority} alt="" height={14} width={14} />;
    case "Medium":
      return <img src={Mediumpriority} alt="" height={14} width={14} />;
    case "High":
      return <img src={Highpriority} alt="" height={14} width={14} />;
    case "Urgent":
      return <img src={UrgentPrioritycolor} alt="" height={14} width={14} />;
    default:
      return <img src={Nopriority} alt="" height={14} width={14} />;
  }
};

export default getPriorityIcon;
