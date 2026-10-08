import React from "react";
import { useForm } from "react-hook-form";

const ProjectForm = () => {
  const { register, handleSubmit } = useForm({
     
  });
  const onSubmit=()=>{
    console.log("submitted")
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-xl font-bold mb-4">
        {defaultValues ? "Edit Project" : "Add Project"}
      </h2>

      <div>
        <label className="block mb-1 font-medium">Project Name</label>
        <input
          {...register("projectName", { required: true })}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          {...register("title", { required: true })}
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
        Save Project
      </button>
    </form>
  );
};

export default ProjectForm;
