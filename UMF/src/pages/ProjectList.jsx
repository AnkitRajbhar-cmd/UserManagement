import React from "react";

const ProjectList = ({ projects, onEdit, onDelete }) => {
  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Project Management</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Project Name</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td className="border p-2">{project.projectName}</td>
              <td className="border p-2">{project.title}</td>
              <td className="border p-2">{project.description}</td>
              <td className="border p-2 flex gap-2">
                <button
                  onClick={() => onEdit(project)}
                  className="text-blue-600 hover:underline"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => onDelete(project.id)}
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

export default ProjectList;
