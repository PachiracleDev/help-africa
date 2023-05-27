import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import NodeMailer from "nodemailer";

const handler = nextConnect();
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const data = req.body;

	try {
		try {
			const transportador = NodeMailer.createTransport({
				host: "smtp.gmail.com",
				port: 465,
				secure: true,
				auth: {
					user: process.env.EMAIL,
					pass: process.env.PASS,
				},
			});
			const dataParaEnviar = {
				from: process.env.EMAIL,
				to: process.env.EMAIL,
				subject: "¡Contact!",
				html: `<p></p>`,
			};
			await transportador.sendMail(dataParaEnviar);
		} catch (error) {
			res.status(500).send({
				message: "Error en el servidor",
			});
		}

		return res.status(200).json({
			message: "Ready",
		});
	} catch (e) {
		return res.status(400).json({
			message: "Error",
		});
	}
});
export default handler;
