import React from "react";
import image1 from "../../../public/assets/images/gallery-image/1.jpg";
import image2 from "../../../public/assets/images/gallery-image/2.jpg";
import image3 from "../../../public/assets/images/gallery-image/3.jpg";
import image4 from "../../../public/assets/images/gallery-image/4.jpg";
import image5 from "../../../public/assets/images/gallery-image/5.jpg";
import image6 from "../../../public/assets/images/gallery-image/6.jpg";
import image7 from "../../../public/assets/images/gallery-image/7.jpg";
import image8 from "../../../public/assets/images/gallery-image/8.jpg";
import Image from "next/image";

function Gallery() {
	return (
		<div className="gallery-area pt-100px pb-100px">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="section-title">
							<h2 className="title">Our Gallery</h2>
							<p>
								We create events aiming to pear to the voice for children and
								gather for support. Please update with our events and confirm
								you presence.
							</p>
						</div>
					</div>
				</div>

				<div className="row banner-area m-0">
					<div className="col-md-6 col-sm-6 col-lg-3 single-gallery p-0">
						<div className="gallery-image-and-text banner-wrapper">
							<Image className="img-responsive w-100" src={image1} alt="" />
							<a
								className="venobox gallery-link"
								data-gall="myGallery"
								href="assets/images/gallery-image/1.jpg"
							>
								<span className="menu-expand"></span>
							</a>
						</div>
					</div>

					<div className="col-md-6 col-sm-6 col-lg-3 single-gallery p-0">
						<div className="gallery-image-and-text banner-wrapper">
							<Image className="img-responsive w-100" src={image2} alt="" />
							<a
								className="venobox gallery-link"
								data-gall="myGallery"
								href="assets/images/gallery-image/2.jpg"
							>
								<span className="menu-expand"></span>
							</a>
						</div>
					</div>

					<div className="col-md-6 col-sm-6 col-lg-3 single-gallery p-0">
						<div className="gallery-image-and-text banner-wrapper">
							<Image className="img-responsive w-100" src={image3} alt="" />
							<a
								className="venobox gallery-link"
								data-gall="myGallery"
								href="assets/images/gallery-image/3.jpg"
							>
								<span className="menu-expand"></span>
							</a>
						</div>
					</div>

					<div className="col-md-6 col-sm-6 col-lg-3 single-gallery p-0">
						<div className="gallery-image-and-text banner-wrapper">
							<Image className="img-responsive w-100" src={image4} alt="" />
							<a
								className="venobox gallery-link"
								data-gall="myGallery"
								href="assets/images/gallery-image/4.jpg"
							>
								<span className="menu-expand"></span>
							</a>
						</div>
					</div>

					<div className="col-md-6 col-sm-6 col-lg-3 single-gallery p-0">
						<div className="gallery-image-and-text banner-wrapper">
							<Image className="img-responsive w-100" src={image5} alt="" />
							<a
								className="venobox gallery-link"
								data-gall="myGallery"
								href="assets/images/gallery-image/5.jpg"
							>
								<span className="menu-expand"></span>
							</a>
						</div>
					</div>

					<div className="col-md-6 col-sm-6 col-lg-3 single-gallery p-0">
						<div className="gallery-image-and-text banner-wrapper">
							<Image className="img-responsive w-100" src={image6} alt="" />
							<a
								className="venobox gallery-link"
								data-gall="myGallery"
								href="assets/images/gallery-image/6.jpg"
							>
								<span className="menu-expand"></span>
							</a>
						</div>
					</div>

					<div className="col-md-6 col-sm-6 col-lg-3 single-gallery p-0">
						<div className="gallery-image-and-text banner-wrapper">
							<Image className="img-responsive w-100" src={image7} alt="" />
							<a
								className="venobox gallery-link"
								data-gall="myGallery"
								href="assets/images/gallery-image/7.jpg"
							>
								<span className="menu-expand"></span>
							</a>
						</div>
					</div>

					<div className="col-md-6 col-sm-6 col-lg-3 single-gallery p-0">
						<div className="gallery-image-and-text banner-wrapper">
							<Image className="img-responsive w-100" src={image8} alt="" />
							<a
								className="venobox gallery-link"
								data-gall="myGallery"
								href="assets/images/gallery-image/8.jpg"
							>
								<span className="menu-expand"></span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Gallery;
