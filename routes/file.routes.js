import { Router } from 'express';
import { getFavicon, sendDynamicScripts, sendDynamicStyleSheet, sendGlobalScripts, sendGlobalStyleSheet } from '../controllers/file.controllers.js';

const router = Router();

router.get('/css/global/:filename', sendGlobalStyleSheet);
router.get('/css/dynamic/:filename', sendDynamicStyleSheet);
router.get('/scripts/global/:filename', sendGlobalScripts);
router.get('/scripts/dynamic/:filename', sendDynamicScripts);
router.get('/favicon', getFavicon);

export default router;