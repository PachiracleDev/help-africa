import Image from "next/image";
import React from "react";
import DateCount from "./DateCount";

function CommingSoon() {
	return (
		<div className="coming_soon_area js-ripples">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="coming_soon_container">
							<div className="coming_soon_logo text-center">
								<h1 className="text-5xl text-white font-bold">Help Africa</h1>
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
										target="_blank"
										name="mc-embedded-subscribe-form"
										method="post"
										action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
									>
										<div id="mc_embed_signup_scroll" className="mc-form">
											<input
												id="mc-email"
												type="email"
												placeholder="Enter your e-mail..."
											/>
											<button id="mc-embedded-subscribe">Subscribe</button>
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
