import {Router} from 'express';
import { processThisData, saveMemberInformation } from '../controllers/data.controllers.js';

const router = Router();

router.get('/data/api', processThisData);


//post endpoints
router.post('/data/members/save-one', saveMemberInformation);

export default router;