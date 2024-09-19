import { Router } from 'express';
import { getFavicon, getFonts, getImage, sendDynamicScripts, sendDynamicStyleSheet, sendGlobalScripts, sendGlobalStyleSheet } from '../controllers/file.controllers.js';

const router = Router();

router.get('/css/global/:filename', sendGlobalStyleSheet);
router.get('/css/dynamic/:filename', sendDynamicStyleSheet);
router.get('/scripts/global/:filename', sendGlobalScripts);
router.get('/scripts/dynamic/:filename', sendDynamicScripts);
router.get('/static/fonts/:filename', getFonts);
router.get('/static/images/:filename', getImage);
router.get('/favicon', getFavicon);

export default router;