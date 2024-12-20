const express = require('express');
const router = express.Router();


const apiAuthRouter = require('./api/api.auth.routes');
const apiCategoriesRouter = require('./api/api.categories.routes');



router.use('/api/categories', apiCategoriesRouter);
router.use('/api/auth', apiAuthRouter);


module.exports = router;
