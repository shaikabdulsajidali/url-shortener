const express = require('express');
const router=express.Router()

const {  generateShortUrl,handleGetAnalytics } = require('../controllers/generate-short-url');

router.post('/', generateShortUrl)

router.get('/analytics/:shortId', handleGetAnalytics)

module.exports = router;

