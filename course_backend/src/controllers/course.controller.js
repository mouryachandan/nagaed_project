import Course from "../models/course.model.js";

export const createCourse = async (req, res) => {
  const { title, description, duration } = req.body;

  if (!title || !description || !duration) {
    return res.status(400).json({
      message: "All Field are Required.",
    });
  }

  try {
    const course = await Course.create({
      title,
      description,
      duration,
    });

    if (!course) {
      return res.status(500).json({
        message: "Server Error",
      });
    }

    return res.status(201).json({
      message: "Course created.",
      course,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    return res.status(200).json({
      message: "Courses Feteched",
      courses,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

export const getCourse = async (req, res) => {
  const id = req.body.id || req.params.id;
  if (!id) {
    return res.status(401).json({
      message: "Id is required",
    });
  }

  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({
        message: "Course not Found Or Invalid ID",
      });
    }

    return res.status(200).json({
      message: "course feteched",
      course,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

export const updateCourse = async (req, res) => {
  const id = req.body.id || req.params.id;
  const { title, description, duration } = req.body;
  if (!id) {
    return res.status(401).json({
      message: "Id is required",
    });
  }

  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({
        message: "Course not Found Or Invalid ID",
      });
    }

    if (title && title.length > 0) {
      course.title = title;
    }
    if (description && description.length > 0) {
      course.description = description;
    }
    if (duration && duration.length > 0) {
      course.duration = duration;
    }
    await course.save({ validateBeforeSave: false });
    const updatedCourse = await Course.findById(id);

    return res.status(200).json({
      message: "course updated",
      course: updatedCourse,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

export const deleteCourse = async (req, res) => {
  const id = req.params.id || req.body;
  try {
    const deletedCourse = await Course.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res.status(404).json({
        message: "Course not found",
      });
    }
    res.status(200).json({
      message: "Course deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
