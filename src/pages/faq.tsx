import BannerPresentation from "@/components/BannerPresentation";
import Layout from "@/layout";
import React from "react";
import imagebg from "../../public/assets/images/testimonial-image/testi-bg.jpg";

function FaqPage() {
	return (
		<Layout>
			<BannerPresentation image={imagebg} title="FAQ" />
			<div className="login-register-area pb-100px pt-100px faq-area">
				<div className="container">
					<div className="row">
						<div className="ml-auto mr-auto col-lg-9">
							<div className="checkout-wrapper">
								<div className="inner-descripe">
									<h4 className="title">
										Below are frequently asked questions, you may find the
										answer for yourself
									</h4>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Donec id erat sagittis, faucibus metus malesuada, eleifend
										turpis. Mauris semper augue id nisl aliquet, a porta lectus
										mattis. Nulla at tortor augue. In eget enim diam. Donec
										gravida tortor sem, ac fermentum nibh rutrum sit amet. Nulla
										convallis mauris vitae congue consequat. Donec interdum nunc
										purus, vitae vulputate arcu fringilla quis. Vivamus iaculis
										euismod dui.
									</p>
								</div>
								<div id="faq" className="panel-group">
									<div className="panel panel-default single-my-account">
										<div className="panel-heading my-account-title">
											<h3 className="panel-title">
												<span>1 .</span>{" "}
												<a
													data-bs-toggle="collapse"
													href="#my-account-1"
													className="collapsed"
													aria-expanded="true"
												>
													Mauris congue euismod purus at semper. Morbi et
													vulputate massa?
												</a>
											</h3>
										</div>
										<div
											id="my-account-1"
											className="panel-collapse collapse show"
											data-bs-parent="#faq"
										>
											<div className="panel-body">
												Donec mattis finibus elit ut tristique. Nullam tempus
												nunc eget arcu vulputate, eu porttitor tellus commodo.
												Aliquam erat volutpat. Aliquam consectetur lorem eu
												viverra lobortis. Morbi gravida, nisi id fringilla
												ultricies, elit lorem eleifend lorem
											</div>
										</div>
									</div>
									<div className="panel panel-default single-my-account">
										<div className="panel-heading my-account-title">
											<h3 className="panel-title">
												<span>2 .</span>{" "}
												<a
													data-bs-toggle="collapse"
													href="#my-account-2"
													aria-expanded="false"
													className="collapsed"
												>
													Donec mattis finibus elit ut tristique?
												</a>
											</h3>
										</div>
										<div
											id="my-account-2"
											className="panel-collapse collapse"
											data-bs-parent="#faq"
										>
											<div className="panel-body">
												Donec mattis finibus elit ut tristique. Nullam tempus
												nunc eget arcu vulputate, eu porttitor tellus commodo.
												Aliquam erat volutpat. Aliquam consectetur lorem eu
												viverra lobortis. Morbi gravida, nisi id fringilla
												ultricies, elit lorem eleifend lorem
											</div>
										</div>
									</div>
									<div className="panel panel-default single-my-account">
										<div className="panel-heading my-account-title">
											<h3 className="panel-title">
												<span>3 .</span>{" "}
												<a data-bs-toggle="collapse" href="#my-account-3">
													Aenean elit orci, efficitur quis nisl at, accumsan?
												</a>
											</h3>
										</div>
										<div
											id="my-account-3"
											className="panel-collapse collapse"
											data-bs-parent="#faq"
										>
											<div className="panel-body">
												Donec mattis finibus elit ut tristique. Nullam tempus
												nunc eget arcu vulputate, eu porttitor tellus commodo.
												Aliquam erat volutpat. Aliquam consectetur lorem eu
												viverra lobortis. Morbi gravida, nisi id fringilla
												ultricies, elit lorem eleifend lorem
											</div>
										</div>
									</div>
									<div className="panel panel-default single-my-account">
										<div className="panel-heading my-account-title">
											<h3 className="panel-title">
												<span>4 .</span>{" "}
												<a data-bs-toggle="collapse" href="#my-account-4">
													Pellentesque habitant morbi tristique senectus et
													netus?
												</a>
											</h3>
										</div>
										<div
											id="my-account-4"
											className="panel-collapse collapse"
											data-bs-parent="#faq"
										>
											<div className="panel-body">
												Donec mattis finibus elit ut tristique. Nullam tempus
												nunc eget arcu vulputate, eu porttitor tellus commodo.
												Aliquam erat volutpat. Aliquam consectetur lorem eu
												viverra lobortis. Morbi gravida, nisi id fringilla
												ultricies, elit lorem eleifend lorem
											</div>
										</div>
									</div>
									<div className="panel panel-default single-my-account">
										<div className="panel-heading my-account-title">
											<h3 className="panel-title">
												<span>5 .</span>{" "}
												<a data-bs-toggle="collapse" href="#my-account-5">
													Nam pellentesque aliquam metus?
												</a>
											</h3>
										</div>
										<div
											id="my-account-5"
											className="panel-collapse collapse"
											data-bs-parent="#faq"
										>
											<div className="panel-body">
												Donec mattis finibus elit ut tristique. Nullam tempus
												nunc eget arcu vulputate, eu porttitor tellus commodo.
												Aliquam erat volutpat. Aliquam consectetur lorem eu
												viverra lobortis. Morbi gravida, nisi id fringilla
												ultricies, elit lorem eleifend lorem
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default FaqPage;
