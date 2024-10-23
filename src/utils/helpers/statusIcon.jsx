import Todo from "../../assets/icons/Todo.svg";
import Backlog from "../../assets/icons/Backlog.svg";
import Progress from "../../assets/icons/in-progress.svg";
import Cancelled from "../../assets/icons/Cancelled.svg";
import Done from "../../assets/icons/Done.svg";

const getStatusIcon = (priority) => {
  switch (priority) {
    case "Backlog":
      return <img src={Backlog} alt="backlog" height={18} width={18} />;
    case "Todo":
      return <img src={Todo} alt="todo" height={18} width={18} />;
    case "In progress":
      return <img src={Progress} alt="inprogress" height={18} width={18} />;
    case "Done":
      return <img src={Done} alt="done" height={18} width={18} />;
    case "Canceled":
      return <img src={Cancelled} alt="cancelled" height={18} width={18} />;
    default:
      return <img src={Todo} alt="todo" height={18} width={18} />;
  }
};

export default getStatusIcon;
