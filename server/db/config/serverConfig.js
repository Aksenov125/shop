const express = require('express');
const cookieParser = require('cookie-parser');
const { verifyAccessToken } = require('../../middleware/verifyToken');
const path=require('path')

const serverConfig = (app) => {
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: 'true' }));
  app.use(express.json());
  app.use(verifyAccessToken);
  app.use(express.static(path.join(__dirname, '..','public')))
};

module.exports = serverConfig;