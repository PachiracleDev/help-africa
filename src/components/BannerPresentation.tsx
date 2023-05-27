import Image from "next/image";
import React from "react";

function BannerPresentation({ image, title }: { image: any; title: string }) {
	return (
		<div className="h-[40vh] relative">
			<Image src={image} alt="Banner" fill />

			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
				<h1 className="text-4xl font-bold text-white">{title}</h1>
			</div>
		</div>
	);
}

export default BannerPresentation;
