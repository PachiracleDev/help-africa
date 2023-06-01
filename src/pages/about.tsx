import BannerPresentation from "@/components/BannerPresentation";
import Layout from "@/layout";
import React from "react";
import imagebg from "../../public/images/HEAD.png";
import Image from "next/image";

import imageMain from "../../public/assets/images/about-image/about-image.jpg";

import image1 from "../../public/assets/images/about-image/we-do-one.jpg";
import image2 from "../../public/assets/images/about-image/we-do-two.jpg";
import image3 from "../../public/assets/images/about-image/we-do-three.jpg";
import OrgsList from "@/components/Main/OrgsList";
import FinishedProjects from "@/components/About/FinishedProjects";

function AboutPage() {
	return (
		<Layout>
			<BannerPresentation image={imagebg} title="About Us" />

			<div className="about-area pb-100px pt-100px">
				<div className="container">
					<div className="row flex-lg-row-reverse align-items-center">
						<div className="col-lg-6 banner-area">
							<div className="about-left-image mb-md-30px mb-lm-30px banner-wrapper">
								<Image
									src={imageMain}
									alt=""
									className="img-responsive w-100"
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="section-title section-title-left mb-20px ">
								<h2 className="title">About Us</h2>
							</div>
							<div className="about-content">
								<p className="mb-30px">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Labore aperiam fugit consequuntur voluptatibus ex sint iure
									in, distinctio sed dolorem aspernatur veritatis repellendus
									dolorum voluptate, animi libero officiis eveniet accusamus
									recusandae. Temporibus amet ducimus sapiente voluptatibus
									autem dolorem magnam quas, porro suscipit. Quibusdam culpa
									asperiores exercitationem architecto quo distinctio sed
									dolorem!
								</p>
								<a href="#" className="btn btn-primary btn-hover-dark">
									Become a Volunteer
								</a>
							</div>
						</div>
					</div>
					<div className="row pt-100px">
						<div className="col-md-12 text-center">
							<div className="section-title">
								<h2 className="title">
									What We <span>Do</span>
								</h2>
								<p>
									We create events aiming to pear to the voice for children and
									gather for support. Please update with our events and confirm
									you presence.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-lg-4 mb-md-30px mb-lm-30px  ">
							<div className="single-about">
								<Image src={image1} className="img-responsive w-100" alt="" />
								<h5 className="title-text">Donate For Education</h5>
							</div>
						</div>

						<div className="col-md-6 col-lg-4 mb-lm-30px">
							<div className="single-about">
								<Image src={image2} className="img-responsive w-100" alt="" />
								<h5 className="title-text">Donate For Food</h5>
							</div>
						</div>

						<div className="col-md-6 col-lg-4">
							<div className="single-about">
								<Image src={image3} className="img-responsive w-100" alt="" />
								<h5 className="title-text">Donate For Water</h5>
							</div>
						</div>
					</div>
				</div>
			</div>

			<FinishedProjects />
		</Layout>
	);
}

export default AboutPage;
