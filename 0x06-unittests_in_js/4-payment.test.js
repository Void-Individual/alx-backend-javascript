const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  it('sendPaymentRequestToApi(100, 20) should return the same as Utils.calculateNumber(SUM, 100, 20) and should use stub', function() {
    // Set up the stub and spy
    const newStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assert that the stub was called with the correct arguments
    expect(newStub.calledWith('SUM', 100, 20)).to.be.true;

    // Assert that console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    // Restore the stub and spy
    newStub.restore();
    consoleSpy.restore();
  });
});
