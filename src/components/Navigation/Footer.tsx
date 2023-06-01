import { useState } from "react";
import { toast } from "react-toastify";

function Footer() {
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
		<div className="footer-area">
			<div className="footer-container">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-lg-3 mb-md-30px mb-lm-30px">
								<div className="single-wedge">
									<h4 className="footer-herading">ABOUT US</h4>
									<p className="about-text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Nulla id tincidunt risus.
									</p>
									<div className="need_help">
										<h5 className="contact-heading">CONTACT US</h5>

										<p className="phone">
											<span className="call">Email :</span>{" "}
											<a
												className="contact-link"
												href="mailto:demo@hashemes.com"
											>
												hello@helpafrica.click
											</a>
										</p>
										<p className="add">
											<span className="address">Address :</span> C/Del Mar, 4 ·
											11406 Spain
										</p>
									</div>
								</div>
							</div>

							<div className="col-md-6 col-lg-2 col-sm-6 mb-md-30px mb-lm-30px offset-lg-1">
								<div className="single-wedge">
									<h4 className="footer-herading">LEGAL</h4>
									<div className="footer-links">
										<div className="footer-row">
											<ul className="align-items-center">
												<li className="li">
													<a className="single-link" href="#">
														Terms of use
													</a>
												</li>
												<li className="li">
													<a className="single-link" href="#">
														Legal disclaimer
													</a>
												</li>
												<li className="li">
													<a className="single-link" href="#">
														Privacy policy
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-6 col-lg-3">
								<div className="single-wedge">
									<h4 className="footer-herading">NEWSLETTER</h4>
									<div className="footer-links">
										<p>
											Subscribe to receive inspiration, ideas and news in your
											inbox.
										</p>

										<div id="mc_embed_signup" className="subscribe-form">
											<div id="mc-embedded-subscribe-form" className="validate">
												<div id="mc_embed_signup_scroll" className="mc-form">
													<input
														className="email"
														type="email"
														required
														placeholder="Enter your email here.."
														name="EMAIL"
														value={email}
														onChange={(e) => setEmail(e.target.value)}
													/>
													<div className="mc-news" aria-hidden="true">
														<input
															type="text"
															value=""
															tabIndex={-1}
															name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
														/>
													</div>
													<div className="clear">
														<button
															id="mc-embedded-subscribe"
															className="button"
															type="submit"
															name="subscribe"
															onClick={handleSubmit}
														>
															<i className="fa fa-envelope"></i>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div className="row flex-sm-row-reverse">
							<div className="col-md-6 text-end">
								<ul className="link-follow">
									<li className="li">
										<a
											className="linkedin fa fa-linkedin"
											title="Linkedin"
											href="#"
										></a>
									</li>
									<li className="li">
										<a
											className="twitter fa fa-twitter"
											title="Twitter"
											href="#"
										></a>
									</li>
								</ul>
							</div>
							<div className="col-md-6 text-start">
								<p className="copy-text">
									Copyright © 2022{" "}
									<a className="company-name" href="https://hasthemes.com/">
										Africa Help
									</a>
									. All Rights Reserved
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
