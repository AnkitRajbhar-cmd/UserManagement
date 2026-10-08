import React from "react";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Task Management</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Task Name</th>
            <th className="border p-2">Project</th>
            <th className="border p-2">Developers</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="border p-2">{task.taskName}</td>
              <td className="border p-2">{task.projectName}</td>
              <td className="border p-2">
                {task.developers.map((dev) => (
                  <span key={dev.id} className="mr-2">
                    {dev.firstName} {dev.lastName}
                  </span>
                ))}
              </td>
              <td className="border p-2">{task.title}</td>
              <td className="border p-2">{task.description}</td>
              <td className="border p-2 flex gap-2">
                <button
                  onClick={() => onEdit(task)}
                  className="text-blue-600 hover:underline"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => onDelete(task.id)}
                  className="text-red-600 hover:underline"
                >
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
