import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y, Scrollbar } from "swiper";

import Link from "next/link";
import image1Slide from "../../../public/images/slides-home/slide01.png";
import image2Slide from "../../../public/images/slides-home/slide02.png";
import image3Slide from "../../../public/images/slides-home/slide03.png";
import Image from "next/image";

const slides = [
	{
		title: "Slide 1",
		description:
			"Slide 1 description  1 description  1 description 1 description",
		image: image1Slide,
	},
	{
		title: "Slide 2",
		description:
			"Slide 1 description  1 description  1 description 1 description",
		image: image2Slide,
	},
	{
		title: "Slide 3",
		description:
			"Slide 1 description  1 description  1 description 1 description",
		image: image3Slide,
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
						<Image
							className="object-cover z-0 relative blur-sm"
							src={slide.image}
							alt={slide.title}
							fill
						/>
						<div className="px-24 my-auto z-20 text-white flex flex-col">
							<h2 className="text-white text-5xl">{slide.title}</h2>
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
