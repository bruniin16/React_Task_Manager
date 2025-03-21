import { useState } from "react";

function AddTask({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-violet-500 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Title"
        className="border border-violet-700 outline-zinc-800 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        className="border border-violet-700 outline-zinc-800 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Fill the TITLE and DESCRIPTION fields correctly.");
          }
          onAddTaskClick(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-violet-900 text-white px-4 py-2 rounded-md font-medium"
      >
        Add Task
      </button>
    </div>
  );
}
export default AddTask;
