const Project = require('../models/Project');

module.exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('createdBy', 'firstName lastName');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.createProject = async (req, res) => {
  try {
    const { projectName, title, description } = req.body;
    
    const project = new Project({
      projectName,
      title,
      description,
      createdBy: req.user._id
    });

    await project.save();
    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.updateProject = async (req, res) => {
  try {
    const { projectName, title, description } = req.body;
    
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { projectName, title, description },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ message: 'Project updated successfully', project });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
