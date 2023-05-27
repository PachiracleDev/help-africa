import React from "react";
import image1 from "../../../public/assets/images/causes-image/1.jpg";
import image2 from "../../../public/assets/images/causes-image/2.jpg";
import image3 from "../../../public/assets/images/causes-image/3.jpg";
import image4 from "../../../public/assets/images/causes-image/4.jpg";
import image5 from "../../../public/assets/images/causes-image/5.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y, Scrollbar } from "swiper";

function Ongs() {
	return (
		<div className="causes-area pt-100px pb-100px">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="section-title">
							<h2 className="title">ONGS</h2>
							<p>Our charity help those people who have no hope</p>
						</div>
					</div>
				</div>
				<div className="row banner-area causes-wrapper-slider slider-nav-style-2">
					<Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						spaceBetween={0}
						grabCursor={true}
						slidesPerView={3}
						keyboard={{ enabled: true }}
						navigation
						pagination={{ clickable: true }}
						scrollbar={{ draggable: true, hide: true }}
					>
						<SwiperSlide>
							<div className="causes-wrapper-slider-item">
								<div className="causes-wrapper">
									<div className="inner-image banner-wrapper">
										<Image width={500} height={500} src={image1} alt="" />
									</div>
									<div className="causes-content">
										<h5 className="content-title">
											{" "}
											<a className="causes-link" href="single-causes.html">
												Children to get education
											</a>
										</h5>
										<p className="causes-text">
											Lorem ipsum dolor sit amet, onsectetur adipiscing cons
											ectetur nulla. Sed at ullamcorper risus.
										</p>
										<div className="causes-donation d-flex">
											<span className="donation-amount">
												$ 25,000 - $ 50,000
											</span>
											<a href="donate.html" className="d-block donate-btn">
												<i className="fa fa-heart-o"></i>
												Donate
											</a>
										</div>
										<div className="progress" data-percent="35%">
											<div className="h-2 bg-primaryCol w-1/3"></div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="causes-wrapper-slider-item">
								<div className="causes-wrapper">
									<div className="inner-image banner-wrapper">
										<a href="single-causes.html">
											{" "}
											<Image
												width={500}
												height={500}
												src={image2}
												alt=""
											/>{" "}
										</a>
									</div>
									<div className="causes-content">
										<h5 className="content-title">
											<a className="causes-link" href="single-causes.html">
												Bring Electric and Light
											</a>
										</h5>
										<p className="causes-text">
											Lorem ipsum dolor sit amet, onsectetur adipiscing cons
											ectetur nulla. Sed at ullamcorper risus.
										</p>
										<div className="causes-donation d-flex">
											<span className="donation-amount">
												$ 45,000 - $ 90,000
											</span>
											<a href="donate.html" className="d-block donate-btn">
												<i className="fa fa-heart-o"></i>
												Donate
											</a>
										</div>
										<div className="progress" data-percent="80%">
											<div className="h-2 bg-primaryCol w-4/5"></div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="causes-wrapper-slider-item">
								<div className="causes-wrapper">
									<div className="inner-image banner-wrapper">
										<a href="single-causes.html">
											{" "}
											<Image
												width={500}
												height={500}
												src={image3}
												alt=""
											/>{" "}
										</a>
									</div>
									<div className="causes-content">
										<h5 className="content-title">
											<a className="causes-link" href="single-causes.html">
												Water carrier items
											</a>
										</h5>
										<p className="causes-text">
											Lorem ipsum dolor sit amet, onsectetur adipiscing cons
											ectetur nulla. Sed at ullamcorper risus.
										</p>
										<div className="causes-donation d-flex">
											<span className="donation-amount">
												$ 55,000 - $ 75,000
											</span>
											<a href="donate.html" className="d-block donate-btn">
												<i className="fa fa-heart-o"></i>
												Donate
											</a>
										</div>
										<div className="progress" data-percent="60%">
											<div className="h-2 bg-primaryCol w-3/4"></div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="causes-wrapper-slider-item">
								<div className="causes-wrapper">
									<div className="inner-image banner-wrapper">
										<a href="single-causes.html">
											{" "}
											<Image
												width={500}
												height={500}
												src={image4}
												alt=""
											/>{" "}
										</a>
									</div>
									<div className="causes-content">
										<h5 className="content-title">
											{" "}
											<a className="causes-link" href="single-causes.html">
												Bring Electric and Light
											</a>
										</h5>
										<p className="causes-text">
											Lorem ipsum dolor sit amet, onsectetur adipiscing cons
											ectetur nulla. Sed at ullamcorper risus.
										</p>
										<div className="causes-donation d-flex">
											<span className="donation-amount">
												$ 20,000 - $ 40,000
											</span>
											<a href="donate.html" className="d-block donate-btn">
												<i className="fa fa-heart-o"></i>
												Donate
											</a>
										</div>
										<div className="progress" data-percent="50%">
											<div className="h-2 bg-primaryCol w-1/2"></div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="causes-wrapper-slider-item">
								<div className="causes-wrapper">
									<div className="inner-image banner-wrapper">
										<a href="single-causes.html">
											{" "}
											<Image
												width={500}
												height={500}
												src={image5}
												alt=""
											/>{" "}
										</a>
									</div>
									<div className="causes-content">
										<h5 className="content-title">
											{" "}
											<a className="causes-link" href="single-causes.html">
												Children to get education
											</a>
										</h5>
										<p className="causes-text">
											Lorem ipsum dolor sit amet, onsectetur adipiscing cons
											ectetur nulla. Sed at ullamcorper risus.
										</p>
										<div className="causes-donation d-flex">
											<span className="donation-amount">
												$ 35,000 - $ 50,000
											</span>
											<a href="donate.html" className="d-block donate-btn">
												<i className="fa fa-heart-o"></i>
												Donate
											</a>
										</div>
										<div className="progress" data-percent="50%">
											<div className="h-2 bg-primaryCol w-1/2"></div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
}

export default Ongs;
