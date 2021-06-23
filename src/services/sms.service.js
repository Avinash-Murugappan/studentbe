require('dotenv').config();
const httpStatus = require('http-status');
const _ = require('lodash')



const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const sendSms = async (req, res) => {
    try {
        const num = (req.body.number)
        const result = "+1"+num; // to Number
        const client = require('twilio')(accountSid, authToken);
        const sms = await client.messages
            .create({
                from: +16787124779,
                to: result,
                body: "Hello!"
            })
            .then(message => console.log(message.sid, "sent"));
        res.status(httpStatus.CREATED).send(sms);
    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    sendSms

};
