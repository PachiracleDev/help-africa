import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y, Scrollbar } from "swiper";

import Link from "next/link";

const slides = [
	{
		title: "Slide 1",
		description:
			"Slide 1 description  1 description  1 description 1 description",
	},
	{
		title: "Slide 2",
		description:
			"Slide 1 description  1 description  1 description 1 description",
	},
	{
		title: "Slide 3",
		description:
			"Slide 1 description  1 description  1 description 1 description",
	},
];

function Banner() {
	return (
		<Swiper
			className="  h-[70vh]"
			modules={[Autoplay, Pagination, Navigation, Scrollbar, A11y]}
			spaceBetween={0}
			autoplay={{
				delay: 5000,
				disableOnInteraction: false,
			}}
			scrollbar={{ draggable: true, hide: true }}
			slidesPerView={1}
			keyboard={{ enabled: true }}
			navigation
			pagination={{
				clickable: true,
				type: "bullets",
			}}
		>
			{slides.map((slide, index) => (
				<SwiperSlide key={index}>
					<div className="flex h-full w-full">
						<div className="px-24 my-auto flex flex-col">
							<h2 className="hero-slider__title text-5xl">{slide.title}</h2>
							<p className="hero-slider__text">{slide.description}</p>
							<Link
								className="bg-primaryCol px-4 py-3 font-bold text-center items-center justify-center text-white rounded-md"
								href="/donate"
							>
								DONATE NOW
							</Link>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default Banner;
