import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
	apiKey: process.env.API_KEY_MAILCHIMP || "",
	server: "us21",
});

export default async function handler(req: any, res: any) {
	if (req.method === "POST") {
		const body = req.body;

		const email = body.email;

		try {
			await mailchimp.lists.addListMember("cfd956d23e", {
				email_address: email,
				status: "subscribed",
			});

			res
				.status(200)
				.json({ message: "Successfully subscribed to the newsletter." });
		} catch (e: any) {
			console.log(e.message);
		}
		return;
	}

	return NextResponse.next();
}
