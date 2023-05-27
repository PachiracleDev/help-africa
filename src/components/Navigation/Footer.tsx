import React from "react";

function Footer() {
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
											<span className="call">Phone : </span>{" "}
											<a className="contact-link" href="tel:1234-5678">
												{" "}
												+(00) 1234-5678
											</a>
										</p>
										<p className="phone">
											<span className="call">Email :</span>{" "}
											<a
												className="contact-link"
												href="mailto:demo@hashemes.com"
											>
												demo@hashemes.com
											</a>
										</p>
										<p className="add">
											<span className="address">Address :</span> 122, New road,
											South Zone Country.
										</p>
									</div>
								</div>
							</div>

							<div className="col-md-6 col-sm-6 col-lg-2 mb-md-30px mb-lm-30px offset-lg-1">
								<div className="single-wedge">
									<h4 className="footer-herading">OUR PROJECT</h4>
									<div className="footer-links">
										<div className="footer-row">
											<ul className="align-items-center">
												<li className="li">
													<a className="single-link" href="#">
														Water Surve
													</a>
												</li>
												<li className="li">
													<a className="single-link" href="#">
														Education for all
													</a>
												</li>
												<li className="li">
													<a className="single-link" href="#">
														Treatment
													</a>
												</li>
												<li className="li">
													<a className="single-link" href="#">
														Food Serving
													</a>
												</li>
												<li className="li">
													<a className="single-link" href="#">
														Cloth
													</a>
												</li>
												<li className="li">
													<a className="single-link" href="#">
														Selter Project
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-6 col-lg-2 col-sm-6 mb-md-30px mb-lm-30px offset-lg-1">
								<div className="single-wedge">
									<h4 className="footer-herading">QUCIK LINK</h4>
									<div className="footer-links">
										<div className="footer-row">
											<ul className="align-items-center">
												<li className="li">
													<a className="single-link" href="single-causes.html">
														Causes
													</a>
												</li>
												<li className="li">
													<a className="single-link" href="#">
														Projects
													</a>
												</li>
												<li className="li">
													<a className="single-link" href="gallery.html">
														Gallery
													</a>
												</li>
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
											<form
												id="mc-embedded-subscribe-form"
												className="validate"
												noValidate
												target="_blank"
												name="mc-embedded-subscribe-form"
												method="post"
												action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
											>
												<div id="mc_embed_signup_scroll" className="mc-form">
													<input
														className="email"
														type="email"
														required
														placeholder="Enter your email here.."
														name="EMAIL"
														value=""
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
															value=""
														>
															<i className="fa fa-envelope"></i>
														</button>
													</div>
												</div>
											</form>
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
											className="facebook fa fa-facebook"
											title="Facebook"
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
									<li className="li">
										<a
											className="google fa fa-google-plus"
											title="Google"
											href="#"
										></a>
									</li>
								</ul>
							</div>
							<div className="col-md-6 text-start">
								<p className="copy-text">
									Copyright © 2022{" "}
									<a className="company-name" href="https://hasthemes.com/">
										HasThemes
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
