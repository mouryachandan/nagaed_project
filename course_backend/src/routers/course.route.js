import { Router } from "express";
const router = Router();

import { 
    createCourse, 
    getAllCourses, 
    getCourse, 
    updateCourse, 
    deleteCourse 
} from "../controllers/course.controller.js";

router.post("/create", createCourse);
router.get("/", getAllCourses);
router.get("/:id", getCourse);
router.put("/update/:id", updateCourse);
router.delete("/delete/:id", deleteCourse);

export default router;