const express = require('express');
const { handleGenerateNewShortUrl, handleGetUrl, handleGetAnalyticsUrl } = require('../controllers/url.controller');

const router = express.Router();

router.post('/', handleGenerateNewShortUrl)
router.get('/:shortId', handleGetUrl)
router.get('/analytics/:shortId', handleGetAnalyticsUrl)
module.exports = router