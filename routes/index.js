var express = require('express');
var router = express.Router();

router.post('/sendmail', function (req, res, next) {
  const body = req.body || null;
  console.log(body);
  console.log(process.env.SENDGRID_API_KEY);
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: body.to,
    from: body.from,
    subject: body.subject,
    text: body.text,
    html: `<strong>${body.text}</strong>`,
  };
  sgMail.send(msg);
  res.json({});
});

module.exports = router;
