import Image from "next/image";
import React from "react";
import image1 from "../../../public/assets/images/testimonial-image/1.jpg";
import imageBg from "../../../public/assets/images/testimonial-image/testi-bg.jpg";

import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

function BannerTwo() {
	return (
		<div
			className="testimonial-area relative pt-100px pb-100px"
			data-bg-image=""
		>
			<Image src={imageBg} alt="Image Testimonial" fill />
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="section-title text-center section-title-white">
							<h2 className="title">What People Says</h2>
						</div>
					</div>
				</div>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={0}
					grabCursor={true}
					slidesPerView={1}
					keyboard={{ enabled: true }}
					navigation
					scrollbar={{ draggable: true, hide: true }}
				>
					<div className="testimonial-slider-wrapper  slider-nav-style-1">
						<SwiperSlide>
							<div className="testimonial-slider-item">
								<div className="content_author flex flex-col max-w-lg mx-auto items-center ">
									<div className="img_author mb-3">
										<Image
											src={image1}
											className=" rounded-full w-40 h-40"
											alt="Image Testimonial"
										/>
									</div>
									<div className="content_test justify-center flex flex-col items-center">
										<div className="des_testimonial text-xl text-white text-center">
											Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
											Vestibulum varius semper ligula, et molestie metus.con
											sectetur adipiscing elit. Vestibulum varius semper ligula.
										</div>
										<div className="des_inner">
											<p className="des_namepost">
												<span className="font-bold text-lg text-white">
													Jafari Jamith
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="testimonial-slider-item">
								<div className="content_author flex flex-col max-w-lg mx-auto items-center ">
									<div className="img_author mb-3">
										<Image
											src={image1}
											className=" rounded-full w-40 h-40"
											alt="Image Testimonial"
										/>
									</div>
									<div className="content_test justify-center flex flex-col items-center">
										<div className="des_testimonial text-xl text-white text-center">
											Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
											Vestibulum varius semper ligula, et molestie metus.con
											sectetur adipiscing elit. Vestibulum varius semper ligula.
										</div>
										<div className="des_inner">
											<p className="des_namepost">
												<span className="font-bold text-lg text-white">
													Jafari Jamith
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="testimonial-slider-item">
								<div className="content_author flex flex-col max-w-lg mx-auto items-center ">
									<div className="img_author mb-3">
										<Image
											src={image1}
											className=" rounded-full w-40 h-40"
											alt="Image Testimonial"
										/>
									</div>
									<div className="content_test justify-center flex flex-col items-center">
										<div className="des_testimonial text-xl text-white text-center">
											Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
											Vestibulum varius semper ligula, et molestie metus.con
											sectetur adipiscing elit. Vestibulum varius semper ligula.
										</div>
										<div className="des_inner">
											<p className="des_namepost">
												<span className="font-bold text-lg text-white">
													Jafari Jamith
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</div>
				</Swiper>
			</div>
		</div>
	);
}

export default BannerTwo;
