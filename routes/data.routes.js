import {Router} from 'express';
import { processThisData } from '../controllers/data.controllers.js';

const router = Router();

router.get('/data/api', processThisData);

export default router;