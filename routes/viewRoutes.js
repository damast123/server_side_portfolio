const express = require('express');
const viewController = require('../Presentations/controllers/viewController');
const router = express.Router();


router.get('/', viewController.getHomePage);
router.get('/about', viewController.getAboutPage);
router.get('/resume', viewController.getResumePage);
router.get('/services', viewController.getServicePage);
router.get('/portfolio', viewController.getPortfolioPage);
router.get('/detail-portfolio', viewController.getPortfolioPage);
router.get('/contact', viewController.getContactPage);

module.exports = router;