import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar React para projetos.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Docker",
      description: "Estudar Docker para projetos.",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDelTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskClick(title, description) {
    const newTasks = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="w-screen h-screen bg-zinc-900 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskClick={onAddTaskClick} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDelTaskClick={onDelTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
