import Image from "next/image";
import { useState } from "react";
import DateCount from "./DateCount";
import { toast } from "react-toastify";

function CommingSoon() {
	const [email, setEmail] = useState("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const rta = await fetch("/api/subscribe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});
			const data = await rta.json();

			toast.success("Thanks for subscribing");
			setEmail("");
		} catch (error) {
			toast.error("Error");
		}
	};

	return (
		<div className="coming_soon_area js-ripples">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="coming_soon_container">
							<div className="coming_soon_logo text-center">
								<h1 className="text-5xl text-white font-bold">
									Help <span className="text-primaryCol font-bold">Africa</span>
								</h1>
							</div>

							<div className="coming_soon_title">
								<h2 className="title">We are coming soon</h2>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industrys
									standard dummy text.
								</p>
							</div>
							<div className="coming_soon_timing">
								<DateCount />
							</div>
							<div className="coming_soon_newsletter">
								<h3>Subscribe for our next update</h3>
								<div id="mc_embed_signup" className="subscribe_form">
									<form
										id="mc-embedded-subscribe-form"
										className="validate"
										onSubmit={handleSubmit}
									>
										<div id="mc_embed_signup_scroll" className="mc-form">
											<input
												id="mc-email"
												type="email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												placeholder="Enter your e-mail..."
											/>
											<button type="submit" id="mc-embedded-subscribe">
												Subscribe
											</button>
										</div>
									</form>

									<div className="mailchimp-alerts text-centre">
										<div className="mailchimp-submitting"></div>
										<div className="mailchimp-success"></div>
										<div className="mailchimp-error"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CommingSoon;
