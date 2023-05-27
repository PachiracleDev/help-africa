import React from "react";
import brand1 from "../../../public/assets/images/brand-logo/1.png";
import brand2 from "../../../public/assets/images/brand-logo/2.png";
import brand3 from "../../../public/assets/images/brand-logo/3.png";
import brand4 from "../../../public/assets/images/brand-logo/4.png";
import brand5 from "../../../public/assets/images/brand-logo/5.png";
import brand6 from "../../../public/assets/images/brand-logo/6.png";
import Image from "next/image";

import { Navigation, Autoplay, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

function OrgsList() {
	return (
		<div className="brand-area mt-16 pb-100px">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="section-title text-center">
							<h2 className="title">Organizations We Work With</h2>
						</div>
					</div>
				</div>

				<div className="row">
					<Swiper
						modules={[Scrollbar, A11y, Autoplay]}
						spaceBetween={0}
						grabCursor={true}
						slidesPerView={6}
						autoplay={{ delay: 1500 }}
						className="brand-slider"
					>
						<SwiperSlide className="brand-slider-item">
							<a href="#">
								<Image className=" img-responsive" src={brand1} alt="" />
							</a>
						</SwiperSlide>
						<SwiperSlide className="brand-slider-item">
							<a href="#">
								<Image className=" img-responsive" src={brand1} alt="" />
							</a>
						</SwiperSlide>
						<SwiperSlide className="brand-slider-item">
							<a href="#">
								<Image className=" img-responsive" src={brand2} alt="" />
							</a>
						</SwiperSlide>
						<SwiperSlide className="brand-slider-item">
							<a href="#">
								<Image className=" img-responsive" src={brand3} alt="" />
							</a>
						</SwiperSlide>
						<SwiperSlide className="brand-slider-item">
							<a href="#">
								<Image className=" img-responsive" src={brand4} alt="" />
							</a>
						</SwiperSlide>
						<SwiperSlide className="brand-slider-item">
							<a href="#">
								<Image className=" img-responsive" src={brand5} alt="" />
							</a>
						</SwiperSlide>
						<SwiperSlide className="brand-slider-item">
							<a href="#">
								<Image className=" img-responsive" src={brand6} alt="" />
							</a>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
}

export default OrgsList;
