const httpStatus = require('http-status');
const {smsService } = require('../services');
const _ = require('lodash')


  const sendSms = async (req, res) => {
    comp = await smsService.sendSms(req)
    res.status(httpStatus.CREATED).send(comp);
 }


module.exports = {
    sendSms,

};
