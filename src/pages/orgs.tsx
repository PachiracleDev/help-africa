import BannerPresentation from "@/components/BannerPresentation";
import Layout from "@/layout";
import React from "react";
import imagebg from "../../public/assets/images/testimonial-image/testi-bg.jpg";

import imageCause1 from "../../public/assets/images/causes-image/1.jpg";
import imageCause2 from "../../public/assets/images/causes-image/2.jpg";
import imageCause3 from "../../public/assets/images/causes-image/3.jpg";
import imageCause4 from "../../public/assets/images/causes-image/4.jpg";
import imageCause5 from "../../public/assets/images/causes-image/5.jpg";

import Image from "next/image";

function OrgsPage() {
	return (
		<Layout>
			<BannerPresentation image={imagebg} title="ONGS" />
			<div className="causes-page-area pb-100px pt-100px">
				<div className="container">
					<div className="row banner-area">
						<div className="col-md-6 col-lg-4 mb-md-50px mb-lm-50px mb-50px">
							<div className="causes-wrapper">
								<div className="inner-image banner-wrapper">
									<a href="/single-org/ORG1">
										<Image
											className="img-responsive w-100"
											src={imageCause1}
											alt=""
										/>
									</a>
								</div>
								<div className="causes-content">
									<h5 className="content-title">
										{" "}
										<a className="causes-link" href="/single-org/ORG1">
											Children to get education
										</a>
									</h5>
									<p className="causes-text">
										Lorem ipsum dolor sit amet, onsectetur adipiscing cons
										ectetur nulla. Sed at ullamcorper risus.
									</p>
									<div className="causes-donation d-flex">
										<span className="donation-amount">$ 25,000 - $ 50,000</span>
										<a href="donate.html" className="d-block donate-btn">
											<i className="fa fa-heart-o"></i>
											Donate
										</a>
									</div>
									<div
										className="progress on-scroll"
										data-percent="35%"
										data-scroll-className="active"
									>
										<div className="h-2 bg-primaryCol w-1/3"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-lg-4 mb-md-50px mb-lm-50px mb-50px">
							<div className="causes-wrapper">
								<div className="inner-image banner-wrapper">
									<a href="/single-org/ORG1">
										<Image
											className="img-responsive w-100"
											src={imageCause2}
											alt=""
										/>
									</a>
								</div>
								<div className="causes-content">
									<h5 className="content-title">
										<a className="causes-link" href="/single-org/ORG1">
											Bring Electric and Light
										</a>
									</h5>
									<p className="causes-text">
										Lorem ipsum dolor sit amet, onsectetur adipiscing cons
										ectetur nulla. Sed at ullamcorper risus.
									</p>
									<div className="causes-donation d-flex">
										<span className="donation-amount">$ 45,000 - $ 90,000</span>
										<a href="donate.html" className="d-block donate-btn">
											<i className="fa fa-heart-o"></i>
											Donate
										</a>
									</div>
									<div
										className="progress on-scroll"
										data-percent="80%"
										data-scroll-className="active"
									>
										<div className="h-2 bg-primaryCol w-4/5"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-lg-4 mb-md-50px mb-lm-50px mb-50px">
							<div className="causes-wrapper">
								<div className="inner-image banner-wrapper">
									<a href="/single-org/ORG1">
										<Image
											className="img-responsive w-100"
											src={imageCause3}
											alt=""
										/>
									</a>
								</div>
								<div className="causes-content">
									<h5 className="content-title">
										<a className="causes-link" href="/single-org/ORG1">
											Water carrier items
										</a>
									</h5>
									<p className="causes-text">
										Lorem ipsum dolor sit amet, onsectetur adipiscing cons
										ectetur nulla. Sed at ullamcorper risus.
									</p>
									<div className="causes-donation d-flex">
										<span className="donation-amount">$ 35,000 - $ 70,000</span>
										<a href="donate.html" className="d-block donate-btn">
											<i className="fa fa-heart-o"></i>
											Donate
										</a>
									</div>
									<div
										className="progress on-scroll"
										data-percent="60%"
										data-scroll-className="active"
									>
										<div className="h-2 bg-primaryCol w-3/5"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-lg-4 mb-md-50px mb-lm-50px mb-50px">
							<div className="causes-wrapper">
								<div className="inner-image banner-wrapper">
									<a href="/single-org/ORG1">
										<Image
											className="img-responsive w-100"
											src={imageCause4}
											alt=""
										/>
									</a>
								</div>
								<div className="causes-content">
									<h5 className="content-title">
										{" "}
										<a className="causes-link" href="/single-org/ORG1">
											Children to get education
										</a>
									</h5>
									<p className="causes-text">
										Lorem ipsum dolor sit amet, onsectetur adipiscing cons
										ectetur nulla. Sed at ullamcorper risus.
									</p>
									<div className="causes-donation d-flex">
										<span className="donation-amount">$ 25,000 - $ 50,000</span>
										<a href="donate.html" className="d-block donate-btn">
											<i className="fa fa-heart-o"></i>
											Donate
										</a>
									</div>
									<div
										className="progress on-scroll"
										data-percent="35%"
										data-scroll-className="active"
									>
										<div className="h-2 bg-primaryCol w-1/3"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-lg-4 mb-md-50px mb-lm-50px mb-50px">
							<div className="causes-wrapper">
								<div className="inner-image banner-wrapper">
									<a href="/single-org/ORG1">
										<Image
											className="img-responsive w-100"
											src={imageCause5}
											alt=""
										/>
									</a>
								</div>
								<div className="causes-content">
									<h5 className="content-title">
										<a className="causes-link" href="/single-org/ORG1">
											Bring Electric and Light
										</a>
									</h5>
									<p className="causes-text">
										Lorem ipsum dolor sit amet, onsectetur adipiscing cons
										ectetur nulla. Sed at ullamcorper risus.
									</p>
									<div className="causes-donation d-flex">
										<span className="donation-amount">$ 45,000 - $ 90,000</span>
										<a href="donate.html" className="d-block donate-btn">
											<i className="fa fa-heart-o"></i>
											Donate
										</a>
									</div>
									<div
										className="progress on-scroll"
										data-percent="80%"
										data-scroll-className="active"
									>
										<div className="h-2 bg-primaryCol w-4/5"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-lg-4 mb-md-50px mb-lm-50px mb-50px">
							<div className="causes-wrapper">
								<div className="inner-image banner-wrapper">
									<a href="/single-org/ORG1">
										{" "}
										<Image
											className="img-responsive w-100"
											src={imageCause1}
											alt=""
										/>{" "}
									</a>
								</div>
								<div className="causes-content">
									<h5 className="content-title">
										<a className="causes-link" href="/single-org/ORG1">
											Water carrier items
										</a>
									</h5>
									<p className="causes-text">
										Lorem ipsum dolor sit amet, onsectetur adipiscing cons
										ectetur nulla. Sed at ullamcorper risus.
									</p>
									<div className="causes-donation d-flex">
										<span className="donation-amount">$ 35,000 - $ 70,000</span>
										<a href="donate.html" className="d-block donate-btn">
											<i className="fa fa-heart-o"></i>
											Donate
										</a>
									</div>
									<div
										className="progress on-scroll"
										data-percent="60%"
										data-scroll-className="active"
									>
										<div className="h-2 bg-primaryCol w-3/5"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-lg-4 mb-md-50px mb-lm-50px">
							<div className="causes-wrapper">
								<div className="inner-image banner-wrapper">
									<a href="/single-org/ORG1">
										<Image
											className="img-responsive w-100"
											src={imageCause2}
											alt=""
										/>
									</a>
								</div>
								<div className="causes-content">
									<h5 className="content-title">
										{" "}
										<a className="causes-link" href="/single-org/ORG1">
											Children to get education
										</a>
									</h5>
									<p className="causes-text">
										Lorem ipsum dolor sit amet, onsectetur adipiscing cons
										ectetur nulla. Sed at ullamcorper risus.
									</p>
									<div className="causes-donation d-flex">
										<span className="donation-amount">$ 25,000 - $ 50,000</span>
										<a href="donate.html" className="d-block donate-btn">
											<i className="fa fa-heart-o"></i>
											Donate
										</a>
									</div>
									<div
										className="progress on-scroll"
										data-percent="35%"
										data-scroll-className="active"
									>
										<div className="h-2 bg-primaryCol w-1/3"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-lg-4 mb-md-50px mb-lm-50px">
							<div className="causes-wrapper">
								<div className="inner-image banner-wrapper">
									<a href="/single-org/ORG1">
										<Image
											className="img-responsive w-100"
											src={imageCause3}
											alt=""
										/>
									</a>
								</div>
								<div className="causes-content">
									<h5 className="content-title">
										<a className="causes-link" href="/single-org/ORG1">
											Bring Electric and Light
										</a>
									</h5>
									<p className="causes-text">
										Lorem ipsum dolor sit amet, onsectetur adipiscing cons
										ectetur nulla. Sed at ullamcorper risus.
									</p>
									<div className="causes-donation d-flex">
										<span className="donation-amount">$ 45,000 - $ 90,000</span>
										<a href="donate.html" className="d-block donate-btn">
											<i className="fa fa-heart-o"></i>
											Donate
										</a>
									</div>
									<div
										className="progress on-scroll"
										data-percent="80%"
										data-scroll-className="active"
									>
										<div className="h-2 bg-primaryCol w-4/5"></div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-lg-4">
							<div className="causes-wrapper">
								<div className="inner-image banner-wrapper">
									<a href="/single-org/ORG1">
										<Image
											className="img-responsive w-100"
											src={imageCause4}
											alt=""
										/>
									</a>
								</div>
								<div className="causes-content">
									<h5 className="content-title">
										<a className="causes-link" href="/single-org/ORG1">
											Water carrier items
										</a>
									</h5>
									<p className="causes-text">
										Lorem ipsum dolor sit amet, onsectetur adipiscing cons
										ectetur nulla. Sed at ullamcorper risus.
									</p>
									<div className="causes-donation d-flex">
										<span className="donation-amount">$ 35,000 - $ 70,000</span>
										<a href="donate.html" className="d-block donate-btn">
											<i className="fa fa-heart-o"></i>
											Donate
										</a>
									</div>
									<div
										className="progress on-scroll"
										data-percent="60%"
										data-scroll-className="active"
									>
										<div className="h-2 bg-primaryCol w-3/5"></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <div className="pro-pagination-style mt-50px text-center">
						<div className="pages">
							<ul>
								<li className="li">
									<a className="page-link" href="#">
										<i className="fa fa-angle-left"></i>
									</a>
								</li>
								<li className="li">
									<a className="page-link active" href="#">
										1
									</a>
								</li>
								<li className="li">
									<a className="page-link" href="#">
										2
									</a>
								</li>
								<li className="li">
									<a className="page-link" href="#">
										<i className="fa fa-angle-right"></i>
									</a>
								</li>
							</ul>
						</div>
					</div> */}
				</div>
			</div>
		</Layout>
	);
}

export default OrgsPage;
