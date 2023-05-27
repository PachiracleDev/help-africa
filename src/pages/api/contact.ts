import { NextResponse } from "next/server";
import NodeMailer from "nodemailer";

export default async function handler(req: any, res: any) {
	if (req.method === "POST") {
		const body = req.body;

		const name = body.name;
		const email = body.email;
		const message = body.message;
		const subject = body.subject;

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
				subject: "¡Se quieren contactar contigo!",
				html: `<p>Nombre: ${name}</p>
				<p>Correo: ${email}</p>
				<p>Asunto: ${subject}</p>
				<p>Mensaje: ${message}</p>

				`,
			};
			await transportador.sendMail(dataParaEnviar);
			return res.status(200).json({ message: "Success" });
		} catch (e) {
			console.log(e);
		}
		return;
	}

	return NextResponse.next();
}
