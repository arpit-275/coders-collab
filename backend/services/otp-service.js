const crypto = require('crypto');
const hashService = require('./hash-service');
const { SMS_SID, SMS_AUTH_TOKEN, SMS_FROM_NUMBER } = process.env;

const twilio = require('twilio')(SMS_SID, SMS_AUTH_TOKEN, {
  lazyLoading: true,
});

class OtpService {
  async generateOtp() {
    const otp = crypto.randomInt(1000, 9999);
    return otp;
  }

  async sendBySms(phone, otp) {
    return await twilio.messages.create({
      to: phone,
      from: SMS_FROM_NUMBER,
      body: `Your Coders's Collab verification code is: ${otp}`,
    });
  }

  verifyOtp(hashedOtp, data) {
    const computedHash = hashService.hashOtp(data);
    return computedHash === hashedOtp;
  }
}

module.exports = new OtpService();
