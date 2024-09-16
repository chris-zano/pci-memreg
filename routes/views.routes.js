import {Router} from 'express';
import { renderHomePage } from '../controllers/view.controllers.js';

const router = Router();
router.get('/', renderHomePage);
export default router;