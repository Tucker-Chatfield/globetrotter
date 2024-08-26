const express = require('express');
const verifyToken = require('../middleware/verify-token.js');
const Footprint = require('../models/footprint.js');
const router = express.Router();

// ========== Public Routes ===========

// ========= Protected Routes =========

router.use(verifyToken);

router.get('/', async (req, res) => {
  try {
    const footprints = await Footprint.find({})
      .populate('author')
      .sort({ createdAt: 'desc' });
    res.status(200).json(footprints);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:footprintId', async (req, res) => {
  try {
    const footprint = await Footprint.findById(req.params.footprintId).populate('author');
    res.status(200).json(footprint);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    req.body.author = req.user._id;
    const footprint = await Footprint.create(req.body);
    footprint._doc.author = req.user;
    res.status(201).json(footprint);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;