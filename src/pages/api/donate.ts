import * as stripeT from "stripe";
import { NextResponse } from "next/server";
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export default async function handler(req: any, res: any) {
	if (req.method === "POST") {
		const stripe = new stripeT.Stripe(stripeSecretKey || "", {
			apiVersion: "2022-11-15",
		});

		const body = JSON.parse(req.body);

		const amountDonate = body.amount;

		const currency = body.currency;
		const description = body.dedication;

		try {
			const session = await stripe.checkout.sessions.create({
				payment_method_types: ["card"],
				line_items: [
					{
						price_data: {
							currency, // Especifica la moneda en la que se realizará la donación
							product_data: {
								name: "Donation", // Nombre del producto o descripción de la donación
								description, // Descripción de la donación o fundación
							},
							unit_amount: amountDonate * 100, // Monto de la donación en centavos (en este ejemplo, 5 dólares)
						},
						quantity: 1,
					},
				],
				mode: "payment",
				success_url: "http://localhost:3000/success",
				cancel_url: "http://localhost:3000/",
			});
			return res.status(200).json({
				message: "Success",
				url: session.url,
			});
		} catch (e) {
			console.log(e);
		}
		return;
	}

	return NextResponse.next();
}
