const Utils  = require('utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  res = Utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log('The total amount is:'. res);
}

module.exports = sendPaymentRequestToApi;
