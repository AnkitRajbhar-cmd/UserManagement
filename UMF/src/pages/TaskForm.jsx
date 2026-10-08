import React from "react";
import { useForm } from "react-hook-form";

const TaskForm = ({ projects, users, onSubmit, defaultValues }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: defaultValues || {},
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-xl font-bold mb-4">
        {defaultValues ? "Edit Task" : "Add Task"}
      </h2>

      <div>
        <label className="block mb-1 font-medium">Task Name</label>
        <input
          {...register("taskName", { required: true })}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Project</label>
        <select {...register("projectId")} className="w-full border rounded px-3 py-2">
          {projects.map((p) => (
            <option key={p.id} value={p.id}>
              {p.projectName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Developers</label>
        <select
          {...register("developers")}
          multiple
          className="w-full border rounded px-3 py-2"
        >
          {users.map((u) => (
            <option key={u.id} value={u.id}>
              {u.firstName} {u.lastName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          {...register("title")}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          {...register("description")}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
