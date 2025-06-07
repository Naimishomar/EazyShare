import express from 'express';
import { getData, postData } from '../controllers/content.controller.js';
const router = express.Router();

router.route('/share').post(postData);
router.route('/get/:customId').get(getData);

export default router;