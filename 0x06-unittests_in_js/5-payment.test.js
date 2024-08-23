const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;

  this.beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  this.afterEach(() => {
    consoleSpy.restore();
  });

  it(`should log "The total is: 120" when called with (100, 20)`, function() {
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    // Assert that console.log was called exactly once
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" when called with (10, 10)', function() {
    sendPaymentRequestToApi(10, 10);

    // Assert that console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    // Assert that console.log was called exactly once
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
