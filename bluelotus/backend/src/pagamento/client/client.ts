import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000, idempotencyKey: 'abc' } });
const payment = new Payment(client);
const body = {
	transaction_amount: 12.34,
	description: '<DESCRIPTION>',
	payment_method_id: '<PAYMENT_METHOD_ID>',
	payer: {
		email: '<EMAIL>'
	},
};

const requestOptions = {
	idempotencyKey: '<IDEMPOTENCY_KEY>',
};

// Step 6: Make the request
payment.create({ body, requestOptions }).then(console.log).catch(console.log);