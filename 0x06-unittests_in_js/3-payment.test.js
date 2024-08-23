const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it(`sendPaymentRequestToApi(100, 20) should return the same as \
   Utils.calculateNumber(SUM, 100,20)`, () => {
    const utilsSpy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);

    // Validate that Utils.calculateNumber was called with the correct arguments
    expect(utilsSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(utilsSpy.calculateNumber.callCount).to.be.equal(1);

    utilsSpy.calculateNumber.restore();
  });
});
