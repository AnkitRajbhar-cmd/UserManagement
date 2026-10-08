const Task= require('../models/Task');

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
     
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { taskName, projectId, developers, title, description } = req.body;
    
    const task = new Task({
      taskName,
      projectId: projectId || null,
      developers: developers || [],
      title,
      description,
      createdBy: req.user._id
    });

    await task.save();
    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { taskName, projectId, developers, title, description } = req.body;
    
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { taskName, projectId, developers, title, description },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task updated successfully', task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};