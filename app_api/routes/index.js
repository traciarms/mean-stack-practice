/**
 * Created by traciarms on 9/15/16.
 */
var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlReviews = require('../controllers/reviews');

// locations
router.get('/locations', ctrlLocations.locationsListByDistance);
router.get('/locations', ctrlLocations.locationsReadOne);
router.put('/locations', ctrlLocations.locationsUpdateOne);
router.delete('/locations', ctrlLocations.locationsDeleteOne);
router.post('/locations', ctrlLocations.locationsCreate);

// reviews
router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
router.get('/locations/:locationid/reviews', ctrlReviews.reviewsViewOne);
router.put('/locations/:locationid/reviews', ctrlReviews.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews', ctrlReviews.reviewsDeleteOne);


module.exports = router;