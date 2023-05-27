import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
const handler = nextConnect();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const data = req.body;
	const amountDonate = data.amount;
	const currency = data.currency;
	const description = data.description;

	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: [
				{
					price_data: {
						currency: currency,
						product_data: {
							name: description,
						},
						unit_amount: amountDonate,
					},
					quantity: 1,
				},
			],
			mode: "payment",
			success_url: "http://localhost:3000/success",
			cancel_url: "http://localhost:3000/",
		});

		return res.status(200).json({
			message: "Ready",
			id: session.id,
		});
	} catch (e) {
		return res.status(400).json({
			message: "Error",
		});
	}
});
export default handler;
