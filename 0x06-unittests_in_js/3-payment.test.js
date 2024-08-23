const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it(`sendPaymentRequestToApi(100, 20) should return the same as \
   Utils.calculateNumber(SUM, 100,20)`, function() {
    const utilsSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    // Validate that Utils.calculateNumber was called with the correct arguments
    expect(utilsSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    utilsSpy.restore();
  });
});
