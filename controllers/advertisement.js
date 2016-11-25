const Advertisement = require('../models/Advertisement');
/**
 * GET /advertisement
 * Advertisement page.
 */
exports.getAdvertisement = (req, res) => {
  res.render('advertisement/advertisement', {
    title: 'Advertisement'
  });
};

/**
 * GET /advertisement/list
 * Advertisement page.
 */
exports.getAdvertisementsList = (req, res) => {
  Advertisement.find({}, (err, advertisementList) => {
    res.render('advertisement/list', {
      title: 'Advertisement',
      advertisementList
    });
  });
};

/**
 * POST /advertisement
 * Advertisement page.
 */
exports.postAdvertisement = (req, res) => {
  const advertisement = new Advertisement({
    subject: req.body.subject,
    description: req.body.description
  });
  advertisement.save((err, advertisement) => {
    res.render('advertisement/advertisement', {
      title: 'Advertisement',
      advertisement,
    });
  });
};
