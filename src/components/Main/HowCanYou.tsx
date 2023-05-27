import Image from "next/image";
import React from "react";
import image1 from "../../../public/assets/images/feature-image/feature-right.png";

function HowCanYou() {
	return (
		<div className="feature-area position-relative overflow-hidden pt-100px pb-100px bg-white-2">
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-lg-6 text-start">
						<div className="section-title section-title-left">
							<h2 className="title">How Can You Help Us?</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
								imperdiet interdum erat, a pulvinar nibh sodales ac.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 col-lg-6">
						<div className="feature-wrapper  mb-30px">
							<div className="feature-icon">
								<i className="fa fa-university" aria-hidden="true"></i>
							</div>
							<div className="feature-text">
								<h5 className="feature-heading">Donator</h5>
								<p>
									Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent
									laoreet condimentum quam, sit amet congue risus lobortis quis.
								</p>
							</div>
						</div>

						<div className="feature-wrapper mb-30px">
							<div className="feature-icon">
								<i className="fa fa-money" aria-hidden="true"></i>
							</div>
							<div className="feature-text">
								<h5 className="feature-heading">Funrising</h5>
								<p>
									Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent
									laoreet condimentum quam, sit amet congue risus lobortis quis.
								</p>
							</div>
						</div>

						<div className="feature-wrapper">
							<div className="feature-icon">
								<i className="fa fa-users" aria-hidden="true"></i>
							</div>
							<div className="feature-text">
								<h5 className="feature-heading">Volunteer</h5>
								<p>
									Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent
									laoreet condimentum quam, sit amet congue risus lobortis quis.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="feature-right-image">
				<Image
					src={image1}
					className="img-responsive w-100 h-100 image-right"
					alt=""
				/>
			</div>
		</div>
	);
}

export default HowCanYou;
