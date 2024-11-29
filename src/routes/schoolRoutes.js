import express from "express";
import schoolController from '../controllers/schoolController.js';

let router = express.Router();

// Pass db connection to the controller when the routes are handled
router.post('/addSchool', schoolController.addSchool);
router.get('/listSchools', schoolController.listSchools);

export default router;
