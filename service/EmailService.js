const { sendEmail } = require('../utils/ses');

module.exports = class EmailService {
	static async send(email, name, message) {
		await sendEmail(email, name, message);
	}
};
