import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDelTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    //usar o query = boa prática + segurança
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-violet-500 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-zinc-900 w-full text-white text-left p-2 rounded-md ${
              task.isCompleted && "line-through text-zinc-500"
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-zinc-900 rounded-md text-white p-2"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDelTaskClick(task.id)}
            className="bg-zinc-900 rounded-md text-white p-2"
          >
            <Trash2Icon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
